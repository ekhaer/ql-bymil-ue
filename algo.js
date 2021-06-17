function findProbsOfSum(n) {
    let limit = Math.floor(n/2);
    for (let i = 0; i < limit + 1; i++) {
        console.log(String(n - i)+ ',' + String(i))
    }
    let num = limit + 1;
    if (n !== 4) {
        getPossibility1(num, n)
    }
    if (n > 3) {
        getPossibility2(num - 1, n)
    }
}

function getPossibility2(num, n) {
    for (let i = num; i > 0; i--) {
        let res = [];
        let sum = 0
        res.push(i);
        sum = sum + i;
        while (sum < n) {
            res.push(1)
            sum++;
        }
    toString(res)
    }
}


function getPossibility1(num, n) {
    let arr = [];
    let temp = [];
    for (let i = num; i > 1; i--) {
        arr = []
        temp = []
        if (num !== 1) {
            num--;
            arr.push(num)
            arr.push(1)
            arr.push(n - (num + 1))
            temp = [...arr].sort();
            arr.sort();
            let isEqual = false;
            for (let i = 0; i < temp.length; i++) {
                if (temp[i] === arr[i]) {
                    isEqual = true;
                } else {
                    isEqual = false;
                    break;
                }
            }
            if (isEqual) {
                toString(temp)
            }
        }
    }
}

function toString(arr) {
    let str = '';
    arr.forEach((el, index) => {
        if (index === arr.length - 1) {
            str += el
        } else {
            str += el + ',';
        }
    });
    console.log(str);
}

console.log(findProbsOfSum(5));