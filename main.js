// Toggle display of sections on double-click
function toggleSection(id) {
  const section = document.getElementById(id);
  section.style.display = section.style.display === 'none' ? 'block' : 'none';
}

// Update progress dynamically based on section visibility
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section-content");
  const progress = document.getElementById("progress");

  sections.forEach(section => {
    section.style.display = 'none';
  });

  document.body.addEventListener("dblclick", () => {
    let visibleSections = Array.from(sections).filter(section => section.style.display === 'block').length;
    let totalSections = sections.length;
    progress.textContent = `Progress: ${Math.floor((visibleSections / totalSections) * 100)}%`;
  });
});