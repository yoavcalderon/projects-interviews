let usersArray = [];

loadUsersData = ()=>{
    
    $.ajax({
        url: "http://www.mocky.io/v2/59bd9a773c00001303529fe0",
        xhrFields: {
           withCredentials: true
        },
        crossDomain: true, 
        dataType: "jsonp"
     }).done( (data)=>{
        // data.users.array.forEach(element => {
        //     console.log(element);
            
        // });
        usersArray = data.users;
        loadUsersArr(usersArray);
     });
}

$(function(){
    loadUsersData();
});