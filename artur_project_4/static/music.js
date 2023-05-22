<<<<<<< HEAD
//load in the .csv data here
=======
// Fetch the CSV file
fetch('song_data.csv')
  .then(response => response.text())
  .then(csvData => {
    // Convert CSV to JSON
    const jsonData = csvToJSON(csvData);
    
    // Extract only the "song_name" column from the JSON data
    const songNames = jsonData.map(row => row.song_name);
    
    // Display the song names
    displaySearchResults(songNames);
    
    // Handle search input changes
    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('input', function () {
      const searchTerm = this.value.toLowerCase();
      const filteredData = songNames.filter(name =>
        name.toLowerCase().includes(searchTerm)
      );

      displaySearchResults(filteredData);
    });
  });

const express = require('express');
const app = express();

// Server route for displaying the image
app.get('/displayImage', (req, res) => {
  const imageId = req.query.id;
  const imagePath = `../Correlation Heat Map${imageId}.png`; // Replace with the actual path to your PNG image file

  // Set the appropriate content type for the image response
  res.setHeader('Content-Type', 'Correlation Heat Map/png');

  // Send the image file as the response
  res.sendFile(imagePath);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});



// // Fetch the CSV file
// fetch('song_data.csv')
//   .then(response => response.text())
//   .then(csvData => {
//     // Convert CSV to JSON
//     const jsonData = csvToJSON(csvData);
    
//     // Sort the JSON data based on song popularity (assuming it is a numeric column)
//     jsonData.sort((a, b) => b.song_popularity - a.song_popularity);
    
//     // Display the top 10 songs
//     displayTop10Results(jsonData);
    
//     // Handle search input changes
//     const searchInput = document.getElementById('searchInput');

//     searchInput.addEventListener('input', function () {
//       const searchTerm = this.value.toLowerCase();
//       const filteredData = jsonData.filter(row =>
//         Object.values(row).some(value =>
//           value.toLowerCase().includes(searchTerm)
//         )
//       );

//       displaySearchResults(filteredData);
//     });
//   });

// // Fetch the CSV file
// fetch('song_data.csv')
//   .then(response => response.text())
//   .then(csvData => {
//     // Convert CSV to JSON
//     const jsonData = csvToJSON(csvData);
    
//     // Handle search input changes
//     const searchInput = document.getElementById('searchInput');
//     const resultsTable = document.getElementById('resultsTable');

//     searchInput.addEventListener('input', function () {
//       const searchTerm = this.value.toLowerCase();
//       const filteredData = jsonData.filter(row =>
//         Object.values(row).some(value =>
//           value.toLowerCase().includes(searchTerm)
//         )
//       );

//       displaySearchResults(filteredData);
//     });
//   });

// // Convert CSV to JSON
// function csvToJSON(csvData) {
//   const lines = csvData.split('\n');
//   const headers = lines[0].split(',');
//   const jsonData = [];

//   for (let i = 1; i < lines.length; i++) {
//     const currentLine = lines[i].split(',');
//     if (currentLine.length !== headers.length) continue;

//     const row = {};
//     for (let j = 0; j < headers.length; j++) {
//       row[headers[j]] = currentLine[j];
//     }

//     jsonData.push(row);
//   }

//   return jsonData;
// }

// // Display search results in a table
// function displaySearchResults(results) {
//   const resultsTable = document.getElementById('resultsTable');

//   // Clear previous search results
//   resultsTable.innerHTML = '';

//   // Create table headers
//   const headerRow = document.createElement('tr');
//   for (let key in results[0]) {
//     const headerCell = document.createElement('th');
//     headerCell.textContent = key;
//     headerRow.appendChild(headerCell);
//   }
//   resultsTable.appendChild(headerRow);

//   // Create table rows for search results
//   results.forEach(result => {
//     const row = document.createElement('tr');
//     for (let key in result) {
//       const cell = document.createElement('td');
//       cell.textContent = result[key];
//       row.appendChild(cell);
//     }
//     resultsTable.appendChild(row);
//   });
// }
>>>>>>> 318fdc874e1eb0e02dd7629a322f5d8348793a04