const sumTo = (n) => {
    let sum = 0
    for (let i = 1; i <= 100; i++) {
        sum += i
    }
    return sum;
}


console.log(sumTo(100));