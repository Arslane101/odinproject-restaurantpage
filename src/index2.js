function AboutLoad(page){
    let paragraph = document.createElement("p")
    let paragraph2 = document.createElement("p")
    paragraph.textContent = "Welcome to my About !"
    paragraph2.textContent = "Founded in 1783 , this restaurant jkd,o,onioo"

    page.appendChild(paragraph)
    page.appendChild(paragraph2)
    paragraph.style.fontSize = "25px"
    paragraph.style.fontWeight = "bold"
}

export {AboutLoad}