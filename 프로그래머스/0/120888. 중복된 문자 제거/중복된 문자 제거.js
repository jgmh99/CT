function solution(my_string) {
    const answer = new Set([... my_string]);
    console.log(answer)
    return [...answer].join('')
}