var rotate = function(nums, k) {
    k = k % nums.length

    for(let i = 0; i < k; i++){
         nums.unshift(nums.pop());
    }
    return nums;
};

console.log(rotate([-1,-100,3,99], 2))