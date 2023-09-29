let button = document.querySelector('section div footer div .btn');
let criacao = document.querySelector('section div footer div .share');
function abrirmodal(){
    if (criacao.style.visibility === 'hidden') {
        criacao.style.visibility = 'visible';
    }
    else{
        criacao.style.visibility = 'hidden';
    }
}



