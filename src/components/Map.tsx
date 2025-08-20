import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin } from 'lucide-react';
import { RESORT_NAME } from '../constants/constants';

// Fix for default markers in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapProps {
  latitude: number;
  longitude: number;
  title?: string;
  className?: string;
}

const Map: React.FC<MapProps> = ({ latitude, longitude, title = RESORT_NAME, className = "" }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current) {
      // Initialize the map
      const map = L.map(mapRef.current).setView([latitude, longitude], 15);
      
      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      // Add a custom marker
      const customIcon = L.divIcon({
        className: 'custom-marker',
        html: `
          <div class="bg-amber-500 text-white p-3 rounded-full shadow-lg border-4 border-white">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>
        `,
        iconSize: [50, 50],
        iconAnchor: [25, 50],
        popupAnchor: [0, -50]
      });

      // Add marker with popup
      const marker = L.marker([latitude, longitude], { icon: customIcon })
        .addTo(map)
        .bindPopup(`
          <div class="text-center">
            <h3 class="font-bold text-lg mb-2">${title}</h3>
            <p class="text-sm text-gray-600">Lake Muhazi, Rwanda</p>
            <p class="text-xs text-gray-500 mt-1">Click for directions</p>
          </div>
        `);

      // Add click event to open Google Maps
      marker.on('click', () => {
        const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
        window.open(googleMapsUrl, '_blank');
      });

      mapInstanceRef.current = map;
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [latitude, longitude, title]);

  return (
    <div className={`relative ${className}`}>
      <div className="mb-4">
        <h3 className="text-2xl font-light text-gray-800 mb-2">Find Us</h3>
        <p className="text-gray-600">Located on the beautiful shores of Lake Muhazi</p>
      </div>
      
      <div 
        ref={mapRef} 
        className="w-full h-96 rounded-lg shadow-lg overflow-hidden"
        style={{ zIndex: 1 }}
      />
      
      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center gap-3 mb-3">
          <MapPin className="w-5 h-5 text-amber-500" />
          <span className="font-medium text-gray-800">Location Details</span>
        </div>
        <div className="text-sm text-gray-600 space-y-1">
          <p><strong>Coordinates:</strong> {latitude}, {longitude}</p>
          <p><strong>Region:</strong> Lake Muhazi, Rwanda</p>
          <p><strong>Access:</strong> 45 minutes from Kigali Airport</p>
        </div>
        <div className="mt-3">
          <a
            href={`https://www.google.com/maps?q=${latitude},${longitude}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-amber-600 transition-colors"
          >
            <MapPin className="w-4 h-4" />
            Open in Google Maps
          </a>
        </div>
      </div>
    </div>
  );
};

export default Map;
