function singleNumber(nums) {
    let set = new Set();
    for(let i = 0; i < nums.length; i++){
        if(set.has(nums[i])){
            set.delete(nums[i])
        }else{
            set.add(nums[i])
        }
    }
    return Array.from(set)[0];
};

console.log(singleNumber([6,1,2,1,2])) // 6