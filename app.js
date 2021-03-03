//movement animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');

//items
const title = document.querySelector('.title');
const logo = document.querySelector('.logo img');
const contact = document.querySelector('.contact button');
const buttons = document.querySelector('.buttons');
const description = document.querySelector('.info h3');



//moving animation event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg`;
});

//animate in
container.addEventListener('mouseenter', e => {
    card.style.transition = 'none';

    //popout
    title.style.transform = 'translateZ(120px)';
    logo.style.transform = 'translateZ(150px) rotateZ(-2deg)';
    description.style.transform = 'translateZ(100px)';
    buttons.style.transform = 'translateZ(75px)';
    contact.style.transform = 'translateZ(110px)';
    
});


//animate out
container.addEventListener('mouseleave', e => {
    card.style.transition = 'all 0.7s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    
    //popback
    title.style.transform = 'translateZ(0px)';
    logo.style.transform = 'translateZ(0px) rotateZ(0deg)';
    description.style.transform = 'translateZ(0px)';
    buttons.style.transform = 'translateZ(0px)';
    contact.style.transform = 'translateZ(0px)';
    
});