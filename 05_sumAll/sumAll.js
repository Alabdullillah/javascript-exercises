const sumAll = function(n1,n2) {
    let larger = 0;
    let less = 0;
    let ans = 0;
    t1 = typeof n1
    t2 = typeof n2
    const Fcondarr = [
        t1 == 'number',
        t2 == 'number',
        n1 >= 0,
        n2 >= 0,
    ]
    if (Fcondarr.includes(false)) {
        return "ERROR";
    }
    else {
        if (n2 > n1){
            larger = n2;
            less = n1;
        }
        else {
            larger = n1;
            less = n2;
        }
        for (let i = less; i <= larger; i++) {
            ans = ans + i
            }
        return ans
    }
};

// Do not edit below this line
module.exports = sumAll;
