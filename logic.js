d3.csv("/Prophet/sj_predictions.csv").then(data => {
    console.log(data);
    train_list = [];
    predicted_list= [];
    data.forEach(function(d){
        // console.log(typeof parseFloat(d.yhat));
        // console.log(typeof parseInt(d.y));
        // console.log(typeof (d.ds.toDateString()));
        list = [d.ds, parseInt(d.y)];
        list2 = [d.ds, parseFloat(d.yhat)]
        train_list.push(list);
        predicted_list.push(list2);
    })
    
    createCharts(train_list, predicted_list);
    
    console.log(train_list);
    console.log(predicted_list);
})

function createCharts(train, predict){

    Highcharts.chart('container', {
        chart: {
            type: 'spline'
        },
        title: {
            text: 'SJ Added regressor'
        },
        subtitle: {
            text: 'Irregular time data in Highcharts JS'
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
                month: '%e. %b',
                year: '%b'
            },
            title: {
                text: 'Date'
            }
        },
        yAxis: {
            title: {
                text: 'Number of cases'
            },
            min: 0
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
        },
    
        plotOptions: {
            series: {
                marker: {
                    enabled: true
                }
            }
        },
        colors: ['#FFAA1D', '#F51B00', '#06C', '#036', '#000'],
    
        // Define the data points. All series have a dummy year
        // of 1970/71 in order to be compared on the same x axis. Note
        // that in JavaScript, months start at 0 for January, 1 for February etc.
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
                                radius: 2.5
                            }
                        }
                    }
                }
            }]
        }
    })
}

