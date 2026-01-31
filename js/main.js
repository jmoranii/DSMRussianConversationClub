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

  // --- Event Listeners ---
  function bindEvents() {
    if (langToggle) {
      langToggle.addEventListener('click', toggleLanguage);
    }

    if (themeToggle) {
      themeToggle.addEventListener('click', toggleTheme);
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
    bindEvents();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
