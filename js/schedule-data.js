/**
 * Schedule Exceptions
 *
 * Add entries here when the club is NOT meeting or has a special announcement.
 * The default message ("Yes, we're meeting this Saturday!") is shown automatically
 * for any Saturday not listed here.
 *
 * Key:   Date string in YYYY-MM-DD format (must be a Saturday)
 * Value: Object with:
 *   - type: 'cancelled' (no meeting) or 'special' (meeting with changes)
 *   - en:   English message
 *   - ru:   Russian message
 *
 * Examples:
 *
 *   '2026-12-26': {
 *     type: 'cancelled',
 *     en: 'No meeting — Merry Christmas! 🎄',
 *     ru: 'Встречи не будет — С Рождеством! 🎄'
 *   },
 *   '2027-01-02': {
 *     type: 'cancelled',
 *     en: 'No meeting — Happy New Year! 🎆',
 *     ru: 'Встречи не будет — С Новым годом! 🎆'
 *   },
 *   '2027-03-20': {
 *     type: 'special',
 *     en: 'Meeting moved to 2:00 PM this week!',
 *     ru: 'На этой неделе встреча в 14:00!'
 *   }
 */
var SCHEDULE_EXCEPTIONS = {
  // 2026
  '2026-07-04': {
    type: 'cancelled',
    en: 'No meeting — Happy 4th of July! 🇺🇸',
    ru: 'Встречи не будет — С Днём независимости! 🇺🇸'
  },

  // 2027
  '2027-12-25': {
    type: 'cancelled',
    en: 'No meeting — Merry Christmas! 🎄',
    ru: 'Встречи не будет — С Рождеством! 🎄'
  },

  // 2028
  '2028-01-01': {
    type: 'cancelled',
    en: 'No meeting — Happy New Year! 🎆',
    ru: 'Встречи не будет — С Новым годом! 🎆'
  }
};
