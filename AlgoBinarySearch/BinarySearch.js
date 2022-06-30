/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    let midIndex=Math.round(nums.length/2)-1;
    console.log(midIndex);

    console.log(nums[midIndex]);

    if(nums[midIndex]<target){
        console.log(nums[midIndex]);
    }
    
    
    for(let i=0;i<nums.length;i++){
        
    }
     
};

console.log(search([1,4,5,7,8,9],9));