  //////////////////////////////////
 //Charts for soft-skills section//
//////////////////////////////////

let remoteCtx = document.getElementById('remote-work-graph').getContext('2d');
let remoteChart = new Chart(remoteCtx, {
    type: 'doughnut',
    data: {
        labels: ['Proficiency', 'Growth'],
        datasets: [{
            label: 'Blue',
            data: [90, 10],
            backgroundColor: [
                'rgba(17, 76, 60, 0.5)',
                'rgba(54, 103, 145, 0.3)'],
            borderColor: [
                'rgba(17, 76, 60, 1)',
                'rgba(54, 103, 145, 1)'],
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

let projectCtx = document.getElementById('project-management-graph').getContext('2d');
let projectChart = new Chart(projectCtx, {
    type: 'doughnut',
    data: {
        labels: ['Proficiency', 'Growth'],
        datasets: [{
            label: 'Blue',
            data: [90, 10],
            backgroundColor: [
                'rgba(17, 76, 60, 0.5)',
                'rgba(54, 103, 145, 0.3)'],
            borderColor: [
                'rgba(17, 76, 60, 1)',
                'rgba(54, 103, 145, 1)'],
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

let leadershipCtx = document.getElementById('leadership-graph').getContext('2d');
let leadershipChart = new Chart(leadershipCtx, {
    type: 'doughnut',
    data: {
        labels: ['Proficiency', 'Growth'],
        datasets: [{
            label: 'Blue',
            data: [95, 5],
            backgroundColor: [
                'rgba(17, 76, 60, 0.5)',
                'rgba(54, 103, 145, 0.3)'],
            borderColor: [
                'rgba(17, 76, 60, 1)',
                'rgba(54, 103, 145, 1)'],
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

let accountabilityCtx = document.getElementById('accountability-graph').getContext('2d');
let accountabilityChart = new Chart(accountabilityCtx, {
    type: 'doughnut',
    data: {
        labels: ['Proficiency', 'Growth'],
        datasets: [{
            label: 'Blue',
            data: [90, 10],
            backgroundColor: [
                'rgba(17, 76, 60, 0.5)',
                'rgba(54, 103, 145, 0.3)'],
            borderColor: [
                'rgba(17, 76, 60, 1)',
                'rgba(54, 103, 145, 1)'],
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

  //////////////////////////////////
 //Charts for hard-skills section//
//////////////////////////////////

// let htmlCtx = document.getElementById('html-graph').getContext('2d');
// let htmlChart = new Chart(htmlCtx, {
//     type: 'horizontalBar',
//     data: {
//         labels: ['Proficiency'],
//         datasets: [{
//             label: 'Blue',
//             data: [90],
//             backgroundColor: [
//                 'rgba(17, 76, 60, 0.5)'],
//             borderColor: [
//                 'rgba(17, 76, 60, 1)'],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         responsive: false,
//             legend: {
//                 display: false,
//                         scales: {
//                             yAxes: [{
//                                 ticks: {
//                                     beginAtZero: true
//                                 }
//                             }]
//                         }    
//         }
//     }
// });
