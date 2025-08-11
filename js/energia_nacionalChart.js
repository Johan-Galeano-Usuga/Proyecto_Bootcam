const ctx = document.getElementById('energiaChart').getContext('2d');

const hidro = [11501, 11611, 11731, 11842, 11926, 11954, 11949, 12553, 13211].reduce((a, b) => a + b, 0);
const solar = [1, 2, 11, 13, 26, 83, 181, 480, 676].reduce((a, b) => a + b, 0);
const eolica = [18, 18, 18, 18, 18, 18, 18, 18, 19].reduce((a, b) => a + b, 0);
const bio = [215, 237, 257, 310, 320, 320, 329, 351, 353].reduce((a, b) => a + b, 0);

new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: [
      'Hidroeléctrica (Nacional)',
      'Solar (Nacional)',
      'Eólica (Nacional)',
      'Bioenergía (Nacional)'
    ],
    datasets: [{
      data: [hidro, solar, eolica, bio],
      backgroundColor: [
        '#36a2eb',
        'yellow',
        'purple',
        'pink'
      ],
      borderColor: [
        '#36a2eb',
        'yellow',
        'purple',
        'pink'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Proporción de Energía Renovable Nacional (2015–2023)'
      },
      legend: {
        position: 'bottom'
      }
    }
  }
});