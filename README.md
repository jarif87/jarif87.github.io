# Sadik Al Jarif — Portfolio

Personal portfolio of an **AI/ML Engineer & Cybersecurity Practitioner**. Showcases production-grade systems in deep learning, large language models, agentic AI, computer vision, and offensive security.

![Portfolio](assets/images/image.JPG)

---

## Live Site

**https://jarif87.github.io**

---

## Sections

| Section        | Description                                                         |
| -------------- | ------------------------------------------------------------------- |
| **Home**       | Hero with Typed.js animation and 3D tilt profile image              |
| **About**      | Professional background in AI/ML, cybersecurity, and MLOps          |
| **Skills**     | Interactive skill badges rendered from `skills.json` via Shields.io |
| **Education**  | Academic timeline with institutional branding                       |
| **Work**       | Featured projects (6 on home, 22+ full archive at `/projects`)      |
| **Experience** | Professional timeline with roles and dates                          |
| **Contact**    | EmailJS-powered form with direct social links                       |
| **Footer**     | 3-column rounded card layout with contact info and quick links      |

---

## Project Structure

```
.
├── index.html              # Main portfolio page
├── 404.html                # Custom error page
├── skills.json             # Skill categories & badge metadata
├── README.md
│
├── assets/
│   ├── css/
│   │   ├── style.css       # Main styles (light cyan theme)
│   │   └── 404.css         # Error page styles
│   ├── images/
│   │   ├── image.JPG       # Hero profile image
│   │   ├── favicon.jpg     # Default favicon
│   │   ├── favhand.png     # "Come back" tab state favicon (256×256)
│   │   └── educat/
│   │       └── miu.png     # University logo
│   └── js/
│       ├── script.js       # Main logic (Typed.js, EmailJS, projects, skills)
│       └── 404.js          # Error page script
│
├── projects/
│   ├── index.html          # Full project archive with filtering
│   ├── style.css           # Projects page styles
│   └── script.js           # Project render & filter logic
│
└── experience/
    └── index.html          # Detailed experience timeline
```

---

## Tech Stack

**Frontend**

- HTML5, CSS3, JavaScript (jQuery 3.6)
- Fonts: [Poppins](https://fonts.google.com/specimen/Poppins), [Nunito](https://fonts.google.com/specimen/Nunito), [Inter](https://fonts.google.com/specimen/Inter), [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)
- Icons: [Font Awesome](https://fontawesome.com/) 5.15 / 6.4

**Libraries**

- [Typed.js](https://github.com/mattboldt/typed.js) — hero text cycling
- [Vanilla Tilt](https://micku7zu.github.io/vanilla-tilt.js/) — 3D card hover effects
- [ScrollReveal](https://scrollrevealjs.org/) — scroll-triggered entrance animations
- [EmailJS](https://www.emailjs.com/) — contact form submission without backend

**Data**

- `skills.json` — structured categories with Shields.io badge parameters
- `projects` array (in `script.js`) — 22+ projects with metadata and GitHub links

---

## Local Setup

```bash
# Clone
git clone https://github.com/jarif87/jarif87.github.io.git
cd jarif87.github.io

# Serve (required for fetch() to load skills.json properly)
npx serve .
# or
python -m http.server 8080
```

Open `http://localhost:8080`.

---

## Configuration

### EmailJS (Contact Form)

Replace the credentials in `assets/js/script.js` with your own from [emailjs.com](https://www.emailjs.com/):

```javascript
emailjs.init("YOUR_PUBLIC_KEY");
emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form);
```

### Skills Badges

Badges are rendered via [Shields.io](https://shields.io/) using data from `skills.json`. If a badge fails to load, verify the `logo` field matches a [Simple Icons](https://simpleicons.org/) slug, or host the SVG locally and update the path.

### Favicon

- Default: `favicon.jpg` (shown when tab is active)
- "Come back" state: `favhand.png` (shown when user switches tabs)
- **Important:** `favhand.png` must be a **1:1 square** image. Browsers force-crop rectangular images in tab icons, causing clipping.

---

## Design Notes

- **Light cyan theme** with section-specific pastel backgrounds (mint, lavender, peach, sky blue, slate, rose)
- **Glassmorphism** navbar with `backdrop-filter: blur(12px)`
- **3-column footer** with rounded cards, hover lift effects, and gradient accents
- **Deep teal footer bar** (`rgba(10, 45, 42, 0.96)`) with cyan accent text
- Fully responsive with breakpoints at 991px, 768px, 600px, and 450px

---

## Contact

- **Email**: [sadikaljarif05@gmail.com](mailto:sadikaljarif05@gmail.com)
- **LinkedIn**: [linkedin.com/in/sadikaljarif](https://www.linkedin.com/in/sadikaljarif/)
- **GitHub**: [github.com/jarif87](https://github.com/jarif87)
- **X**: [x.com/jarif84112354](https://x.com/jarif84112354)-

---

##### **Architected by Sadik Al Jarif** · Systems that think. Networks that endure.
