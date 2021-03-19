var url = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-01-01&end=2017-06-01';
console.log("API from https://www.coindesk.com/api/ and https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-01-01&end=2021-01-01");

fetch(url)

    .then(function(response) {
        return response.json();
    })

    .then(function(response) {
        console.log(response);
    
        var price = [response.bpi["2013-01-01"], response.bpi["2013-06-01"], response.bpi["2014-01-01"], response.bpi["2014-06-01"], response.bpi["2015-01-01"], response.bpi["2015-06-01"], response.bpi["2016-01-01"], response.bpi["2016-06-01"], response.bpi["2017-01-01"], response.bpi["2017-06-01"], response.bpi["2021-01-01"]];
        console.log(price);
    
        var time = [201301,201306,201401,201406,201501,201506,201601,201606,201701,201706,202101];
        console.log(time);
        
        var ctx = document.getElementById("myChart");
    
        Chart.defaults.global.defaultFontColor = 'white';
        Chart.defaults.global.defaultFontFamily = 'Bungee Inline';
        Chart.defaults.global.defaultFontSize = '11';
    
        var myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: time,
            datasets: [
                { 
                data: price,
                borderColor: 'white',
                fill: false,
                }
            ],
          },
            options: 
                {
                legend: {
                    display: false,
                    },
                tooltips: {
                    enabled: false,
                    },
                scales: {
                    yAxes: [{
                        ticks: {
                            callback: function(value, index, values) {
                        return '$' + value;
                            }
                        }
                    }]
                }
                }
        });
        
    })
