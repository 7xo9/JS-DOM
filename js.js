
let IPhone = document.getElementById("IphoneBtn")
let View = document.querySelector('meta[name="viewport"]');



function change(){
    
    alert("The button is working the function isn't")
    let newWidth = 375;
    let newHight = 812;
    window.resizeTo(newWidth,newHight)
}

IPhone.addEventListener("click", change)