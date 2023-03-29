const A = [] ;
A.length = 18 ;

const min = 7;
const max = 20 ;

for (i = 0; i < A.length; i++ ) {
  A[i] = Math.round(Math.random() * (max - min) + min); 
  
  if (i % 2 === 1) {
    A[i] = 0;
  }
};

console.log(A);