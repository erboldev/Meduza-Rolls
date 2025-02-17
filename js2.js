let rol=document.querySelector(".rol")
let piza=document.querySelector(".piza")
let burger=document.querySelector(".burger")
let drink=document.querySelector(".drink")
let souse=document.querySelector(".souse")

let herorol=document.querySelector(".herorol")
let heropiza=document.querySelector(".heropiza")
let heroburger=document.querySelector(".heroburger")
let herodrink=document.querySelector(".herodrink")
let herosouse=document.querySelector(".herosouse")

let header=document.querySelector(".header")
let hero=document.querySelector(".hero")

let headerBtn1=document.querySelector(".headerBtn1")
let modal =document.querySelector(".modal")
let closebtn=document.querySelector(".closebtn")
let headerLogo = document.querySelector(".header-logo")

headerBtn1.addEventListener("click",()=>{
    modal.style.display='block'
})
headerBtn1.addEventListener("click",()=>{
    header.style.display='none'
})
headerBtn1.addEventListener("click",()=>{
    hero.style.display='none'
})



rol.addEventListener("click",()=>{
    herorol.style.display='block'
    heropiza.style.display='none'
    heroburger.style.display='none'
    herodrink.style.display='none'
    herosouse.style.display='none'
})
rol.addEventListener("click",()=>{
    rol.style.background='silver'
    piza.style.background='red'
    burger.style.background='red'
    drink.style.background='red'
    souse.style.background='red'
})
rol.addEventListener("click",()=>{
    rol.style.color='red'
    piza.style.color='white'
    burger.style.color='white'
    drink.style.color='white'
    souse.style.color='white'
})






piza.addEventListener("click",()=>{
    heropiza.style.display='block'
    herorol.style.display='none'
    heroburger.style.display='none'
    herodrink.style.display='none'
    herosouse.style.display='none'
})
piza.addEventListener("click",()=>{
    rol.style.background='red'
    piza.style.background='silver'
    burger.style.background='red'
    drink.style.background='red'
    souse.style.background='red'
})
piza.addEventListener("click",()=>{
    rol.style.color='white'
    piza.style.color='red'
    burger.style.color='white'
    drink.style.color='white'
    souse.style.color='white'
})











burger.addEventListener("click",()=>{
    heropiza.style.display='none'
    herorol.style.display='none'
    heroburger.style.display='block'
    herodrink.style.display='none'
    herosouse.style.display='none'
})
burger.addEventListener("click",()=>{
    rol.style.background='red'
    piza.style.background='red'
    burger.style.background='silver'
    drink.style.background='red'
    souse.style.background='red'
})
burger.addEventListener("click",()=>{
    rol.style.color='white'
    piza.style.color='white'
    burger.style.color='red'
    drink.style.color='white'
    souse.style.color='white'
})



drink.addEventListener("click",()=>{
    heropiza.style.display='none'
    herorol.style.display='none'
    heroburger.style.display='none'
    herodrink.style.display='block'
    herosouse.style.display='none'
})
drink.addEventListener("click",()=>{
    rol.style.background='red'
    piza.style.background='red'
    burger.style.background='red'
    drink.style.background='silver'
    souse.style.background='red'
})
drink.addEventListener("click",()=>{
    rol.style.color='white'
    piza.style.color='white'
    burger.style.color='white'
    drink.style.color='red'
    souse.style.color='white'
})





souse.addEventListener("click",()=>{
    heropiza.style.display='none'
    herorol.style.display='none'
    heroburger.style.display='none'
    herodrink.style.display='none'
    herosouse.style.display='block'
})
souse.addEventListener("click",()=>{
    rol.style.background='red'
    piza.style.background='red'
    burger.style.background='red'
    drink.style.background='red'
    souse.style.background='silver'
})
souse.addEventListener("click",()=>{
    rol.style.color='white'
    piza.style.color='white'
    burger.style.color='white'
    drink.style.color='white'
    souse.style.color='red'
})







