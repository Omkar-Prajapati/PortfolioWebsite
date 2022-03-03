console.log('javascript running');
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.navbar').classList.toggle('navbarGo');
})