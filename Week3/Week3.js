var i = `Hello`;
var j = `${i} Word`; // same as i + ' Word'
console.log(j);

var k =  { firstname: 'Edmund',
            lastname: 'Leng' };
console.log(k.firstname);
var studentB = {
    id: 2,
    name: 'John Smith',
    age: 25,
    address: '555 1st Ave Burnaby BC',
    attendedCourses: function() {
    return ['CSIS3380', 'CSIS3381'];
    }
};
console.log(studentB.attendedCourses); // return reference of function
console.log(studentB.attendedCourses()); // return result of function array of string


var Student = function(id, name){
    this.id = id;
    this.name = name;
}

//Student(1, 'Ed');// if using this one this in object student will refer to window
var s = new Student(1,'Ed');

Student.foo = function (){ // class method
    return 'foo';
}

console.log(Student.foo()); //dont need to create instace of class to use the method

Student.prototype.getName = function(){  // need to create instance of class to use
    return this.name;
}

console.log(s.getName());
var s = new Student(1, 'Ed');

// classes are introduced in 2015
class Student {
    constructor(userId, name) {
    this.id = id;
    this.name = name;
    }
    getName() {
    return this.name;
    }
    }
