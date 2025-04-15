const ctx = document.getElementById('budgetChart').getContext('2d');

new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['보건·복지·고용', '국방', '교육', '산업·중기·에너지', 'SOC'],
    datasets: [{
      label: '2024년 예산 비중',
      data: [228.0, 59.6, 89.0, 28.6, 27.0],
      backgroundColor: [
        '#4caf50',
        '#f44336',
        '#2196f3',
        '#ff9800',
        '#9c27b0'
      ],
      borderWidth: 1
    }]
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: '2024년 주요 분야별 예산 비중',
        font: { size: 18 }
      },
      legend: {
        position: 'bottom'
      }
    }
  }
});
