// Contact Information
export const CONTACT_EMAIL = "info@goodmoodresort.com";
export const WHATSAPP_NUMBER = "250788123456";
export const WHATSAPP_MESSAGE = "Hello! I'm interested in your resort. Can you provide more information?";

// Resort Information
export const RESORT_NAME = "Good Mood Beach Resort";
export const RESORT_LOCATION = "Lake Muhazi, Rwanda";
export const RESORT_DESCRIPTION = "Experience the perfect harmony of luxury and nature on the pristine shores of Lake Muhazi, Rwanda";

// Resort Coordinates
export const RESORT_COORDINATES = {
  latitude: -1.8303955327309098,
  longitude: 30.29698751095824
};

// Room Types
export const ROOM_TYPES = [
  {
    name: "Suites",
    image: "/family.jpg",
    description: "Luxury suites with lake views"
  },
  {
    name: "Lakehouse",
    image: "/chic.jpeg", 
    description: "Exclusive lakefront accommodation"
  },
  {
    name: "Cottage",
    image: "/5.jpg",
    description: "Charming lakeside cottages"
  }
];

// Activities
export const ACTIVITIES = [
  {
    name: "Speed Boat Adventures",
    image: "/boat.jpg",
    description: "Explore the lake on a speed boat",
    recommended: true
  },
  {
    name: "Bird Watching",
    image: "/bird.jpeg",
    description: "Watch birds in their natural habitat"
  },
  {
    name: "Fishing",
    image: "/fishing.jpg",
    description: "Water Sports & Recreation"
  }
];

// Real Google Reviews
export const GOOGLE_REVIEWS = [
  {
    id: 1,
    reviewer: "Jean de Dieu Nsabimana",
    rating: 4,
    date: "4 weeks ago",
    text: "It was nice being here. The service was really nice. It's a long road and not an easy one but it's great once you reach here. The statue of a couple is funny too, makes people talk!",
    categories: {
      service: 5.0,
      location: 4.0
    },
    highlights: []
  },
  {
    id: 2,
    reviewer: "NSABIMANA Celestin",
    rating: 5,
    date: "5 months ago",
    text: "Their service was the best.",
    categories: {
      service: 4.0
    },
    highlights: []
  },
  {
    id: 3,
    reviewer: "Gilbert Ndizihiwe",
    rating: 5,
    date: "3 months ago",
    text: "Good room, good food, good rooms.",
    categories: {
      rooms: 5.0,
      service: 4.0,
      location: 3.0
    },
    highlights: []
  },
  {
    id: 4,
    reviewer: "Nshuti Brilliant",
    rating: 5,
    date: "1 year ago",
    text: "Love the fact that there are geese moving around all the time.",
    categories: {},
    highlights: []
  },
  {
    id: 5,
    reviewer: "Tuyizere Christella",
    rating: 5,
    date: "1 year ago",
    text: "Was so good to be there.",
    categories: {},
    highlights: []
  },
  {
    id: 6,
    reviewer: "Jean Damascène Ahishakiye",
    rating: 4,
    date: "1 month ago",
    text: "",
    categories: {
      rooms: 3.0,
      service: 4.0,
      location: 4.0
    },
    highlights: ["Great view", "Romantic"]
  },
  {
    id: 7,
    reviewer: "Ntakirutimana Alex",
    rating: 5,
    date: "1 year ago",
    text: "Awesome!!!!!!!",
    categories: {},
    highlights: []
  },
  {
    id: 8,
    reviewer: "Isimbi Starlie",
    rating: 5,
    date: "2 weeks ago",
    text: "",
    categories: {
      rooms: 5.0,
      service: 5.0,
      location: 5.0
    },
    highlights: ["Great view"]
  },
  {
    id: 9,
    reviewer: "Kwizera Eric",
    rating: 4,
    date: "3 months ago",
    text: "",
    categories: {
      rooms: 5.0,
      service: 4.0,
      location: 4.0
    },
    highlights: ["Quiet"]
  },
  {
    id: 10,
    reviewer: "Manishimwe Jean Romain",
    rating: 5,
    date: "7 months ago",
    text: "",
    categories: {
      rooms: 4.0,
      service: 4.0,
      location: 4.0
    },
    highlights: ["Romantic"]
  },
  {
    id: 11,
    reviewer: "Liwuwa Langu",
    rating: 5,
    date: "7 months ago",
    text: "",
    categories: {
      rooms: 5.0,
      service: 5.0,
      location: 5.0
    },
    highlights: []
  },
  {
    id: 12,
    reviewer: "Cizi Sabine",
    rating: 5,
    date: "1 year ago",
    text: "",
    categories: {
      rooms: 5.0,
      service: 5.0,
      location: 5.0
    },
    highlights: []
  },
  {
    id: 13,
    reviewer: "Gilbert Nshogoza",
    rating: 5,
    date: "1 year ago",
    text: "",
    categories: {},
    highlights: ["Quiet"]
  },
  {
    id: 14,
    reviewer: "Alpha Michelange Kalinganire",
    rating: 4,
    date: "1 year ago",
    text: "",
    categories: {
      service: 3.0,
      location: 3.0
    },
    highlights: ["Great view", "Child-friendly"]
  },
  {
    id: 15,
    reviewer: "Albert Tuyizere",
    rating: 5,
    date: "1 year ago",
    text: "",
    categories: {
      rooms: 5.0,
      service: 5.0
    },
    highlights: ["Great view", "Romantic", "Great value"]
  }
];

// Calculate overall rating from reviews
export const getOverallRating = () => {
  const totalRating = GOOGLE_REVIEWS.reduce((sum, review) => sum + review.rating, 0);
  return (totalRating / GOOGLE_REVIEWS.length).toFixed(1);
};
