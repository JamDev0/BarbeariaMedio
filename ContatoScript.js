let Menu = document.getElementById('Menu');
let Opções = document.getElementsByClassName('MenuContent');
let Main = document.getElementsByTagName('main');


//Modificação de estilos via JavaScript

Menu.style.height = 'calc(' + document.getElementById('Logo').clientHeight +'px + 10px)';
Main[0].style.paddingTop = Menu.clientHeight + 'px';
for(c = 0;c < Opções.length; c++)
{
    Opções[c].style.top = 'calc(' + Menu.clientHeight/2 + 'px - ' + Opções[c].clientHeight/2 + 'px)';
}

//Funções encarregadas de fazer o efeito hover

for(c = 0;c < Opções.length; c++)
{
    Opções[c].addEventListener('mouseover', Hover);
    Opções[c].addEventListener('mouseout', HoverOut);

    Opções[c].addEventListener('click', Redirecionar);
}

function Hover(a)
{
    a.target.style.textDecoration = 'underline';
    a.target.style.textDecorationColor = 'orange';
}

function HoverOut(a)
{
    a.target.style.textDecoration = 'none';
    a.target.style.textDecorationColor = 'transparent';
}


//Função encarregada pelo redirecionamento

function Redirecionar(a)
{
    switch(a.target.innerText)
    {
        case 'Home':
            window.location.href = 'index.html';
            break;

        case 'Produtos':
            window.location.href = 'produtos.html';
            break;

        case 'Contato':
            window.location.href = 'contato.html';
            break;
    }
}