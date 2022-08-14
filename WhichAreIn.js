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

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

a1 = ["live", "strong", "arp"]

console.log(inArray(a1, a2))
