/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 Output: [4,9]
 
 Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

 
 */
function intersect(nums1, nums2) {
    let set1 = new Set();
    for(let i = 0; i < nums1.length; i++){
        set1.add(nums1[i]);
    }
    
    let set2 = new Set();
    for(let i = 0; i < nums2.length; i++){
        if(set1.has(nums2[i])){
            set2.add(nums2[i]);
        }
    }
    
    return Array.from(set2);
};

console.log(intersect([4,9,5], [9,4,9,8,4]))
console.log(intersect([1,2,2,1], [2,2]))