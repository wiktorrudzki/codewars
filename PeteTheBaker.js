function cakes(recipe, available) {
    let minimum;
    let first = true;
    for (let key in recipe) {
        if (available[key]) {
            if (first) {
                minimum = Math.floor((available[key]/recipe[key]));
                first = false;
            }
            else if (Math.floor((available[key]/recipe[key])) < minimum) minimum = Math.floor((available[key]/recipe[key]));
        } else return 0;
    }
    return minimum;
}

function cakesFinalVersion(recipe, available) {
    return Object.keys(recipe).reduce((acc, item) => {
        return Math.min(Math.floor(available[item]/recipe[item]), acc)
    }, Infinity)
}

let recipe = {flour: 500, sugar: 200, eggs: 1};
let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
console.log(cakesFinalVersion(recipe, available));
