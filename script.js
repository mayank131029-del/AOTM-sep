
let header = document.querySelector("header")
let backtotop = document.getElementById("backtotop")

window.addEventListener("scroll", () => {
    console.log(scrollY)
    if (scrollY >= 15) {
        header.classList.add("active")
    }

    else {
        header.classList.remove("active")
    }
})

window.addEventListener("scroll", () => {
    if (scrollY >= 300) {
        backtotop.classList.add("active")
    }
    else{

        backtotop.classList.remove("active")
    }

})

function backtotopbtn(){
    backtotop.addEventListener("click", ()=>{
        window.scrollTo(
            {
                top: 0,
                behavior: "smooth"
            }
        )
    })
}
backtotopbtn()



function countto() {

    const counters = document.querySelectorAll(".live-counter");
    counterdone = false


    window.addEventListener("scroll", () => {
        if (counters[0].getBoundingClientRect().bottom <= window.innerHeight - 50) {

            if (counterdone) {
                return;
            }
            counters.forEach(counter => {
                const target = Number(counter.dataset.target)
                let current = 0;
                $(counter).countTo({ from: current, to: target, speed: 500 });
                counterdone = true
            })
        }

    }
)}

countto()