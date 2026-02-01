/**
 * Des Moines Russian Conversation Club
 * Easter Egg - Memory Game & Audio Player
 */

(function() {
  'use strict';

  // --- Game Data ---
  var CARDS = [
    { image: 'yozhik-coffee.png', en: 'Drinking coffee', ru: 'Пьёт кофе' },
    { image: 'yozhik-reading.png', en: 'Reading a book', ru: 'Читает книгу' },
    { image: 'yozhik-pointing.png', en: 'Look here!', ru: 'Смотри сюда!' },
    { image: 'yozhik-lets-talk.png', en: 'Let\'s chat!', ru: 'Давай поговорим!' },
    { image: 'yozhik-kak-dela.png', en: 'How are you?', ru: 'Как дела?' },
    { image: 'yozhik-laptop.png', en: 'Working hard', ru: 'Работает' },
    { image: 'yozhik-microphone.png', en: 'Singing a song', ru: 'Поёт песню' },
    { image: 'yozhik-otlichno.png', en: 'Excellent!', ru: 'Отлично!' }
  ];

  // --- Game State ---
  var flippedCards = [];
  var matchedPairs = 0;
  var moveCount = 0;
  var isLocked = false;

  // --- Audio State ---
  var isPlaying = false;

  // --- Utility Functions ---
  function shuffle(array) {
    var shuffled = array.slice();
    for (var i = shuffled.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = shuffled[i];
      shuffled[i] = shuffled[j];
      shuffled[j] = temp;
    }
    return shuffled;
  }

  function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    var mins = Math.floor(seconds / 60);
    var secs = Math.floor(seconds % 60);
    return mins + ':' + (secs < 10 ? '0' : '') + secs;
  }

  // --- Card Generation ---
  function createCards() {
    var cards = [];
    CARDS.forEach(function(card, index) {
      // English card
      cards.push({
        id: index + '-en',
        pairId: index,
        image: card.image,
        label: card.en,
        lang: 'en'
      });
      // Russian card
      cards.push({
        id: index + '-ru',
        pairId: index,
        image: card.image,
        label: card.ru,
        lang: 'ru'
      });
    });
    return shuffle(cards);
  }

  // --- Board Rendering ---
  function renderBoard() {
    var board = document.getElementById('game-board');
    if (!board) return;

    var cards = createCards();
    board.innerHTML = '';

    cards.forEach(function(card) {
      var cardEl = document.createElement('div');
      cardEl.className = 'card';
      cardEl.dataset.pairId = card.pairId;
      cardEl.dataset.cardId = card.id;

      cardEl.innerHTML =
        '<div class="card-inner">' +
          '<div class="card-front">🦔</div>' +
          '<div class="card-back">' +
            '<img src="assets/images/hedgehog/' + card.image + '" alt="">' +
            '<span class="card-label">' + card.label + '</span>' +
          '</div>' +
        '</div>';

      cardEl.addEventListener('click', function() {
        flipCard(cardEl);
      });

      board.appendChild(cardEl);
    });
  }

  // --- Game Logic ---
  function flipCard(cardEl) {
    if (isLocked) return;
    if (cardEl.classList.contains('flipped')) return;
    if (cardEl.classList.contains('matched')) return;

    cardEl.classList.add('flipped');
    flippedCards.push(cardEl);

    if (flippedCards.length === 2) {
      moveCount++;
      updateMoveCount();
      checkMatch();
    }
  }

  function checkMatch() {
    isLocked = true;
    var card1 = flippedCards[0];
    var card2 = flippedCards[1];

    if (card1.dataset.pairId === card2.dataset.pairId) {
      // Match!
      card1.classList.add('matched');
      card2.classList.add('matched');
      matchedPairs++;
      flippedCards = [];
      isLocked = false;

      if (matchedPairs === CARDS.length) {
        showWinMessage();
      }
    } else {
      // No match - flip back after delay
      setTimeout(function() {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        flippedCards = [];
        isLocked = false;
      }, 1000);
    }
  }

  function updateMoveCount() {
    var countEl = document.getElementById('move-count');
    if (countEl) {
      countEl.textContent = moveCount;
    }
  }

  function showWinMessage() {
    var winEl = document.getElementById('win-message');
    if (winEl) {
      winEl.hidden = false;
    }
  }

  function resetGame() {
    flippedCards = [];
    matchedPairs = 0;
    moveCount = 0;
    isLocked = false;
    updateMoveCount();

    var winEl = document.getElementById('win-message');
    if (winEl) {
      winEl.hidden = true;
    }

    renderBoard();
  }

  // --- Audio Player ---
  function initAudioPlayer() {
    var audio = document.getElementById('club-song');
    var playBtn = document.getElementById('play-btn');
    var progressBar = document.querySelector('.progress-bar');
    var progressFill = document.querySelector('.progress-fill');
    var timeDisplay = document.querySelector('.time-display');

    if (!audio || !playBtn) return;

    // Play/Pause toggle
    playBtn.addEventListener('click', function() {
      if (isPlaying) {
        audio.pause();
        playBtn.querySelector('.play-icon').textContent = '▶';
        isPlaying = false;
      } else {
        audio.play();
        playBtn.querySelector('.play-icon').textContent = '⏸';
        isPlaying = true;
      }
    });

    // Update progress bar
    audio.addEventListener('timeupdate', function() {
      if (audio.duration) {
        var progress = (audio.currentTime / audio.duration) * 100;
        if (progressFill) {
          progressFill.style.width = progress + '%';
        }
        if (timeDisplay) {
          timeDisplay.textContent = formatTime(audio.currentTime) + ' / ' + formatTime(audio.duration);
        }
      }
    });

    // Song ended
    audio.addEventListener('ended', function() {
      playBtn.querySelector('.play-icon').textContent = '▶';
      isPlaying = false;
      if (progressFill) {
        progressFill.style.width = '0%';
      }
    });

    // Click on progress bar to seek
    if (progressBar) {
      progressBar.addEventListener('click', function(e) {
        var rect = progressBar.getBoundingClientRect();
        var clickPos = (e.clientX - rect.left) / rect.width;
        if (audio.duration) {
          audio.currentTime = clickPos * audio.duration;
        }
      });
    }

    // Initial time display
    audio.addEventListener('loadedmetadata', function() {
      if (timeDisplay) {
        timeDisplay.textContent = '0:00 / ' + formatTime(audio.duration);
      }
    });
  }

  // --- Initialize ---
  function init() {
    // Only run on easter egg page
    if (!document.querySelector('.easter-egg-page')) return;

    renderBoard();
    initAudioPlayer();

    var resetBtn = document.getElementById('reset-game');
    if (resetBtn) {
      resetBtn.addEventListener('click', resetGame);
    }
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
