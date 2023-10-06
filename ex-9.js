// Exercise #9: Classroom Scores

let studentsScore = {
  James: 40,
  Ann: 80,
  Joe: 52,
  Ball: 67,
  Mick: 89,
  Ole: 10,
};

// Start coding here

// 1. หาค่าเฉลี่ยของคะแนนของนักเรียนในห้องทั้งหมดรวมกัน
let totalScore = 0;
let numberOfStudents = 0;

for (let student in studentsScore) {
    totalScore += studentsScore[student];
    numberOfStudents++;
};

let averageScore = totalScore / numberOfStudents;

console.log("Average score is " + averageScore);

// 2. หาชื่อของคนที่ได้คะแนนมากที่สุดและคะแนนที่เขาได้รับ
let highestScoreName = "";
let highestScorePoint = 0;

for (let student in studentsScore) {
  if (studentsScore[student] > highestScorePoint) {
      highestScorePoint = studentsScore[student];
      highestScoreName = student;
  }
};

console.log(highestScoreName + " has the highest score, which is " + highestScorePoint);

// 3. หาคนที่ได้คะแนนที่น้อยที่สุดและคะแนนที่เขาได้รับ
let lowestScoreName = "";
let lowestScorePoints = 100;

for (let student in studentsScore) {
  if (studentsScore[student] < lowestScorePoints) {
      lowestScorePoints = studentsScore[student];
      lowestScoreName = student;
  }
};

console.log(lowestScoreName + " has lowest score, which is " + lowestScorePoints);
