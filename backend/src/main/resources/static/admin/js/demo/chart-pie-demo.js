// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
function renderPieChart() {
            fetch('/api/v1/dashboard/category-revenue-data')
                .then(response => response.json())
                .then(data => {
                    var ctx = document.getElementById("myPieChart").getContext('2d');
                    var labels = Object.keys(data);
                    var values = Object.values(data);

                    var myPieChart = new Chart(ctx, {
                        type: 'doughnut',
                        data: {
                            labels: labels,
                            datasets: [{
                                data: values,
                                backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#f6c23e', '#e74a3b', '#858796', '#5a5c69', '#f8f9fc'],
                                hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf', '#f4b400', '#e53e3e', '#6c757d', '#4e4e52', '#e1e3e9'],
                                hoverBorderColor: "rgba(234, 236, 244, 1)",
                            }],
                        },
                        options: {
                            maintainAspectRatio: false,
                            tooltips: {
                                backgroundColor: "rgb(255,255,255)",
                                bodyFontColor: "#858796",
                                borderColor: '#dddfeb',
                                borderWidth: 1,
                                xPadding: 15,
                                yPadding: 15,
                                displayColors: false,
                                caretPadding: 10,
                            },
                            legend: {
                                display: false
                            },
                            cutoutPercentage: 80,
                        },
                    });
                })
                .catch(error => console.error('Error fetching category revenue data:', error));
        }

        // Call the function to render the pie chart
        renderPieChart();
