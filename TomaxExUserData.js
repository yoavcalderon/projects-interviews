// <------------------- stage 1  ------------------->
// <------------------- stage 1.1 ajax http request ------------------->
let usersArray = [];
loadUsersData();
function loadUsersData() {

//the http request is an object for web requests
var xhttp = new XMLHttpRequest();
//ready state is the counter of an http request comprised of 4 stages- request, request arrival , response, and response arrival
// on ready state change is a function that tells what to do on each state change( 1, 2 ,3 ,4)
xhttp.onreadystatechange = function () {

//if the ready state change is 4 then we have a response and if we have a response put it on the page
if (this.readyState == 4 && this.status == 200) {

//    document.getElementById("responseContent").innerHTML = this.responseText;
 

// <------------------- stage 1.2 ajax response conversion to object and user array ------------------->
 // we will convert the Json response to js object by parse method
 //var obj is the response converted to js object
 var obj = JSON.parse(this.responseText);

 // print the object in the console to see how it should be interperted
 console.log(obj);

 //get the users array from the object
 usersArray = obj.users;

 // iterate the array using a for loop so we will see the users one by one
 for (const user of usersArray) {
 //    console.log(user);
     
 }

 //Returns a reference to the first object with the specified value of the ID or NAME attribute.
 //    document.getElementById("userId").innerHTML = usersArray[0].user;
 //    document.getElementById("userName").innerHTML = usersArray[0].name;
 //    document.getElementById("userPhoto").innerHTML = usersArray[0].picture;
 //    document.getElementById("userPic").src=usersArray[0].picture;
}
};


//open defines the request
//the first paramenter -GET- http request method (get, post, ect,)
//the second parementer is the -url- from where are we getting our info
//the third parementer is a -boolean- that determines if we are using async request or not(page remains active during request response time)
xhttp.open("GET", "http://www.mocky.io/v2/59bd9a773c00001303529fe0", false);
xhttp.setRequestHeader("Access-Control-Allow-Origin", "http://www.mocky.io/*");

//now that we have defined everything we can send the request
xhttp.send();
}
// <------------------- stage 1.2 end ------------------->

