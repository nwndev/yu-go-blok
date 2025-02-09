function map(val, minA, maxA, minB, maxB) {
  return minB + ((val - minA) * (maxB - minB)) / (maxA - minA);
}

function Card3D(card, ev) {
  let img = card.querySelector('img');
  let imgRect = card.getBoundingClientRect();
  let width = imgRect.width;
  let height = imgRect.height;
  let mouseX = ev.offsetX;
  let mouseY = ev.offsetY;
  let rotateY = map(mouseX, 0, 180, -25, 25);
  let rotateX = map(mouseY, 0, 250, 25, -25);
  let brightness = map(mouseY, 0, 250, 1.5, 0.5);

  img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  img.style.filter = `brightness(${brightness})`;
}

var cards = document.querySelectorAll('.card3d');

cards.forEach((card) => {
  card.addEventListener('mousemove', (ev) => {
    Card3D(card, ev);
  });

  card.addEventListener('mouseleave', (ev) => {
    let img = card.querySelector('img');

    img.style.transform = 'rotateX(0deg) rotateY(0deg)';
    img.style.filter = 'brightness(1)';
  });
});

function showFullCard(imageSrc) {
  const modal = document.getElementById("fullCardModal");
  const fullCardImage = document.getElementById("fullCardImage");
  fullCardImage.src = imageSrc;
  modal.style.display = "block";
  fullCardImage.style.transform = 'scale(0.8)';
}

function closeModal() {
  const modal = document.getElementById("fullCardModal");
  modal.style.display = "none";
}

function showWarning() {
  document.getElementById("warning-modal").style.display = "flex";
}

function hideWarning() {
  document.getElementById("warning-modal").style.display = "none";
}

        // Get the loader and text window elements
        var loader = document.querySelector('.loader');
        var textWindow = document.querySelector('.text-window');
        var overlay = document.querySelector('.overlay');
        var closeButton = document.querySelector('.close');

        // Show the loader for 3 seconds
        setTimeout(function() {
            loader.style.display = 'none';
            textWindow.style.display = 'block';
            overlay.style.display = 'block';
        }, 3000);

        // Add event listener to the close button
        closeButton.addEventListener('click', function() {
            textWindow.style.opacity = 0;
            textWindow.style.transform = 'scale(0.5)';
            overlay.style.opacity = 0;
            setTimeout(function() {
                textWindow.style.display = 'none';
                overlay.style.display = 'none';
            }, 500);
        });

        function openTextWindow() {
          var textWindow = document.querySelector('.text-window');
          var overlay = document.querySelector('.overlay');
          textWindow.style.opacity = 1;
          textWindow.style.transform = 'translate(-50%, -50%) scale(1)';
          textWindow.style.display = 'block';
          overlay.style.opacity = 1;
          overlay.style.display = 'block';
      }

              // Get the loader and text window elements
        var loader = document.querySelector('.loader');
        var textWindow = document.querySelector('.text-window');
        var overlay = document.querySelector('.overlay');
        var closeButton = document.querySelector('.close');

        // Show the loader for 3 seconds
        setTimeout(function() {
            loader.style.display = 'none';
            textWindow.style.display = 'block';
            overlay.style.display = 'block';
        }, 3000);

        // Add event listener to the close button
        closeButton.addEventListener('click', function() {
            textWindow.style.opacity = 0;
            textWindow.style.transform = 'scale(0.5)';
            overlay.style.opacity = 0;
            setTimeout(function() {
                textWindow.style.display = 'none';
                overlay.style.display = 'none';
            }, 500);
        });

        function openTextWindow() {
          var textWindow = document.querySelector('.text-window');
          var overlay = document.querySelector('.overlay');
          textWindow.style.opacity = 1;
          textWindow.style.transform = 'translate(-50%, -50%) scale(1)';
          textWindow.style.display = 'block';
          overlay.style.opacity = 1;
          overlay.style.display = 'block';
      }

// Get the search input field and all card elements
const searchInput = document.getElementById('search-input');
const cardElements = document.querySelectorAll('.card3d');

console.log('Search input field:', searchInput);
console.log('Card elements:', cardElements);

// Add an event listener to the search input field
searchInput.addEventListener('input', () => {
  console.log('Search query:', searchInput.value);
  const searchQuery = searchInput.value;
  cardElements.forEach((card) => {
    console.log('Card element:', card);
    const keywords = card.getAttribute('data-keywords');
    console.log('Keywords:', keywords);
    if (searchQuery === '') {
      console.log('Showing all cards');
      card.style.display = 'block';
    } else if (keywords === searchQuery) {
      console.log('Showing card:', card);
      card.style.display = 'block';
    } else {
      console.log('Hiding card:', card);
      card.style.display = 'none';
    }
  });
});