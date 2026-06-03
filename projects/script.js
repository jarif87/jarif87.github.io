$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");
    $("#scroll-top").toggleClass("active", window.scrollY > 300);
  });

  const projects = [
    {
      name: "Fraud Detection GNN",
      desc: "Graph neural network with 85% validation accuracy; deployed on Hugging Face Spaces via Flask.",
      category: "GNN, Deep Learning",
      tech: ["PyTorch Geometric", "Flask", "Hugging Face"],
      links: {
        code: "https://github.com/jarif87/fraudnet-real-time-detection-with-gnns",
      },
    },
    {
      name: "BN-EN Fake News Scanner",
      desc: "CLIP-based Bangla–English multimodal detector; reduced model size 660 MB → 330 MB (50%) via ONNX quantization.",
      category: "Multimodal, NLP",
      tech: ["CLIP", "ONNX", "Python"],
      links: {
        code: "https://github.com/jarif87/multimodal-bn-en-fake-news-scanner",
      },
    },
    {
      name: "Brain Tumor Classifier",
      desc: "CNN achieving 96% tumor detection accuracy with treatment recommendations; deployed via Streamlit.",
      category: "Deep Learning, CNNs",
      tech: ["TensorFlow", "CNN", "Streamlit"],
      links: { code: "https://github.com/jarif87/brain-tumor-diagnosis-tool" },
    },
    {
      name: "Ethical AI Bias Auditor",
      desc: "Fine-tuned ELECTRA detecting gender, racial & cultural bias across 5 categories with 89% accuracy.",
      category: "NLP, Transformers",
      tech: ["ELECTRA", "Hugging Face", "Python"],
      links: {
        code: "https://github.com/jarif87/ethical-ai-bias-auditor-for-llms",
      },
    },
    {
      name: "Supply Chain Optimizer",
      desc: "PPO reinforcement learning agent in custom Gym environment; 94% reward optimization, deployed via Streamlit.",
      category: "Reinforcement Learning",
      tech: ["PPO", "OpenAI Gym", "Streamlit"],
      links: {
        code: "https://github.com/jarif87/autonomous-supply-chain-optimizer-with-rl",
      },
    },
    {
      name: "Multimodal Mental Health Companion",
      desc: "RoBERTa + ResNet18 with Groq API chatbot for real-time multimodal mental health support.",
      category: "LLMs, Multimodal",
      tech: ["RoBERTa", "ResNet18", "Groq API"],
      links: {
        code: "https://github.com/jarif87/multimodal-ai-mental-health-companion",
      },
    },
    {
      name: "Brain Tumor Classifier and Treatment Advisor",
      desc: "Powered by generative AI and LLM models for classification and personalized treatment recommendations.",
      category: "LLMs",
      tech: ["LLM", "Generative AI", "Python"],
      links: {
        code: "https://github.com/jarif87/Brain-Tumor-Classifier-and-Treatment-Advisor",
      },
    },
    {
      name: "Electrocardiogram Analysis",
      desc: "Upload an ECG image to receive detailed patient information and diagnosis using LLM and generative AI.",
      category: "LLMs",
      tech: ["LLM", "Computer Vision", "Streamlit"],
      links: {
        code: "https://github.com/jarif87/Electrocardiogram-Analysis-Insights-into-Heart-Health",
      },
    },
    {
      name: "HealthPredict AI-Powered Disease Forecasting",
      desc: "Enter symptoms to receive accurate disease predictions and detailed diagnostic suggestions powered by LLM.",
      category: "LLMs",
      tech: ["LLM", "NLP", "Streamlit"],
      links: {
        code: "https://github.com/jarif87/Symptoms-to-Disease-Prediction-and-Analysis-System",
      },
    },
    {
      name: "Geospatial Semantic Search Tool",
      desc: "Semantic search and interactive map display tool deployed on Hugging Face Spaces.",
      category: "Huggingface Transformer Models",
      tech: ["Transformers", "Hugging Face", "Maps API"],
      links: {
        code: "https://github.com/jarif87/Geospatial-Semantic-Search-and-Interactive-Map-Display-Tool",
      },
    },
    {
      name: "Crop Disease Identification",
      desc: "Utilizes fastai to classify crop diseases with high accuracy for agricultural applications.",
      category: "FASTAI",
      tech: ["Fastai", "CNN", "Python"],
      links: {
        code: "https://github.com/jarif87/Crop-Disease-Identification_codeclause",
      },
    },
    {
      name: "Text Summarization",
      desc: "Fine-tuned and deployed distilbart and BART models for abstractive text summarization on HuggingFace.",
      category: "FASTAI, BLURR",
      tech: ["BLURR", "Transformers", "Fastai"],
      links: { code: "https://github.com/jarif87/Text-Summarizer" },
    },
    {
      name: "Movie & TV Show Genre Classification",
      desc: "Scraped movie/TV data with Selenium; built multi-label genre classifier with BLURR and Hugging Face.",
      category: "NLP",
      tech: ["Selenium", "BLURR", "Fastai"],
      links: {
        code: "https://github.com/jarif87/Movie_Tvshow_Genre_Classification",
      },
    },
    {
      name: "Fruit Recognizer",
      desc: "Computer vision model utilizing Fastai and ResNet-50 for accurate fruit classification.",
      category: "FASTAI",
      tech: ["Fastai", "ResNet-50", "CNN"],
      links: { code: "https://github.com/jarif87/Fruit-Recognizer" },
    },
    {
      name: "Bangla & English Fake News Detection",
      desc: "LSTM, GRU, BI-LSTM, and DistilBERT-based fake news detection for Bangla and English text.",
      category: "Deep Learning",
      tech: ["LSTM", "DistilBERT", "NLP"],
      links: {
        code: "https://github.com/jarif87/Bangla_English-Fake-News-Detection",
      },
    },
    {
      name: "Urban Address Numeral Recognition",
      desc: "CNN-based system to predict house number digits from street view images with high precision.",
      category: "CNNs",
      tech: ["CNN", "Computer Vision", "Kaggle"],
      links: {
        code: "https://www.kaggle.com/code/evilspirit05/streetview-house-number-digit-detector",
      },
    },
    {
      name: "Alzheimer's Stage Classifier",
      desc: "EfficientNetB6 model classifying Alzheimer's disease into five progressive categories.",
      category: "Deep Learning, CNNs",
      tech: ["EfficientNetB6", "Transfer Learning", "Kaggle"],
      links: {
        code: "https://www.kaggle.com/code/evilspirit05/alzheimer-s-stage-classifier-efficientnetb6",
      },
    },
    {
      name: "Custom Intrusion Detection System",
      desc: "Python-based IDS detecting port scans and SSH brute force attacks using Scapy packet sniffing with Wireshark validation.",
      category: "Cybersecurity, Network Security",
      tech: ["Python", "Scapy", "Wireshark", "IDS"],
      links: {
        code: "https://github.com/jarif87/custom-intrusion-detection-system-ids",
      },
    },
    {
      name: "Vulnerability Assessment & Penetration Testing",
      desc: "Full-scale security assessment on Metasploitable environment. Identified FTP backdoor, SQL Injection, and provided hardening recommendations.",
      category: "Cybersecurity, Penetration Testing",
      tech: ["Kali Linux", "Metasploit", "Nmap", "SQL Injection"],
      links: {
        code: "https://github.com/jarif87/vulnerability-assessment-penetration-test-report",
      },
    },
    {
      name: "Malware Analysis & Reverse Engineering",
      desc: "Static & dynamic malware analysis with Python automation for metadata extraction, network capture parsing, and custom YARA rule IoC creation.",
      category: "Cybersecurity, Malware Analysis",
      tech: ["Python", "YARA", "Procmon", "tcpdump"],
      links: {
        code: "https://github.com/jarif87/malware-analysis-and-reverse-engineering",
      },
    },
    {
      name: "Web Application Security Audit",
      desc: "End-to-end penetration testing on OWASP Juice Shop identifying XSS, broken access control, and sensitive data exposure with remediation plans.",
      category: "Cybersecurity, Web Security",
      tech: ["OWASP", "Burp Suite", "XSS", "Access Control"],
      links: {
        code: "https://github.com/jarif87/web-application-security-audit",
      },
    },
    {
      name: "LogSentinel: Advanced Threat Log Analyzer",
      desc: "Python-based log analyzer detecting brute-force attacks across Linux/Windows logs with incident timeline reconstruction and cross-platform correlation.",
      category: "Cybersecurity, Incident Response",
      tech: ["Python", "SIEM", "Log Analysis", "Metasploitable"],
      links: {
        code: "https://github.com/jarif87/logsentinel-advanced-threat-log-analyzer",
      },
    },
  ];

  function getCategories(projects) {
    const cats = new Set();
    projects.forEach((p) => {
      p.category.split(",").forEach((c) => {
        const trimmed = c.trim();
        if (trimmed) cats.add(trimmed);
      });
    });
    return Array.from(cats).sort();
  }

  function createCategoryButtons(projects) {
    const categories = getCategories(projects);
    const buttonGroup = document.querySelector("#filters");

    let html = `<button class="btn is-checked" data-filter="*">All (${projects.length})</button>`;

    categories.forEach((category) => {
      const count = projects.filter((p) =>
        p.category
          .split(",")
          .map((c) => c.trim())
          .includes(category),
      ).length;
      html += `<button class="btn" data-filter="${category}">${category} (${count})</button>`;
    });

    buttonGroup.innerHTML = html;
  }

  function showProjects(projects) {
    const container = document.querySelector(".box-container");
    let html = "";

    projects.forEach((project) => {
      const categories = project.category
        .split(",")
        .map((c) => c.trim())
        .join("|");

      const techTags = project.tech
        ? project.tech.map((t) => `<span class="tech-tag">${t}</span>`).join("")
        : "";

      html += `
        <div class="grid-item" data-categories="${categories}">
          <div class="box tilt" data-tilt data-tilt-max="4" data-tilt-speed="400">
            <div class="content">
              <div class="tag">
                <h3>${project.name}</h3>
                <span class="category-badge">${project.category.split(",")[0].trim()}</span>
              </div>
              <div class="desc">
                <p>${project.desc}</p>
                <div class="tech-stack">${techTags}</div>
              </div>
              <div class="btns">
                <a href="${project.links.code}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  <i class="fas fa-code"></i> View Code
                </a>
              </div>
            </div>
          </div>
        </div>`;
    });

    container.innerHTML = html;

    // FILTERING — explicit show/hide with ScrollReveal override
    $("#filters").on("click", "button", function () {
      const filterValue = $(this).attr("data-filter");
      $("#filters .is-checked").removeClass("is-checked");
      $(this).addClass("is-checked");

      const $items = $(".grid-item");

      if (filterValue === "*") {
        $items.each(function () {
          $(this).css({
            display: "flex",
            opacity: "1",
            transform: "none",
            visibility: "visible",
          });
        });
      } else {
        $items.each(function () {
          const cats = ($(this).attr("data-categories") || "").split("|");
          const isMatch = cats.indexOf(filterValue) !== -1;

          if (isMatch) {
            // Force visible and override any ScrollReveal inline styles
            $(this).css({
              display: "flex",
              opacity: "1",
              transform: "none",
              visibility: "visible",
            });
          } else {
            $(this).css({ display: "none" });
          }
        });
      }

      const visibleCount = $(".grid-item").filter(function () {
        return $(this).css("display") !== "none";
      }).length;

      $(".empty-state").toggle(visibleCount === 0);
    });

    // Tilt effect
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
      max: 4,
      speed: 400,
      glare: false,
      scale: 1.02,
    });
  }

  createCategoryButtons(projects);
  showProjects(projects);

  document.addEventListener("visibilitychange", function () {
    document.title =
      document.visibilityState === "visible"
        ? "Projects | Sadik Al Jarif"
        : "Come Back To Portfolio";
  });
});
