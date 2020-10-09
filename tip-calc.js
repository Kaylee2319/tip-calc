const readlineSync = require("readline-sync");

// Get the total amount of the bill. Wait for user's response.
const totalAmount = readlineSync.questionFloat(
  "What's the total amount of the bill: $"
);

// Get the party size from the user
const totalPartySize = readlineSync.questionInt(
  "How many people are you in your party? "
);

// Get the % of the tip from the user
const tipPercentage = readlineSync.questionFloat(
  "What % would you like to tip? "
);

// Repeat all of those things back to the user.
console.log(totalAmount);
console.log(totalPartySize);
console.log(tipPercentage);

// The bill tip is the tipPercentage divided by 100

// Total bill is the bill plus the tip

// Get the total amount of the bill divided by the # of people

// Calculate how much everyone is paying
