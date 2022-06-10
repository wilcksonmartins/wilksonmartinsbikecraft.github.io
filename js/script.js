// ativar link menu//
const links= document.querySelectorAll(".header-menu li a")

function ativarLinks(link){
    const url = location.href
    const href = link.href
    
    if(url.includes(href)){
        link.classList.add("ativo")
    }
}

links.forEach(ativarLinks)
// ativar formulario de uma pag pra outra//
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro){
    const elemento = document.getElementById(parametro)
    if(elemento){
        elemento.checked = true
    }

}

parametros.forEach(ativarProduto)
// PERGUNTAS FREQUENTES//
const perguntas = document.querySelectorAll(".perguntas button");

function mostraTexto(event){
    const  pergunta = event.currentTarget;
    const  controls = pergunta.getAttribute("aria-controls")
    const resposta = document.getElementById(controls)

    resposta.classList.toggle("ativa")
    const ativa = resposta.classList.contains("ativa")
    console.log(ativa)
    pergunta.setAttribute("aria-expanded",ativa)
    
}

function eventosPergutas(pergunta){
    pergunta.addEventListener("click",mostraTexto)

}

perguntas.forEach(eventosPergutas)

// Galeria de bicicletas

const galeria  = document.querySelectorAll(".bicicleta-imagens img")
const galeriaContainer = document.querySelector(".bicicleta-imagens")

function trocarImg(event){
    const img = event.currentTarget;

    const media = matchMedia("(min-width:1000px").matches;
   if (media){
    galeriaContainer.prepend(img)
   }
}

function ativaImagen(img){
    img.addEventListener("click",trocarImg)
}

galeria.forEach(ativaImagen)

// plugins//
if (window.SimpleAnime){
    new SimpleAnime();
}