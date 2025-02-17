# SoBatistaCyber Website

This repository contains the source code for the **SoBatistaCyber** website, built with **Jekyll** and **Bootstrap**.

## 📌 Prerequisites

Before running the website locally, you need to install the required dependencies.

### ✅ Arch Linux
Run the following command:
```bash
sudo pacman -Syu ruby base-devel git nodejs npm
```

Then install additional dependencies:
```bash
gem install jekyll bundler
```

### ✅ Debian/Ubuntu (APT)
Run the following commands:

```bash
sudo apt update && sudo apt install -y ruby-full build-essential git nodejs npm
```
Then install Jekyll and Bundler:
```bash
gem install jekyll bundler
```
---
---

## 🚀 Running the Website Locally
Once the dependencies are installed, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/SoBatistaCyber-Dev/sobatistacyber-dev.github.io.git
cd sobatistacyber-dev.github.io
```

2. Install dependencies:
```bash
bundle install
```

3. Run Jekyll locally:
```bash
bundle exec jekyll serve
```

The website should now be available at: http://localhost:4000

## 🔄 Updating and Changing Code
### 1️⃣ Updating Dependencies
To update Jekyll and all dependencies, run:
```bash
bundle update
```

### 2️⃣ Making Changes
- HTML Structure: Modify files inside _layouts/, _includes/, and _pages/
- CSS/Styles: Modify styles inside assets/css/
- JavaScript: Update scripts in assets/js/
- Content: Add/edit pages inside _posts/ and _pages/
- Config: Modify _config.yml for site settings

### 3️⃣ Rebuilding the Site
After making changes, restart the local server:

```bash
bundle exec jekyll serve
```

## ❓ Troubleshooting
If you encounter issues, try:
```bash
bundle exec jekyll clean
bundle install
bundle exec jekyll serve
```
If the issue persists, ensure all dependencies are installed correctly.

---
---

**Maintained by SoBatistaCyber**
```bash

This **README.md** file is fully formatted in markdown and includes all necessary commands with proper **copy buttons** for easy execution

```
