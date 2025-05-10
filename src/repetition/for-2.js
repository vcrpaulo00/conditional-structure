// [1-1] [1-2] [1-3]
// [2-1] [2-2] [2-3]
// [3-1] [3-2] [3-3]

for (let line = 1; line <= 3; line++){
    let textLine = '';
    for(let column = 1; column <= 3; column++){
        textLine += `[${line}-${column}] `
    }
    console.log(textLine);
}

console.log('Fim!')