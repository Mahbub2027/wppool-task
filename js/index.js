// navbar
function Menu(e) {
  let list = document.querySelector('ul');
  e.name === 'menu' ? (e.name = "close", list.classList.add('top-[40px]'),
    list.classList.add('opacity-100')) : (e.name = "menu", list.classList.remove('top-[40px]'),
      list.classList.remove('opacity-100'))
}
// function Navbar(e) {
//   let list = document.querySelector('ul');
//   e.name === 'menu' ? (e.name = "close", list.classList.add('top-[40px]'),
//     list.classList.add('opacity-100')) : (e.name = "menu", list.classList.remove('top-[40px]'),
//       list.classList.remove('opacity-100'))
// }

window.addEventListener('scroll', function(){
  var chart = document.getElementById('navbar');
  chart.classList.toggle('sticky', window.scrollY > 0)
})
// chart
const ctx = document.getElementById('myChart');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['January', "February", "March", "April", "May", "June", "July"],
    datasets: [
      {

        data: [5, 8, 9, 6, 7, 55, 10 ],
        borderColor: '#FC714D',
        backgroundColor: '#FC714D',
        label: 'WPPOOL',

      },
      {

        data: [19, 29, 16, 50, 5, 9, 25],
        borderColor: '#615DE3',
        backgroundColor: '#615DE3',
        label: 'Google',
      },
      {
        data: [15, 6, 35, 29, 48, 30, 4],
        borderColor: '#AFCD80',
        backgroundColor: '#AFCD80',
        label: 'Microsoft',
      },
      {
        data: [5, 9, 16, 27, 15, 3, 10],
        borderColor: '#6F34A1',
        backgroundColor: '#6F34A1',
        label: 'Twitter',
      }
    ],

  },
  options: {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      // title: {
      //   display: true,
      //   text: 'Chart.js Line Chart - Multi Axis'
      // }
    },

  }

})



// slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2.4,
  spaceBetween: 10,
  rewind: true,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  breakpoints: {
    375: { // when window width is >= 375px
      slidesPerView: 1,
      spaceBetween: 10
    },
    1024: { // when window width is >= 1024px
      slidesPerView: 2.4,
      spaceBetween: 10
    }
  }
});