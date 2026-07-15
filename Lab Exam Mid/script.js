document.getElementById("studentForm").addEventListener("submit", function (event) {
 
    event.preventDefault();
 
    document.getElementById("firstNameError").innerHTML = "";
    document.getElementById("lastNameError").innerHTML = "";
    document.getElementById("studentIdError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("creditError").innerHTML = "";
    document.getElementById("departmentError").innerHTML = "";
 
    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let studentId = document.getElementById("studentId").value.trim();
    let email = document.getElementById("email").value.trim();
    let credit = document.getElementById("credit").value;
    let department = document.getElementById("department").value;
 
    let valid = true;
 
    if (firstName == "") {
        document.getElementById("firstNameError").innerHTML = "First name is required";
        valid = false;
    }
 
    if (lastName == "") {
        document.getElementById("lastNameError").innerHTML = "Last name is required";
        valid = false;
    }
 
    if (!studentId.includes("-")) {
        document.getElementById("studentIdError").innerHTML = "Student ID must contain '-'";
        valid = false;
    }
 
    if (!email.includes("@student.aiub.edu")) {
        document.getElementById("emailError").innerHTML = "Invalid AIUB email";
        valid = false;
    }
 
    if (credit == "" || credit < 0 || credit >= 148) {
        document.getElementById("creditError").innerHTML = "Credit must be 0-147";
        valid = false;
    }
 
    if (department == "") {
        document.getElementById("departmentError").innerHTML = "Select a department";
        valid = false;
    }
 
    if (!valid) {
        return;
    }
 
    let table = document.getElementById("studentTable");
 
    let row = table.insertRow();
 
    row.insertCell(0).innerHTML = firstName;
    row.insertCell(1).innerHTML = lastName;
    row.insertCell(2).innerHTML = studentId;
    row.insertCell(3).innerHTML = email;
    row.insertCell(4).innerHTML = credit;
    row.insertCell(5).innerHTML = department;
 
    document.getElementById("studentForm").reset();
});
 