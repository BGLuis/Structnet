const barra = document.querySelector("#barra");

const trabalho = document.querySelector("#slider")
const direita = document.querySelector("#direita")
const esqueda = document.querySelector("#esqueda")


window.addEventListener('scroll',function(){
    if (window.pageYOffset <= 0) {
        barra.classList.add("estender");
    }
    else{
        barra.classList.remove("estender");
    }
});


const prox = () =>{
    var fotos = document.querySelectorAll("#slider .itens")
    trabalho.insertBefore(fotos[0],fotos[fotos.length]);
}

const ant = () =>{
    var fotos = document.querySelectorAll("#slider .itens")
    trabalho.insertBefore(fotos[fotos.length-1],fotos[0]);
}

direita.addEventListener('click', prox);
esqueda.addEventListener('click', ant);
