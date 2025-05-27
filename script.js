
const faqHeader = document.querySelectorAll('.faq-header');
const iconButton = document.querySelectorAll('.icon-plus');
const faqAnswer = document.querySelectorAll('.faq-text');


faqHeader.forEach((header, index) => {
    header.addEventListener('click', () => {
        const isActive = faqAnswer[index].classList.contains('active');

        // First: Remove 'active' from all and reset icons
        faqAnswer.forEach((answer, i) => {
            answer.classList.remove('active');
            iconButton[i].src = 'assets/images/icon-plus.svg';
        });

        // Then: Add 'active' to the clicked one if it was not active
        if (!isActive) {
            faqAnswer[index].classList.add('active');
            iconButton[index].src = 'assets/images/icon-minus.svg';
        }
    });
});
