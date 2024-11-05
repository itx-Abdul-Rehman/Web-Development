use('wowdatabase');

db.createCollection('products');

// db.products.insertMany([
//     {"name":"iPhone 16","brand":"Apple","price":400000,"warranty":"No"},
//     {"name":"Galaxy S24","brand":"Samsung","price":350000,"warranty":"Yes"},
//     {"name":"Pixel 8","brand":"Google","price":300000,"warranty":"Yes"},
//     {"name":"OnePlus 11","brand":"OnePlus","price":280000,"warranty":"Yes"},
//     {"name":"Xiaomi 13","brand":"Xiaomi","price":270000,"warranty":"Yes"},
//     {"name":"Vivo X90","brand":"Vivo","price":260000,"warranty":"Yes"},
//     {"name":"Oppo Find N3","brand":"Oppo","price":350000,"warranty":"Yes"},
//     {"name":"Sony Xperia 5 V","brand":"Sony","price":320000,"warranty":"Yes"},
//     {"name":"Realme GT 2 Pro","brand":"Realme","price":250000,"warranty":"Yes"},
//     {"name":"Nokia G400","brand":"Nokia","price":200000,"warranty":"No"},
//     {"name":"Honor Magic 5","brand":"Honor","price":330000,"warranty":"Yes"},
//     {"name":"Asus Zenfone 10","brand":"Asus","price":290000,"warranty":"Yes"},
//     {"name":"Motorola Edge 40","brand":"Motorola","price":240000,"warranty":"Yes"},
//     {"name":"TCL 40 SE","brand":"TCL","price":180000,"warranty":"No"},
//     {"name":"LG Velvet 2","brand":"LG","price":220000,"warranty":"Yes"},
//     {"name":"Huawei P60","brand":"Huawei","price":370000,"warranty":"No"},
//     {"name":"ZTE Axon 40","brand":"ZTE","price":260000,"warranty":"Yes"},
//     {"name":"Poco F5","brand":"Poco","price":230000,"warranty":"Yes"},
//     {"name":"Infinix Zero Ultra","brand":"Infinix","price":210000,"warranty":"No"},
//     {"name":"Tecno Pova 4","brand":"Tecno","price":150000,"warranty":"No"},
//     {"name":"Google Pixel 7a","brand":"Google","price":320000,"warranty":"Yes"},
//     {"name":"iPhone 15 Pro Max","brand":"Apple","price":450000,"warranty":"No"},
//     {"name":"Galaxy Z Flip 5","brand":"Samsung","price":480000,"warranty":"Yes"},
//     {"name":"Xiaomi 12 Pro","brand":"Xiaomi","price":330000,"warranty":"Yes"},
//     {"name":"Realme 11 Pro","brand":"Realme","price":200000,"warranty":"Yes"},
//     {"name":"Oppo Reno 8 Pro","brand":"Oppo","price":290000,"warranty":"Yes"},
//     {"name":"Nokia X30","brand":"Nokia","price":250000,"warranty":"No"},
//     {"name":"Vivo V25 Pro","brand":"Vivo","price":270000,"warranty":"Yes"},
//     {"name":"OnePlus Nord 3","brand":"OnePlus","price":240000,"warranty":"Yes"},
//     {"name":"Sony Xperia 10 V","brand":"Sony","price":210000,"warranty":"Yes"},
//     {"name":"Huawei Mate 50","brand":"Huawei","price":380000,"warranty":"No"},
//     {"name":"Honor X40","brand":"Honor","price":190000,"warranty":"No"},
//     {"name":"Asus ROG Phone 7","brand":"Asus","price":420000,"warranty":"Yes"},
//     {"name":"Google Pixel Fold","brand":"Google","price":500000,"warranty":"Yes"},
//     {"name":"Motorola Razr 2023","brand":"Motorola","price":450000,"warranty":"Yes"},
//     {"name":"TCL 30 SE","brand":"TCL","price":170000,"warranty":"No"},
//     {"name":"iPhone SE 4","brand":"Apple","price":300000,"warranty":"No"},
//     {"name":"Samsung A54","brand":"Samsung","price":230000,"warranty":"Yes"},
//     {"name":"Xiaomi Redmi Note 12","brand":"Xiaomi","price":190000,"warranty":"Yes"},
//     {"name":"Infinix Note 12","brand":"Infinix","price":160000,"warranty":"No"},
//     {"name":"Tecno Camon 19","brand":"Tecno","price":140000,"warranty":"No"},
//     {"name":"Poco X5 Pro","brand":"Poco","price":220000,"warranty":"Yes"},
//     {"name":"Realme C55","brand":"Realme","price":150000,"warranty":"No"},
//     {"name":"Vivo Y22","brand":"Vivo","price":130000,"warranty":"No"},
//     {"name":"Oppo A78","brand":"Oppo","price":120000,"warranty":"No"},
//     {"name":"Nokia G60","brand":"Nokia","price":210000,"warranty":"Yes"}
// ]);

// db.createCollection('Students');

// db.Students.insertMany([
// {
//   "name": "Alice",
//   "grades": [85, 90, 95]
// },
// {
//   "name": "Bob",
//   "grades": [88, 92]
// },
// {

//   "name": "Charlie",
//   "grades": [70, 75, 80, 85]
// },
// {
//   "name": "David",
//   "grades": [90, 85, 95, 88]
// }
// ]);

//----------------- Comparison Query Selector Operators --------------------------------

// let a=db.products.find({warranty:{$eq:'Yes'}});
// console.log(a.toArray());
// console.log(a.count());

// let b=db.products.find({warranty:{$ne:'Yes'}});
// console.log(b.toArray());
// console.log(b.count());

// let c=db.products.find({price:{$gt:200000}});
// console.log(c.toArray());
// console.log(c.count());

// let d=db.products.find({price:{$gte:200000}});
// console.log(d.toArray());
// console.log(d.count());

// let e=db.products.find({price:{$lt:200000}});
// console.log(e.toArray());
// console.log(e.count());

// let f=db.products.find({price:{$lte:200000}});
// console.log(f.toArray());
// console.log(f.count());

// let g=db.products.find({price:{$in:[200000,700000,500000]}});
// console.log(g.toArray());
// console.log(g.count());

// let h=db.products.find({price:{$nin:[200000,700000,500000]}});
// console.log(h.toArray());
// console.log(h.count());


//-------- Element Query Selector Operators -------------------

// let i=db.products.find({desc:{$exists:true}});
// console.log(i);
// console.log(i.count());

// let i=db.products.find({name:{$type:'string'}});
// console.log(i);
// console.log(i.count());


//----------- Logical Query Selector Operators -------------------

// let l=db.products.find({$and:[{brand:'Nokia'},{price:{$gte:200000}},{warranty:'No'}]});
// console.log(l.toArray());
// console.log(l.count());


// let m=db.products.find({$or:[{brand:'Samsung'},{price:200000}]});
// console.log(m.toArray());
// console.log(m.count());

// let n=db.products.find({$nor:[{brand:'Samsung'},{warranty:'Yes'}]});
// console.log(n.toArray());
// console.log(n.count());

// let o=db.products.find({price:{$not:{$gte:200000}}});
// console.log(o.toArray());
// console.log(o.count());


//----------------- Array Query Selector Operators -----------------
// let x=db.Students.find({grades:{$all:[75,80]}});
// console.log(x);
// console.log(x.count());

// let y=db.Students.find({grades:{$elemMatch:{$eq:85}}});
// console.log(y);
// console.log(y.count());

// let y=db.Students.find({grades:{$size:4}});
// console.log(y);
// console.log(y.count());

