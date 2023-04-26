function makeSum () {
    let summary = 0 ;
    return function (num){
        summary += num;
        return summary;
    };
};

let sum = makeSum();

console.log(sum(3)); // 3
console.log(sum(5)); // 8
console.log(sum(20)); // 28