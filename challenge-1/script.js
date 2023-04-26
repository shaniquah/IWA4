/* date and status declared variable values using : instead of = hence code didn't run
 * initial count was set to 0
 * initial status was set to 'student'
 * count and status should be declared with let instead of const to allow it to change
 * use the same quotes consistently for better readability of code throughout
 */

const date = 2050;
const status = "parent";
let count = 0;

// List of the holidays for the year

if (date === 2050) {
    console.log("January:", "New Year\'s  Day"); /* use backstroke for escaping literal quotes in strings */
    console.log("March:", "Human Rights Day");
    console.log("April:", "Family Day");
    console.log("April:", "Freedom Day");
    count+= 4;  /* shortcut for reusing a variable and increasing its value without reassigning it */

    if (status === "student") { /* holiday celebrated by students */
        console.log("June", "Youth Day");
        count += 1;
    }

    console.log("August", "Women\'s Day");
    console.log("September", "Heritage Day");
    console.log("December", "Day of Reconciliation");
    count += 3;

    if (status === "parent") {  /* holiday celebrated by parents */
        console.log("December", "Christmas Day");
        count += 1;
    }

    console.log("December", "Day of Goodwill");
    count += 1;

}

// Prints the year, user status and total holiday count to console

console.log("Your status is:", status);
console.log("The year is:", date);
console.log("The total holidays is:", count);