//! c. Print the following details name, capital, flag, using forEach function :

var Request2 = new XMLHttpRequest();
Request2.open("GET","https://restcountries.com/v3.1/all",true)
Request2.send();
Request2.onload = function(){
    var data2 = Request2.response;
    //console.log(data2);
    var Result2 = JSON.parse(data2);
    //console.log(Result2);

    var Details = Result2.forEach((element) =>console.log(`Name : ${element.name.common}, Capital : ${element.capital}, Flag : ${element.flag}`));
}
