
const images = document.querySelectorAll('img');
const left = document.getElementById('left');
const right = document.getElementById('right'); 
let totalSlide = images.length; 
let count =0; 

function slideLeft(){
images[count].classList.remove('active', 'animationRight', 'animationLeft');

if(count > 0){
    count--;
}else{
    count= totalSlide - 1;
}
images[count].classList.add('active', 'animationLeft');

}

left.addEventListener('click', slideLeft); 

function slideNext(){
    images[count].classList.remove('active', 'animationLeft', 'animationRight');
   

    if(count < totalSlide - 1){
        count++;
    }else{
        count = 0;
    }
    images[count].classList.add('active', 'animationRight'); 
   
}

right.addEventListener('click', slideNext);