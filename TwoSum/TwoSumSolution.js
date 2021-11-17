function twoSum(nums, target) {
    let map = {};

    for(let i = 0; i<nums.length ; i++){
        let value = nums[i];
        let complimentoryPair = target - value;
        
        if (map[complimentoryPair] !== undefined){
            return [map[complimentoryPair],i];
        }else{
            map[value]=i;
        }
    }
}


console.log(twoSum([1,2,3,2,6],9));