'use strict'

const routes = {
    '/' : '/pages/home.html',
    '/vermelho' : '/pages/vermelho.html',
    '/azul' : '/pages/azul.html',
    '/rosa' : '/pages/rosa.html',
    '/verde' : '/pages/verde.html'
}

const route = async () => {

    // quebra comportamento do link
    // matamos esse comportamento para ele não dar um f5
    window.event.preventDefault()

    // passa a href sem alterar a pagina
    window.history.pushState({}, "", window.event.target.href)

    // pegando o endpoint/href da pagina
    const path = window.location.pathname

    // fazendo fetch abrir o arquivo
    const response = await fetch(routes[path])
    const html = await response.text()

    console.log(html)

    console.log(routes[path])
    // console.log(path)
    // console.log(window.event.target.href)

    // innerHTML serve para inserir o cofigo html
    document.getElementById('root').innerHTML = html
    
    
}

/* 
    a variavel window é como uma variavel global que pode exportar no
*/
window.route = route
