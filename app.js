// 1 task
function yigindisi(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

const n = 1000;
const result = yigindisi(n);
console.log("Barchasini qo'shilmasi javob:", result);

// 2 task

function showstars(rows) {
    for (let i = 1; i <= rows; i++) {
        let stars = "";
        for (let j = 1; j <= i; j++) {
            stars += "* ";
        }
        console.log(stars);
    }
}
showstars(15); // 5 qatorlik yulduzlar chiqadi

// 3task

function showPrimes(n) {
    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;
        console.log(i); // a prime
    }
}
// function to check prime
function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}


