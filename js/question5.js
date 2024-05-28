//! e. Print the country that uses US dollars as currency.

var Request4 = new XMLHttpRequest();
Request4.open("GET","https://restcountries.com/v3.1/all",true)
Request4.send();
Request4.onload = function(){
    var data4 = Request4.response;
    //console.log(data4);
    var Result4 = JSON.parse(data4);
    //console.log(Result4);

    const countriesWithUSD = Result4.filter(country =>
        country.currencies && country.currencies.USD
      ).map(country => country.name.common);
    
      if (countriesWithUSD.length > 0) {
        console.log("Countries that use US dollars as currency: " + countriesWithUSD.join(", "));
      } else {
        console.log("No countries found that use US dollars as currency.");
      }
}