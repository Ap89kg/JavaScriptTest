personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


for (let i =0; i < 2; i++) {
    const a = prompt('Один из просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if(a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

console.log(personalMovieDB);