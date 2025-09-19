
 /*  let count=0;
function btn1(){
    // let count=0;
     count++    //count=count+1
     let display=document.querySelector("#counter");
     display.innerHTML=count
    
}
function btn2(){
     // let count=0;
      count--    //count=count-1
      let display=document.querySelector("#counter");
      display.innerHTML=count
     
 }*/
     /* function shiv(){
          let change= document.querySelector("#box")
          change.style.color="white"
           document.body.style.backgroundColor="black"
          
         }
     function ram(){
          let change= document.querySelector("#box")
         
          change.style.color="black"
          document.body.style.backgroundColor="white"
         }*/

        let shiv=()=>{
          let change= document.querySelector("#box")
         if(change.style.color==='black'){
          (change.style.color='white')
          document.body.style.backgroundColor='black';
       }
       else {
          
          (change.style.color='black');
          document.body.style.backgroundColor='white';
       }
     }