$(document).ready(function () {
    // Toggle menu for mobile
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // Scroll and load behavior
    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
        $('#scroll-top').toggleClass('active', window.scrollY > 60);
    });

    // All 22 projects
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

    // Dynamic category buttons
    function createCategoryButtons(projects) {
        const categories = [...new Set(projects.flatMap(project => project.category.split(',').map(c => c.trim())))];
        const buttonGroup = document.querySelector('.button-group');
        buttonGroup.innerHTML = '<button class="btn is-checked" data-filter="*" aria-label="Show all projects">All</button>';
        categories.forEach(category => {
            const categoryClass = category.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '');
            buttonGroup.innerHTML += `<button class="btn" data-filter=".${categoryClass}" aria-label="Filter by ${category}">${category}</button>`;
        });
    }

    // Display projects
    function showProjects(projects) {
        const projectsContainer = document.querySelector('.work .box-container');
        let projectsHTML = '';
        projects.forEach(project => {
            const categoryClasses = project.category.split(',').map(c => c.trim().replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '')).join(' ');
            projectsHTML += `
                <div class="grid-item ${categoryClasses}">
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
                    </div>
                </div>`;
        });
        projectsContainer.innerHTML = projectsHTML;

        // Initialize VanillaTilt
        VanillaTilt.init(document.querySelectorAll('.tilt'), {
            max: 15,
            speed: 400,
            glare: true,
            'max-glare': 0.3
        });

        // Initialize Isotope
        const $grid = $('.box-container').isotope({
            itemSelector: '.grid-item',
            layoutMode: 'fitRows',
            masonry: {
                columnWidth: '.grid-item',
                gutter: 20
            }
        });

        // Filter items on button click
        $('.button-group').on('click', 'button', function () {
            $('.button-group .is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
            const filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });

        // Initialize ScrollReveal
        ScrollReveal().reveal('.box', {
            delay: 200,
            distance: '50px',
            origin: 'bottom',
            duration: 1200,
            interval: 100,
            easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
        });

        // Create category buttons
        createCategoryButtons(projects);
    }

    // Load projects directly
    showProjects(projects);

    // Visibility change for title
    document.addEventListener('visibilitychange', function () {
        document.title = document.visibilityState === 'visible'
            ? 'Projects | Sadik Al Jarif'
            : 'Come Back To Portfolio';
    });
});