function Carregado()
{
    let Menu = document.getElementById('Menu');
    let Opções = document.getElementsByClassName('MenuContent');

    for(c = 0;c < Opções.length; c++)
    {
        Opções[c].addEventListener('mouseover', Hover);
        Opções[c].addEventListener('mouseout', HoverOut);

        Opções[c].addEventListener('click', Redirecionar);
    }


    //Modificação de estilos via JavaScript
    Menu.style.height = 'calc(' + document.getElementById('Logo').clientHeight +'px + 10px)';
    for(c = 0;c < Opções.length; c++)
    {
        Opções[c].style.top = 'calc(' + Menu.clientHeight/2 + 'px - ' + Opções[c].clientHeight/2 + 'px)';
    }
    //Termino da modificação
    

    function Hover(a)
    {
        a.target.style.textDecoration = 'underline';
        a.target.style.textDecorationColor = 'rgb(211, 45, 45)';
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
                alert('Pagina indisponivel');
                break;
        }
    }
}