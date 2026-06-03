$(document).ready(function () {
  // Navbar toggle
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  // Scroll behavior
  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    // Scroll top button
    if (window.scrollY > 60) {
      document.querySelector("#scroll-top").classList.add("active");
    } else {
      document.querySelector("#scroll-top").classList.remove("active");
    }

    // Scroll spy
    $("section").each(function () {
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let top = $(window).scrollTop();
      let id = $(this).attr("id");

      if (top > offset && top < offset + height) {
        $(".navbar ul li a").removeClass("active");
        $(".navbar").find(`[href="#${id}"]`).addClass("active");
      }
    });
  });

  // Smooth scrolling
  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear",
    );
  });

  // EmailJS for contact form
  // Initialize EmailJS on page load
  // Initialize EmailJS on page load
  // Initialize EmailJS on page load
  emailjs.init("5IgxZrnqzRaQtnAhg"); // Your provided Public Key

  // Handle contact form submission
  // Initialize EmailJS with your public key
  emailjs.init("cmxo1-ZrPBxZifeuM"); // Your actual EmailJS public key

  // Handle form submission
  $("#contact-form").submit(function (event) {
    event.preventDefault();
    console.log("Form submitted, sending via EmailJS...");

    const form = this;

    // Send email using the correct service and template IDs
    emailjs.sendForm("service_3dl402w", "template_zqi103p", form).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        form.reset();
        alert("Form Submitted Successfully!");
      },
      function (error) {
        console.error("FAILED...", error);
        alert("Failed to send message: " + JSON.stringify(error));
      },
    );
  });

  // Typed.js effect for Hero section
  var typed = new Typed(".typing-text", {
    strings: [
      "Machine Learning",
      "Deep Learning",
      "Large Language Models",
      "Agentic AI Systems",
      "Retrieval-Augmented Generation",
      "Computer Vision",
      "Natural Language Processing",
      "Graph Neural Networks",
      "Reinforcement Learning",
      "Multimodal AI",
      "Generative AI",
      "MLOps & Cloud Deployment",
      "Transformer Fine-Tuning",
      "Cybersecurity & Penetration Testing",
      "Vulnerability Assessment",
      "Web Application Security",
      "OWASP & Ethical Hacking",
      "Network Security Analysis",
      "Malware Analysis",
      "Reverse Engineering",
      "Kali Linux & Metasploit",
      "Data Science & Analytics",
      "Neural Network Architecture",
      "Docker & CI/CD Pipelines",
      "AWS SageMaker & GCP",
    ],
    typeSpeed: 50,
    backSpeed: 40,
    backDelay: 1200,
    loop: true,
  });

  // Initialize particles for Connect section
  particlesJS("connect-particles", {
    particles: {
      number: { value: 50, density: { enable: true, value_area: 800 } },
      color: { value: "#ffae00" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffd900",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { particles_nb: 4 },
      },
    },
    retina_detect: true,
  });

  // Projects data
  const projects = [
    {
      name: "Fraud Detection GNN",
      desc: "Graph neural network with 85% validation accuracy; deployed on Hugging Face Spaces via Flask.",
      category: "GNN, Deep Learning",
      links: {
        code: "https://github.com/jarif87/fraudnet-real-time-detection-with-gnns",
      },
    },
    {
      name: "BN-EN Fake News Scanner",
      desc: "CLIP-based Bangla–English multimodal detector; reduced model size 660 MB → 330 MB (50%) via ONNX quantization.",
      category: "Multimodal, NLP",
      links: {
        code: "https://github.com/jarif87/multimodal-bn-en-fake-news-scanner",
      },
    },
    {
      name: "Brain Tumor Classifier",
      desc: "CNN achieving 96% tumor detection accuracy with treatment recommendations; deployed via Streamlit.",
      category: "Deep Learning, CNNs",
      links: {
        code: "https://github.com/jarif87/brain-tumor-diagnosis-tool",
      },
    },
    {
      name: "Ethical AI Bias Auditor",
      desc: "Fine-tuned ELECTRA detecting gender, racial & cultural bias across 5 categories with 89% accuracy.",
      category: "NLP, Transformers",
      links: {
        code: "https://github.com/jarif87/ethical-ai-bias-auditor-for-llms",
      },
    },
    {
      name: "Supply Chain Optimizer",
      desc: "PPO reinforcement learning agent in custom Gym environment; 94% reward optimization, deployed via Streamlit.",
      category: "Reinforcement Learning",
      links: {
        code: "https://github.com/jarif87/autonomous-supply-chain-optimizer-with-rl",
      },
    },
    {
      name: "Multimodal Mental Health Companion",
      desc: "RoBERTa + ResNet18 with Groq API chatbot for real-time multimodal mental health support.",
      category: "LLMs, Multimodal",
      links: {
        code: "https://github.com/jarif87/multimodal-ai-mental-health-companion",
      },
    },

    {
      name: "Brain Tumor Classifier and Treatment Advisor",
      desc: "Introducing Brain Tumor Classifier and Treatment Advisor, powered by generative AI and LLM models.",
      category: "LLMs",
      links: {
        code: "https://github.com/jarif87/Brain-Tumor-Classifier-and-Treatment-Advisor",
      },
    },
    {
      name: "Electrocardiogram Analysis Insights into Heart Health",
      desc: "Upload an ECG image to receive detailed patient information and diagnosis using LLM and generative AI through Streamlit.",
      category: "LLMs",
      links: {
        code: "https://github.com/jarif87/Electrocardiogram-Analysis-Insights-into-Heart-Health",
      },
    },
    {
      name: "HealthPredict AI-Powered Disease Forecasting and Medical Aid System",
      desc: "Enter your disease symptoms to receive accurate disease predictions and detailed diagnostic suggestions powered by LLM and generative AI through Streamlit.",
      category: "LLMs",
      links: {
        code: "https://github.com/jarif87/Symptoms-to-Disease-Prediction-and-Analysis-System",
      },
    },
    {
      name: "Geospatial Semantic Search and Interactive Map Display Tool",
      desc: "Introducing Geospatial Semantic Search and Interactive Map Display Tool, deployed on Hugging Face Spaces.",
      category: "Huggingface transformer Models",
      links: {
        code: "https://github.com/jarif87/Geospatial-Semantic-Search-and-Interactive-Map-Display-Tool",
      },
    },

    {
      name: "Crop Disease Identification",
      desc: "Explore Crop Disease Identification, where I utilize fastai to classify crop diseases with high accuracy.",
      category: "FASTAI",
      links: {
        code: "https://github.com/jarif87/Crop-Disease-Identification_codeclause",
      },
    },
    {
      name: "Text Summerization",
      desc: "Text summarization models developed using BLURR and Hugging Face transformers (distilbartcnn-6-6, distilbart-cnn-12-6, and facebook/bart-large-cnn) have been fine-tuned and deployed on HuggingFace.",
      category: "FASTAI,BLURR",
      links: { code: "https://github.com/jarif87/Text-Summarizer" },
    },
    {
      name: "Movie, TVshow Genre Classification",
      desc: "Using Python and Selenium, I scraped movie and TV show data from a website. With BLURR, Fastai, and Hugging Face Transformers, I developed a multi-label genre classification model.",
      category: "NLP",
      links: {
        code: "https://github.com/jarif87/Movie_Tvshow_Genre_Classification",
      },
    },
    {
      name: "Fruit Recognizer",
      desc: "I utilized Fastai and ResNet-50 to create a fruit recognition model.",
      category: "FASTAI",
      links: { code: "https://github.com/jarif87/Fruit-Recognizer" },
    },

    {
      name: "Bangla and English Fake News Detection Using Deep Learning",
      desc: "This project builds a powerful fake news detection system for Bangla and English using LSTM, GRU, BI-LSTM, and DistilBERT Transformer models.",
      category: "Deep Learning",
      links: {
        code: "https://github.com/jarif87/Bangla_English-Fake-News-Detection",
      },
    },
    {
      name: "Urban Address Numeral Recognition Street View",
      desc: "This project harnesses Convolutional Neural Networks (CNNs) to precisely predict house number digits from street view images.",
      category: "CNNs",
      links: {
        code: "https://www.kaggle.com/code/evilspirit05/streetview-house-number-digit-detector",
      },
    },

    {
      name: "Alzheimer's Stage Classifier EfficientNetB6",
      desc: "Using the EfficientNetB6 model, this project classifies Alzheimer's disease into five categories.",
      category: "Deep Learning,CNNs",
      links: {
        code: "https://www.kaggle.com/code/evilspirit05/alzheimer-s-stage-classifier-efficientnetb6",
      },
    },
  ];

  // Fetch skills data
  async function fetchData(type = "skills") {
    try {
      let response = await fetch("skills.json");
      if (!response.ok) {
        console.error(`HTTP ${response.status}: Failed to fetch skills.json`);
        return [];
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch skills.json:", error);
      return [];
    }
  }

  // Show skills
  function showSkills(data) {
    let skillsContainer = document.getElementById("skillsContainer");
    if (!skillsContainer) {
      console.error("skillsContainer not found");
      return;
    }
    let skillHTML = "";
    data.forEach((category) => {
      skillHTML += `
        <div class="skills-category">
            <h3 class="category-title">${category.category}</h3>
            <p class="category-desc">${category.description}</p>
            <div class="category-badges">`;

      category.skills.forEach((skill) => {
        const badgeUrl = `https://img.shields.io/badge/-${encodeURIComponent(skill.name)}-${skill.color.replace("#", "")}?style=for-the-badge&logo=${encodeURIComponent(skill.logo || "default")}&logoColor=white`;
        skillHTML += `<a href="${skill.profile_url}" target="_blank" aria-label="${skill.name}">
        <img src="${badgeUrl}" alt="${skill.name}" class="skill-badge" />
    </a>`;
      });

      skillHTML += `</div></div>`;
    });
    skillsContainer.innerHTML = skillHTML;
  }

  // Show projects
  function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .box-container");
    if (!projectsContainer) {
      console.error("projectsContainer not found");
      return;
    }
    let projectHTML = "";
    projects.slice(0, 6).forEach((project) => {
      projectHTML += `
            <div class="box tilt">
                <div class="content">
                    <div class="tag">
                        <h3>${project.name}</h3>
                    </div>
                    <div class="desc">
                        <p>${project.desc}</p>
                        <span class="category">Category: ${project.category}</span>
                        <div class="btns">
                            <a href="${project.links.code}" class="btn" target="_blank" aria-label="View code for ${project.name}">
                                View Code <i class="fas fa-code"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>`;
    });
    projectsContainer.innerHTML = projectHTML;

    // VanillaTilt effect
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.3,
    });

    // ScrollReveal animation
    ScrollReveal().reveal("#work .box", {
      distance: "50px",
      origin: "bottom",
      duration: 1200,
      easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    });
  }

  // Load skills
  fetchData().then((data) => {
    if (data.length === 0) {
      console.warn("No skills data loaded. Check skills.json path or content.");
      return;
    }
    showSkills(data);
  });

  // Load projects
  showProjects(projects);

  // ScrollReveal animations for other sections
  const srtop = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 1000,
    reset: true,
  });

  /* SCROLL HOME */
  srtop.reveal(".home .content h3", {});
  srtop.reveal(".home .content p", {});
  srtop.reveal(".home .image", {});
  srtop.reveal(".home .linkedin", {});
  srtop.reveal(".home .github", {});
  srtop.reveal(".home .twitter", {});
  srtop.reveal(".home .telegram", {});
  srtop.reveal(".home .instagram", {});
  srtop.reveal(".home .facebook", {});

  /* SCROLL ABOUT */
  srtop.reveal(".about .content h3", {});
  srtop.reveal(".about .content .tag", {});
  srtop.reveal(".about .content p", {});
  srtop.reveal(".about .content .box-container", {});
  srtop.reveal(".about .content .resumebtn", {});

  /* SCROLL SKILLS */
  //   srtop.reveal(".skills .container", {});
  //   srtop.reveal(".skills .container .bar", {});

  /* SCROLL EDUCATION */
  srtop.reveal(".education .box", {});

  /* SCROLL PROJECTS */
  srtop.reveal(".work .box", {});

  /* SCROLL EXPERIENCE */
  srtop.reveal(".experience .timeline", {});
  srtop.reveal(".experience .timeline .container", {});

  /* SCROLL CONTACT */
  srtop.reveal(".contact .container", {});
  srtop.reveal(".contact .container .form-group", {});

  /* SCROLL CONNECT */
  srtop.reveal(".connect .box-container", {});
  srtop.reveal(".connect .box", {});
  srtop.reveal(".connect .credit", {});
});

// Visibility change
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    document.title = "Portfolio | Sadik Al Jarif";
    $("#favicon").attr("href", "/assets/images/favicon.png");
  } else {
    document.title = "Come Back To Portfolio";
    $("#favicon").attr("href", "/assets/images/favhand.png");
  }
});

// Disable developer mode
document.onkeydown = function (e) {
  if (e.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
};
