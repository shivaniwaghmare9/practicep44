
// let tbl=[
//     {     
//          sno:1,
//         name:"Shivani",
//         age:20,
//         city:"Indore",
//         course:"Computre science",
//          university:"Madhyanchal",
         

//     },{
//         sno:2,
//         name:"Rani",
//         age:21,
//         city:"Banglore",
//         course:"Science",
//          university:"Barkatullah"
//     },{
//         sno:3,
//         name:"Prinshu",
//         age:22,
//         city:"Pune",
//         course:"Maths",
//          university:"Chhindwara"
//     },{
//         sno:4,
//         name:"Bhavna",
//         age:23,
//         city:"Bhopal",
//         course:"Physics",
//         university:"RGPV"
//     }

// ]

// let show1=document.querySelector("#show")
//  tbl.map((e)=>{
//     show1.innerHTML+=
//     `
//     <tr id="element">
//     <td id="sno">${e.sno}</td>
//     <td id="name">${e.name}</td>
//     <td id="age">${e.age}</td>
//     <td id="city">${e.city}</td>
//     <td id="crs">${e.course}</td>
//     <td id="uni">${e.university}</td>
//     </tr>

//     `
//  })

let tbl=[
    {     
         sno:1,
        name:"Shivani",
        age:20,
        city:"Indore",
        course:"Computre science",
         university:"Madhyanchal",
         

    },{
        sno:2,
        name:"Rani",
        age:21,
        city:"Banglore",
        course:"Science",
         university:"Barkatullah"
    },{
        sno:3,
        name:"Prinshu",
        age:22,
        city:"Pune",
        course:"Maths",
         university:"Chhindwara"
    },{
        sno:4,
        name:"Bhavna",
        age:23,
        city:"Bhopal",
        course:"Physics",
        university:"RGPV"
    }

]

let show1=document.querySelector("#show")
 tbl.map((e)=>{
    show1.innerHTML+=
    `
    <tr id="element">
    <td id="sno">${e.sno}</td>
    <td id="name">${e.name}</td>
    <td id="age">${e.age}</td>
    <td id="city">${e.city}</td>
    <td id="crs">${e.course}</td>
    <td id="uni">${e.university}</td>
    </tr>

    `
 })