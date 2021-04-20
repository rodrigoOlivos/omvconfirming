/*=========================================================================================
    File Name: line-stacked-area.js
    Description: Chartjs line stacked area chart
    ----------------------------------------------------------------------------------------
    Item Name: Stack - Responsive Admin Theme
    Version: 3.0
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

// Line stacked area chart
// ------------------------------
$(window).on("load", function(){

    //Get the context of the Chart canvas element we want to select
    // var ctx = document.getElementById("line-stacked-area").getContext("2d");
    var ctx = $('#line-stacked-area');

    // Chart Options
    var chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            position: 'bottom',
        },
        hover: {
            mode: 'label'
        },
        scales: {
            xAxes: [{
                display: true,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Month'
                }
            }],
            yAxes: [{
                display: true,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
                }
            }]
        },
        title: {
            display: true,
            text: ''
        }
    };

    // Chart Data
    var chartData = {
        labels: ["enero", "febrero", "marzo", "abril"],
        datasets: [ {
            label: "Disponibles",
            data: [28, 48, 40, 19 ],
            backgroundColor: "rgba(89, 223, 184,.5)",
            borderColor: "transparent",
            pointBorderColor: "#59dfb8",
            pointBackgroundColor: "#59dfb8",
            pointBorderWidth: 4,
            pointHoverBorderWidth: 4,
            pointRadius: 4,
        }, {
            label: "Ofertas",
            data: [80, 25, 16, 3],
            backgroundColor: "rgba(110, 249, 206,.5)",
            borderColor: "transparent",
            pointBorderColor: "#6ef9ce",
            pointBackgroundColor: "#6ef9ce",
            pointBorderWidth: 4,
            pointHoverBorderWidth: 4,
            pointRadius: 4,
        },
            {
                label: "Aceptadas",
                data: [65, 59, 80, 81],
                backgroundColor: "rgba(102, 102, 153,.5)",
                borderColor: "transparent",
                pointBorderColor: "#a3a3c2",
                pointBackgroundColor: "#a3a3c2",
                pointBorderWidth: 4,
                pointHoverBorderWidth: 4,
                pointRadius: 4,
            }]
    };

    var config = {
        type: 'line',

        // Chart Options
        options : chartOptions,

        // Chart Data
        data : chartData
    };

    // Create the chart
    var stackedAreaChart = new Chart(ctx, config);
});
