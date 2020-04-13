// 1) var objectName = { "key" : "value"}

var me = {
    Name : "Jose Perez" 
    // sayHi : function 
    //     Console.log(me.Name)
    
};


me.sayHi = function (){
   return console.log(me.Name);
}



console.log(me.Name)
console.log(me.sayHi())