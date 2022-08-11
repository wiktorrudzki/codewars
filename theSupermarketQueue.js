function queueTime(customers, n) {

    //Uzupelnienie dlugosci kolejki

    function fillWaitings() {
        waitings += minimum;
    }

    // Wyczyszczenie aktualnych customerow na kasach

    function clearTills() {
        tills = tills.map((item, index) => {
            if (index === minimumIndex) {
                return 0;
            } else {
                return item - minimum;
            }
        })
    }

    findMinimum = () => Math.min(...tills)

    findMinimumIndex = () => tills.findIndex(item => item === minimum)

    // Zmienne

    if (customers.length === 0) return 0;
    if (n === 1) return customers.reduce((a , b) => a + b, 0);
    if (n >= customers.length) return (customers.sort((a,b) => b - a))[0];
    let tills = [];
    let waitings = 0;
    let minimum;
    let minimumIndex;
    tills.length = n;

    for (let i = 0; i < tills.length; i++) {
        tills[i] = customers[0];
        customers.shift();
    }

    while (customers.length !== 0) {

        for (let i = 0; i < tills.length; i++) {
            if (tills[i] === 0 && customers[0]) {
                tills[i] = customers[0];
                customers.shift();
            }
        }

        minimum = findMinimum();
        minimumIndex = findMinimumIndex();
        fillWaitings();
        clearTills();

        console.log('kasy:', tills, 'dlugosci:', waitings, 'kustomerzy:', customers, 'minimum:', minimum, customers.length);
    }
    
    if (tills.filter(item => item !== 0).length > 0) waitings += Math.max(...tills);

    return waitings;
  }

console.log(queueTime([1,15,7,9,17,3,8,18,18,16,15,13,18,19,1,5,5,17,19,5,4,18,15,8,1,2,11,15,11,18,5,5,3,11,20,18,18,20,18,13,18,9,13,17,13,4,13,3,17,14,3,6,20,12,7,12,4,1,11,1,9,7,11], 15));


//https://www.codewars.com/kata/57b06f90e298a7b53d000a86/solutions/javascript
