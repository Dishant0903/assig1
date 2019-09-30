// Assignment:2 

// first question

var addition = function(a,b){
	
	console.log(a + b);
}

var multiplication = function(a,b){
	
	console.log(a * b);
	
}

var calculate = function(a, b, callback){
	
	return callback(a,b);
};

calculate(4, 6, addition);

// second question

var async = require('async'); 
async.series([ function (callback) { 

callback(null, 'I want to be a billionaire'); }, 

function (callback) { 

callback(null, 'I love the ideology of Hitler!'); } ], 


function (err, result) { console.log(result); });

// third question

var async = require('async');


async.waterfall([function firstStep(done) {

	done(null, 'This is first value')}, 

function secondStep(previousValue, done) { 

	console.log(previousValue);

	done(null, 'This is the second value');

}, 

function lastStep (nextValue, done) {

	console.log(nextValue);

	done(null);
}
] ,function (err){


if(err){

	throw new Error(err);
}
else{

	console.log('There were no errors during the execution of the above code');
}

});

// Fifth Question


var promise = new Promise(function(resolve, reject){

	var bool1 = true;

	if(bool1){

	resolve('good')
}
else{

	reject('bad')

}

})

promise.then(function(fromResolve){

	console.log('You\'re ' + fromResolve)

}).catch(function(fromReject){

	console.log('You\'re ' + fromReject)

});

// Sixth  Question

function *generator(){

	yield 1;

	yield 2;

	yield 3;

	yield 4;

};


var iterator = generator();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// seventh question

function call1(){

	return new Promise(function(resolve, reject){


		resolve('I am Resolving');
})};

async function NewFunction(){

	console.log('I am initialising the function');
	
	var message1 = await call1();

	console.log(message1);
};

NewFunction();