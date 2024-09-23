// ary: number array
function sum(ary) {
    let total = 0;
	for( let i = 0 ; i < ary.length; i++){
        total += ary[i]; 
    }
    return total;
}

console.log(sum([1, 5, 3, 2])); // 11