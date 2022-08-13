function solution(number){
    const symbols = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000
    };
    
    let maxSymbol;
    let result = '';

    while (number !== 0) {
        for (let key in symbols) {
            if (number >= symbols[key]) maxSymbol = key;
        }

        result += maxSymbol
        number -= symbols[maxSymbol];
    
        console.log('maks symbol: ', maxSymbol, 'numer: ', number, 'rezultat: ', result);
    }

    return result;
}

console.log(solution(290));
