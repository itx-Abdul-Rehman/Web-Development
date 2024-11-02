class Human{
    constructor(name,gender){
        this.name=name;
        this.gender=gender;
    }

    walk(){
        console.log(`${this.name} walk`);
    }

    run(){
        console.log(`${this.name} run`);
    }

    see(){
        console.log(`${this.name} see`);
    }

    about(){
        console.log(`Name: ${this.name}\nGender ${this.gender}`);
    }


    
}

class Student extends Human{
    constructor(){
        a
    }
    constructor(name,gender,rollno,univesityName){
        super(name,gender);
        this.rollno=rollno;
        this.univesityName=univesityName;
    }

    study(){
        console.log(`${this.name} study`);
    }

    about(){
        super.about();
        console.log(`Roll no: ${this.rollno}\nUniveristy Name: ${this.univesityName}`);
    }

    get rollno(){
        return this._rollno;
    }
    set rollno(value){
        if(value.length<13||value.length>13){
            console.log("Roll no equal to 13")
            return;
        }

        this._rollno=value;
    }
   
}

console.log("-----------Human--------------");
let human=new Human("Abdul Rehman","Male");
human.run();
human.walk();
human.see();
human.about();
console.log("-----------Student--------------");
let student=new Student("Abdul Rehman","Male","L1F21BSSE0198","University of Central Punjab");
student.study();
student.about();

console.log(student instanceof Human);
console.log(human instanceof Student);