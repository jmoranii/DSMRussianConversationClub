---
name: update-message
description: Update Yozhik's Latest Message on the secret room page. Use when the user wants to post a new message, announcement, or update to the Yozhik's Latest Message board. Triggers on requests like "update the message", "post a new message", "change Yozhik's message", or "update the announcement".
---

# Update Yozhik's Latest Message

Update the message displayed in the "Yozhik's Latest Message" section of the secret room page (`yozhiks-secret-room.html`).

## File to Edit

`assets/messages/messages.js` — contains a `YOZHIK_MESSAGES` object with `en` and `ru` keys.

## Procedure

1. Ask the user what the new message should say (if not already provided).
2. Read `assets/messages/messages.js` to see the current message.
3. Write the new message in **both languages**:
   - `en`: English version
   - `ru`: Russian translation
4. Append the sign-off with **today's date** in the correct format for each language:
   - English: `*— Yozhik, Month Day, Year*` (e.g., `*— Yozhik, February 21, 2026*`)
   - Russian: `*— Ёжик, Day MonthGenitive Year г.*` (e.g., `*— Ёжик, 21 февраля 2026 г.*`)
5. Markdown formatting is supported: `**bold**`, `*italic*`, `[links](url)`, etc.
6. After editing, commit and push:
   - Stage: `git add assets/messages/messages.js`
   - Commit message format: `update Yozhik's latest message — Mon DD, YYYY`
   - Push: `git push origin main`

## Russian Date Formatting

Month names in genitive case for the sign-off:

| Month | Genitive |
|-------|----------|
| January | января |
| February | февраля |
| March | марта |
| April | апреля |
| May | мая |
| June | июня |
| July | июля |
| August | августа |
| September | сентября |
| October | октября |
| November | ноября |
| December | декабря |

## Example

The file structure must always be:

```js
var YOZHIK_MESSAGES = {
  en: `
Your English message here.

*— Yozhik, February 21, 2026*
`,
  ru: `
Your Russian message here.

*— Ёжик, 21 февраля 2026 г.*
`
};
```

Keep the comment header at the top of the file intact. Only replace the content between the backticks.
