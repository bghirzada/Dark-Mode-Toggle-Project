const darkModeButton = document.querySelector("#darkmode")
const bodyLook = document.querySelector("#bodySection")

darkModeButton.addEventListener("click", ()=>{

    // alert("perfect")

    if(bodyLook.style.backgroundColor == "white"){
        bodyLook.style.backgroundColor = "gray";
        bodyLook.style.color = "white";
    } 
    else{
        bodyLook.style.backgroundColor = "white";
        bodyLook.style.color = "gray";
    }
})

