let menu = document.querySelector(".abs")
let side = document.querySelector(".side")
let a = side.querySelectorAll("a")
let userDate = document.querySelector('.user-date')

let date = new Date()

let tdate = date.getDate()
let month = date.getMonth() + 1 ;
let year = date.getFullYear()

let months = month < 10 ? "0" + month : month ;
let currDate = date < 10 ? "0" + tdate :tdate;

let minValue = year + "-" + months + "-" + currDate;
console.log('minval',minValue);

userDate.setAttribute("min",minValue)



a.forEach((items)=>{

    items.addEventListener("click",()=>{
        side.classList.remove("show")
        menu.classList.remove("fa-close")
        menu.classList.add("fa-bars")

    })

})


menu.addEventListener("click",()=>{
    side.classList.toggle("show")

    if (menu.classList.contains("fa-bars")) {
        menu.classList.remove('fa-bars')
        menu.classList.add('fa-close')
    }else{
        menu.classList.remove("fa-close")
        menu.classList.add("fa-bars")
    }
})


window.addEventListener("scroll",()=>{
    document.querySelector("nav").classList.toggle("scroll", window.scrollY > 0)
})






// swiper js 

