let currentIndex = 1;
const totalContainers = document.querySelectorAll('.container').length;
const leftBtn = document.querySelector('.floating-btn-left');
const rightBtn = document.querySelector('.floating-btn');

function showContainer(index, direction) {
    document.querySelectorAll('.container').forEach((container, i) => {
        if (i === index - 1) {
            container.classList.add("active");
            container.classList.remove(direction === "next" ? "swipe-right" : "swipe-left");
        } else {
            container.classList.remove("active");
            container.classList.add(i < index - 1 ? "swipe-left" : "swipe-right");
        }
    });

    // Hide left button on the first container
    leftBtn.style.display = index === 1 ? "none" : "block";
    
    // Hide right button on the last container
    rightBtn.style.display = index === totalContainers ? "none" : "block";
}

function nextContainer() {
    if (currentIndex < totalContainers) {
        currentIndex++;
        showContainer(currentIndex, "next");
    }
}

function prevContainer() {
    if (currentIndex > 1) {
        currentIndex--;
        showContainer(currentIndex, "prev");
    }
}

// Initial setup to show the first container and set button visibility
showContainer(currentIndex, "next");

function showSection(sectionId) {
    // Find the currently active container
    let activeContainer = document.querySelector('.container.active');

    if (activeContainer) {
        // Hide all sections inside the active container
        activeContainer.querySelectorAll('.section1').forEach(section => {
            section.classList.remove('active-section');
        });

        // Show the clicked section inside the active container
        let sectionToShow = activeContainer.querySelector(`#${sectionId}`);
        if (sectionToShow) {
            sectionToShow.classList.add('active-section');
        }
    }
}

// Event listeners for the swipe buttons
document.getElementById('swipeLeftBtn').addEventListener('click', () => {
    const containerToSwipe = document.querySelector('.container.active');
    if (containerToSwipe) {
        containerToSwipe.classList.add('swipe-left');
        setTimeout(() => {
            containerToSwipe.classList.remove('swipe-left');
        }, 500); // duration of the swipe animation
    }
});

document.getElementById('swipeRightBtn').addEventListener('click', () => {
    const containerToSwipe = document.querySelector('.container.active');
    if (containerToSwipe) {
        containerToSwipe.classList.add('swipe-right');
        setTimeout(() => {
            containerToSwipe.classList.remove('swipe-right');
        }, 500); // duration of the swipe animation
    }
});

// Add swipe animations for next and previous buttons as well
leftBtn.addEventListener('click', prevContainer);
rightBtn.addEventListener('click', nextContainer);

// This will handle the swipe animations for all containers based on active class
document.querySelectorAll('.container').forEach(container => {
    container.addEventListener('animationend', () => {
        if (container.classList.contains('swipe-left') || container.classList.contains('swipe-right')) {
            container.classList.remove('swipe-left', 'swipe-right');
        }
    });
});
