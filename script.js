var icon = document.querySelector("#icon");
var navList = document.querySelector("#navList");
var navigation = document.querySelector("#navigation")

icon.addEventListener("click",function(){

    if(navList.className === "list"){
        navList.className += " responsive";
    }
    else{
        navList.className = "list";
    }
    if (navigation.className === "navbar"){
        navigation.className += " newHeight";
    }
    else{
        navigation.className = "navbar";
    }
});

/* code used: www.w3schools.com/howto/howto_js_topnav.asp**/