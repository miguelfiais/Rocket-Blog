const iconMenu = document.getElementById('icon-menu');
const navList = document.querySelector('ul')
navList.style.maxHeight = '0px'
iconMenu.addEventListener('click', () =>{
    if(navList.style.maxHeight === '0px'){
        navList.style.maxHeight = '300px'
    }else{
        navList.style.maxHeight = '0px'
    }
    
})