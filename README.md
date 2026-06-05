# Sadik Al Jarif — Portfolio

Personal portfolio of an **AI/ML Engineer & Cybersecurity Practitioner**. Built to showcase production-grade systems in deep learning, large language models, agentic AI, and offensive security.

![Portfolio](assets/images/image.JPG)

---

## Sections

| Section        | Description                                                |
| -------------- | ---------------------------------------------------------- |
| **Home**       | Hero with Typed.js animation and 3D tilt profile image     |
| **About**      | Background in AI/ML, cybersecurity, and MLOps              |
| **Skills**     | Interactive badges loaded from `skills.json`               |
| **Education**  | Academic timeline with institutional branding              |
| **Work**       | Featured projects (6 on home, full archive at `/projects`) |
| **Experience** | Professional timeline with roles and dates                 |
| **Contact**    | EmailJS-powered form with direct social links              |

---

## Project Structure

```
.
├── index.html              # Main portfolio
├── 404.html                # Custom error page
├── skills.json             # Skills data for badge generation
├── README.md
│
├── assets/
│   ├── css/
│   │   ├── style.css       # Main styles
│   │   └── 404.css         # Error page styles
│   ├── images/
│   │   ├── image.JPG       # Hero image
│   │   ├── favicon.jpg     # Site favicon
│   │   └── educat/
│   │       └── miu.png     # University logo
│   └── js/
│       ├── script.js       # Main logic (Typed.js, EmailJS, ScrollReveal)
│       ├── app.js          # Particle background config
│       └── particles.min.js
│
├── projects/
│   ├── index.html          # Full project archive
│   ├── style.css           # Projects page styles
│   └── script.js           # Project filter & render logic
│
└── experience/
    └── index.html          # Detailed experience timeline
```

---

## Tech Stack

**Frontend**

- HTML5, CSS3, JavaScript (jQuery 3.6)
- Fonts: [Inter](https://fonts.google.com/specimen/Inter), [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk), [Poppins](https://fonts.google.com/specimen/Poppins), [Nunito](https://fonts.google.com/specimen/Nunito)
- Icons: [Font Awesome](https://fontawesome.com/) 6.4

**Libraries**

- [Typed.js](https://github.com/mattboldt/typed.js) — hero text animation
- [Vanilla Tilt](https://micku7zu.github.io/vanilla-tilt.js/) — 3D card effects
- [ScrollReveal](https://scrollrevealjs.org/) — scroll-triggered animations
- [EmailJS](https://www.emailjs.com/) — contact form handling
- [Particles.js](https://vincentgarreau.com/particles.js/) — background effects

**Data**

- `skills.json` — structured skill categories with badge metadata

---

## Local Setup

1. **Clone**

   ```bash
   git clone https://github.com/jarif87/jarif87.github.io.git
   cd jarif87.github.io
   ```

2. **Serve** (recommended for proper asset loading)

   ```bash
   npx serve .
   # or
   python -m http.server 8080
   ```

   Open `http://localhost:8080`.

3. **EmailJS Configuration** (optional — for contact form)
   - Sign up at [emailjs.com](https://www.emailjs.com/)
   - Replace the credentials in `assets/js/script.js`:
     ```javascript
     emailjs.init("YOUR_PUBLIC_KEY");
     emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form);
     ```

---

## Notes

- **Skill Badges**: Rendered via [Shields.io](https://shields.io/) using data from `skills.json`. If a badge 404s, verify the `logo` field matches a [Simple Icons](https://simpleicons.org/) slug or host the SVG locally.
- **Projects**: The home page displays the first 6 projects from the array in `script.js`. The full 22+ project archive lives at `/projects`.
- **Favicon**: The "come back" tab state uses `favhand.png` (256×256 square PNG). Ensure this is a 1:1 ratio for clean browser tab rendering.

---

## Contact

- **Email**: [sadikaljarif05@gmail.com](mailto:sadikaljarif05@gmail.com)
- **LinkedIn**: [linkedin.com/in/sadikaljarif](https://www.linkedin.com/in/sadikaljarif/)
- **GitHub**: [github.com/jarif87](https://github.com/jarif87)
- **X**: [x.com/jarif84112354](https://x.com/jarif84112354)

---

##### **Architected by Sadik Al Jarif** · Systems that think. Networks that endure.
