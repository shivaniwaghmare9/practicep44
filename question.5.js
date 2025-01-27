 /*function shiv(){
    let ans="JavaScript is fun, but javaScript can be challenging."
    console.log(ans.replace(/JavaScript/gi, "Programming"))
}*/

 let ram=()=>{
    let change= document.querySelector("#btn")
    let change1= document.querySelector("#new")
    if(change.style.display==='none'){
      change.style.display='block';
       change1.innerHTML='Hide';
    }
    else{
       change.style.display='none';
       change1.innerHTML='Show';
    }
}