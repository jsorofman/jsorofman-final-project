

document.getElementById('menu-open').addEventListener('click', sideMenuAppears);
document.getElementById('menu-close').addEventListener('click', sideMenuDisappears);

function sideMenuAppears() {
    document.getElementById('side-menu').classList.add('show-menu');
}

function sideMenuDisappears() {
    document.getElementById('side-menu').classList.remove('show-menu');
}