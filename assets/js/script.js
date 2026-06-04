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

    if (window.scrollY > 60) {
      document.querySelector("#scroll-top").classList.add("active");
    } else {
      document.querySelector("#scroll-top").classList.remove("active");
    }

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
      { scrollTop: $($(this).attr("href")).offset().top },
      500,
      "linear",
    );
  });

  // EmailJS
  emailjs.init("cmxo1-ZrPBxZifeuM");
  $("#contact-form").submit(function (event) {
    event.preventDefault();
    const form = this;
    emailjs.sendForm("service_3dl402w", "template_zqi103p", form).then(
      function () {
        form.reset();
        alert("Form Submitted Successfully!");
      },
      function (error) {
        alert("Failed to send message: " + JSON.stringify(error));
      },
    );
  });

  // Typed.js
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

  // ALL 22 PROJECTS — updated with cybersecurity
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
      links: { code: "https://github.com/jarif87/brain-tumor-diagnosis-tool" },
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
      desc: "Powered by generative AI and LLM models for classification and personalized treatment recommendations.",
      category: "LLMs",
      links: {
        code: "https://github.com/jarif87/Brain-Tumor-Classifier-and-Treatment-Advisor",
      },
    },
    {
      name: "Electrocardiogram Analysis",
      desc: "Upload an ECG image to receive detailed patient information and diagnosis using LLM and generative AI.",
      category: "LLMs",
      links: {
        code: "https://github.com/jarif87/Electrocardiogram-Analysis-Insights-into-Heart-Health",
      },
    },
    {
      name: "HealthPredict AI-Powered Disease Forecasting",
      desc: "Enter symptoms to receive accurate disease predictions and detailed diagnostic suggestions powered by LLM.",
      category: "LLMs",
      links: {
        code: "https://github.com/jarif87/Symptoms-to-Disease-Prediction-and-Analysis-System",
      },
    },
    {
      name: "Geospatial Semantic Search Tool",
      desc: "Semantic search and interactive map display tool deployed on Hugging Face Spaces.",
      category: "Huggingface Transformer Models",
      links: {
        code: "https://github.com/jarif87/Geospatial-Semantic-Search-and-Interactive-Map-Display-Tool",
      },
    },
    {
      name: "Crop Disease Identification",
      desc: "Utilizes fastai to classify crop diseases with high accuracy for agricultural applications.",
      category: "FASTAI",
      links: {
        code: "https://github.com/jarif87/Crop-Disease-Identification_codeclause",
      },
    },
    {
      name: "Text Summarization",
      desc: "Fine-tuned and deployed distilbart and BART models for abstractive text summarization on HuggingFace.",
      category: "FASTAI, BLURR",
      links: { code: "https://github.com/jarif87/Text-Summarizer" },
    },
    {
      name: "Movie & TV Show Genre Classification",
      desc: "Scraped movie/TV data with Selenium; built multi-label genre classifier with BLURR and Hugging Face.",
      category: "NLP",
      links: {
        code: "https://github.com/jarif87/Movie_Tvshow_Genre_Classification",
      },
    },
    {
      name: "Fruit Recognizer",
      desc: "Computer vision model utilizing Fastai and ResNet-50 for accurate fruit classification.",
      category: "FASTAI",
      links: { code: "https://github.com/jarif87/Fruit-Recognizer" },
    },
    {
      name: "Bangla & English Fake News Detection",
      desc: "LSTM, GRU, BI-LSTM, and DistilBERT-based fake news detection for Bangla and English text.",
      category: "Deep Learning",
      links: {
        code: "https://github.com/jarif87/Bangla_English-Fake-News-Detection",
      },
    },
    {
      name: "Urban Address Numeral Recognition",
      desc: "CNN-based system to predict house number digits from street view images with high precision.",
      category: "CNNs",
      links: {
        code: "https://www.kaggle.com/code/evilspirit05/streetview-house-number-digit-detector",
      },
    },
    {
      name: "Alzheimer's Stage Classifier",
      desc: "EfficientNetB6 model classifying Alzheimer's disease into five progressive categories.",
      category: "Deep Learning, CNNs",
      links: {
        code: "https://www.kaggle.com/code/evilspirit05/alzheimer-s-stage-classifier-efficientnetb6",
      },
    },
    {
      name: "Custom Intrusion Detection System",
      desc: "Python-based IDS detecting port scans and SSH brute force attacks using Scapy packet sniffing with Wireshark validation.",
      category: "Cybersecurity, Network Security",
      links: {
        code: "https://github.com/jarif87/custom-intrusion-detection-system-ids",
      },
    },
    {
      name: "Vulnerability Assessment & Penetration Testing",
      desc: "Full-scale security assessment on Metasploitable environment. Identified FTP backdoor, SQL Injection, and provided hardening recommendations.",
      category: "Cybersecurity, Penetration Testing",
      links: {
        code: "https://github.com/jarif87/vulnerability-assessment-penetration-test-report",
      },
    },
    {
      name: "Malware Analysis & Reverse Engineering",
      desc: "Static & dynamic malware analysis with Python automation for metadata extraction, network capture parsing, and custom YARA rule IoC creation.",
      category: "Cybersecurity, Malware Analysis",
      links: {
        code: "https://github.com/jarif87/malware-analysis-and-reverse-engineering",
      },
    },
    {
      name: "Web Application Security Audit",
      desc: "End-to-end penetration testing on OWASP Juice Shop identifying XSS, broken access control, and sensitive data exposure with remediation plans.",
      category: "Cybersecurity, Web Security",
      links: {
        code: "https://github.com/jarif87/web-application-security-audit",
      },
    },
    {
      name: "LogSentinel: Advanced Threat Log Analyzer",
      desc: "Python-based log analyzer detecting brute-force attacks across Linux/Windows logs with incident timeline reconstruction and cross-platform correlation.",
      category: "Cybersecurity, Incident Response",
      links: {
        code: "https://github.com/jarif87/logsentinel-advanced-threat-log-analyzer",
      },
    },
  ];

  // Fetch skills
  async function fetchData() {
    try {
      let response = await fetch("skills.json");
      if (!response.ok) return [];
      return await response.json();
    } catch (error) {
      return [];
    }
  }

  function showSkills(data) {
    let skillsContainer = document.getElementById("skillsContainer");
    if (!skillsContainer) return;
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

  // Show projects on HOME PAGE (only first 6)
  function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .box-container");
    if (!projectsContainer) return;
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

    VanillaTilt.init(document.querySelectorAll(".tilt"), {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.3,
    });

    ScrollReveal().reveal("#work .box", {
      distance: "50px",
      origin: "bottom",
      duration: 1200,
      easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    });
  }

  fetchData().then((data) => {
    if (data.length) showSkills(data);
  });

  showProjects(projects);

  // ScrollReveal
  const srtop = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 1000,
    reset: true,
  });
  srtop.reveal(".home .content h3", {});
  srtop.reveal(".home .content p", {});
  srtop.reveal(".home .image", {});
  srtop.reveal(".about .content h3", {});
  srtop.reveal(".about .content .tag", {});
  srtop.reveal(".about .content p", {});
  srtop.reveal(".about .content .box-container", {});
  srtop.reveal(".about .content .resumebtn", {});
  // REMOVED: Education delay removed
  srtop.reveal(".work .box", {});
  // REMOVED: Experience delay removed
  // REMOVED: Contact delay removed
  srtop.reveal(".connect .box-container", {});
  srtop.reveal(".connect .box", {});
  srtop.reveal(".connect .credit", {});
});

// Visibility change
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    document.title = "Portfolio | Sadik Al Jarif";
    $("#favicon").attr("href", "/assets/images/favicon.jpg");
  } else {
    document.title = "Come Back To Portfolio";
    $("#favicon").attr("href", "/assets/images/favhand.jpg");
  }
});
