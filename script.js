// Initial rendering logic – to be refactored during the lab
function addStations(stations) {
  // Refactored: use map() and reverse() to add stations in reverse order
  stations.slice().reverse().map(station => addStationElement(station));
}

// 🧪 TEAM FEATURES

// 💌 Wishlist Renderer
function renderWishlist() {
  // TODO: Use forEach to display items in wishlist
}

// ❌ Search Feedback
function searchStations(query) {
  // TODO: Filter stations array based on query
  // TODO: Display error if none found
}

// 🌟 Random Featured Station
function pickFeaturedStation() {
  // TODO: Use Math.random to select and display a station
}

// 🏙️ Group by City
function groupStationsByCity() {
  // TODO: Loop through stations and group under each city
}

// 🔄 Filter Toggle
function toggleFilteredStations() {
  // TODO: Add toggle logic to filter stations dynamically
}

// Load stations on page start
addStations(stations);
