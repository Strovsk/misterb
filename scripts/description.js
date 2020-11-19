window.onload = ()=>{
    seletor = new Seletor(5, 3, 'seletor-container', 'container');
    seletor.renderDots();

    let particula = new Particula('container', 20);
    particula.renderizar_lumins();

    setIndexDot('none', true, 2);
}

function cont_posit(idItem, idContainer){
    var container = document.getElementById(idContainer);
    var relative_top_position = container.getBoundingClientRect().top;
    document.getElementById(idItem).innerHTML = relative_top_position;
}

function goToSheet(indexpPage){
    window.scrollTo(0, indexpPage * screen.height);
}