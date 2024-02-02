function moveZeroes(nums) {
    let pointer = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            let temp = nums[pointer];
            nums[pointer] = nums[i];
            nums[i] = temp;

            pointer++;
    }
  }
};