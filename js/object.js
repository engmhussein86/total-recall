console.log('object');

// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchased to an empty array []. Set the other values to whatever you would like.

console.log("A. Make a user object");



let user = {
    name: "Mariam Hussein",
    email: "mh@example.com",
    age: 38,
    purchased: []
};
console.log(user);

/*
Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address.

Our user has had a birthday! Without changing the original user object, increment the age value using the postfix operator. Hint: age++
*/

console.log("B. Update the user");
// user.age += 1;
user.email="new@hh.com";
user.age++;
// user.age =  user.age;
user.birthdate = '05/24/1986'
console.log(user);

/*
You have decided to add your user's location to the data that you want to collect.

Without changing the original user object, add a new key location to the object, and give it a value or some-or-other location (a string).
*/
console.log("C. Adding keys and values");
user.location = "your location";
console.log(user);

/*
Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchased array.
Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchased array.
Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchased array.
Console.log just the "Merino jodhpurs" from the purchased array.
*/
console.log("D. Shopaholic!");
user.purchased.push("carbohydrates");
user.purchased.push("peace of mind");
user.purchased.push("Merino jodhpurs");
console.log(user);
console.log(user.purchased[2]);

/*
Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now)
*/

console.log("E. Object-within-object");
user.friend = {
    name: "Grace Hopper",
    age: 85,
    location: "friend's location",
    purchased : []
}

/* Console.log just the friend's name*/

console.log(`friend's name : ${user.friend.name}`);

//Console.log just the friend's location
console.log(`friend's location : ${user.friend.location}`);

// CHANGE the friend's age to 55
user.friend.age = 55;

user.friend.purchased.push("The One Ring");
user.friend.purchased.push("A latte");

console.log(user.friend.purchased[1]);
console.log(user.friend);

/*
Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.
Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.
*/
console.log("F. Loops");

let user_purchased =' user_purchased : ';
for(let i=0; i < user.purchased.length;i++){
    user_purchased += user.purchased[i] +',';
}
console.log(user_purchased);

let friend_purchased =' friend_purchased : ';
for(let i=0; i < user.friend.purchased.length;i++){
    friend_purchased += user.friend.purchased[i] +',';
}
console.log(friend_purchased);