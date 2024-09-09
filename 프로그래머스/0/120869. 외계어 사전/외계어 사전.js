function solution(spell, dic) {
    var answer = 0;
    let tmp = 0;

    // dic 배열의 각 단어를 순회
    for (let i = 0; i < dic.length; i++) {
        
        // spell 배열의 각 철자를 순회
        for (let j = 0; j < spell.length; j++) {
            
            // 현재 dic[i] 단어에 spell[j] 철자가 포함되어 있지 않으면 tmp 증가
            if (dic[i].indexOf(spell[j]) == -1) {
                tmp++;
            }
        }

        // tmp가 0보다 크면 (즉, 모든 철자가 포함되지 않았으면) answer에 2 저장
        // tmp가 0이면 (모든 철자가 포함되었으면) answer에 1 저장
        tmp > 0 ? answer = 2 : answer = 1;

        // tmp 값을 초기화
        tmp = 0;

        // 만약 answer가 1이면 더 이상 반복할 필요 없으므로 break
        if (answer == 1) break;
    }
    
    // 결과 반환
    return answer;
}
