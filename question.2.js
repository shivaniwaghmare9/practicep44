function shiv(){
    let ans=confirm("Do you want to see the numbers from 1 to 10?")
    if(ans) {
        for(let i=1; i<=10; i++)
        
            alert(i);
        
        
    }
    else{
        alert("you cancelled the action")
    }
}
//shiv();