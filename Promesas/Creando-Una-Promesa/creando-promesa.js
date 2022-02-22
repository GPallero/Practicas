const promise = new Promise((resolve, reject)=>{
    const number = Math.floor(Math.random*10);
    setTimeout(() =>number>4?resolve(number):reject(new Error('Menor a 4')), 1000)
})

promise.then((number=>console.log(number))).catch(error=>console.log(`${error}`));
