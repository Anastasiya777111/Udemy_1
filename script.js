

let numberOfFilms;

function start(){
    numberOfFilms=+prompt('Сколько фильмов вы уже посмотрели?', ' ');

    while(numberOfFilms=='' || numberOfFilms==null || isNaN(numberOfFilms)){
        numberOfFilms=+prompt('Сколько фильмов вы уже посмотрели?', ' ');
    }
}

start();

const personalMovieDB={
count:numberOfFilms,
movies:{},
actors:{},
genres:[],
privat: false
};


function rememberMyFilms(){
    for (let i=0; i<2; i++){
        let question1=prompt('Один из последних просмотренных фильмов?', '');
        let  question2=prompt('На сколько оцените его?', '');
        if (question1=='' && question2=='' && question1==null && question2==null && question1.length<50 && question2.length<50){
            console.log('Data is wrong');
            i--;
        }
        else{
            personalMovieDB.movies[question1]=question2;
            console.log('Done');
        }
    }
    
}

rememberMyFilms();

function detectPersonalLevel(){
    if(personalMovieDB.count<10){
        console.log('Просмотрено довольно мало фильмов');
    }
    else if(personalMovieDB.count>=10  && personalMovieDB.count<30){
        console.log('Вы классический зритель');
    }
    else if(personalMovieDB.count>=30){
        console.log('Вы киноман');
    }
    else{
        console.log('Произошла ошибка!');
    }
}

detectPersonalLevel();


/*2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres*/

function showMyDB(){
    if(personalMovieDB.privat==false){
        console.log(personalMovieDB)
    }
}

showMyDB();


function writeYourGenres(){
    for (let i=1;i<=3; i++){
        personalMovieDB.genres[i-1]=prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();