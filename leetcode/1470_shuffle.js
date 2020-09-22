var shuffle = function(nums,n){
    //x = 0 ~ n-1, y = n~ nums.length-1
    let x = [];
    let y = [];
    let output = [];
    for(let i=0;i<nums.length;i++){
        if(i<=n-1) x.push(nums[i]);
        else y.push(nums[i]);
    }

    var i=0;
    var idx_x=0;
    var idx_y=0;
    while(i<nums.length){
        if(i%2==0) {
            output.push(x[idx_x]);
            idx_x++;
        }
        else {
            output.push(y[idx_y])
            idx_y++;
        }
        i++;
    }
    return output;

}

var shuffle2 = function(nums,n){
    let i = 0;
    let result = [];
    while(i<n){
        result = [...result, nums[i],nums[n+i]];
        i++;

        console.log("result : "+result);
    }
    return result;
}

console.log(shuffle2([2,5,1,3,4,7],3));



