import "./style.css"
import { AboutLoad} from "./index2.js"
import { ContactLoad } from "./index3.js"
console.log("hey")
const page = document.querySelector("#content")
function Homeload(){
    let paragraph = document.createElement("p")
    let paragraph2 = document.createElement("p")
    paragraph.textContent = "Welcome to my Restaurant !"
    paragraph2.textContent = "Founded in 1783 , this restaurant jkd,o,onioo"

    page.appendChild(paragraph)
    page.appendChild(paragraph2)
    paragraph.style.fontSize = "25px"
    paragraph.style.fontWeight = "bold"

    }
const about = document.querySelector("#about")
const home = document.querySelector("#home")
const contact = document.querySelector("#contact")

about.addEventListener("click",() => {
    page.innerHTML= ""
    AboutLoad(page)
})


contact.addEventListener("click",() => {
    page.innerHTML= ""
    ContactLoad(page)
})

home.addEventListener("click",() => {
    page.innerHTML = ""
    Homeload()
})

Homeload()