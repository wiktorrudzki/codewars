// FIRST VERSION

function insideOutFirstVersion(x){
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

// LATEST VERSION

function insideOut(x) {
    return x.split(' ').map(word => word.length % 2 === 0 ? (word.slice(0, word.length/2).split('').reduce((acc, letter) => letter + acc, '') + word.slice(word.length/2, word.length).split('').reduce((acc, letter) => letter + acc, '')) : (word.slice(0, word.length/2-0.5).split('').reduceRight((acc, letter) => acc + letter, '') + word[word.length/2-0.5] + word.slice(word.length/2+0.5, word.length).split('').reduceRight((acc, letter) => acc + letter, ''))).join(' ')
}

console.log(insideOut('man i need a taxi up to ubud'));
console.log(insideOut('   '));
