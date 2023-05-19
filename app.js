// class Shape{
//     shapeName
//     constructor(shapeName){
//         this.shapeName = shapeName
//     }
//     display(){
//         console.log(`The shape name is: ${this.shapeName}`)
//     }
// }

// // const s1=new Shape("Rectangle")
// // s1.display()

// class Rectangle extends Shape{
//     length
// width
// result 
// constructor(name,length,width){
// super(name)
// this.length = length
// this.width = width
// }
// calcArea(){
//     this.result=this.length*this.width
//     console.log(`Area is: ${this.result}`)

// }
// }

// class Circle extends Shape{
//     radius
//     result
//     constructor(name,radius){
//         super(name)
//         this.radius = radius
//         }
//         calcArea(){
//             this.result = (22/7)*this.radius*this.radius
//             console.log(`Area is: ${this.result}`)
//         }

// }


// const r1=new Rectangle("R1",5,2)
// r1.display()
// r1.calcArea()

// const r2=new Rectangle("R2",50,20)
// r2.display()
// r2.calcArea()

// const c1=new Circle("C1",5)
// c1.display()
// c1.calcArea()

// class Person{
//     name
//     age
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }
// display(){
//     console.log(`Name: ${this.name} Age: ${this.age}`)
// }
// }
// class Student extends Person{
//     batch
//     enrollment
//     constructor(name,age,batch,enrollment){
//         super(name,age)
//         this.batch = batch
//         this.enrollment = enrollment
//     }

//     display(){
//         super.display()
//         console.log(`Batch: ${this.batch} and enrollment ${this.enrollment} `)
//     }

// }
// const s1=new Student("Shahood",20,"Btech","Btech 2")
// s1.display()

class Calculator{
    result
    add(x,y){
//         parseFloat( this.result)=parseFloat(x)+parseFloat(y)
// console.log(this.result)
console.log("Iam 2")
    }
    add(x,y,z){
        // parseFloat( this.result)=parseFloat(x)+parseFloat(y)+parseFloat(z)
        // console.log(this.result)
        console.log("Iam 3")

    }
    add(x,y,z,a){
    // this.result=parseFloat(x)+parseFloat(y)+parseFloat(z)+parseFloat(a)
    //     console.log(this.result)
        console.log("Iam 4")

    }
}

const calc=new Calculator()
calc.add(1,2,3,4)
