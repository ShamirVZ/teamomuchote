document.getElementById('heart').addEventListener('click', function() {
    const textElement = document.getElementById('text');
    textElement.classList.add('move-up');
    
    const letterContent = document.getElementById('letterContent');
    letterContent.classList.remove('hidden');
    letterContent.classList.add('show');
});
