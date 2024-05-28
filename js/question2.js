//! b. Get all the countries with a population of less than 2 lakhs using Filter function : 

var Request1 = new XMLHttpRequest();
Request1.open("GET","https://restcountries.com/v3.1/all",true)
Request1.send();
Request1.onload = function(){
    var data1 = Request1.response;
    //console.log(data1);
    var Result1 = JSON.parse(data1);
    //console.log(Result1);

    var population_Res = Result1.filter((x)=>x.population<200000);
    population_Res.map((ele)=>console.log(ele.name.common));
}