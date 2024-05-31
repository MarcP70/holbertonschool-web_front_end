function welcome(firstName, lastName) {
    let fullName = firstName + " " + lastName +"!";
    function displayFullName(fullName) {
        alert(fullName);
    }
    displayFullName(fullName);
}
welcome('Holberton', 'School');
