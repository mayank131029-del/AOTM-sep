
let header = document.querySelector("header")

window.addEventListener("scroll", ()=>{
    console.log(scrollY)
    if (scrollY>=15) {
        header.classList.add("active")
    }
    else{
        header.classList.remove("active")
    }
})