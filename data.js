// data.js
// The data is stored in arrays.
// names[i] matches row i of the scores array.

const names = ["Ama", "Kofi", "Esi", "Yaw", "Abena"];
const courses = ["Maths", "ICT", "English"];

// 2D array: each row is a student, each column is a course
const scores = [
  [72, 68, 75],
  [85, 90, 80],
  [90, 88, 95],
  [64, 70, 58],
  [48, 52, 45],
];

const PASS_MARK = 50;

module.exports = { names, courses, scores, PASS_MARK };
