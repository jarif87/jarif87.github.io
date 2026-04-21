# Sadik Al Jarif's Portfolio

Welcome to my personal portfolio website, showcasing my expertise in **Data Science**, **Machine Learning**, **Deep Learning**, and **Large Language Models (LLMs)**. Built with a cyberpunk-inspired design, this site highlights my skills, projects, professional experience, and education. Explore my journey in AI and connect with me for collaboration or opportunities.

![Portfolio Screenshot](assets/images/image.JPG)

## Features

- **Home**: Dynamic Hero section with Typed.js animation ("Recurrent Neural Networks") and Particles.js background.
- **About**: Overview of my background in ML, DL, and LLMs, with a focus on tools like TensorFlow, PyTorch, and LangChain.
- **Skills**: Interactive display of technical skills with badges loaded from `skills.json` (e.g., Scikit-Learn, FastAI).
- **Education**: Timeline of academic achievements, featuring MIU (logo: `assets/images/educat/miu.png`).
- **Work**: Showcase of projects with links to a dedicated Projects page (`projects/index.html`).
- **Experience**: Detailed professional experience on a separate page (`experience/index.html`).
- **Contact**: Connect section with EmailJS-powered form, social links, and Particles.js effects.
- **404 Page**: Custom error page with cyberpunk styling (`404.html`).
- **Responsive Design**: Optimized for desktop and mobile (media queries at 600px and 450px).

## Project Structure
```
E:.
│   404.html                # Custom 404 error page
│   index.html              # Main portfolio page
│   README.md               # Project documentation
│   skills.json             # Data for Skills section badges
│
├───assets
│   ├───css
│   │       404.css         # Styles for 404 page
│   │       style.css       # Main portfolio styles
│   │
│   ├───images
│   │   │   end-to-end-ml-badge.svg  # Badge for ML projects
│   │   │   End.svg         # Miscellaneous SVG
│   │   │   image.JPG       # Hero or background image
│   │   │   Scikit.svg      # Scikit-Learn badge (local)
│   │   │
│   │   └───educat
│   │           miu.png     # MIU logo for Education section
│   │
│   └───js
│           404.js          # Script for 404 page
│           app.js          # Particles.js configuration
│           particles.min.js  # Particles.js library
│           script.js       # Main JavaScript (Typed.js, EmailJS, etc.)
│
├───experience
│       index.html          # Experience page
│
└───projects
        index.html          # Projects page
        script.js           # Projects page JavaScript
        style.css           # Projects page styles

```


## Technologies Used

- **Frontend**:
  - HTML5, CSS3, JavaScript (jQuery)
  - Fonts: Poppins, Nunito (Google Fonts)
  - Icons: Font Awesome
- **Libraries**:
  - Typed.js: Hero section text animation
  - Particles.js: Hero and Connect section backgrounds
  - Vanilla Tilt: 3D tilt effects
  - ScrollReveal: Scroll animations
  - EmailJS: Contact form functionality
- **Data**:
  - `skills.json`: JSON for Skills section badges
- **Styling**:
  - Cyberpunk aesthetic with dark gradients
  - Responsive media queries (600px, 450px)
- **CDNs**:
  - Simple Icons (badges, e.g., TensorFlow)
  - Iconduck (alternative badge source)

## Setup Instructions

1. **Clone or Download**:
   - Clone the repository: `git clone https://github.com/jarif87/portfolio.git` (replace with your repo URL).
   - Or download and extract to `E:/`.

2. **File Structure**:
   - Ensure files are organized as shown above.
   - Place `skills.json` in `E:/` and assets in `E:/assets/`.

3. **Open the Portfolio**:
   - Open `E:/index.html` in a browser (e.g., Chrome) using `file:///E:/index.html`.
   - No server is required for static hosting.

4. **Optional: Local Server**:
   - For better testing, use a local server:
     - Install Node.js and run `npx http-server E:/`.
     - Access at `http://localhost:8080`.

5. **EmailJS Setup** (Contact Form):
   - Sign up at [EmailJS](https://www.emailjs.com/).
   - Update `script.js` with your EmailJS user ID, service ID, and template ID:
     ```javascript
     emailjs.init("your_user_id");
     ```

6. **Fix Known Issues** (Optional):
   - **Badge 404 Errors**: Three badges (including Scikit-Learn) in `skills.json` fail to load. Host SVGs locally:
     - Download SVGs for Scikit-Learn (`Scikit.svg`), FastAI, and LangChain.
     - Save to `E:/assets/images/skills/`.
     - Update `skills.json`:
       ```json
       {
           "name": "Scikit-Learn",
           "icon": "./assets/images/skills/Scikit.svg",
           "color": "#F7931E",
           "logo": "custom",
           "profile_url": "https://scikit-learn.org/",
           "details": "Machine learning library"
       }
       ```
   - **Projects Page**: May use separate `style.css`. Consider unifying with main `style.css`.

## Known Issues

- **Skills Badges**:
  - Three badges (Scikit-Learn, likely FastAI, LangChain) have 404 errors due to unavailable Simple Icons URLs (e.g., `https://cdn.simpleicons.org/scikit-learn/F7931E`).
  - Temporary fix: Use local `Scikit.svg` for Scikit-Learn. Download SVGs for others and update `skills.json`.
- **Work Section**:
  - Main `style.css` expects images (`.work .box-container .box img`), but `script.js` may generate text-only cards. To fix:
    ```css
    .work .box-container .box img { display: none; }
    .work .box-container .box:hover img { transform: none; }
    .work .box-container .box .content { transform: none; position: static; background: rgba(0, 0, 0, 0.8); padding: 1rem; }
    ```
- **Projects Page**:
  - Separate `style.css` may cause layout inconsistencies. Test and consider using main `style.css`.

## Future Improvements

- Host all skill badges locally in `E:/assets/images/skills/` to avoid CDN issues.
- Unify `style.css` across `index.html`, `experience/index.html`, and `projects/index.html`.
- Add project images to `assets/images/projects/` for Work section.
- Enhance Projects page with dynamic content (e.g., `projects.json`).
- Deploy to GitHub Pages or Netlify for online access.

## Contact

- **Email**: sadikaljarif05@gmail.com
- **LinkedIn**: [Sadik Al Jarif](https://www.linkedin.com/in/sadik-al-jarif-3033351a6/)
- **GitHub**: [jarif87](https://github.com/jarif87)
- **X**: [@jarif84112354](https://x.com/jarif84112354)


Feel free to reach out for collaboration, feedback, or inquiries!

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

##### Designed with 💻 by [Sadik Al Jarif](https://www.linkedin.com/in/sadik-al-jarif-3033351a6/)


## Explanation of README.md
* **Overview:**
  - Introduces the portfolio as a showcase of your ML/AI expertise with a cyberpunk aesthetic.
  - Includes a placeholder screenshot (image.JPG; replace with an actual screenshot if desired).

* **Features:**
  - Lists key sections (Home, About, Skills, etc.) with details like Typed.js, Particles.js, and responsiveness.
  - Mentions separate Experience and Projects pages.

* **Project Structure:**
  - Reflects the exact directory listing you provided.
  - Clarifies file purposes (e.g., Scikit.svg for Scikit-Learn badge).

* **Technologies:**
  - Covers HTML/CSS/JS, libraries (Typed.js, EmailJS), and CDNs (Simple Icons, Iconduck).

* **Setup:**
  - Provides clear instructions for local viewing and EmailJS setup.
  - Suggests a local server for testing.
  - Includes a fix for badge 404 errors (local hosting).

* **Known Issues:**
  - Documents the three failing badges (Scikit-Learn, assumed FastAI, LangChain).
  - Notes Work section mismatch and Projects page styling.

* **Future Improvements:**
  - Suggests local badge hosting, unified styling, and deployment.
