let hour=  new Date().getHours();
let element= document.querySelector('body');
let shape=document.getElementById('shape')
if (hour>6 || hour<=17){
    element.classList.add('light')
    let sunny=document.createElement('div')
  sunny.classList.add('sun')
  sunny.style.bottom= "300px";
  sunny.style.right= "80px";
  shape.appendChild(sunny);
  
    console.log(hour)
}
else {
    element.classList.add('dark')
    let moon=document.createElement('div')
  moon.classList.add('moon')
  moon.style.bottom= "300px";
  moon.style.right= "80px";
  shape.appendChild(moon);
    console.log('night')
}
