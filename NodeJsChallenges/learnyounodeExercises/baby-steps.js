var add = 0;

for (var i = 2; i < process.argv.length; i++){
    add += Number(process.argv[i]);
}

console.log(add)
