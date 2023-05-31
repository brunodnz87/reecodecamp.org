function factorialize(num) {
    let product =1;
    for (let i =2; i<=num ;i++){
      product *= i;
    }
    return product;
  }
  
  console.log("fatorial 5! = " + factorialize(5));
  console.log("fatorial 10! = " + factorialize(10));
  console.log("fatorial 20! = " + factorialize(20));
  console.log("fatorial 0! = " + factorialize(0));