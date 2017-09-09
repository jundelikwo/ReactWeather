function getTempCallback (location, callback){
    callback(null, 78);
    callback("City not found");
}

getTempCallback("Philadelphia", function(err, temp){
    if(err){
        console.log('error', err);
    }else{
        console.log('success',temp);
    }
})

function getTempPromise(location){
    return new Promise(function(resolve,reject){
        setTimeout(function() {
            resolve(79);
            reject('City not found');
        },1000)
    })
}

getTempPromise('Calabar').then(function(temp){
    console.log('Promise Success',temp);
},function(error){
    console.log('Promise Error',error);
})

function addPromise(a,b){
    return new Promise(function(resolve,reject){
        if(typeof a === 'number' && typeof b === 'number'){
            resolve(a+b);
        }else{
            reject('Please Provide 2 numbers');
        }
    })
}

addPromise(2,3).then(function(result){
    console.log('a + b =',result);
},function(error){
    console.log(error);
})