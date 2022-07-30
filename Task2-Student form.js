window.addEventListener('load', () => {
    const form = document.querySelector("#new-student-detail");
    const name_input = document.querySelector("#stu-name");
    const age_input = document.querySelector("#stu-age");
    const email_input = document.querySelector("#stu-email");
    const stu_details = document.querySelector("#stu-details");
    var row = 1;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        var name = name_input.value;
        var age = age_input.value;
        var email = email_input.value;

        if (!name || !age || !email) {
            alert("Please fill all the details");
            return;
        }

        var new_row = stu_details.insertRow(row);
        var cell1 = new_row.insertCell(0);
        var cell2 = new_row.insertCell(1);
        var cell3 = new_row.insertCell(2);

        cell1.innerHTML = name;
        cell2.innerHTML = age;
        cell3.innerHTML = email;

        row++;
    })
})