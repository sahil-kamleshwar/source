/* setTimeout(function(){console.log('i waited for five seconds')}, 2000);*/
let counter=0;
function timeout(){
    setTimeout(function(){
        console.log('hi '+ counter ++);
        timeout();
    }, 2000);
}
timeout();
// ctrl+c to stop execution