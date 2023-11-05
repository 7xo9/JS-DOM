
let IPhone = document.getElementById("IphoneBtn")
let View = document.querySelector('meta[name="viewport"]');



function change(){
    
    let newWidth = 375;
    let newHight = 812;
    window.resizeTo(newWidth,newHight)
}

IPhone.addEventListener("click", change)