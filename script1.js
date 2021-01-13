
//Problem 0 : Part A (15 mins):
var cat = {
    "name":"Fluffy",
    "activities":[ "play", "eat cat food" ],
    "cateFriends" : [{
        "name" : "bar",
        "activities" : ["be grumpy", "eat bread omblet"],
        "weight" : 8,
        "furcolor" : "white"
    },
    {
        "name" : "foo",
        "activities" : ["sleep", "pre-sleep naps"],
        "weight" : 3
    }
    ]
}

console.log(cat);

//Problem 0 : Part B (15 mins):
var mycar = {
    "make" : "Bugatti",
    "model" : "Bugatti La Voiture Noire",
    "year" : 2019,
    "accidents" : [
        {
            "date" : "3/15/2019",
            "damage-points" : "5000",
            "atFaultForAccident" : true,
        },
        {
            "date" : "7/4/2022",
            "damage-points" : "2200",
            "atFaultForAccident" : true,
        },
        {
            "date" : "6/22/2021",
            "damage-points" : "7900",
            "atFaultForAccident" : true,
        }
    ]
}

for(var i in mycar.accidents){
   mycar.accidents[i].atFaultForAccident = false;
    console.log(mycar.accidents[i].date);
}

// Problem 1 (5 mins):
// Parsing an JSON object’s Values:

var obj = {
    "name" : "Rajanikanth",
    "age" : 33,
    "hasPets" :false
};
function printAllValues(obj) {
    // var myJSON =  [obj.name,obj.age,obj.hasPets];
    return Object.values(obj);
   }
var data = printAllValues(obj);
console.log(data);


//Problem 2(5 mins) :
//Parsing an JSON object’s Keys:

function printAllKeys(obj) {
var keys = [];
   for(var k in obj) 
   keys.push(k);
   return keys;
}
var key = printAllKeys(obj);
console.log(key);

// Problem 3( 7–9 mins):
// Parsing an JSON object and convert it to a list:
var object = {
    "name" : "ISRO",
     age: 35, 
     "role" : "Scientist"
    };
var arr = [];
    function convertListToObject(obj) {
        for (var key in object){
            arr.push([key, obj[key]]);
          }
          return arr;
       }
      
console.log(convertListToObject(object))

// Problem 4( 5 mins):
// Parsing a list and transform the first and last elements of it:

var array = ["GUVI","I","Am","Geek"];
function transformFirstAndLast(arr) {
    var newObject = {};
    let key = array[0];
    let value = array[array.length-1];
    newObject[key] = value;
    return newObject;
   }


console.log(transformFirstAndLast(array));

// Problem 5 ( 7 -9 mins):
// Parsing a list of lists and convert into a JSON object:

var array = [["make", "Ford"], ["model", 'Mustang'], ["year", 1964]];

function fromListToObject(array) {
    var newObject = {};
    for(var i  in array){
        let key = array[i][0];
        let value = array[i][1];
        newObject[key] = value;
    }
    return newObject;
   }

   console.log(fromListToObject(array));

// Problem 6 (10 mins):
// Parsing a list of lists and convert into a JSON object:

   var arr= [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
function transformEmployeeData(arr) {
    var tranformEmployeeList = [];
    for (var i= 0; i< arr.length; i++){
      let newObject = {};	
      for (var j= 0; j< arr[i].length; j++){
        let key = arr[i][0];
        let value = arr[i][1];
        newObject[key] = value;	
      }
      tranformEmployeeList.push(newObject);
    }
    return tranformEmployeeList;
 
}

console.log(transformEmployeeData(arr));

// Problem 7 (10 — 20 mins):
// Parsing two JSON objects and Compare:
var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}
function assertObjectsEqual(actual, expected, testName){
    actualStr = JSON.stringify(actual)
    expectedStr = JSON.stringify(expected)
    if(actualStr == expectedStr){
      return "Passed"
    } else{
      return "FAILED ["+testName+"] Expected "+actualStr+", but got "+expectedStr
    }
}

// Problem 8(10 mins):
// Parsing JSON objects and Compare:

var securityQuestions = [
 {
    question: "What was your first pet’s name?",
    expectedAnswer: "FlufferNutter"
    },
    {
    question: "What was the model year of your first car?",
    expectedAnswer: "1985"
    },
    {
    question: "What city were you born in?",
    expectedAnswer: "NYC"
    }
   ]

   function chksecurityQuestions(securityQuestions,question,ans) {

    if(securityQuestions.question === question && securityQuestions.expectedAnswer === ans)
    return true;
    else
    return false; 
   }

   var ques = "What was your first pet’s name?";
    var ans  =  "FlufferNutter";
   var status = chksecurityQuestions(securityQuestions, ques, ans);
    console.log(status);

    var ques = 'What was your first pet’s name?';
    var ans  =  'DufferNutter';
    
    var status = chksecurityQuestions(securityQuestions, ques, ans);
    console.log(status); 

    // Problem 9(20 mins):
    // Parsing JSON objects and Compare:
    var students = [
        {
          name: 'Siddharth Abhimanyu', 
          age: 21
        }, 
        { 
          name: 'Malar', 
          age: 25
        },
        {
          name: 'Maari',
          age: 18
        },
        {
          name: 'Bhallala Deva',
          age: 17
        },
        {
          name: 'Baahubali',
          age: 16
        },
        {
            name: 'AAK chandran',
            age: 23
        },
        {
          name:'Gabbar Singh',
          age: 33
        },
        {
          name: 'Mogambo',
          age: 53
        },
        {
          name: 'Munnabhai',
          age: 40
        },
        {
          name: 'Sher Khan',
          age: 20
        },
        {
          name: 'Chulbul Pandey'
          ,age: 19
        },
        {
          name: 'Anthony',
          age: 28
        },
        {
          name: 'Devdas',
          age: 56
        } 
      ];
      function returnMinors(arr)
      {
        var newObj = [];
        for (var i = 0; i< arr.length; i++){
          if (arr[i].age < 20){
            newObj.push(arr[i]);
          }
        }
        return newObj;
      }
      console.log(returnMinors(students));