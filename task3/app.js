let num = prompt("Number: ");
let run = true;

if (isNaN(num)) {
    console.log("Not a number");
    run = false;
}

if (run) {
    num = parseInt(num);
    console.log(math(num));
}

function math(n) {
    if (n <= 7) {
        return "Lower then 7";
    }
    else if (n >= 10) {
        return n * n;
    }
    else {
        switch (n) {
            case 8:
                return 7;
            case 9:
                return 8;
        }
    }
    return "Error";
}
