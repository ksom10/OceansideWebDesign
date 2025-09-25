// Add an active class to the first pricing button when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.pricing-button');
    const contents = document.querySelectorAll('.pricing-content');

    if (buttons.length > 0 && contents.length > 0) {
        // Set initial active state
        buttons[0].classList.add('active');
        contents[0].style.display = 'block';

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active from all buttons
                buttons.forEach(btn => btn.classList.remove('active'));
                // Hide all contents
                contents.forEach(content => content.style.display = 'none');

                // Set active class on clicked button
                button.classList.add('active');
                // Show the corresponding content section
                const targetId = button.getAttribute('data-target');
                const targetContent = document.getElementById(targetId);
                if (targetContent) {
                    targetContent.style.display = 'block';
                }
            });
        });
    }
});

