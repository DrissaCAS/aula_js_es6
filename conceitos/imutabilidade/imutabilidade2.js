const students = [
    {
        nome: 'Anna',
        grade: 7
    },
    {
        nome: 'Jenni',
        grade: 5
    },
    {
        nome: 'Paul',
        grade: 9
    }
];

function getApprovedStudents(studentsList){
    return studentsList.filter(students => students.grade >= 7);
}

console.log('Alunos aprovados: ');
console.log(getApprovedStudents(students));

console.log('Lista de Alunos:');
console.log(students);