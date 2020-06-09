function menuToggle() {
    let menuArea = document.getElementById('menu-area')

    // Minha resolução
    if(menuArea.style.width === '200px') {
        menuArea.style.width = '0px';
    } else {
      menuArea.style.width = '200px';
    }

    // // Uma outra forma de resolução
    // if (menuArea.classList.contains('menu-opened') === true) {
    //     menuArea.classList.remove('menu-opened');
    // }
    // else {
    //     menuArea.classList.add('menu-opened');
    // }
}
