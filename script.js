// Toggle visibility of the section and mark it as read
function toggleSection(id) {
  const content = document.getElementById(id);
  const section = content.closest('.section'); // Find the section element

  // If the section is currently closed, open it
  if (content.style.display === 'none' || content.style.display === '') {
    content.style.display = 'block';
    section.classList.add('read'); // Mark as read
  } else {
    content.style.display = 'none';
    section.classList.remove('read'); // Remove read status
  }

  updateProgress();
}

// Check the answer for a quiz question
function checkAnswer(question, correct) {
  const answer = document.querySelector(`input[name="${question}"]:checked`).value;
  const feedback = document.getElementById(`${question}-feedback`);
  feedback.textContent = answer === correct ? "Correct!" : "Try Again.";
  feedback.style.color = answer === correct ? "green" : "red";
}

// Update progress based on completed sections
function updateProgress() {
  const completed = document.querySelectorAll('.section.read').length; // Count read sections
  const total = document.querySelectorAll('.section').length;
  const progress = Math.round((completed / total) * 100);
  document.getElementById('progress').textContent = `Progress: ${progress}%`;
}

// Initialize event listeners for section headers
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".section-header").forEach(header => {
    // Set up click event
    header.addEventListener("click", () => {
      const sectionContent = header.nextElementSibling;
      toggleSection(sectionContent.id);  // Toggle section content visibility
    });
  });
});