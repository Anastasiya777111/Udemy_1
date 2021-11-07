const personalMovieDB={
    count:0,
    movies:{},
    actors:{},
    genres:[],
    privat: false,
    start: function(){
        personalMovieDB.count=+prompt('Сколько фильмов вы уже посмотрели?', ' ');

    while(personalMovieDB.count=='' || personalMovieDB.count==null || isNaN(personalMovieDB.count)){
        personalMovieDB.count=+prompt('Сколько фильмов вы уже посмотрели?', ' ');
    }
    },
    rememberMyFilms: function(){
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
    },
    detectPersonalLevel: function (){
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
    },
    showMyDB:function(){
        if(personalMovieDB.privat==false){
            console.log(personalMovieDB)
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres:function (){
        for(let i=1; i<2; i++){
           let genre=prompt(`Ваш любимый жанр под номером ${i}`);
           
        if(genre==null || genre==' '){
            console.log('Нужно ввести данные!')
            i--;
        }
        else{
            personalMovieDB.genres[i-1]=genre;
        }
        personalMovieDB.genres.forEach((item,i)=>{
            console.log(`Любимый жанр ${i+1} - это ${item}}`)
        }
        )
        }
    },
    };

    personalMovieDB.start();
    personalMovieDB.rememberMyFilms();
    personalMovieDB.detectPersonalLevel();
    personalMovieDB.showMyDB();
    personalMovieDB.toggleVisibleMyDB();
    personalMovieDB.writeYourGenres();
    console.log(personalMovieDB);

