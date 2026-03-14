/**
 * Des Moines Russian Conversation Club
 * Main JavaScript - Language and Theme Toggles
 */

(function () {
  'use strict';

  // --- Constants ---
  const STORAGE_KEYS = {
    LANG: 'dmrcc-language',
    THEME: 'dmrcc-theme'
  };

  const DEFAULTS = {
    LANG: 'en',
    THEME: 'light'
  };

  // --- DOM Elements ---
  const html = document.documentElement;
  const langToggle = document.getElementById('lang-toggle');
  const themeToggle = document.getElementById('theme-toggle');
  const calendarBtn = document.getElementById('add-to-calendar');
  const copyAddressBtn = document.getElementById('copy-address');

  // --- Constants ---
  const ADDRESS = 'Des Moines Public Library, 1000 Grand Avenue, Des Moines, IA 50309';

  // --- Secret Room State ---
  var secretRoomClicks = 0;
  var secretRoomTimeout = null;

  // --- Utilities ---
  function getStoredValue(key, defaultValue) {
    try {
      return localStorage.getItem(key) || defaultValue;
    } catch (e) {
      // localStorage not available (private browsing, etc.)
      return defaultValue;
    }
  }

  function setStoredValue(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      // localStorage not available
    }
  }

  function getSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  // --- Language Toggle ---
  function initLanguage() {
    const storedLang = getStoredValue(STORAGE_KEYS.LANG, DEFAULTS.LANG);
    html.setAttribute('data-lang', storedLang);
  }

  function toggleLanguage() {
    const currentLang = html.getAttribute('data-lang');
    const newLang = currentLang === 'en' ? 'ru' : 'en';

    html.setAttribute('data-lang', newLang);
    setStoredValue(STORAGE_KEYS.LANG, newLang);
  }

  // --- Theme Toggle ---
  function initTheme() {
    // Check for stored preference, otherwise use system preference
    const storedTheme = localStorage.getItem(STORAGE_KEYS.THEME);

    if (storedTheme) {
      html.setAttribute('data-theme', storedTheme);
    } else {
      // Use system preference
      const systemTheme = getSystemTheme();
      html.setAttribute('data-theme', systemTheme);
    }
  }

  function toggleTheme() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    html.setAttribute('data-theme', newTheme);
    setStoredValue(STORAGE_KEYS.THEME, newTheme);
  }

  // --- Meeting Status Banner ---
  var MONTHS_EN = ['January','February','March','April','May','June',
                   'July','August','September','October','November','December'];
  var MONTHS_RU = ['января','февраля','марта','апреля','мая','июня',
                   'июля','августа','сентября','октября','ноября','декабря'];

  function getRelevantSaturday() {
    var now = new Date();
    var dayOfWeek = now.getDay(); // 0=Sun, 6=Sat

    if (dayOfWeek === 6) {
      // It's Saturday — show today if before 2 PM, otherwise next week
      var meetingEnd = new Date(now);
      meetingEnd.setHours(14, 0, 0, 0);
      if (now < meetingEnd) {
        return now;
      }
      var next = new Date(now);
      next.setDate(now.getDate() + 7);
      return next;
    }

    // Sun–Fri: show the upcoming Saturday
    var daysUntil = (6 - dayOfWeek + 7) % 7;
    var nextSat = new Date(now);
    nextSat.setDate(now.getDate() + daysUntil);
    return nextSat;
  }

  function formatDateKey(date) {
    var y = date.getFullYear();
    var m = String(date.getMonth() + 1).padStart(2, '0');
    var d = String(date.getDate()).padStart(2, '0');
    return y + '-' + m + '-' + d;
  }

  function formatDateEN(date) {
    return MONTHS_EN[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
  }

  function formatDateRU(date) {
    return date.getDate() + ' ' + MONTHS_RU[date.getMonth()] + ' ' + date.getFullYear() + ' г.';
  }

  function renderMeetingStatus() {
    var container = document.getElementById('meeting-status');
    if (!container) return;

    var saturday = getRelevantSaturday();
    var dateKey = formatDateKey(saturday);
    var exception = (typeof SCHEDULE_EXCEPTIONS !== 'undefined')
                    ? SCHEDULE_EXCEPTIONS[dateKey]
                    : undefined;

    var dateEN = formatDateEN(saturday);
    var dateRU = formatDateRU(saturday);

    if (exception) {
      var icon = exception.type === 'cancelled' ? '⚠️' : 'ℹ️';
      container.className = 'meeting-status meeting-status--' + exception.type;
      container.innerHTML =
        '<span class="meeting-status-icon">' + icon + '</span>' +
        '<span class="meeting-status-text">' +
          '<span lang="en">' + exception.en + '</span>' +
          '<span lang="ru">' + exception.ru + '</span>' +
        '</span>';
    } else {
      container.className = 'meeting-status meeting-status--confirmed';
      container.innerHTML =
        '<span class="meeting-status-icon">✅</span>' +
        '<span class="meeting-status-text">' +
          '<span lang="en">We\'re meeting this Saturday, ' + dateEN + '!</span>' +
          '<span lang="ru">Встречаемся в эту субботу, ' + dateRU + '!</span>' +
        '</span>';
    }
  }

  // --- Add to Calendar ---
  function addToCalendar() {
    // Google Calendar URL with recurring Saturday event at 1 PM Central
    var baseUrl = 'https://calendar.google.com/calendar/render';

    // Find next Saturday for the initial date
    var now = new Date();
    var daysUntilSaturday = (6 - now.getDay() + 7) % 7;
    if (daysUntilSaturday === 0) daysUntilSaturday = 7; // If today is Saturday, use next Saturday
    var nextSaturday = new Date(now);
    nextSaturday.setDate(now.getDate() + daysUntilSaturday);

    // Format date as YYYYMMDD
    var year = nextSaturday.getFullYear();
    var month = String(nextSaturday.getMonth() + 1).padStart(2, '0');
    var day = String(nextSaturday.getDate()).padStart(2, '0');

    // 1 PM to 2 PM Central Time (13:00 - 14:00)
    var startTime = year + month + day + 'T130000';
    var endTime = year + month + day + 'T140000';

    var params = new URLSearchParams({
      action: 'TEMPLATE',
      text: 'Des Moines Russian Conversation Club / Русский Разговорный Клуб',
      location: ADDRESS + ', Study Room 1',
      details: 'Weekly Russian conversation meetup - all levels welcome!\n\nЕженедельная встреча для общения на русском языке — для всех уровней!\n\nMore info / Подробнее: https://dsmrussianconversationclub.com/',
      dates: startTime + '/' + endTime,
      ctz: 'America/Chicago',
      recur: 'RRULE:FREQ=WEEKLY;BYDAY=SA'
    });

    window.open(baseUrl + '?' + params.toString(), '_blank');
  }

  // --- Copy Address ---
  function copyAddress() {
    if (!navigator.clipboard) {
      console.error('Clipboard API not available');
      return;
    }

    navigator.clipboard.writeText(ADDRESS).then(function() {
      // Success feedback
      copyAddressBtn.classList.add('copied');
      var textSpans = copyAddressBtn.querySelectorAll('.copy-text');
      var originalTexts = [];

      textSpans.forEach(function(span) {
        originalTexts.push(span.textContent);
        span.textContent = span.lang === 'ru' ? 'Скопировано!' : 'Copied!';
      });

      // Reset after 2 seconds
      setTimeout(function() {
        copyAddressBtn.classList.remove('copied');
        textSpans.forEach(function(span, i) {
          span.textContent = originalTexts[i];
        });
      }, 2000);
    }).catch(function(err) {
      console.error('Failed to copy address:', err);
    });
  }

  // --- Secret Room Trigger ---
  function handleSecretRoomClick() {
    var footerYozhik = document.getElementById('footer-yozhik');
    secretRoomClicks++;

    // Visual feedback
    if (secretRoomClicks === 1) {
      footerYozhik.classList.add('secret-hint-1');
    } else if (secretRoomClicks === 2) {
      footerYozhik.classList.remove('secret-hint-1');
      footerYozhik.classList.add('secret-hint-2');
    } else if (secretRoomClicks >= 3) {
      // Trigger secret room!
      footerYozhik.classList.remove('secret-hint-2');
      footerYozhik.classList.add('secret-activated');
      setTimeout(function() {
        window.location.href = 'yozhiks-secret-room.html';
      }, 500);
      return;
    }

    // Reset after 2 seconds of inactivity
    clearTimeout(secretRoomTimeout);
    secretRoomTimeout = setTimeout(function() {
      secretRoomClicks = 0;
      footerYozhik.classList.remove('secret-hint-1', 'secret-hint-2');
    }, 2000);
  }

  // --- Event Listeners ---
  function bindEvents() {
    if (langToggle) {
      langToggle.addEventListener('click', toggleLanguage);
    }

    if (themeToggle) {
      themeToggle.addEventListener('click', toggleTheme);
    }

    if (calendarBtn) {
      calendarBtn.addEventListener('click', addToCalendar);
    }

    if (copyAddressBtn) {
      copyAddressBtn.addEventListener('click', copyAddress);
    }

    // Secret room trigger
    var footerYozhik = document.getElementById('footer-yozhik');
    if (footerYozhik) {
      // Use both click and touchend for cross-platform support
      // touchend is more reliable on Android
      footerYozhik.addEventListener('click', handleSecretRoomClick);
      footerYozhik.addEventListener('touchend', function(e) {
        e.preventDefault(); // Prevent ghost click
        handleSecretRoomClick();
      }, { passive: false });
      footerYozhik.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') handleSecretRoomClick();
      });
    }

    // Listen for system theme changes
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // Only auto-switch if user hasn't set a preference
        if (!localStorage.getItem(STORAGE_KEYS.THEME)) {
          html.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        }
      });
    }
  }

  // --- Initialize ---
  function init() {
    initLanguage();
    initTheme();
    renderMeetingStatus();
    bindEvents();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
