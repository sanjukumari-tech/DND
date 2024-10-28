
// basic closure example 

function createGreeting(greeting){
    return function(name){
        return `${greeting} ${name} !`;
    }
}

// const greetHello = createGreeting('hello');
// console.log(greetHello('sanju'))

function increase(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

const s = increase();
// console.log(s());
// console.log(s());


function outer(){
    let outervar = "outer";
    function inner(){
        let innervar = "innervar";
        return `${outervar} -  ${innervar}`
    }
    return inner();
}
// const result = outer();
// console.log(result);


function createCounter(){
    let count = 0; 
    function increase(){
        count++;
        return count;
    }
    function decrease(){
        count--;
        return count;
    }
    return {increase,decrease}
}

// const counter = createCounter();
// console.log(counter.increase());
// console.log(counter.decrease());


let globalVar = 'global';

function makeClosure(){
    return function(){
        return globalVar;
    }
}
const closure = makeClosure();

globalVar = "changed";
// console.log(closure());

// closure and private 

function createPerson(name){
    let age = 30;
    return {
        getName : function(){
            return name;
        },
        getAge : function(){
            return age;
        },
        setAge : function(newAge){
            age = newAge;
            return age;
        }
    }
}
const person = createPerson('john');
// console.log(person.getName());
// console.log(person.getAge());
person.setAge(34);
// console.log(person.getAge());
// console.log(person)


function multiplyBy(x){
    return function(y){
        return x*y;
    }
}

// const multiplyBy3 = multiplyBy(3);
// console.log(multiplyBy3(4));
// console.log(multiplyBy3(4));


function makeFunction(){
    let result =[];
    for(let i = 0; i<3; i++){
        result[i] = function(){
            return i;
        }
    }
    return result;
}

// const ss = makeFunction();
// console.log(ss[0]())
// console.log(ss[1]())
// console.log(ss[2]())


function delayLog(message,delay){
    setTimeout(function(){
        console.log(message)
    },delay)
}

const message = ['a','b','c'];

// for(var i = 0; i<message.length;i++){
//     delayLog(message[i],3000);
// }

function outer(x){
    return function(y){
        return function(z){
            return x+y+z;
        }
    }
}
// const add4 = outer(4);
// const add5= add4(5);
// console.log(add5(10));

function createCcounter(){
    let count = 0; 
    return {
        increament: function(){
            count++;
            return count;
        },
        decreament : function(){
            count--;
            return count;
        },
        reset : function(){
            count = 0;
            return count;
        }
    }
}
const count= createCcounter();
// console.log(count.increament());
// count.reset();
// console.log(count);
// console.log(count.increament());


