'use strict'

const btns = document.querySelectorAll('button'),
      link = document.querySelector('a');


let counter = function (e){
   e.preventDefault();
   for (const i of btns) {
      if(i.id == 'btn'){
         i.remove();
      }
   }
};

btns.forEach(item => {
   item.addEventListener('click', (e) => {
      console.log(e.target);
   });
});  



link.addEventListener('click', counter);
