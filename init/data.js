const sampleListings = [
<<<<<<< HEAD
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHtxvrgJOj6I7cnXdEJ_hhjsCKM3fLkjPJ7w&s"
=======
    {
      title: "Cozy Beachfront Cottage",
      description:
        "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
      image: {
        filename: "listingimage",
        url: "data:image/jpeg;base64,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",
      },
      price: 1500,
      location: "Malibu",
      country: "United States",
>>>>>>> 8008eb70818ba98027b2e1592932e7139bc77e40
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
  },
];

module.exports = { data: sampleListings };

  
  module.exports = { data: sampleListings };
