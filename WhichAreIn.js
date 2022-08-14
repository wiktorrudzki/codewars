function inArray(array1,array2){
    result = [];
    let found;
    array1.forEach(a1item => {
        found = false;
        array2.forEach(a2item => {
            if (a2item.includes(a1item) && !found) {
                result.push(a1item);
                found = true;
            }
        })
    });
    return result.sort();
}

function inArrayFinalVersion(a1, a2) {
    return a1.filter(i1 => a2.find(i2 => i2.includes(i1))).sort();
}

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

a1 = ["live", "strong", "arp"]

console.log(inArrayFinalVersion(a1, a2))
