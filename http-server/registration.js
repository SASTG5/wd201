let userForm = document.getElementById("form");

// RETRIEVE DATA STORED LOCALLY
function retrievedData() {
    let entries = localStorage.getItem('userData');
    if (entries) {
        entries = JSON.parse(entries);
    } else {
        entries = [];
    }
    return entries;
}

// POPULATE HTML TABLE
let userEntries = retrievedData();

function displayEntries() {
    const entries = retrievedData();

    const tableEntries = entries.map((entry) => {
        const nameCell = `<td class="border px-4 py-2">${entry.name}</td>`;
        const emailCell = `<td class="border px-4 py-2">${entry.email}</td>`;
        const pwdCell = `<td class="border px-4 py-2">${entry.password}</td>`;
        const dobCell = `<td class="border px-4 py-2">${entry.dob}</td>`;
        const acceptTermsCell = `<td class="border px-4 py-2">${entry.acceptTerms}</td>`;

        const row = `<tr>${nameCell}${emailCell}${pwdCell}${dobCell}${acceptTermsCell}</tr>`;
        return row;
    }).join('\n');

    // CREATE TABLE STRUCTURE
    const table = `
    <table class="table-auto w-full">
    <caption class="text-left text-gray-900 text-sm">Entries</caption>
    <thead>
    <tr>
    <th class="border px-4 py-2">Name</th>
    <th class="border px-4 py-2">Email</th>
    <th class="border px-4 py-2">Password</th>
    <th class="border px-4 py-2">Dob</th>
    <th class="border px-4 py-2">Accepted terms?</th>
    </tr>
    </thead>
    <tbody>${tableEntries}</tbody></table>`;
    let details = document.getElementById('user-entries');
    details.innerHTML = table;
}

// STORING DATA LOCALLY
function saveUserForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const acceptTerms = document.getElementById('acceptTerms').checked;

    const userData = {
        name,
        email,
        password,
        dob,
        acceptTerms
    };

    userEntries.push(userData);
    localStorage.setItem('userData', JSON.stringify(userEntries));
    displayEntries();
}

userForm.addEventListener('submit', saveUserForm);
displayEntries();

//DATE FORMATTER
document.addEventListener('DOMContentLoaded', function () {
    const dobInput = document.getElementById('dob');
    const today = new Date();

    const minDate = new Date(today.getFullYear() - 55, today.getMonth(), today.getDate());
    const maxDate = new Date(today.getFullYear() - 18 , today.getMonth(), today.getDate()+1);

    dobInput.min = minDate.toISOString().split('T')[0];
    dobInput.max = maxDate.toISOString().split('T')[0];

});

