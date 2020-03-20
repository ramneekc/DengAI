d3.csv("/Prophet/sj_predictions.csv").then(data => {
    // console.log(data);

    train_list = [];
    predicted_list = [];

    data.forEach(function (d) {
        list = [Date.parse(d.ds), parseInt(d.y)];
        list2 = [Date.parse(d.ds), parseFloat(d.yhat)]
        train_list.push(list);
        predicted_list.push(list2);
    })

    createCharts(train_list, predicted_list);
})

function createCharts(train, predict) {

    Highcharts.chart('container', {
        chart: {
            type: 'spline'
        },
        title: {
            text: 'SJ Added regressor'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: {
                year: '%Y'
            }
        },
        yAxis: {
            title: {
                text: 'Number <br> of cases',
                rotation: 0,
                y: 0,
                x: -5
            },
            min: 0
        },
        tooltip: {
            pointFormat: 'Cases: {point.y:.2f}'
        },
        

        plotOptions: {
            series: {
                marker: {
                    enabled: false
                },
                label: {
                    enabled: false,
                },
            }
        },
        colors: ['#FFAA1D', '#F51B00', '#06C', '#036', '#000'],

        series: [{
            name: "Train",
            data: train
        }, {
            name: "Predict",
            data: predict
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    plotOptions: {
                        series: {
                            marker: {
                                radius: 1.5
                            }
                        }
                    }
                }
            }]
        }
    })
}

