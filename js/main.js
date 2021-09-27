'use strict';
const adv = document.querySelectorAll('.promo__adv img'),
      genre = document.querySelector('.promo__genre'),
      BG = document.querySelector('.promo__bg'),
      movieList = document.querySelector('.promo__interactive-list');
      
const movieDB = {
   movies : []
};

adv.forEach( films => {
   films.remove();
});

genre.textContent = 'драма';
BG.style.backgroundImage = 'url("../img/bg.jpg")';

document.querySelectorAll('.promo__interactive-item').forEach((item, i) => {
   movieDB.movies[i] = item.innerText;
});

movieDB.movies.sort();

movieList.innerHTML = '';

movieDB.movies.forEach((item, i) => {
   movieList.innerHTML += `
      <li class="promo__interactive-item">${i + 1} ${item}
         <div class="delete"></div>
      </li>
   `;
});





















// const adv = document.querySelectorAll('.promo__adv img'),
//       promoGenre = document.querySelector('.promo__genre'),
//       promoBG = document.querySelector('.promo__bg'),
//       movieDB = [],
//       arr = [];

// adv.forEach((item) => {
//    item.remove();
// });

//    // for (let i = 0; i < document.querySelectorAll('.promo__interactive-item').length; i++) {
//    //       movieDB[i] = document.querySelectorAll('.promo__interactive-item')[i].innerText; 
//    // }
   
//    document.querySelectorAll('.promo__interactive-item').forEach((item, i) => {
//       movieDB[i] = document.querySelectorAll('.promo__interactive-item')[i].innerText;
//    });

//    movieDB.sort();


// // movieDB.forEach((item, i) => {
// //    arr[i] = item.innerText;
// // });

// // arr.sort();

// // movieDB.forEach(function (item, i) {
// //    movieDB[i].innerHTML = `${i + 1}: ${arr[i]}`;
// // });
// // console.log(arr);

// promoGenre.textContent = 'ДРАМА';
// promoBG.style.background = 'url(../img/bg.jpg) center center/cover no-repeat';