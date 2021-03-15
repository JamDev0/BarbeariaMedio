
    let TH = document.getElementById('TituloH');
    let Banner = document.getElementById('banner');
    let Menu = document.getElementById('Menu');
    let Opções = document.getElementsByClassName('MenuContent');

    //Modificação de estilos via JavaScript
    TH.style.left = 'calc(50% - ' + (TH.clientWidth/2) + 'px)';
    TH.style.top = 'calc('+  Banner.clientHeight/2 + 'px - ' + (TH.clientHeight/2) + 'px)';
    Menu.style.height = 'calc(' + document.getElementById('Logo').clientHeight +'px + 10px)';
    for(c = 0;c < Opções.length; c++)
    {
        Opções[c].style.top = 'calc(' + Menu.clientHeight/2 + 'px - ' + Opções[c].clientHeight/2 + 'px)';
    }

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

