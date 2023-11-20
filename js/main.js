const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');

navBtn.onclick = () => {
    (nav.classList.toggle('open'))
}
