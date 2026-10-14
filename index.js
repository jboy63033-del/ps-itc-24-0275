// index.js
// Student Exam Score Management System
// Run with: node index.js

const { names, courses, scores, PASS_MARK } = require("./data");
const {
  calculateStudentResults,
  calculateCourseAverages,
  indexOfMax,
  passAndFail,
} = require("./grading");

const { totals, averages, grades } = calculateStudentResults(scores);
const courseAverages = calculateCourseAverages(scores, courses);

// ---- Results table ----
let header = "Name".padEnd(8);
for (let j = 0; j < courses.length; j++) {
  header += courses[j].padStart(9);
}
header += "Total".padStart(8) + "Average".padStart(9) + "Grade".padStart(7);

console.log(header);
console.log("-".repeat(header.length));

for (let i = 0; i < names.length; i++) {
  let row = names[i].padEnd(8);
  for (let j = 0; j < courses.length; j++) {
    row += String(scores[i][j]).padStart(9);
  }
  row +=
    String(totals[i]).padStart(8) +
    averages[i].toFixed(1).padStart(9) +
    grades[i].padStart(7);
  console.log(row);
}

console.log("-".repeat(header.length));

// ---- Summary ----
const top = indexOfMax(totals);
console.log(`Top student: ${names[top]} with a total of ${totals[top]}`);

let averageSum = 0;
for (let i = 0; i < averages.length; i++) averageSum += averages[i];
console.log(`Class average: ${(averageSum / averages.length).toFixed(1)}`);

console.log("Course averages:");
for (let j = 0; j < courses.length; j++) {
  console.log(`  ${courses[j]}: ${courseAverages[j].toFixed(1)}`);
}

const { passed, failed } = passAndFail(averages, PASS_MARK);

console.log(`Students who passed (average >= ${PASS_MARK}):`);
for (let k = 0; k < passed.length; k++) console.log(`  ${names[passed[k]]}`);

console.log("Students who failed:");
for (let k = 0; k < failed.length; k++) console.log(`  ${names[failed[k]]}`);
