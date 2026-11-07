# Safari Academy Question Bank
Free, open-source Grade 12 exam practice for Safari Academy students. A static site: no build step, no server.
Students enter a monthly passcode once. Admin: press **Ctrl/Cmd + Shift + A three times**.

## 1. Set your passwords (do this first)
Passwords are stored as salted hashes. For each new passcode run (needs Node.js):

    node make-hash.js "a-long-passcode-here"

Paste the output into the CONFIG block at the top of the last `<script>` in `index.html`:
- `ADMIN_HASH` – hash of your admin password.
- `MONTH_CODES` – one hash per month, e.g. `'2027-01': 'salt:hash'`.

The demo passwords (`ChangeMe-Admin-2026`, `SAFARI-NOV26`, `SAFARI-DEC26`) are public. **Replace them before sharing the link.**
Use long values (admin 16+ characters, passcodes 12+, e.g. three random words and a number) because the repo is public.
Give students the plain passcode through the school (class announcement or notice board), never in the repo.

## 2. Upload to GitHub
1. Sign in at github.com, click **New repository**, name it `safari-academy-question-bank`, choose **Public**, click **Create repository**.
2. Click **uploading an existing file**, drag in every file from this folder (`index.html`, `questions.json`, `vercel.json`, `make-hash.js`, `README.md`, `LICENSE`, `.gitignore`), then **Commit changes**.

Or with Git:

    git init
    git add .
    git commit -m "Safari Academy Question Bank"
    git branch -M main
    git remote add origin https://github.com/YOUR-USERNAME/safari-academy-question-bank.git
    git push -u origin main

## 3. Publish on Vercel
1. Go to vercel.com and sign up with **Continue with GitHub**.
2. Click **Add New → Project**, pick `safari-academy-question-bank`, click **Import**.
3. Framework Preset: **Other**. Leave Build Command and Output Directory empty. Click **Deploy**.
4. In about a minute you get a link like `https://safari-academy-question-bank.vercel.app`. Send that to the principal.

Every `git push` or file edit on GitHub redeploys automatically.

## Adding questions for everyone
Questions added in the admin page live only in that browser. Click **Export questions.json**, replace `questions.json` in GitHub (open the file, pencil icon, paste, commit). Vercel redeploys and all students see them.

## Security: what this protects and what it does not
Protects: no plain-text passwords in the code, salted PBKDF2 hashes, security headers (CSP, no framing, HTTPS only), pinned script versions, escaped text everywhere, validated question files, 5-attempt lockouts.
Does not protect: lockouts and scores are stored in each browser, so clearing site data resets them, and anyone with a strong GPU could try to guess weak passcodes from the public hashes offline. The admin page cannot change what other students see, because students only read `questions.json` from GitHub. For per-student accounts, a shared scoreboard or unbreakable lockouts, add a backend (for example Supabase) later.
