function prime_factorise_(n){
    let factors_ = [];
    let pr_factors_ = [];

    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
        if (n % i === 0) {
            factors_.push(i);
            factors_.push(n / i);
            break;
        }
    }
    if (factors_.length !== 0) {

            pr_factors_.push(factors_[0]);
            const res = prime_factorise_(factors_[1]);
            if (Array.isArray(res)) {
                pr_factors_.push(...res);
            } else {
                pr_factors_.push(res);
            }

        return pr_factors_;
    } else {
        console.log("returning n:", n);
        return [n];
    }
}
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  return a.every((val, i) => val === b[i]);
}

function prime_factorise(n){
    let pf_n = prime_factorise_(n);
    let sum = pf_n.reduce((a,b)=>a+b,0);
    let pf_sum = prime_factorise_(sum);

    while(!arraysEqual(pf_n, pf_sum) ) {
        pf_n = pf_sum;
        let sum_ = pf_n.reduce((a,b)=>a+b,0);
        pf_sum = prime_factorise_(sum_);
    }
    return pf_n;
    

}
console.log(prime_factorise(20));