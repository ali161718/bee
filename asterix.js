let words = "beever";

// Buatlah skema logika untuk memuat kata diatas menjadi berbentuk seperti berikut : 
// b
// be
// bee
// beev
// beeve
// beever

let test = (words) => {
    let temp = words.match(/[a-z]/g);
    let result = '';
    
    for (let i = 0; i < temp.length; i++) {
        for (let j = 0; j <= i; j++) {
            result += temp[j]
        }
        result += '\n'
    }
    
    return result
}

console.log(test('beever'))
