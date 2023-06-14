const nums=[4,8,29,35,252,395];

for( let i=0;i<nums.lemgth;i++)
{

//console.log(nums[i]*nums[i]);
console.log(nums[i]**2);
}

for(let n of nums)
{
    console.log(n ** 2);
}
// map is used to create a new array with modification

const res=nums.map((n)=>{ return n**2 });
console.log(res);


prices=[2345,2388,9993,7500,23567];
const pr=prices.map((n)=>{return n/10});
console.log(pr);
