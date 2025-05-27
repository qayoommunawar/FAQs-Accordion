
const faqHeader = document.querySelectorAll('.faq-header');
const iconButton = document.querySelectorAll('.icon-plus');
const faqAnswer = document.querySelectorAll('.faq-text');


faqHeader.forEach((header, index) => {
    header.addEventListener('click', () => {
        const isVisible = !faqAnswer[index].classList.contains('hidden');

        // First: Hide all answers and reset icons
        faqAnswer.forEach((answer, i) => {
            answer.classList.add('hidden');
            iconButton[i].src = 'assets/images/icon-plus.svg';
        });

        // Then: Show only the clicked one if it was previously hidden
        if (!isVisible) {
            faqAnswer[index].classList.remove('hidden');
            iconButton[index].src = 'assets/images/icon-minus.svg';
        }
    });
});