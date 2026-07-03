function solution(my_string, index_list) {
    let answer = '';
    let strMap = new Map();
    
    for(let i = 0; i< my_string.length; i++){
        strMap.set(i, my_string[i]);
    }
    
    for(let j = 0; j < index_list.length; j++){
       answer += strMap. get(index_list[j]);
    }
    return answer;
}