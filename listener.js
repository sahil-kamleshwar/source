//allows select dynamic element
//event propagation - order the eevnts are fired
//event bubbling 
//event cpaturing

const container=document.querySelector('.container');
const list=document.querySelector('.list-items');
function showBubbling(e){
    console.log('current target',e.currentTarget );
    console.log('taregt', e.target);
}

list.addEventListener('click', showBubbling);
container.addEventListener('click',showBubbling);