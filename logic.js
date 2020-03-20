d3.csv("/Prophet/sj_train.csv").then(train => {
    // console.log(data);
    d3.csv("/Prophet/sj_test.csv").then(test => {

        d3.csv("/Prophet/sj_predictions.csv").then(predictions => {
            train_list = [];
            test_list = [];
            predicted_list = [];

            train.forEach(function (d) {
                list = [Date.parse(d.ds), parseInt(d.y)];
                train_list.push(list);
            })

            test.forEach(function (d) {
                list = [Date.parse(d.ds), parseInt(d.y)];
                test_list.push(list);
            })

            predictions.forEach(function(d) {
                list = [Date.parse(d.ds), parseFloat(d.yhat)];
                predicted_list.push(list);
            })

            createCharts(train_list, test_list, predicted_list);
        })

    })

})

function createCharts(train, test, predict) {

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
            },
            title: {
                text: 'Date'
            }
        },
        yAxis: {
            title: {
                text: 'Number <br> of cases',
                rotation: 0
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
                label:{
                    enabled: false
                }
            }
        },
        colors: ['#FFAA1D', '#F51B00', '#06C', '#036', '#000'],
        // #2f7ed8, #0d233a, #8bbc21, #910000, #1aadce, #492970, #f28f43, #77a1e5, #c42525, #a6c96a, #ffffff
        series: [{
            name: "Train",
            data: train
        }, {
            name: "Test",
            data: test
        },
        {
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

