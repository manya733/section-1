const nums =['war','pathan','thor','flash','k3g','iceage'];
console.log(typeof nums);
console.log(nums.length);
//add new element at the end of array
nums.push('ddlj');
console.log(nums);

//add new element at the beginning of the array
nums.unshift('3 idiots');
console.log(nums);

console.log([...nums,'spiderverse']);

//re,move the last element of the array

nums.pop();
console.log(nums);

// remave the first element from the array
nums.shift();
console.log(nums);

// indexing 

console.log(nums[3]);
console.log(nums.at(-2));

//slicing
console.log(nums.slice(1,4));

//remove elements from specific position index
nums.splice(3,2,);


//nums.splice(3,2,'batman','toy story');

console.log(nums);







