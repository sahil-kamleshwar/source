const btns=document.querySelector('.btn');

btns.forEach(function(btn)  {
    btn.addEventListener('click', function(e){
        console.log(e.currenTarget);
    e.currenTarget.style.color='green'
    });

});