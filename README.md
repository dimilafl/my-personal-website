# Personal Website

A clean, professional personal website showcasing work in SCADA systems, markets, and Wall Street Silver.

## Structure

```
├── index.html                 # Home page
├── portfolio.html             # Portfolio with SCADA & WSS projects
├── wall-street-silver.html    # Wall Street Silver business page
├── writing.html               # Blog index
├── about.html                 # About page with avatar
├── resume.html                # Resume page
├── assets/
│   ├── css/
│   │   └── style.css         # Main stylesheet
│   ├── img/
│   │   └── avi.jpg           # Avatar image
│   └── resume/
│       └── dimitri_resume.pdf # Resume PDF (add your own)
└── posts/
    ├── 2025-11-28-scada-side-projects.html
    └── 2025-12-05-silver-market-data-pipeline.html
```

## Setup for GitHub Pages

### 1. Add Your Resume

Place your resume PDF at:
```
assets/resume/dimitri_resume.pdf
```

### 2. Update Placeholders

#### Contact Information (about.html)
Replace the placeholder contact info:
- Email: `your.email [at] example.com`
- LinkedIn: `https://linkedin.com/in/yourprofile`
- GitHub: `https://github.com/yourusername`

#### GitHub Repository Links (portfolio.html)
Update the placeholder GitHub link:
- `https://github.com/yourusername/scada-data-path`

### 3. Deploy to GitHub Pages

1. Go to your GitHub repository settings
2. Navigate to **Pages** section
3. Under **Source**, select:
   - Branch: `main` (or your preferred branch)
   - Folder: `/ (root)`
4. Click **Save**

Your site will be available at:
- `https://yourusername.github.io/my-personal-website/` (if using project pages)
- `https://yourusername.github.io/` (if using user/org pages with repo named `yourusername.github.io`)

### 4. Path Adjustments (if needed)

All paths are currently **relative** (no leading slashes), which works for:
- Opening files directly in a browser
- GitHub Pages at a subpath (e.g., `/my-personal-website/`)
- Custom domains

**No changes needed** unless you're hosting at a different base path.

## Adding Blog Posts

To add a new blog post:

1. Create a new HTML file in `posts/` following the naming pattern:
   ```
   posts/YYYY-MM-DD-post-title.html
   ```

2. Use this template:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8" />
     <title>Your Post Title — Dimitri</title>
     <meta name="viewport" content="width=device-width, initial-scale=1" />
     <link rel="stylesheet" href="../assets/css/style.css" />
   </head>
   <body>
     <header class="site-header">
       <div class="container header-inner">
         <a href="../index.html" class="site-title">Dimitri</a>
         <nav class="nav">
           <a href="../portfolio.html">Portfolio</a>
           <a href="../writing.html">Writing</a>
           <a href="../wall-street-silver.html">Wall Street Silver</a>
           <a href="../about.html">About</a>
           <a href="../resume.html">Resume</a>
         </nav>
       </div>
     </header>

     <main class="site-main container">
       <article>
         <header>
           <h1>Your Post Title</h1>
           <p><time datetime="YYYY-MM-DD">YYYY-MM-DD</time> &middot; <span class="post-tags">[Tag]</span></p>
         </header>

         <p>Your content here...</p>

         <p><a href="../writing.html">← Back to Writing</a></p>
       </article>
     </main>

     <footer class="site-footer">
       <div class="container">
         <small>© Dimitri. Static HTML.</small>
       </div>
     </footer>
   </body>
   </html>
   ```

3. Add the post to `writing.html`:
   ```html
   <li>
     <span class="post-date">YYYY-MM-DD</span>
     <a href="posts/YYYY-MM-DD-post-title.html">
       Your Post Title
     </a>
     <span class="post-tags">[Your Tags]</span>
   </li>
   ```

## Tech Stack

- **Pure HTML/CSS** - No build process, no dependencies
- **Dark theme** - Professional color scheme
- **Responsive design** - Works on all devices
- **Static site** - Fast, secure, easy to host

## License

All content © Dimitri. Code structure provided as-is for personal use.
