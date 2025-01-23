function updateCurrentDate() {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('current-date').innerText = `Today is ${today.toLocaleDateString(undefined, options)}`;
}

function calculateAge() {
    const dobInput = document.getElementById('dob').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (!dobInput || !name || !email) {
        document.getElementById('result').innerText = "Please fill in all fields correctly.";
        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    document.getElementById('result').innerText = `Hello, ${name}! You are ${age} years old.`;
    document.getElementById('additional-info').innerText = `Your email address is ${email}. Have a fantastic day!`;
}

updateCurrentDate();
