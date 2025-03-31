function showSection(sectionId) {
    // Find the currently visible container
    const activeContainer = document.querySelector('.container.active');

    // Ensure we found an active container
    if (!activeContainer) return;

    // Hide all sections inside the active container
    activeContainer.querySelectorAll('.section1').forEach(section => {
        section.classList.remove('active-section');
    });

    // Show the selected section inside the active container
    const sectionToShow = activeContainer.querySelector(`#${sectionId}`);
    if (sectionToShow) {
        sectionToShow.classList.add('active-section');
    }
}