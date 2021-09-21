
'use strict';

let personalMovieDB = {
   count:'',
   movies: {},
   actors: {},
   genres: [],
   privat: true,
   start: function() {
      let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");

      while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");
      }

      personalMovieDB.count = numberOfFilms;
   },
   rememberFilms: function() {
      for (let i = 0; i < 2 ; i++) {

         let a = prompt('Один из последних просмотренных фильмов?'),
             b = +prompt('На сколько оцените его?');
      
         
         if  ( a == '' || a == null || a.length > 50 || b == '' || b == null || b.length > 50) {
               i--;
            }else{
               personalMovieDB.movies[a] = b;
            }
      }
   },
   detectLevel: function(){
      if (personalMovieDB.count < 10) {
         alert("Просмотрено довольно мало фильмов");
      }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
         alert("Вы классический зритель");
      } else if (personalMovieDB.count >= 30 && personalMovieDB.count < 50)  {
         alert("Вы киноман");
      } else if (personalMovieDB.count >= 50 )  {
         alert("Вы киноманище!");
      }else{ 
         alert("Произошла ошибка");
      }
   },
   showDB: function () {
      if (!personalMovieDB.privat) {
         console.log(personalMovieDB);
      }else{
         console.log("Access closed");
      }
   },
   writeYourGenres: function () {
      for (let i = 1; i <= 3; i++) {
         let a = prompt(`Ваш любимый жанр под номером ${i}`, '');
   
         if (a != '' && a != null) {
            personalMovieDB.genres[i - 1] = a;
         }else{
            i--;
         }
      }
      
      personalMovieDB.genres.forEach(function(item, i){
         console.log(`Любимый жанр #${i + 1} - это ${ item }`);
      });
      
   },
   toggleVisibleMyDB: function () {
      if (!personalMovieDB.privat) {
         personalMovieDB.privat = true;
      }else {
         personalMovieDB.privat = false;
      }
   }
};

personalMovieDB.start();
personalMovieDB.rememberFilms();
personalMovieDB.detectLevel();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.writeYourGenres();
personalMovieDB.showDB();

// console.log(personalMovieDB);