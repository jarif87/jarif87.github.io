$(document).ready(function () {
    // Navbar toggle
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // Scroll behavior
    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // Scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });

        // Ensure skills section remains visible
        $('.skills').css({
            visibility: 'visible',
            opacity: 1
        });
    });

    // Smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear');
    });

    // Emailjs for contact form
    $("#contact-form").submit(function (event) {
        emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");
        emailjs.sendForm('contact_service', 'template_contact', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });

    // Typed.js effect
    var typed = new Typed(".typing-text", {
        strings: [
            "Supervised Learning",
            "Regression Algorithms",
            "Classification Algorithms",
            "Unsupervised Learning",
            "Clustering",
            "Anomaly Detection",
            "Artificial Neural Networks (ANNs)",
            "Convolutional Neural Networks (CNNs)",
            "Recurrent Neural Networks (RNNs)",
            "Transformer Models",
            "Transfer Learning",
            "MLOps Concepts",
            "Large Language Models (LLMs)"
        ],
        loop: true,
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 500,
    });

    // Projects data
    const projects = [
        {
            name: "Galactic-Assistant-QuasarBot",
            desc: "Deployed on Hugging Face Spaces, Galactic Assistant QuasarBot integrates LLM and generative AI for seamless access and interaction.",
            category: "LLMs",
            links: { code: "https://github.com/jarif87/Galactic-Assistant-QuasarBot" }
        },
        {
            name: "Brain Tumor Classifier and Treatment Advisor",
            desc: "Introducing Brain Tumor Classifier and Treatment Advisor, powered by generative AI and LLM models.",
            category: "LLMs",
            links: { code: "https://github.com/jarif87/Brain-Tumor-Classifier-and-Treatment-Advisor" }
        },
        {
            name: "Electrocardiogram Analysis Insights into Heart Health",
            desc: "Upload an ECG image to receive detailed patient information and diagnosis using LLM and generative AI through Streamlit.",
            category: "LLMs",
            links: { code: "https://github.com/jarif87/Electrocardiogram-Analysis-Insights-into-Heart-Health" }
        },
        {
            name: "HealthPredict AI-Powered Disease Forecasting and Medical Aid System",
            desc: "Enter your disease symptoms to receive accurate disease predictions and detailed diagnostic suggestions powered by LLM and generative AI through Streamlit.",
            category: "LLMs",
            links: { code: "https://github.com/jarif87/Symptoms-to-Disease-Prediction-and-Analysis-System" }
        },
        {
            name: "Geospatial Semantic Search and Interactive Map Display Tool",
            desc: "Introducing Geospatial Semantic Search and Interactive Map Display Tool, deployed on Hugging Face Spaces.",
            category: "Huggingface transformer Models",
            links: { code: "https://github.com/jarif87/Geospatial-Semantic-Search-and-Interactive-Map-Display-Tool" }
        },
        {
            name: "Streamcraft Conversational AI Assistant",
            desc: "Introducing StreamCraft Conversational AI Assistant, a chatbot powered by LLM and generative AI.",
            category: "LLMs",
            links: { code: "https://github.com/jarif87/StreamCraft-Conversational-AI-Assistant" }
        },
        {
            name: "Sherlock Holmes Text Generator",
            desc: "Introducing Sherlock Holmes Text Generator, deployed in production using RNN for predicting the next word.",
            category: "RNN",
            links: { code: "https://github.com/jarif87/Consulting-Lexicographer-Holmes-Word-Predictor" }
        },
        {
            name: "Crop Disease Identification",
            desc: "Explore Crop Disease Identification, where I utilize fastai to classify crop diseases with high accuracy.",
            category: "FASTAI",
            links: { code: "https://github.com/jarif87/Crop-Disease-Identification_codeclause" }
        },
        {
            name: "Text Summerization",
            desc: "Text summarization models developed using BLURR and Hugging Face transformers (distilbartcnn-6-6, distilbart-cnn-12-6, and facebook/bart-large-cnn) have been fine-tuned and deployed on HuggingFace.",
            category: "FASTAI,BLURR",
            links: { code: "https://github.com/jarif87/Text-Summarizer" }
        },
        {
            name: "Movie, TVshow Genre Classification",
            desc: "Using Python and Selenium, I scraped movie and TV show data from a website. With BLURR, Fastai, and Hugging Face Transformers, I developed a multi-label genre classification model.",
            category: "NLP",
            links: { code: "https://github.com/jarif87/Movie_Tvshow_Genre_Classification" }
        },
        {
            name: "Fruit Recognizer",
            desc: "I utilized Fastai and ResNet-50 to create a fruit recognition model.",
            category: "FASTAI",
            links: { code: "https://github.com/jarif87/Fruit-Recognizer" }
        },
        {
            name: "Pokelnsights",
            desc: "Scraped Pokémon data using Python and Selenium, then visualized it with Tableau for insightful analysis.",
            category: "Data Analysis",
            links: { code: "https://github.com/jarif87/PokeInsights" }
        },
        {
            name: "Bangla and English Fake News Detection Using Deep Learning",
            desc: "This project builds a powerful fake news detection system for Bangla and English using LSTM, GRU, BI-LSTM, and DistilBERT Transformer models.",
            category: "Deep Learning",
            links: { code: "https://github.com/jarif87/Bangla_English-Fake-News-Detection" }
        },
        {
            name: "Urban Address Numeral Recognition Street View",
            desc: "This project harnesses Convolutional Neural Networks (CNNs) to precisely predict house number digits from street view images.",
            category: "CNNs",
            links: { code: "https://www.kaggle.com/code/evilspirit05/streetview-house-number-digit-detector" }
        },
        {
            name: "GoogleNet Plant Disease Detect & Classify",
            desc: "Using GoogLeNet, a robust convolutional neural network, this project focuses on accurately classifying plant diseases to distinguish between healthy and diseased leaves.",
            category: "Deep Learning",
            links: { code: "https://www.kaggle.com/code/sadikaljarif/googlenet-plant-disease-detect-classify" }
        },
        {
            name: "Disaster Response Prediction Leveraging XLNet",
            desc: "This project uses the XLNet model in TensorFlow to predict disaster and non-disaster tweets with 81% accuracy.",
            category: "Huggingface transformer Models",
            links: { code: "https://www.kaggle.com/code/evilspirit05/disaster-response-prediction-leveraging-xlnet" }
        },
        {
            name: "Enhanced Spam Detection Using ALBERT",
            desc: "This project uses the ALBERT transformer model in TensorFlow for robust spam detection, achieving 99% accuracy with stop words and 98% without.",
            category: "Huggingface transformer Models",
            links: { code: "https://www.kaggle.com/code/evilspirit05/enhanced-spam-detection-using-albert" }
        },
        {
            name: "RoBERTaTweet Twitter Sentiment with RoBERTa",
            desc: "This project used ROBERTA in TensorFlow for Twitter sentiment analysis, achieving 96% accuracy.",
            category: "Huggingface transformer Models",
            links: { code: "https://www.kaggle.com/code/evilspirit05/sentiment-analysis-on-twitter-with-roberta" }
        },
        {
            name: "DenseNet121 Unveiling the Food-Nonfood Dichotomy",
            desc: "This project uses DenseNet121 to classify images as food or non-food with 95% accuracy.",
            category: "Deep Learning,CNNs",
            links: { code: "https://www.kaggle.com/code/evilspirit05/densenet121-unveiling-the-food-nonfood-dichotomy" }
        },
        {
            name: "A Guide to Identifying Various Dog Breeds",
            desc: "This guide uses ResNet50V2 to classify various dog breeds with 65% accuracy.",
            category: "Deep Learning,CNNs",
            links: { code: "https://www.kaggle.com/code/evilspirit05/a-guide-to-identifying-various-dog-breeds" }
        },
        {
            name: "Alzheimer's Stage Classifier EfficientNetB6",
            desc: "Using the EfficientNetB6 model, this project classifies Alzheimer's disease into five categories.",
            category: "Deep Learning,CNNs",
            links: { code: "https://www.kaggle.com/code/evilspirit05/alzheimer-s-stage-classifier-efficientnetb6" }
        },
        {
            name: "Beer Consumption Forecasting with Machine Learning",
            desc: "Explore how linear regression accurately predicts beer consumption with 74% accuracy, revealing insights into factors influencing consumption patterns.",
            category: "Deep Learning,CNNs",
            links: { code: "https://www.kaggle.com/code/evilspirit05/beerinsight-predicting-consumption-patterns" }
        }
    ];

    // Fetch skills data
    async function fetchData(type = "skills") {
        try {
            let response = await fetch("/skills.json");
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Failed to fetch skills.json:", error);
            return [];
        }
    }

    // Show skills
   function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    if (!skillsContainer) {
        console.error("skillsContainer not found");
        return;
    }
    let skillHTML = "";
    skills.forEach(skill => {
        const badgeUrl = `https://img.shields.io/badge/Skill-${encodeURIComponent(skill.name)}-${skill.color.replace('#', '')}?style=for-the-badge&logo=${encodeURIComponent(skill.logo || 'default')}&logoColor=white`;
        console.log(`Generating badge for ${skill.name}: ${badgeUrl}`);
        skillHTML += `
        <div class="bar">
            <div class="info">
                <a href="${skill.profile_url}" target="_blank" aria-label="${skill.name}">
                    <img src="${badgeUrl}" alt="${skill.name} Badge" class="skill-badge" onerror="console.error('Badge failed for ${skill.name}: ${badgeUrl}'); this.src='https://via.placeholder.com/50x20?text=Badge+Error';" />
                </a>
            </div>
        </div>`;
    });
    skillsContainer.innerHTML = skillHTML;
}
    

    // Show projects
    function showProjects(projects) {
        let projectsContainer = document.querySelector("#work .box-container");
        let projectHTML = "";
        projects.slice(0, 6).forEach(project => {
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
            'max-glare': 0.3
        });

        // ScrollReveal animation
        ScrollReveal().reveal('#work .box', {
            delay: 200,
            distance: '50px',
            origin: 'bottom',
            duration: 1200,
            interval: 100,
            easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
        });
    }

    // Load skills
    fetchData().then(data => {
        showSkills(data);
    });

    // Load projects
    showProjects(projects);

    // ScrollReveal animations for other sections
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    /* SCROLL HOME */
    srtop.reveal('.home .content h3', { delay: 200 });
    srtop.reveal('.home .content p', { delay: 200 });
    srtop.reveal('.home .content .btn', { delay: 200 });
    srtop.reveal('.home .image', { delay: 400 });
    srtop.reveal('.home .linkedin', { interval: 600 });
    srtop.reveal('.home .github', { interval: 800 });
    srtop.reveal('.home .twitter', { interval: 1000 });
    srtop.reveal('.home .telegram', { interval: 600 });
    srtop.reveal('.home .instagram', { interval: 600 });
    srtop.reveal('.home .dev', { interval: 600 });

    /* SCROLL ABOUT */
    srtop.reveal('.about .content h3', { delay: 200 });
    srtop.reveal('.about .content .tag', { delay: 200 });
    srtop.reveal('.about .content p', { delay: 200 });
    srtop.reveal('.about .content .box-container', { delay: 200 });
    srtop.reveal('.about .content .resumebtn', { delay: 200 });

    /* SCROLL SKILLS */
    srtop.reveal('.skills .container', { interval: 200 });
    srtop.reveal('.skills .container .bar', { delay: 400 });

    /* SCROLL EDUCATION */
    srtop.reveal('.education .box', { interval: 200 });

    /* SCROLL PROJECTS */
    srtop.reveal('.work .box', { interval: 200 });

    /* SCROLL EXPERIENCE */
    srtop.reveal('.experience .timeline', { delay: 400 });
    srtop.reveal('.experience .timeline .container', { interval: 400 });

    /* SCROLL CONTACT */
    srtop.reveal('.contact .container', { delay: 400 });
    srtop.reveal('.contact .container .form-group', { delay: 400 });
});

// Visibility change
document.addEventListener('visibilitychange', function () {
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
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
};

// Tawk.to Live Chat
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})(); 