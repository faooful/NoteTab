// document.getElementById("save").addEventListener("click", function ()
// {
//     var user = document.getElementById("notepad").value ;
//     //localStorage["user"] = user ;
//     localStorage.setItem("user", user) ;
//     alert("gmail id saved") ;
//     console.log("gmail id saved")
//     console.log(user)
// } , false);


var notepad = document.getElementById('notepad');

notepad.addEventListener('keyup', function(event) {
    console.log('test');
});
