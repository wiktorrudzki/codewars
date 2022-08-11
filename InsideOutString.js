function insideOut(x){
    let result = x;
    if (/[a-zA-Z]/.test(x)) {
        result = '';
        let firstPart;
        let secondPart;
        let reversedWord = []
        x.split(' ').map(word => {
        if (word.length % 2 === 0) {
            firstPart = word.slice(0, word.length/2)
            secondPart = word.slice(word.length/2, word.length)
            firstPart.split('').map(letter => {
                reversedWord.splice(0, 0, letter);
            })
            secondPart.split('').map(letter => {
                reversedWord.splice(word.length/2, 0, letter);
            })
        } else {
            firstPart = word.slice(0, word.length/2-0.5)
            secondPart = word.slice(word.length/2+0.5, word.length)
            firstPart.split('').map(letter => {
                reversedWord.splice(0, 0, letter);
            })
            reversedWord.push(word[word.length/2-0.5])
            secondPart.split('').map(letter => {
                reversedWord.splice(word.length/2+0.5, 0, letter);
            })
        }
        result += ' ' + reversedWord.join('');
        result = result.trim();
        reversedWord = [];
    });
}

  return result;

}

console.log(insideOut('man i need a taxi up to ubud'));
console.log(insideOut('   '));
