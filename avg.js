function findmean(A,N){
    if(N == 1)return A[N -1];
    else return(findmean(A, N-1) * A[N -1]) / N;

}
let A = [1, 2, 3, 4, 5];
let N = A.length;
console.log(findmean(A,N));