function sumOfEvenNos(N,arr){
    //write code here
    let sum=0;
    for(let i=0;i<N;i++){
        if(arr[i]%2==0){
            sum=sum+arr[i]
        }
    }
    console.log(sum);
}
