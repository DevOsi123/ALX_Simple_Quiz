document.addEventListener('DOMContentLoaded', function () {
    function checkAnswer() {
        const correctAnswer = '4';
        const selected = document.querySelector('input[name="quiz"]:checked');
        const feedback = document.getElementById('feedback');

        // Check if something is selected
        if (!selected) {
            feedback.textContent = "Please select an answer.";
            return;
        }

        const userAnswer = selected.value;

        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        } else {
            feedback.textContent = "Oops! That's not correct.";
        }
    }

    // Attach checkAnswer to a button click (example)
    const submitButton = document.getElementById('submit-answer');
    submitButton.addEventListener('click', checkAnswer);
});
