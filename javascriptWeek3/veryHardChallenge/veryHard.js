// VERY HARD: Object prototype chain and prototypal inheritance exercise.
// 1. Create a Person constructor that has three properties: name, job, and age.
// 2. Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
// 3. Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a    back-end developer".
 
// 4. Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that is passed in and a busy property that is NOT passed in and is set to true by default.
// 5. Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. Also give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.
// 6. Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer is not, e.g. should initially log out "Mark can't accept any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.


// 7. Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages the programmer knows.
// 8. Test it out - can you create different programmers and run all the methods on them? Does each programmer maintain their own properties properly and independently of the other programmers?
// Bonus - ES6 Syntax: Use ES6 Syntax in your answer. Feel free to add on new methods or properties to  incorporate the syntax.
// function Person(name, job, age) { }
// function Programmer(name, job, age, languages) { }

function Person(name, job, age){
    this.firstName = name;
    this.jobTitle = job;
    this.age = age;
};



Person.prototype.excersise = function(){
    return "Running is fun! - said no one ever lol";
};

Person.prototype.fetchJob = function(){
    return this.firstName + ' is a ' + this.jobTitle; 
};


function Programmer(name, job, age, language) {
    Person.call(this, name, job, age)
    this.language = language;
    this.busy = true;
};


Programmer.prototype.completeTask = function(){
    return this.busy = false;
}
Programmer.prototype.acceptNewTask = function(){
    return this.busy = true;
}
Programmer.prototype.offerNewTask = function(){
    
    if (this.busy == true)  {
        console.log (this.firstName + ' can\'t accept any new tasks right now.')
    }
    else if (this.busy == false) {
        console.log (this.firstName + " would love to take on a new responsibility.")
    }
}

Programmer.prototype.learnLanguagePython = function(){
  return  this.language += Programmer.language = " Python ";
      
}
Programmer.prototype.learnLanguageC = function(){
    return  this.language += Programmer.language = " C++ ";
        
  }
  Programmer.prototype.learnLanguageRuby = function(){
    return  this.language += Programmer.language = " Ruby ";
        
  }
  Programmer.prototype.learnLanguageJava = function(){
    return  this.language += Programmer.language = " Javascript ";
        
  }

Programmer.prototype.listLanguages = function(){
     return this.language  ; 
}





var me = new Person('Jose', 'Programmer', 25)

var jose = new Programmer('Jose', 'Programmer', 25, 'Javascript')

var elias = new Programmer('Elias', 'Programmer', 18, 'Python')


console.log(elias.learnLanguageJava())

console.log(elias.listLanguages())

console.log(elias)