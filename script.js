"use strict";

const profile = {
  name: "Nehal Panchal",
  role: "AI Engineer",
  summary:
    "AI Engineer with published IEEE research on explainable AI, hands-on expertise in LLMs and agentic systems, and a strong foundation in machine learning, deep learning, and NLP, with end-to-end delivery experience on Azure cloud platforms.",
  highlights: [
    "Published IEEE research in explainable multimodal glaucoma detection (2025).",
    "Production delivery of LLM, OCR, and Deep Research capabilities on Azure.",
    "Strong foundation in machine learning, deep learning, and natural language processing.",
    "Strong stack across LangChain, LangGraph, PyTorch, Transformers, and data engineering.",
  ],
  socialLinks: [
    { label: "E-mail", href: "mailto:panchalnehal17@gmail.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nehal-panchal-05901b235/" },
    { label: "GitHub", href: "https://github.com/Nehal04052" },
  ],
};

const publication = {
  title: "Multi-Modal Glaucoma Detection Framework using Explainable AI and LLMs",
  authors: "N. Panchal, A. Vishwakarma, V. Dave, H. Jethani, D. Parashar, N. B. Bahadure",
  venue:
    "2025 3rd International Conference on Disruptive Technologies (ICDT), Greater Noida, India",
  doiLink: "https://ieeexplore.ieee.org/document/10986494",
};

const experience = [
  {
    role: "Associate Software Developer",
    company: "Infodesk India Private Limited",
    period: "Jul 2025 - Present",
    highlights: [
      "Researched and benchmarked open-source models, including Gemma 3 and GPT-OSS-20B, for enterprise adoption.",
      "Designed and implemented LLM evaluation pipelines for taxonomy classification and related enterprise tasks.",
      "Fine-tuned OpenAI models through API-driven workflows to improve taxonomy classification quality.",
      "Built production services for taxonomy classification, summarization, and agentic workflows, and integrated them into enterprise applications.",
      "Developed and maintained agentic enterprise workflows using LangChain, LangGraph, OpenAI, and Azure services.",
      "Deployed DeepSeek-OCR with vLLM as a production document-parsing service on Azure Container Apps.",
    ],
  },
  {
    role: "AI/ML Developer Intern",
    company: "Infodesk India Private Limited",
    period: "Jan 2025 - Jul 2025",
    highlights: [
      "Learned software engineering best practices and used AI tools to quickly develop solutions and accelerate productivity.",
      "Worked across LLMs, RAG, MCP, multi-agent systems, and CI/CD-driven delivery practices.",
      "Built distributed document extraction using Tesseract and Apache Tika sidecar architecture.",
      "Profiled monolith vs distributed deployment performance on Azure Container Apps.",
    ],
  },
];

const skillGroups = [
  {
    name: "AI/ML Frameworks",
    items: [
      "PyTorch",
      "TensorFlow",
      "Scikit-Learn",
      "Transformers",
      "vLLM",
      "LangChain",
      "LangGraph",
      "LangSmith",
      "CrewAI",
      "N8N",
      "LIME",
    ],
  },
  {
    name: "Programming",
    items: ["Python", "Java", "C", "C++", "C#", "R", "JavaScript", "TypeScript", "SQL"],
  },
  {
    name: "Web Development",
    items: [
      "React",
      "Angular",
      ".NET",
      "Node.js",
      "FastAPI",
      "Django",
      "Express.js",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    name: "Cloud & DevOps",
    items: ["Azure", "GCP", "Docker", "Kubernetes", "Git", "GitHub", "BitBucket", "Postman"],
  },
  {
    name: "Data Engineering",
    items: [
      "PySpark",
      "Databricks",
      "Hadoop",
      "MapReduce",
      "Apache Tika",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Oracle",
    ],
  },
  {
    name: "Specialized",
    items: [
      "RAG Systems",
      "Prompt Engineering",
      "Vector Databases",
      "LLM Fine-tuning",
      "Explainable AI",
      "Computer Vision",
    ],
  },
];

const projects = [
  {
    title: "Explainable AI Glaucoma Detection System",
    stack: "TensorFlow, Groq, FastAPI, React",
    summary:
      "Architected a multi-modal framework combining VGG16 CNN with Llama vision/language models for interpretable diagnosis.",
    impact: "Achieved 96% glaucoma detection accuracy with visual + textual explanation outputs.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Nehal04052/Explainable-AI-based-Glaucoma-Detection-using-Transfer-Learning-LIME-and-LLMs",
      },
    ],
  },
  {
    title: "StockSense - Agentic RAG Tutoring Platform",
    stack: "LangGraph, LangChain, Django, React, PostgreSQL",
    summary:
      "Built an agent-based tutoring system with retrieval pipelines, tool orchestration, and personalized auth-backed experience.",
    impact: "Integrated live market data, semantic search, and context-rich learning workflows end-to-end.",
    links: [{ label: "Live Demo", href: "https://stocksense-production.onrender.com" }],
  },
  {
    title: "Automated Cold Email Generator",
    stack: "LangChain, Groq, Streamlit",
    summary:
      "Developed an automated outreach generator that matches job requirements with dynamic portfolio context.",
    impact: "Reduced manual outreach effort while improving personalization quality for service teams.",
    links: [{ label: "GitHub", href: "https://github.com/Nehal04052/Cold-Email-Generator" }],
  },
  {
    title: "Real-time Sentiment Analysis System",
    stack: "LSTM, TensorFlow, Flask, Pandas",
    summary:
      "Trained and deployed an LSTM-based sentiment classifier with a live Flask inference interface.",
    impact: "Reached 89% accuracy on airline sentiment data for real-time feedback classification.",
    links: [
      { label: "GitHub", href: "https://github.com/Nehal04052/Customer-Feedback-Sentiment-Analysis-using-LSTM" },
    ],
  },
  {
    title: "Predictive Modeling with PySpark MLlib",
    stack: "PySpark, Databricks, MLlib",
    summary:
      "Implemented distributed ML models for admission prediction, sales forecasting, and cancer detection.",
    impact: "Improved scalability and training throughput for large datasets with distributed pipelines.",
    links: [{ label: "GitHub", href: "https://github.com/Nehal04052/Big-Data-and-Cloud-Computing" }],
  },
  {
    title: "Flight Management System",
    stack: "MERN Stack, MySQL, REST APIs",
    summary:
      "Led end-to-end implementation of booking workflows, authentication, reservation logic, and API-driven integrations.",
    impact: "Delivered a complete flight reservation platform with real-time availability handling.",
    links: [{ label: "GitHub", href: "https://github.com/Nehal04052/airline-reservation-system" }],
  },
];

const certifications = {
  "2024": [
    "Microsoft AI Skill Challenge - Microsoft",
    "Azure AI Services Suite - NLP, Document Intelligence, Computer Vision",
    "Google Analytics for Beginners - Google Analytics Academy",
    "IBM Enterprise-grade AI - Getting Started with Enterprise AI",
  ],
  "2023": [
    "IBM Enterprise Data Science - Professional Certification",
    "Google Cloud Computing Foundations - NPTEL (Score: 87/100)",
  ],
};

const themeStorageKey = "portfolio_theme";

function renderProfile() {
  const aboutSummary = document.getElementById("about-summary");
  const heroHighlights = document.getElementById("hero-highlights");
  const contactLinks = document.getElementById("contact-links");
  const footerNote = document.getElementById("footer-note");

  if (aboutSummary) aboutSummary.textContent = profile.summary;

  if (heroHighlights) {
    heroHighlights.innerHTML = profile.highlights.map((item) => `<li>${item}</li>`).join("");
  }

  if (contactLinks) {
    contactLinks.innerHTML = profile.socialLinks
      .map((link) => {
        const isMailLink = link.href.startsWith("mailto:");
        const externalAttrs = isMailLink ? "" : ' target="_blank" rel="noopener noreferrer"';
        return `<a class="chip-link" href="${link.href}"${externalAttrs}>${link.label}</a>`;
      })
      .join("");
  }

  if (footerNote) {
    const year = new Date().getFullYear();
    footerNote.textContent = `${profile.name} - ${year}`;
  }
}

function renderPublication() {
  const heading = document.getElementById("publication-heading");
  const authors = document.getElementById("publication-authors");
  const venue = document.getElementById("publication-venue");
  const link = document.getElementById("publication-link");

  if (heading) heading.textContent = publication.title;
  if (authors) authors.textContent = publication.authors;
  if (venue) venue.textContent = publication.venue;
  if (link) link.href = publication.doiLink;
}

function renderExperience() {
  const timeline = document.getElementById("experience-timeline");
  if (!timeline) return;

  timeline.innerHTML = experience
    .map(
      (item) => `
      <article class="timeline-card">
        <div class="timeline-top">
          <h3>${item.role}</h3>
          <p class="timeline-meta">${item.period}</p>
        </div>
        <p class="timeline-meta">${item.company}</p>
        <ul>
          ${item.highlights.map((point) => `<li>${point}</li>`).join("")}
        </ul>
      </article>
    `
    )
    .join("");
}

function renderSkills() {
  const container = document.getElementById("skills-grid");
  if (!container) return;

  container.innerHTML = skillGroups
    .map(
      (group) => `
      <article class="skill-group">
        <h3>${group.name}</h3>
        <div class="chip-set">
          ${group.items.map((item) => `<span class="chip">${item}</span>`).join("")}
        </div>
      </article>
    `
    )
    .join("");
}

function renderProjects() {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  container.innerHTML = projects
    .map(
      (project, index) => `
      <article class="project-card" style="--delay: ${index * 80}ms;">
        <h3>${project.title}</h3>
        <p class="project-stack">${project.stack}</p>
        <p class="project-summary">${project.summary}</p>
        <p class="project-impact">${project.impact}</p>
        <div class="project-links">
          ${project.links
            .map(
              (link) =>
                `<a class="chip-link" target="_blank" rel="noopener noreferrer" href="${link.href}">${link.label}</a>`
            )
            .join("")}
        </div>
      </article>
    `
    )
    .join("");
}

function renderCertifications() {
  const container = document.getElementById("certifications-list");
  if (!container) return;

  const years = Object.keys(certifications).sort((a, b) => Number(b) - Number(a));

  container.innerHTML = years
    .map(
      (year) => `
      <article class="cert-year">
        <h3>${year}</h3>
        <ul>
          ${certifications[year].map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </article>
    `
    )
    .join("");
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;
  const isLight = theme === "light";
  toggle.setAttribute("aria-pressed", String(isLight));
  toggle.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
}

function getInitialTheme() {
  const stored = localStorage.getItem(themeStorageKey);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function initTheme() {
  applyTheme(getInitialTheme());

  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "light" ? "dark" : "light";
      localStorage.setItem(themeStorageKey, next);
      applyTheme(next);
    });
  }

  const media = window.matchMedia("(prefers-color-scheme: light)");
  media.addEventListener("change", (event) => {
    if (!localStorage.getItem(themeStorageKey)) {
      applyTheme(event.matches ? "light" : "dark");
    }
  });
}

function initMobileMenu() {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    const next = !expanded;
    nav.classList.toggle("open", next);
    toggle.setAttribute("aria-expanded", String(next));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initRevealMotion() {
  const sections = document.querySelectorAll(".reveal");
  const cards = document.querySelectorAll(".project-card");
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReduced) {
    sections.forEach((section) => section.classList.add("is-visible"));
    cards.forEach((card) => card.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -6% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
  cards.forEach((card) => observer.observe(card));
}

function initActiveNav() {
  const links = Array.from(document.querySelectorAll(".site-nav a"));
  const sections = links
    .map((link) => {
      const id = link.getAttribute("href");
      if (!id) return null;
      const section = document.querySelector(id);
      return section ? { link, section } : null;
    })
    .filter(Boolean);

  if (!sections.length) return;

  const clearActive = () => {
    links.forEach((link) => link.classList.remove("active"));
  };

  const updateActive = () => {
    const topOffset = 110;

    if (window.scrollY <= 8) {
      clearActive();
      return;
    }

    let activeId = null;
    sections.forEach((item) => {
      if (item.section.getBoundingClientRect().top <= topOffset) {
        activeId = `#${item.section.id}`;
      }
    });

    if (!activeId) {
      clearActive();
      return;
    }

    links.forEach((navLink) => {
      navLink.classList.toggle("active", navLink.getAttribute("href") === activeId);
    });
  };

  updateActive();
  window.addEventListener("scroll", updateActive, { passive: true });
  window.addEventListener("resize", updateActive);
}

function init() {
  renderProfile();
  renderPublication();
  renderExperience();
  renderSkills();
  renderProjects();
  renderCertifications();
  initTheme();
  initMobileMenu();
  initActiveNav();
  initRevealMotion();
}

document.addEventListener("DOMContentLoaded", init);
