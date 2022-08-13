//Moja pierwsza wersja

snailMyVersion = function(array) {
    let result = [];

    while (true) {

        array[0].forEach(element => {
            result.push(element);
        });
        array = array.slice(1);

        if (array.length === 0) return result;

        array.forEach((arr, arrIndex) => {
            arr.forEach((number, index) => {
                if (index === arr.length - 1) {
                    result.push(number);
                    array[arrIndex].splice(index, 1)
                }
            })
        })

        if (array.length === 0) return result;

        array[array.length - 1].slice().reverse().forEach(number => {
                result.push(number);
        })
        array = array.slice(0, array.length - 1)

        if (array.length === 0) return result;

        array.slice().reverse().forEach((arr, arrIndex) => {
            arr.forEach((number, index) => {
                if (index === 0) {
                    result.push(number);
                    array[array.length - 1 - arrIndex].splice(index, 1)
                }
            })
        })

        if (array.length === 0) return result;
    }
}

//Ostateczna wersja - z codewarsow, lekko zmodyfikowana dla zrozumienia

snail = function(array) {
    let result = [];
    while (true) {
        result = (result ? result.concat(array.shift()) : array.shift());
        if (array.length === 0) return result;

        for (let i = 0; i < array.length; i++) result.push(array[i].pop());
        if (array.length === 0) return result;

        result = result.concat(array.pop().reverse());
        if (array.length === 0) return result;

        for (let i = array.length - 1; i >= 0; i--) result.push(array[i].shift());
        if (array.length === 0) return result;
    }
}

console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]))

//https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/solutions/javascript
