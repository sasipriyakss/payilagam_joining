document.getElementById('form').addEventListener('submit', function (e) {
    // Prevent form submission for validation
    e.preventDefault();

    // Select all inputs
    const name = document.getElementById('name');
    const dob = document.getElementById('dob');
    const email = document.getElementById('email');
    const mobile = document.getElementById('mobile');
    const qual = document.getElementById('qual');
    const yop = document.getElementById('yop');
    const college = document.getElementById('college');
    const marks10th = document.getElementById('10th');
    const marks12th = document.getElementById('12th');
    const marksUG = document.getElementById('ug');
    const marksPG = document.getElementById('pg');
    const cinterest = document.getElementById('cinterest');
    const cmode = document.querySelector('input[name="cmode"]:checked');
    const know = document.getElementById('know');
    const work = document.getElementById('work');
    const address = document.getElementById('address');
    const photo = document.getElementById('photo');
    const idproof = document.getElementById('idproof');
    const proof = document.getElementById('proof');
    const date = document.getElementById('date');

    // Validation Rules
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
    const marksRegex = /^(100|[1-9]?[0-9])(\.\d{1,2})?$/;
    const yearRegex = /^[12][0-9]{3}$/;

    let isValid = true;
    let errorMessage = "";

    // Validate Name
    if (name.value.trim() === "") {
        isValid = false;
        errorMessage += "Name is required.\n";
    }

    // Validate DOB
    if (dob.value === "") {
        isValid = false;
        errorMessage += "Date of Birth is required.\n";
    }

    // Validate Email
    if (!emailRegex.test(email.value)) {
        isValid = false;
        errorMessage += "Enter a valid email address.\n";
    }

    // Validate Mobile
    if (!mobileRegex.test(mobile.value)) {
        isValid = false;
        errorMessage += "Enter a valid 10-digit mobile number.\n";
    }

    // Validate Qualification
    if (qual.value.trim() === "") {
        isValid = false;
        errorMessage += "Qualification is required.\n";
    }

    // Validate Year of Passing
    if (!yearRegex.test(yop.value)) {
        isValid = false;
        errorMessage += "Enter a valid year for Year of Passing.\n";
    }

    // Validate College
    if (college.value.trim() === "") {
        isValid = false;
        errorMessage += "College name is required.\n";
    }

    // Validate Marks
    if (!marksRegex.test(marks10th.value) || !marksRegex.test(marks12th.value) || !marksRegex.test(marksUG.value) || !marksRegex.test(marksPG.value)) {
        isValid = false;
        errorMessage += "Enter valid percentage marks (0-100) for 10th, 12th, UG, and PG.\n";
    }

    // Validate Course Interested
    if (cinterest.value === "") {
        isValid = false;
        errorMessage += "Please select a course of interest.\n";
    }

    // Validate Course Mode
    if (!cmode) {
        isValid = false;
        errorMessage += "Please select a course mode (Online or Offline).\n";
    }

    // Validate How You Know
    if (know.value.trim() === "") {
        isValid = false;
        errorMessage += "Please specify how you know Payilagam.\n";
    }

    // Validate Organization Details
    if (work.value.trim() === "") {
        isValid = false;
        errorMessage += "Organization details are required.\n";
    }

    // Validate Address
    if (address.value.trim() === "") {
        isValid = false;
        errorMessage += "Permanent address is required.\n";
    }

    // Validate Photo Upload
    if (!photo.files.length) {
        isValid = false;
        errorMessage += "Please upload a photo.\n";
    }

    // Validate ID Proof Number and Upload
    if (proof.value.trim() === "" || !idproof.files.length) {
        isValid = false;
        errorMessage += "ID proof number and upload are required.\n";
    }

    // Validate Date
    if (date.value === "") {
        isValid = false;
        errorMessage += "Date is required.\n";
    }

    // If all validations pass, submit the form
    if (isValid) {
        alert("Form submitted successfully!");
        this.submit(); // Submit the form
    } else {
        alert(errorMessage); // Show error messages
    }
});
