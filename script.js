//Create a request instance
var req= new XMLHttpRequest();
//initiate a connection or create a conection
req.open("GET","https://restcountries.eu/rest/v2/all",true);
//sending the request
req.send();
//load the function
req.onload=function(){
    var data=JSON.parse(this.response);
    let n=data.length;
    //console.log(n)
    for(i=0;i<n;i++){
        console.log(data[i].name);
    }

}
