function solution(my_string) {
    var answer = 0;
    const regex = /[^0-9]/g;
    const result = my_string.replace(regex, '');
    const spl = result.split('');
    for(let i = 0; i < spl.length; i++){
        answer += Number(spl[i]);
    }
    console.log(spl);
    
    return answer;
}