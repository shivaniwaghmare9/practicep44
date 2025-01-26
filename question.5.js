 /*function shiv(){
    let ans="JavaScript is fun, but javaScript can be challenging."
    console.log(ans.replace(/JavaScript/gi, "Programming"))
}*/

function ram() {
    let change= document.querySelector("#btn")
    if(change.style.display==='none'){
      change.style.display='block';
       change.innerHTML.style.text='show';
    }
    else{
       change.style.display='none';
       change.style.text='hide';
    }
}