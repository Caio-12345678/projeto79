menuListArray = ["Pizza Vegetariana",
                      "pizza de frango",
                      "pizza portuguesa",
                      "pizza de quatro queijo",
                      "pizza de parmesão",
                      "pizza de calabreza" ];

function getMenu(){
    var htmldata="";
    menuListArray.sort();
    for(var i=0;i<menuListArray.length;i++){
       htmldata=htmldata+ menuListArray[i] + '<br>';
    }
    document.getElementById("displayMenu").innerHTML = htmldata;    
}


function addItem(){
    var htmldata;
    var imgtags='<img id=" im1" scr="images/pizzaImg.png"/>'
    var item=document.getElementById("addItem").value;
    menuListArray.sort();
    htmldata="";
    for(var i=0;i<menuListArray.length;i++){
       htmldata=htmldata+ menuListArray[i] + '<br>';
    }
    document.getElementById("displayAddedMenu").innerHTML = htmldata; 
}

function addTop(){
    var item=document.getElementById("addItem").value;
    menuListaArray.push(item);
    addItem();   
}