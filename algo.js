//4
function findProbsOfSum(n) {
    let limit = Math.floor(n/2);
    for (let i = 0; i < limit + 1; i++) {
        console.log(String(n - i)+ ',' + String(i))
    }
    let num = limit + 1;
    // let str = ''
    console.log(num, "num")
    return getAll(num, n)
    // for (let i = num; i > 1; i--) {
    //     if (num !== 1) {
    //         num--;
    //         str += '1,'
    //         console.log(String(num)+','+str)
    //     }
    // }
}

function getAll(num, n) {
    let str = ''
    let arr = [];
    let temp = [];
    let sumTemp = 0;
    for (let i = num; i > 1; i--) {
        arr = []
        temp = []
        if (num !== 1) {
            num--;
            str += '1'
            arr.push(num)
            arr.push(1)
            // for (let x = 0; x < arr.length; x++) {
            //     sumTemp = sumTemp + arr[x];
            // }
            // temp = arr[arr.length - 1]
            arr.push(n - (num + 1))
            console.log(arr, "arr")
            // return (num, str, 1)
            // console.log(String(num)+','+str)
            // return(String(num)+','+str + getAll(num))
        }
    }
}

// function getAll(num) {
//     let str = ''
//     for (let i = num; i > 1; i--) {
//         if (num !== 1) {
//             num--;
//             str += '1'
//             // return (num, str, 1)
//             console.log(String(num)+','+str)
//             return(String(num)+','+str + getAll(num))
//         }
//     }
// }
console.log(findProbsOfSum(4));
