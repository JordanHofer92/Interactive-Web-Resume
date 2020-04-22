  //////////////////////////////////
 //Charts for soft-skills section//
//////////////////////////////////

let ctx = document.getElementById('remote-work-graph').getContext('2d');
let chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Level of Proficiency', 'Room to Grow'],
        datasets: [{
            label: 'Blue',
            data: [80, 20],
            backgroundColor: [
                'rgba(184, 255, 50, 0.2)',
                'rgba(255, 25, 100, 0.2)'],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 25, 100, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: false,
            legend: {
                display: false,
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }    
        }
    }
});
