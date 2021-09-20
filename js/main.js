'use strict';

let numberOfFilms;

function start() {
   numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");
   
   while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
      numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");
   }
}
//  start();

let personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

function rememberMyFilms() {
   for (let i = 0; i < 2 ; i++) {

      let a = prompt('Один из последних просмотренных фильмов?'),
          b = prompt('На сколько оцените его?');
   
      
      if  ( a == '' || a == null || a.length > 50 || b == '' || b == null || b.length > 50) {
            i--;
         }else{
            personalMovieDB.movies[a] = b;
         }
   }
}

function detectPersonalLevel(){
   if (personalMovieDB.count < 10) {
      alert("Просмотрено довольно мало фильмов");
   }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      alert("Вы классический зритель");
   } else if (personalMovieDB.count >= 30 && personalMovieDB.count < 50)  {
      alert("Вы киноман");
   } else{ 
      alert("Произошла ошибка");
   }
}

function showMyDB(hidden) {
   if (!hidden) {
      console.log(personalMovieDB);
   } else {
      console.log('Access closed');
   }
}

function writeYourGenres(genres) {
   for (let i = 1; i <= 3; i++) {
      let a = prompt(`Ваш любимый жанр под номером ${i}`, '');

      if (a != '' && a != null) {
         genres[i - 1] = a;
      }else{
         i--;
      }
      
   }
}


// writeYourGenres(personalMovieDB.genres);



// rememberMyFilms();
// detectPersonalLevel();
// showMyDB(personalMovieDB.privat);

console.log(personalMovieDB);







      //  способ № 2
// let i = 0;
// while (i < 2) {

//    let a = prompt('Один из последних просмотренных фильмов?'),
//        b = prompt('На сколько оцените его?');

//        if  ( a == '' || a == null || a.length > 50 || b == '' || b == null || b.length > 50) {
//          i--;

//       } else{
//          personalMovieDB.movies[a] = b;
//       }
//       i++;
//  }

//   Способ № 3
// let i = 0;
// do{
//     let a = prompt('Один из последних просмотренных фильмов?'),
//         b = prompt('На сколько оцените его?');

//    if  ( a == '' || a == null || a.length > 50 || b == '' || b == null || b.length > 50) {
//          i--;

//       } else{
//          personalMovieDB.movies[a] = b;
//       }
//       i++;
// }while(i < 2)