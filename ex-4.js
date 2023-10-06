// Exercise #4: Reverse Strings
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
for (let i = companyName.length - 1; i >= 0; i--) {
    reversedCompanyName += companyName[i];
};

console.log(reversedCompanyName);
