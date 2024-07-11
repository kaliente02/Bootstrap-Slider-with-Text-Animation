let slideIndex = 0;
let sentences;

function slideUp() {
  const slides = document.querySelectorAll('.slide');
  if (slideIndex < slides.length) {
    sentences = slides[slideIndex].querySelectorAll('p');
    animateSentences(0);
    slideIndex++;
  }
}

function animateSentences(index) {
  if (index < sentences.length) {
    sentences[index].style.transform = 'translateY(-100%)';
    sentences[index].style.opacity = '1';
    setTimeout(() => {
      animateSentences(index + 1);
    }, 300); // Adjust timing as needed
  }
}
