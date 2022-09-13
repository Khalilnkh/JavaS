function Hasil(){
    result=1;
    for(i=10;i<15;i++){
        result*=i

    }
    console.log(Hasil())
}
function Press(){
    var one=document.getElementById('input1').value
    var two=document.getElementById('input2').value
    alert(one*two)

}



class Person { 
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}


class Student extends Person {

}

let student1 = new Student('Jack');
student1.greet();




class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  
  let myCar = new Model("Ford", "Mustang");
  document.getElementById("demo").innerHTML = myCar.show();