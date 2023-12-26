// create a promise and give a number n to it and if n is less 
// than or equal to 10 then resolve it else reject it


let n=108;

let promise = new Promise((resolve,reject)=>{
    if(n<=10){
        resolve("Number is less than 10");
    }else{
        reject({message:"Number is greater than 10"});
    }
});

promise.then((res)=>{
    console.log(res);
})
.catch((err)=>console.log(err.message))

