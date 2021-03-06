module.exports = function reverse (n) {
    let nReverse = n;
    if(nReverse >=0){
    nReverse = String(nReverse);
    nReverse = nReverse.split('').reverse().join('');  
    nReverse = Number(nReverse);
    }
    else if (nReverse < 0) {
        nReverse = -nReverse;
    nReverse = String(nReverse);
    nReverse = nReverse.split('').reverse().join('');  
    nReverse = Number(nReverse);
    }
    return nReverse;
}