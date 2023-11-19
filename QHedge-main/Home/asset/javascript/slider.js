let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelector('.slides');
  const slideWidth = document.querySelector('.slide').offsetWidth;
  slides.style.transform = `translateX(${-index * slideWidth}px)`;
  currentSlide = index;
}
setInterval(() => {
    currentSlide = (currentSlide + 1) % 3;
    showSlide(currentSlide);
  }, 7000);

function nextSlide() {
    currentSlide = (currentSlide + 1) % document.querySelectorAll('.slide').length;
    showSlide(currentSlide);
}
function prevSlide() {
    currentSlide = (currentSlide - 1 + document.querySelectorAll('.slide').length) % document.querySelectorAll('.slide').length;
    showSlide(currentSlide);
}

function openModal() {
    document.getElementById('myModal').style.display = 'block';
  }

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
  }

  function scheduleMeeting() {
    // Add your logic to handle meeting scheduling here
    alert('Meeting scheduled!');
    closeModal();
  }

  // Close the modal if the user clicks outside the modal
  window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
      closeModal();
    }
  };

document.addEventListener('DOMContentLoaded', function () {
    var menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener('click', function () {
            console.log('Clicked on menu item'); // Add this line
            // Toggle the 'active' class to show/hide the dropdown
            this.classList.toggle('active');
        });
    });
});

