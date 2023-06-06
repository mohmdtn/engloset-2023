$(document).ready(function () {
    var swiper = new Swiper('.mySwiper', {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    
    // swiper.on('reachEnd', function () {
    //     $(".swiper-pagination").addClass("d-none");
    // });





    const ctx = document.getElementById('myChart').getContext('2d');
    var labels = ['a', 'b', 'c', 'd', 'e'];
    var data = ['1', '7', '5', '10', '8'];
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: '#67CDFD',
                borderColor: "#67CDFD",
            }],
        },
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    grid: {
                        display: false
                    }
                },
                
            },
        }
    });


});