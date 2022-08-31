'use strict'

const showArray = (array,title) => {
    
    //selecionando um elemento do DOM
    const container = document.querySelector('main')

    //criando um novo elemento div
    const div = document.createElement('div')

    //adiciona uma classe na div criada 
    div.classList.add('numbers-container')

    //populando a div nova com elementos do array
    div.innerHTML = `
    <h2>${title}</h2>
    <div class = "numbers-item"> 
        ${array.join('</div><div class = "numbers-item">')}
        </div>`


        //inserindo o novo elemento DIV no DOM
        container.appendChild(div)
}

export {
    showArray
}