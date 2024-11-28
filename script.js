const topArtistsData = {
    labels: ['Taylor Swift', 'Ed Sheeran', 'BTS', 'Adele', 'Drake'],
    datasets: [{
        data: [30, 20, 15, 25, 10],
        backgroundColor: ['#6eadf0', '#76f593', '#d17664', '#d6bf7a', '#9fdae3']
    }]
};
const ctx1 = document.getElementById('topArtistsChart').getContext('2d');
new Chart(ctx1, {
    type: 'pie',
    data: topArtistsData
    
});




const genreData = {
    labels: ['Pop', 'Rock', 'Hip-hop', 'Jazz', 'Classical'],
    datasets: [{
        label: 'Genre Distribution',
        data: [40, 25, 20, 10, 5],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};
const ctx2 = document.getElementById('genreChart').getContext('2d');
new Chart(ctx2, {
    type: 'radar',
    data: genreData
});


const listeningTrendsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
        label: 'Monthly Listening Trends',
        data: [10, 15, 25, 20, 30],
        fill: false,
        borderColor: '#dc3545',
        tension: 0.1
    }]
};

const ctx3 = document.getElementById('listeningTrendsChart').getContext('2d');
new Chart(ctx3, {
    type: 'line',
    data: listeningTrendsData
});
