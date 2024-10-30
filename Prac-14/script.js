    //  chapter 1 - practice set

    //  -- 1 --

    let a="432";
    let b=54;
    let res=a+b;
    let check=null;

    console.log(res);

    // -- 2 --
    console.log(typeof b);
    console.log(typeof res);

   // -- 3 --
   const person={
        "name":"Abdul Rehman",
        "age":22,
        "education":"Software Engineer"
   }

   person.age=23;
   person.city="Lahore";
   console.log(person)
 
   // -- 4 --
   let dictinory={
          "Selfie":"A photograph taken of oneself, typically with a smartphone",
          "Hashtag":"A word or phrase donated by #, used to identify or categorize posts on social media",
          "Cloud": "A remote storage system for digital data, accessible over the internet",
          "App": "A program or software application",
          "Viral": "Quickly spreading or popularized through online media"
   };


   //------------------Chapter 2 - Practice set-------------
  
   //--Q1--
   let age=21;

   let reus=(age>=10 && age<=20)?"Age of a person is lies between 10 and 20":"Age of a person is not lies between 10 and 20";
   console.log(reus)


   //--Q2--
   let day=8;
   switch(day){
     case 1:{
          console.log("Monday");
          break;
     }
     case 2:{
          console.log("Tuesday");
          break;
     }
     case 3:{
          console.log("Wednesday");
          break;
     }
     case 4:{
          console.log("Thursday");
          break;
     }
     case 5:{
          console.log("Friday");
          break;
     }
     case 6:{
          console.log("Saturday");
          break;
     }
     case 7:{
          console.log("Sunday");
          break;
     }
     default:{
          console.log("invalid Input");
     }
     
   }

   //--Q3--
   let num2=32;
   if(num2%2==0 || num2%3==0){
     console.log(num2+" is divisible by 2 or 3");
   }else{
     console.log(num2+" is notdivisible by 2 or 3");
   }

    //--Q4--
    let num3=37;
    if(num3%2!=0 && num3%3!=0){
      console.log(num3+" is divisible by either 2 or 3");
    }else{
      console.log(num3+" is divisible by 2 or 3");
    }

    //--Q5--
    let age2=54;
    let isDrive=(age>18)?"You can drive":"You cannot drive";
    console.log(isDrive);
   

