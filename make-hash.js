// Usage: node make-hash.js "your passcode or password"
// Prints a salted hash to paste into index.html (CONFIG block). Needs Node.js only.
const c = require('crypto');
const pw = (process.argv[2] || '').trim();
if (!pw) { console.log('Usage: node make-hash.js "Add Pwd Here"'); process.exit(1); }
const salt = c.randomBytes(16).toString('hex');
const hash = c.pbkdf2Sync(pw, Buffer.from(salt, 'hex'), 150000, 32, 'sha256').toString('hex');
console.log(salt + ':' + hash);
