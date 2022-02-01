// ternary operator

var isMember;

function getFee(isMember) {
    return (isMember ? "INR 399" : "INR 899");
}

console.log(getFee(true));