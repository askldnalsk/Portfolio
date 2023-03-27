//set chart data
var chartData = {
    labels: ["책임감", "도전정신", "성실함", "팀워크", "도덕성", "소통능력"],
    datasets: [
        {
            label: "Possibility",
            backgroundColor: "rgba(229, 67, 0, 0.1)",
            borderColor: "rgba(229, 67, 0, 0.5)",
            borderWidth: 2,
            pointBackgroundColor: "#C92100",
            pointBorderColor: "#FFFFFF",
            pointRadius: 4,
            data: [90, 95, 95, 90, 90, 90]
        }
    ]
};

//set chart options
var config = {
    //To output the image of canvas chart, remove the comment below, then the outputting labels would not print too small or too big.
    responsive: false,
    layout: {
        padding: {
            top: 16,
            right: 0,
            bottom: 16,
            left: 0
        }
    },
    legend: {
        display: false,     //show or hide the legend
        //position: "right"
    },
    title: {
        display: false
    },
    scale: {
        r:{ 
            min: 50,
            max: 100,
            beginAtZero: true,
        },
        ticks: {
            stepSize: 10           // spacing
            //display: false,       // show or hide the values
        },
        pointLabels: {
            fontSize: 16,
            fontStyle: "bold",
            fontColor: "#333"
        },
    },
    //display the datasets data values beside the dots.
    //refrence: https://stackoverflow.com/questions/31631354/how-to-display-data-values-on-chart-js
    hover: {
        animationDuration: 0
    },
    animation: {
        duration: 1,
    }
};

//generate a chart
var ctx = document.getElementById("myChartOne"), 
    myRadarChart = new Chart(ctx, {
        type: 'radar',
        data: chartData,
        options: config
    });
