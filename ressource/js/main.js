function closeFunction(){
        var x = document.getElementsByClassName("web-container");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
         }
};



function openFunction(a) {
	if(a==="a"){
      var list = document.getElementsByClassName("container")[0];
      list.getElementsByClassName("web-container")[0].style.display = "flex";
      console.log("je suis AAA");
    }
    else if(a==="b"){
        var list = document.getElementsByClassName("container")[1];
      list.getElementsByClassName("web-container")[0].style.display = "flex";
      console.log("je suis BBB");
    }
};

