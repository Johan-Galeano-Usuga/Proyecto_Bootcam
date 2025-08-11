document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('colombiaChart').getContext('2d');

  const anios = [
    "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"
  ];
  const hidroelectrica = [97.7, 97.6, 97.1, 97.2, 97.0, 96.6, 95.6, 93.6, 92.6];
  const otras = [2.158, 2.367, 2.84, 2.86, 2.96, 3.52, 4.39, 6.33, 7.33];

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: anios,
      datasets: [
        {
          label: 'Hidroeléctrica (%)',
          data: hidroelectrica,
          backgroundColor: 'rgba(54, 162, 235, 0.7)'
        },
        {
          label: 'Otras (%)',
          data: otras,
          backgroundColor: 'rgba(54, 235, 190, 0.7)'
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Porcentaje de Energía Renovable en Colombia (2015–2023)'
        },
        legend: {
          position: 'bottom'
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Porcentaje (%)'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Año'
          }
        }
      }
    }
  }); 
}); 