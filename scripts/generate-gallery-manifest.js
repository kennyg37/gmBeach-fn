#!/usr/bin/env node

/**
 * Gallery Manifest Generator
 * 
 * This script automatically scans the public/gallery directory and generates
 * a manifest file that can be imported by the gallery component.
 * 
 * Usage: node scripts/generate-gallery-manifest.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GALLERY_DIR = path.join(__dirname, '../public/gallery');
const OUTPUT_FILE = path.join(__dirname, '../src/constants/gallery-manifest.ts');

// Function to scan directory recursively
function scanDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  const images = [];
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Recursively scan subdirectories
      const subImages = scanDirectory(fullPath);
      images.push(...subImages);
    } else if (stat.isFile()) {
      // Check if it's an image file
      const ext = path.extname(item).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext)) {
        // Get relative path from gallery root
        const relativePath = path.relative(GALLERY_DIR, fullPath);
        const category = path.dirname(relativePath);
        
        images.push({
          filename: item,
          category: category === '.' ? 'root' : category,
          path: `/gallery/${relativePath.replace(/\\/g, '/')}`,
          size: stat.size,
          modified: stat.mtime
        });
      }
    }
  }
  
  return images;
}

// Function to group images by category
function groupImagesByCategory(images) {
  const grouped = {};
  
  for (const image of images) {
    if (!grouped[image.category]) {
      grouped[image.category] = [];
    }
    grouped[image.category].push(image);
  }
  
  return grouped;
}

// Function to generate TypeScript code
function generateTypeScriptCode(groupedImages) {
  const categories = Object.keys(groupedImages);
  
  let code = `// Auto-generated gallery manifest
// Generated on: ${new Date().toISOString()}
// Do not edit manually - run 'npm run generate-gallery' to regenerate

export interface GalleryImage {
  id: string;
  src: string;
  category: string;
  filename: string;
  size: number;
  modified: Date;
}

export interface GalleryCategory {
  id: string;
  name: string;
  count: number;
  path: string;
}

// Gallery structure
export const GALLERY_STRUCTURE: Record<string, GalleryCategory> = {
`;

  // Add category definitions
  for (const category of categories) {
    const count = groupedImages[category].length;
    const displayName = category.charAt(0).toUpperCase() + category.slice(1);
    
    code += `  ${category}: {
    id: '${category}',
    name: '${displayName}',
    count: ${count},
    path: '/gallery/${category}/'
  },\n`;
  }
  
  code += `};

// All gallery images
export const GALLERY_IMAGES: GalleryImage[] = [
`;

  // Add image definitions
  for (const category of categories) {
    for (const image of groupedImages[category]) {
      const id = `${category}-${image.filename.replace(/\.[^/.]+$/, '')}`;
      
      code += `  {
    id: '${id}',
    src: '${image.path}',
    category: '${image.category}',
    filename: '${image.filename}',
    size: ${image.size},
    modified: new Date('${image.modified.toISOString()}')
  },\n`;
    }
  }
  
  code += `];

// Utility functions
export const getCategoryCounts = (): Record<string, number> => {
  const counts: Record<string, number> = {};
  
  Object.keys(GALLERY_STRUCTURE).forEach(category => {
    counts[category] = GALLERY_IMAGES.filter(img => img.category === category).length;
  });
  
  counts.all = GALLERY_IMAGES.length;
  
  return counts;
};

export const filterImagesByCategory = (category: string): GalleryImage[] => {
  if (category === 'all') return GALLERY_IMAGES;
  return GALLERY_IMAGES.filter(img => img.category === category);
};

export const getRandomImages = (count: number, category?: string): GalleryImage[] => {
  const images = category ? filterImagesByCategory(category) : GALLERY_IMAGES;
  const shuffled = [...images].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
`;

  return code;
}

// Main execution
try {
  console.log('🔍 Scanning gallery directory...');
  
  if (!fs.existsSync(GALLERY_DIR)) {
    console.error('❌ Gallery directory not found:', GALLERY_DIR);
    process.exit(1);
  }
  
  const images = scanDirectory(GALLERY_DIR);
  const groupedImages = groupImagesByCategory(images);
  
  console.log(`📸 Found ${images.length} images in ${Object.keys(groupedImages).length} categories:`);
  
  for (const [category, categoryImages] of Object.entries(groupedImages)) {
    console.log(`  ${category}: ${categoryImages.length} images`);
  }
  
  const tsCode = generateTypeScriptCode(groupedImages);
  
  // Ensure output directory exists
  const outputDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Write the generated file
  fs.writeFileSync(OUTPUT_FILE, tsCode);
  
  console.log(`✅ Generated gallery manifest: ${OUTPUT_FILE}`);
  console.log(`📊 Total images: ${images.length}`);
  
} catch (error) {
  console.error('❌ Error generating gallery manifest:', error.message);
  process.exit(1);
}
