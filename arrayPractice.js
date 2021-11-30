//array indexes start at 0, length starts at 1. [2,3,4,5] would have x[0] through x[3], the length would be 4


var newContact = ["John", "Doe", "123-555-4567", "Manager"];

//This function will log the array in the console
function showContact(newContact){
    console.log(newContact);
}

showContact(newContact);

//This function will change the Last name
function lastNameChange(newContact){
    newContact[1] = "Smith";
    console.log(newContact);
}

lastNameChange(newContact);

//This function will add email to the end
function addEmail(newContact){
    newContact.push("john@domain.com");
    console.log(newContact);
}

addEmail(newContact);