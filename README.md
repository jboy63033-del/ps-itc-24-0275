# Student Score Manager

A small JavaScript program that shows how **arrays** are used to solve a real-world problem: managing student exam scores.

## Problem

A lecturer has the marks of 5 students in 3 courses (Maths, ICT and English). The program calculates:

- each student's total, average and grade
- the top student
- the class average
- the average mark for each course
- the students who passed and those who failed (pass mark: 50)

## Why arrays?

- The marks are all numbers of the same type.
- Each student has a fixed position, so `names[i]` always matches `scores[i]`.
- A **2D array** stores the scores: the row is the student and the column is the course, so `scores[2][1]` is the ICT mark of the third student.
- Loops process all the values with a few lines of code.

## Project structure

| File | Purpose |
|---|---|
| `data.js` | Arrays of names, courses and scores, and the pass mark |
| `grading.js` | Functions that process the arrays (totals, averages, grades, pass/fail) |
| `index.js` | Main file that runs the program and prints the results |
| `package.json` | Project information |

## How to run

Make sure [Node.js](https://nodejs.org) is installed, then:

```bash
node index.js
```

or

```bash
npm start
```

## Sample output

```
Name        Maths      ICT  English   Total  Average  Grade
-----------------------------------------------------------
Ama            72       68       75     215     71.7      B
Kofi           85       90       80     255     85.0      A
Esi            90       88       95     273     91.0      A
Yaw            64       70       58     192     64.0      C
Abena          48       52       45     145     48.3      F
-----------------------------------------------------------
Top student: Esi with a total of 273
Class average: 72.0
Course averages:
  Maths: 71.8
  ICT: 73.6
  English: 70.6
Students who passed (average >= 50):
  Ama
  Kofi
  Esi
  Yaw
Students who failed:
  Abena
```

## Limitation and improvements

The arrays have a fixed size in the data file. The program could be improved by reading marks from the user or from a file, and by sorting the students to produce a ranking.
