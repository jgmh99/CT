function solution(i, j, k) {
    var answer = 0;
    let a = '';
    for(i; i<=j; i++){
        a +=i;
    }
    return answer = a.split(k).length - 1;
    
    //a에 i ~ j까지의 모든 수 추가 k로 split 후 length -1을 해서 return
}