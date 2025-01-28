
let tbl=[
    {
        name:"Shivani",
        age:20,
        city:"Indore",
        course:"Computre science",
         univercity:"Madhyanchal"
    },{
        name:"Rani",
        age:21,
        city:"Banglore",
        course:"Science",
         univercity:"Barkatullah"
    },{
        name:"Prinshu",
        age:22,
        city:"Pune",
        course:"Maths",
         univercity:"Chhindwara"
    },{
        name:"Bhavna",
        age:23,
        city:"Bhopal",
        course:"Physics",
        univercity:"RGBP"
    }

]

let show1=document.querySelector("#div")
 tbl.map((e)=>{
    show1.innerHTML+=
    `
    <div id="element">
    <h1 id="name">${e.name}</h1>
    <h2 id="age">${e.age}</h2>
    <h2 id="city">${e.city}</h2>
    <h2 id="crs">${e.course}</h2>
    <h2 id="uni">${e.univercity}</h2>
    </div>

    `
 })