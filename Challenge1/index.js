function getGrade(marks) {
    if (marks > 79 && marks <= 100) {
        return 'A';
    } else if (marks >= 60 && marks <= 79) {
        return 'B';
    } else if (marks >= 49 && marks <= 59) {
        return 'C';
    } else if (marks >= 40 && marks <= 49) {
        return 'D';
    } else if (marks < 40 && marks >= 0) {
        return 'E';
    } else {
        return 'Wrong marks'; // To where marks are not within 0-100.
    }
}

// Example:

let studentMarks = 85;
console.log(getGrade(studentMarks)); 
