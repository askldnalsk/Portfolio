
import Chart from 'chart.js/auto';
window.onload = () =>{
    let myChartOne = document.getElementById('myChartOne').getContext('2d');
    
    let barChart = new Chart(myChartOne, {
        type: 'bar',
        data: { 
            labels : ['성실함','책임감','팀워크','소통능력','도덕성','도전정신'], 
            datasets : [{ 
                label : '바울랩 매출액',
                data : [ 
                    10,
                    100,
                    100,
                    200,
                    1000
                ]
            }]
        }
    });
}