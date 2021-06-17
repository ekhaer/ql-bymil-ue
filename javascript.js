let arr = [
    {
        username : "ali",
        hair_color : "brown",
        height : 1.2
    },
    {
        username : "marc",
        hair_color : "blue",
        height : 1.4
    }, 
    {
        username : "joe",
        hair_color : "brown",
        height : 1.7
    }, 
    {
        username : "zehua",
        hair_color : "black",
        height : 1.8
    }
]

function restructureJSON(arr) {
    let obj = {};
    if (arr.length !== 0) {
        obj.h = Object.keys(arr[0])
        obj.d = [];
        arr.forEach(el => {
            obj.d.push(Object.values(el))
        });
    }
    return(obj)
}

console.log(restructureJSON(arr));