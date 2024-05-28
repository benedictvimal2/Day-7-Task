//! a. Get all the countries from Asia continent /region using Filter function :

var Request = new XMLHttpRequest();

Request.open("GET","https://restcountries.com/v3.1/all",true)

Request.send();

Request.onload = function(){
    var data = Request.response;
    //console.log(data);
    var Result = JSON.parse(data);
    //console.log(Result);

    var Asia_Reg = Result.filter((country) => country.region === "Asia");
    Asia_Reg.map((country) => console.log(country.name));
}