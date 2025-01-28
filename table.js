
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
    <td id="name">${e.name}</td>
    <td id="age">${e.age}</td>
    <td id="city">${e.city}</td>
    <td id="crs">${e.course}</td>
    <td id="uni">${e.univercity}</td>
    </tr>

    `
 })