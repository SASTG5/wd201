//DATE FORMATTER
document.addEventListener('DOMContentLoaded', function () {
    const dobInput = document.getElementById('dob');
    const today = new Date();

    const minDate = new Date(today.getFullYear() - 55, today.getMonth(), today.getDate());
    const maxDate = new Date(today.getFullYear() - 18 , today.getMonth(), today.getDate()+1);

    dobInput.min = minDate.toISOString().split('T')[0];
    dobInput.max = maxDate.toISOString().split('T')[0];

});
