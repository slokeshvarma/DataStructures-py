function toggleSection(id) {
  const content = document.getElementById(id);
  content.style.display = content.style.display === 'none' ? 'block' : 'none';
  updateProgress();
}

function checkAnswer(question, correct) {
  const answer = document.querySelector(`input[name="${question}"]:checked`).value;
  const feedback = document.getElementById(`${question}-feedback`);
  feedback.textContent = answer === correct ? "Correct!" : "Try Again.";
  feedback.style.color = answer === correct ? "green" : "red";
}

function updateProgress() {
  const completed = document.querySelectorAll('.section-content[style*="display: block"]').length;
  const total = document.querySelectorAll('.section-content').length;
  const progress = Math.round((completed / total) * 100);
  document.getElementById('progress').textContent = `Progress: ${progress}%`;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".section-header").forEach(header => {
    header.addEventListener("dblclick", () => toggleSection(header.nextElementSibling.id));
  });
});