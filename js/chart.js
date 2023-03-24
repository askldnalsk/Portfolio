//set chart data
var chartData = {
    labels: ["책임감", "도전정신", "성실함", "팀워크", "도덕성", "소통능력"],
    datasets: [
        {
            label: "Counts",
            backgroundColor: "rgba(229, 67, 0, 0.1)",
            borderColor: "rgba(229, 67, 0, 0.5)",
            borderWidth: 2,
            pointBackgroundColor: "#C92100",
            pointBorderColor: "#FFFFFF",
            pointRadius: 4,
            data: [95, 90, 90, 80, 90, 90]
        }
    ]
};

//set chart options
var config = {
    //To output the image of canvas chart, remove the comment below, then the outputting labels would not print too small or too big.
    //responsive: false,
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
        ticks: {
            fontColor: "#B6B6B6",
            min: 0,
            max: 100,                // maximum
            beginAtZero: true,
            stepSize: 20,           // spacing
            //display: false,       // show or hide the values
        },
        pointLabels: {
            fontSize: 16,
            fontStyle: "bold",
            fontColor: "#222222"
        },
    },
    //display the datasets data values beside the dots.
    //refrence: https://stackoverflow.com/questions/31631354/how-to-display-data-values-on-chart-js
    hover: {
        animationDuration: 0
    },
    animation: {
        duration: 1,
        onComplete: function() {
            var chartInstance = this.chart,
                ctx = chartInstance.ctx;
            
            //font default
            //ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
            ctx.font = Chart.helpers.fontString(14, "bold", Chart.defaults.global.defaultFontFamily);
            ctx.fillStyle = '#000000';   //text color
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';

            this.data.datasets.forEach(function (dataset, i) {
                var meta = chartInstance.controller.getDatasetMeta(i);
                meta.data.forEach(function (bar, index) {
                    var data = dataset.data[index];                 
                    ctx.fillText(data, bar._model.x + 20, bar._model.y + 8);
                });
            });
            //convert canvas to image
            //refrence: https://jsfiddle.net/nurgasemetey/dxo1jhu6/
            document.getElementById('canvasImage').setAttribute('src', chartInstance.toBase64Image("image/png", 1.0));
            //console.log( chartInstance.toBase64Image("image/png", 1.0) );
        }
    }
};

//generate a chart
var ctx = document.getElementById("myChartOne"), 
    myRadarChart = new Chart(ctx, {
        type: 'radar',
        data: chartData,
        options: config
    });
