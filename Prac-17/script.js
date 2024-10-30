

let sentance="My name Abdul Rehman";

console.log(sentance);

console.log(`Sentance Data Type: ${typeof sentance}`);
console.log(sentance.charAt(12));
console.log(sentance.charCodeAt(12));
console.log(sentance.concat("I am Software Engineer"));
console.log(sentance.includes("Rehman"));
console.log(sentance.startsWith('my'));
console.log(sentance.endsWith("an"));
console.log(sentance.toUpperCase());
console.log(sentance.toLowerCase());
console.log(sentance.trim());
console.log(sentance.split(" "));
console.log(sentance.replace("name","Name"));
console.log(sentance.slice(4,7));
console.log(sentance.slice(10));
console.log(sentance.indexOf('a'));
console.log(sentance.lastIndexOf('a'));
console.log(sentance.length);

if(sentance.localeCompare(sentance)){
    console.log("Two strings matches");
}else{
    console.log("Two strings not matches");
}

if(sentance.match("xw")){
    console.log("Two strings matches");
}else{
    console.log("Two strings not matches");
}

console.log(sentance.repeat(4));
console.log(sentance.search("R"));

console.log(sentance.codePointAt(0));

let myname="Abdul";
console.log(myname.substring(5,4));
console.log(myname.slice(5,4));
console.log(myname.padStart(7,'.'))
console.log(myname.padEnd(7,'*'))



