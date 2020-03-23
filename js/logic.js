d3.csv("Prophet/sj_train.csv").then(train => {
    // console.log(data);
    d3.csv("Prophet/sj_test.csv").then(test => {

        d3.csv("Prophet/sj_predictions.csv").then(prophetPredictions => {
            
            d3.csv("TensorFlow/sj_predictions.csv").then(tensorflowPredictions => {
                    train_list = [];
                    test_list = [];
                    prophetPredicted_list = [];
                    tensorflowPredicted_list = [];

                    train.forEach(function (d) {
                        list = [Date.parse(d.ds), parseInt(d.y)];
                        train_list.push(list);
                    })

                    test.forEach(function (d) {
                        list = [Date.parse(d.ds), parseInt(d.y)];
                        test_list.push(list);
                    })

                    prophetPredictions.forEach(function(d) {
                        list = [Date.parse(d.ds), parseFloat(d.yhat)];
                        prophetPredicted_list.push(list);
                    })
                    
                    tensorflowPredictions.forEach(function(d) {
                        list = [Date.parse(d.week_start_date), parseFloat(d.TensorFlow_Predictions)];
                        tensorflowPredicted_list.push(list);
                    })

                    createCharts_sj(train_list, test_list, prophetPredicted_list, tensorflowPredicted_list);
            })
        
        })

    })

})

d3.csv("Prophet/iq_train.csv").then(train => {
    // console.log(data);
    d3.csv("Prophet/iq_test.csv").then(test => {

        d3.csv("Prophet/iq_predictions.csv").then(prophetPredictions => {
            
            d3.csv("TensorFlow/iq_predictions.csv").then(tensorflowPredictions => {
                    train_list = [];
                    test_list = [];
                    prophetPredicted_list = [];
                    tensorflowPredicted_list = [];

                    train.forEach(function (d) {
                        list = [Date.parse(d.ds), parseInt(d.y)];
                        train_list.push(list);
                    })

                    test.forEach(function (d) {
                        list = [Date.parse(d.ds), parseInt(d.y)];
                        test_list.push(list);
                    })

                    prophetPredictions.forEach(function(d) {
                        list = [Date.parse(d.ds), parseFloat(d.yhat)];
                        prophetPredicted_list.push(list);
                    })
                    
                    tensorflowPredictions.forEach(function(d) {
                        list = [Date.parse(d.week_start_date), parseFloat(d.TensorFlow_Predictions)];
                        tensorflowPredicted_list.push(list);
                    })

                    createCharts_iq(train_list, test_list, prophetPredicted_list, tensorflowPredicted_list);
            })
        
        })

    })

})
function createCharts_sj(train, test, prophetPredict, tensorflowPredict) {

    Highcharts.chart('container_sj', {
        chart: {
            type: 'spline',
            zoomType: 'x'
        },
        title: {
            text: 'San Juan Dengue Case Predictions'
        },
        subtitle: {
            text: 'Facebook Prophet vs. TensorFlow LSTM'
        },
        credits: {
            enabled: false
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
        colors: ['#000', '#FF0000', '#06C', '#FF7E00', '#910000'],
        // #2f7ed8, #0d233a, #8bbc21, #1aadce, #492970, #f28f43, #77a1e5, #c42525, #a6c96a, #ffffff
        series: [{
            name: "Train",
            data: train
        }, {
            name: "Test",
            data: test
        },
        {
            name: "Prophet Predictions",
            data: prophetPredict
        },
        {
            name: "TensorFlow Predictions",
            data: tensorflowPredict
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 1200
                }
            }]
        }
    })
}

function createCharts_iq(train, test, prophetPredict, tensorflowPredict) {

    Highcharts.chart('container_iq', {
        chart: {
            type: 'spline',
            zoomType: 'x'
        },
        title: {
            text: 'Iquitos Dengue Case Predictions'
        },
        subtitle: {
            text: 'Facebook Prophet vs. TensorFlow LSTM'
        },
        credits: {
            enabled: false
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
        colors: ['#000', '#FF0000', '#06C', '#FF7E00', '#910000'],
        // #2f7ed8, #0d233a, #8bbc21, #1aadce, #492970, #f28f43, #77a1e5, #c42525, #a6c96a, #ffffff
        series: [{
            name: "Train",
            data: train
        }, {
            name: "Test",
            data: test
        },
        {
            name: "Prophet Predictions",
            data: prophetPredict
        },
        {
            name: "TensorFlow Predictions",
            data: tensorflowPredict
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 1200
                }
            }]
        }
    })
}
