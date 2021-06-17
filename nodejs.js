function getPrimes(n) {
    let arr = [];
    if (n > 2) {
        (n !== 3) ? arr.push(2, 3) : arr.push(2);
    }
    for (let i = 0; i < n; i++) {
        let flag = false;
        if (i % 2 !== 0) {
            for (let x = 3; x < i + 1; x++) {
                if (i % x !== 0 && i !== x) {
                    flag = true;
                } else {
                    break;
                }
            }
        }
        if (flag) {
            arr.push(i)
        }
    }
    return arr;
}

console.log(getPrimes(3))