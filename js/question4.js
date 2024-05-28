//! d. Print the total population of countries using reduce function :

var Request3 = new XMLHttpRequest();
Request3.open("GET","https://restcountries.com/v3.1/all",true)
Request3.send();
Request3.onload = function(){
    var data3 = Request3.response;
    //console.log(data3);
    var Result3 = JSON.parse(data3);
    //console.log(Result3);

    var TotalPopulation = Result3.reduce((acc,cv)=>{
        return acc+cv.population
    },0)
    console.log(TotalPopulation);
}