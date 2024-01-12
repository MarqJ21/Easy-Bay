function remove(){
    var box = document.querySelector("#alert-box");
    
    box.remove();
}

function empty(element){
    alert("Your Cart is empty!")
    
}

function over(element) {
    element.src = "static/images/assets/succulents-2.jpg";  
}
    
function out(element) {
    element.src = "static/images/assets/succulents-1.jpg";     
}
