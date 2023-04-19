let result = 0

for (let i = 2; i < process.argv.length; i++)
    result += Number(process.argv[i]);

console.log(result)

// 2 solution
// const result = process.argv.slice(2).reduce((acc, val)=> Number(acc) + Number(val), 0));
// console.log(result);




