
   const boxes = document.querySelectorAll('.box img');
const mainImage = document.querySelector('#mainPreview');
boxes.forEach(boxes =>{
boxes.addEventListener('click',()=>{
  mainImage.src= boxes.src;
  });
   });