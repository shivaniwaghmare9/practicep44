
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

let show1=document.querySelector("#show")
 tbl.map((e)=>{
    show1.innerHTML+=
    `
    <tr id="element">
    <th id="name">${e.name}</th>
    <th id="age">${e.age}</th>
    <th id="city">${e.city}</th>
    <th id="crs">${e.course}</th>
    <th id="uni">${e.univercity}</th>
    </tr>

    `
 })