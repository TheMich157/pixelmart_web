// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Replace 'YOUR_GAME_ID' with your actual Roblox game ID
    const gameId = '17416416972';
    const visitsCountElement = document.getElementById('visitsCount');

    // Function to fetch visits count
    function fetchVisitsCount() {
        fetch(`https://games.roblox.com/v1/games/${gameId}/visits`)
            .then(response => response.json())
            .then(data => {
                visitsCountElement.textContent = data.data[0].id;
            })
            .catch(error => {
                console.error('Error fetching visits count:', error);
            });
    }

    // Fetch visits count initially
    fetchVisitsCount();

    // Fetch visits count every 30 seconds
    setInterval(fetchVisitsCount, 30000);
});
