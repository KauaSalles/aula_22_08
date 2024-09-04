document.getElementById('addStudentForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    var cpf = document.getElementById('studentCPF').value.replace(/\D/g, '');
    if (!validateCPF(cpf)) {
        alert("Por favor, insira um CPF válido com 11 dígitos.");
        return;
    }

    var name = document.getElementById('studentName').value;
    var email = document.getElementById('studentEmail').value;
    var phone = document.getElementById('studentPhone').value;
    var state = document.getElementById('studentState').value;
    var school = document.getElementById('studentSchool').value;
    var status = document.getElementById('studentStatus').value;

    var newRow = '<tr><td>' + name + '</td><td>' + email + '</td><td>' + phone + '</td><td>' + cpf + '</td><td>' + state + '</td><td>' + school + '</td><td>' + status + '</td><td><button class="btn btn-danger btn-sm delete-btn">Excluir</button></td></tr>';
    document.querySelector('#studentsTable tbody').insertAdjacentHTML('beforeend', newRow);

    addDeleteEvent();
    document.getElementById('addStudentForm').reset();
    var modal = bootstrap.Modal.getInstance(document.getElementById('addStudentModal'));
    modal.hide();
});

function addDeleteEvent() {
    var deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(function(button) {
        button.removeEventListener('click', deleteRow);
        button.addEventListener('click', deleteRow);
    });
}

function deleteRow(e) {
    e.target.closest('tr').remove();
}

addDeleteEvent();

document.getElementById('continueButton').addEventListener('click', function() {
    var students = [];
    var rows = document.querySelectorAll('#studentsTable tbody tr');
    rows.forEach(function(row) {
        var name = row.cells[0].innerText;
        var email = row.cells[1].innerText;
        students.push({ name: name, email: email });
    });

    populateGradesTable(students, 1); 
    var modal = new bootstrap.Modal(document.getElementById('gradesModal'));
    modal.show();
});

function populateGradesTable(students, bimester) {
    var tbody = document.querySelector('#gradesTable tbody');
    tbody.innerHTML = ''; 

    students.forEach(function(student) {
        
        var subjects = ['Matemática', 'Português', 'História', 'Geografia'];
        var randomGrades = subjects.map(function(subject) {
            var randomGrade = Math.floor(Math.random() * 10) + 1; // Nota aleatória entre 1 e 10
            return '<tr><td>' + student.name + '</td><td>' + student.email + '</td><td>' + subject + '</td><td>' + randomGrade + '</td></tr>';
        });

        tbody.insertAdjacentHTML('beforeend', randomGrades.join(''));
    });
}

document.getElementById('bimesterSelect').addEventListener('change', function() {
    var bimester = this.value;
    var students = [];
    var rows = document.querySelectorAll('#studentsTable tbody tr');
    rows.forEach(function(row) {
        var name = row.cells[0].innerText;
        var email = row.cells[1].innerText;
        students.push({ name: name, email: email });
    });

    populateGradesTable(students, bimester);
});





function formatPhone(input) {
    var value = input.value.replace(/\D/g, '');
    if (value.length > 11) {
        value = value.substring(0, 11);
    }
    if (value.length > 0) {
        value = '(' + value.substring(0, 2) + ') ' + value.substring(2);
    }
    if (value.length > 9) {
        value = value.substring(0, 9) + '-' + value.substring(9);
    }
    input.value = value;
}

function formatCPF(input) {
    var value = input.value.replace(/\D/g, '');
    if (value.length > 11) {
        value = value.substring(0, 11);
    }
    if (value.length > 9) {
        value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else if (value.length > 6) {
        value = value.replace(/(\d{3})(\d{3})(\d+)/, '$1.$2.$3');
    } else if (value.length > 3) {
        value = value.replace(/(\d{3})(\d+)/, '$1.$2');
    }
    input.value = value;
}

function validateCPF(cpf) {
    return cpf.length === 11;
}

document.getElementById('studentCPF').addEventListener('input', function() {
    formatCPF(this);
}); 

