function calculateGrade() {
  const studentName = document.getElementById("studentName").value;
  const assignment1 = Number(document.getElementById("assignment1").value);
  const assignment2 = Number(document.getElementById("assignment2").value);
  const finalExam = Number(document.getElementById("finalExam").value);

  if (assignment1 < 0 || assignment2 < 0 || finalExam < 0) {
    document.getElementById("results").innerHTML += `
      <p class="fail">
        <b>Name:</b> ${studentName}<br>                      
        <b>Status:</b> Not valid  (Scores cannot be below 0)
      </p>
    `;
    return; // stops all calc if invalid
  }
  if (assignment1 > 40 || assignment2 > 40 || finalExam > 100) {
    document.getElementById("results").innerHTML += `
      <p class="fail">
        <b>Name:</b> ${studentName}<br>                      
        <b>Status:</b> Not valid  (Enter valid score)
      </p>
    `;
    return; // stops all calc if invalid
  }

  const assignmentAverage = (assignment1 + assignment2) / 2;
  const finalGrade = (assignmentAverage) + (finalExam * 0.6);

  const hasPassed = finalGrade >= 70;
  const passStatus = hasPassed ? "Passed" : "Failed"; // ternary operator
  const isExcellent = hasPassed && finalExam >= 90;

  const resultsDiv = document.getElementById("results");

  let statusClass = hasPassed ? "pass" : "fail";
  if (isExcellent) statusClass = "excellent";

  resultsDiv.innerHTML += `
    <p class="${statusClass}">
      <b>Name:</b> ${studentName}<br>
      <b>Grade:</b> ${finalGrade.toFixed(0)}<br>
      <b>Status:</b> ${passStatus}<br>
      <b>Excellent:</b> ${isExcellent ? "Yes" : "No"}
    </p>
  `; // template literal

  console.group(`Student: ${studentName}`);
  console.log("Assignment 1:", assignment1);
  console.log("Assignment 2:", assignment2);
  console.log("Final Exam:", finalExam);
  console.log("Assignment Average:", assignmentAverage.toFixed(0));
  console.log("Final Grade:", finalGrade.toFixed(0));
  console.log("Pass Status:", passStatus);
  console.log("Excellent Performance:", isExcellent ? "Yes 🎉" : "No");
}
