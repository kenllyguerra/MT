document.getElementById('gradeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const grades = document.getElementById('grades').value.split(',').map(Number);
    const sum = grades.reduce((acc, grade) => acc + grade, 0);
    const average = sum / grades.length;
    document.getElementById('result').innerHTML = `Promedio: ${average.toFixed(2)}`;
  });