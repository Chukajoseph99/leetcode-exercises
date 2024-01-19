var containsDuplicate = function(nums) {
    nums = nums.sort();
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == nums[i + i]){
            return true;
        }
    }
    return false;
};
