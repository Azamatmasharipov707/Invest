const chart = document.querySelector('#chart')

chart.getContext('2d');

new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov',],
        
        datasets: [
            {
                label: "BTC",
                data: [29374, 33537,59095, 49631,57828,36684,33572,39974,48847,48116,61004],
                borderColor: 'red',
                borderWidth: 2
            },
            {
                label: "ETH",
                data: [31500, 41000,88800,26000,46000,32698,5000,3000,18656,24832,36844],
                borderColor: 'blue',
                borderWidth: 2
            },
            {
                label: "MTS",
                data: [10000, 20000,34200,72000,84000,52698,23000,60000,56056,70832,99644],
                borderColor: 'green',
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true
    }
})

const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click', () => {
    sidebar.style.display = 'block'
})
closeBtn.addEventListener('click', () => {
    sidebar.style.display = 'none'
})

// ---------------------- theme dark ----------------- \\

const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');
})

const sidebarBtn = document.querySelectorAll('.sidebar__link');

for (let i = 0; i < sidebarBtn.length; i++) {
    sidebarBtn[i].addEventListener('click', function () {
        
        for (let k = 0; k < sidebarBtn.length; k++) {
            sidebarBtn[k].classList.remove('active')
            sidebarBtn[k].style.transition = '500ms'
        }
        sidebarBtn[i].classList.add('active')
        sidebarBtn[i].style.transition = '500ms'
    })
}


