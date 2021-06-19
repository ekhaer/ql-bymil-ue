function getPrimes(n) {
    let arr = [];
    if (n > 2) {
        (n !== 3) ? arr.push(2, 3) : arr.push(2);
    }
    for (let i = 0; i < n; i++) {
        if (i % 2 !== 0) {
            if (isPrime(i)) {
                arr.push(i)
            }
        }
    }
    return arr;
}

function isPrime(num) {
    let flag = true;
    for (let x = 3; x < num; x+=2) {
        if (num % x === 0) {
            flag = false;
            break;
        }
    }
    if (flag) {
        return true;
    }
}

console.log(getPrimes(44))