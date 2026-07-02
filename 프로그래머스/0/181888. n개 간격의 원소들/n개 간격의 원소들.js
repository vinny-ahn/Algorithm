function solution(num_list, n) {
    let arr = [];
    let i = 0;
    while(i < num_list.length){
        arr.push(num_list[i]);
        i = i + n;
    }
    return arr;
}