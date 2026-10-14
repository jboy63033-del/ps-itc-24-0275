// grading.js
// Functions that process the arrays.

function grade(average) {
  if (average >= 80) return "A";
  if (average >= 70) return "B";
  if (average >= 60) return "C";
  if (average >= 50) return "D";
  return "F";
}

// Returns three arrays: totals, averages and grades (one value per student)
function calculateStudentResults(scores) {
  const totals = [];
  const averages = [];
  const grades = [];

  for (let i = 0; i < scores.length; i++) {
    let total = 0;
    for (let j = 0; j < scores[i].length; j++) {
      total += scores[i][j];
    }
    const average = total / scores[i].length;
    totals.push(total);
    averages.push(average);
    grades.push(grade(average));
  }

  return { totals, averages, grades };
}

// Returns an array with the average mark of each course (column)
function calculateCourseAverages(scores, courses) {
  const courseAverages = [];

  for (let j = 0; j < courses.length; j++) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
      sum += scores[i][j];
    }
    courseAverages.push(sum / scores.length);
  }

  return courseAverages;
}

// Returns the index of the largest value in an array
function indexOfMax(values) {
  let best = 0;
  for (let i = 1; i < values.length; i++) {
    if (values[i] > values[best]) best = i;
  }
  return best;
}

// Returns the indexes of students who passed and failed
function passAndFail(averages, passMark) {
  const passed = [];
  const failed = [];

  for (let i = 0; i < averages.length; i++) {
    if (averages[i] >= passMark) passed.push(i);
    else failed.push(i);
  }

  return { passed, failed };
}

module.exports = {
  grade,
  calculateStudentResults,
  calculateCourseAverages,
  indexOfMax,
  passAndFail,
};
