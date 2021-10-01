"use strict";

const movieDB = {
    movies: [
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      BG = document.querySelector('.promo__bg'),
      genre = BG.querySelector('.promo__genre'),
      filmsList = document.querySelector('.promo__interactive-list');



adv.forEach(item => {
    item.remove();
});

genre.textContent = 'драма';

BG.style.backgroundImage = 'url("../img/bg.jpg")';


document.querySelectorAll('.promo__interactive-item').forEach((item, i) => {
    movieDB.movies[i] = item.innerText;
});
movieDB.movies.sort();

filmsList.innerHTML = '';

movieDB.movies.forEach((item, i) => {
    filmsList.innerHTML += `
        <li class="promo__interactive-item">${i + 1}: ${item}
            <div class="delete"></div>
        </li>
    `;
});



/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */