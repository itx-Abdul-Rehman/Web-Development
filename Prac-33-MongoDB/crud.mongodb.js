use('mydatabase');


// db.createCollection('courses');

// db.courses.insertOne({
//     name:'OOP',
//     price:799,
//     auther:"Abdul Rehman"
// })

// db.courses.insertMany([
//    {
//     name:'DSA',
//     price:999,
//     auther:"Ali Hassan"
//    },
//    {
//     name:'Operating System',
//     price:599,
//     auther:"Haris Ramay"
//    },
//    {
//     name:'CCN',
//     price:799,
//     auther:"Abdul Rehman"
//    },
//    {
//     name:'Software Engineering',
//     price:499,
//     auther:"M Haris"
//    },
//    {
//     name:'Information Security',
//     price:1199,
//     auther:"Abdul Rehman"
//    }
// ])

//-------------------------------------
//Read data from database

// let data=db.courses.find();
// // console.log(data.count());
// // console.log(data.toArray());

// let b=db.courses.find({
//     name:"CCN",
//     auther:"Abdul Rehman"
// }).limit(2);

// console.log(b.count());
// console.log(b.toArray());

//-------------------------------
//update data in database

// db.courses.updateMany({name:'CCN'},{$set:{name:'Linear Algebra'}})

//delete data from database

// db.courses.deleteMany({name:'OOP'});

//create new collections

// db.createCollection('sections');
// db.sections.insertOne({
//     name:'A Section'
// })


// db.sections.insertMany([
//  {name:'Blue',strength:40,incharge:'Ali'},
//  {name:'Green',strength:40,incharge:'Haris Ramay'},
//  {name:'Yellow',strength:50,incharge:'Ali Hassan'},
//  {name:'White',strength:45,incharge:'Sagar'},
//  {name:'Gray',strength:42,incharge:'Abu bakar'},
//  {name:'Pink',strength:35,incharge:'Rayyan'},
//  {name:'Orange',strength:30,incharge:'Jerry'},
//  {name:'Purple',strength:40,incharge:'Chota Bakar'},
//  {name:'Orange',strength:50,incharge:'Abdul Rehman'},
//  {name:'Black',strength:40,incharge:'M Haris'}
// ]);


// db.sections.replaceOne({name:'Purple'},
//     {name:'Red',strength:60,incharge:'Mohammad Abdul Rehman'}
// );

//  db.sections.bulkWrite([
//     {insertOne:{document:{name:'Sky Blue',strength:25,incharge:'Usman Khan'}}},
//     {insertOne:{document:{name:'Light Red',strength:32,incharge:"Hamza"}}},
//     {updateOne:{
//         filter:{name:'Blue'},
//         update:{$set:{strength:41}}
//     }},
//     {
//         replaceOne:{
//             filter:{name:'Black'},
//             replacement:{name:'Light Black',strength:43,incharge:'Muhammad Haris'}
//         }
//     },
//     {
//         deleteOne:{
//              filter:{name:'Black'}
//         }
//     }
//  ]);

console.log(db.sections.find().toArray());

 