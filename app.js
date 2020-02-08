var p1 = document.querySelector(".para1");
var p2 = document.querySelector(".para2");
var p3 = document.querySelector(".para3");
var p4 = document.querySelector(".para4");
var p5 = document.querySelector(".para5");
var p6 = document.querySelector(".para6");
var p7 = document.querySelector(".para7");
var imgBox = document.querySelector(".img_box");
var btn = document.querySelector(".btn");

var inputBox = document.querySelector(".input_box");


function search(event){
    var movieName = inputBox.value;
    console.log(movieName);
    var xhr = new XMLHttpRequest();
    xhr.open("GET","https://api.themoviedb.org/3/search/movie?api_key=0bd31b79d75b8d483835f66778028d16&query="+movieName);
    xhr.responseType="json";
    xhr.onload = function(){
        var movieDeatils = xhr.response;
        console.log(movieDeatils);
        var posterSrc = "https://image.tmdb.org/t/p/w500/";
        var MoviePoster = document.createElement("img");
        MoviePoster.classList = "poster_img";
        MoviePoster.src = posterSrc+movieDeatils.results[0].poster_path;
        p1.innerHTML="Movie :  "+movieDeatils.results[0].title;
        p2.innerHTML="Story :  "+movieDeatils.results[0].overview;
        p3.innerHTML="Rating : "+movieDeatils.results[0].vote_average+" /10";
        p4.innerHTML="Release Date : "+movieDeatils.results[0].release_date;
        p5.innerHTML="Rated By : "+movieDeatils.results[0].vote_count;
        p6.innerHTML="Original Language : "+movieDeatils.results[0].original_language;
        p7.innerHTML="Popularity % : "+movieDeatils.results[0].popularity;
        imgBox.append(MoviePoster);
    }
    xhr.send();
    inputBox.value = "";
}


btn.addEventListener("click",search);
