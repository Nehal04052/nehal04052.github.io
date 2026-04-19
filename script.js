"use strict";

const profile = {
  name: "Nehal Panchal",
  role: "AI Engineer",
  summary:
    "AI Engineer with published IEEE research in explainable AI and experience delivering production-grade systems, with expertise in LLMs and agentic systems, and a strong foundation in machine learning, deep learning, and NLP, with end-to-end delivery experience on Azure cloud platforms. I specialize in deploying and optimizing VLM/LLM workloads across NVIDIA GPU architectures (Turing, Ampere, and newer), and building end-to-end AI pipelines with robust evaluation for quality, latency, and reliability.",
  calendlyUrl: "https://calendly.com/nehal-panchal/new-meeting",
  highlights: [
    "Published IEEE research in explainable multimodal glaucoma detection (2025).",
    "Strong foundation in machine learning, deep learning, and natural language processing.",
    "Built and optimized enterprise AI pipelines with measurable performance and reliability improvements.",
  ],
  socialLinks: [
    {
      label: "E-mail",
      href: "mailto:panchalnehal17@gmail.com",
      icon: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nehal-panchal-05901b235/",
      icon: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 .02 5 2.5 2.5 0 0 1-.02-5zM3 9h4v12H3zM9 9h3.8v1.71h.05c.53-.95 1.83-1.96 3.77-1.96 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.3c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9z"/></svg>',
    },
    {
      label: "GitHub",
      href: "https://github.com/Nehal04052",
      icon: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.08 3.29 9.39 7.86 10.91.57.11.78-.25.78-.55 0-.27-.01-1-.02-1.95-3.2.69-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.11-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.73.8 1.18 1.82 1.18 3.08 0 4.41-2.69 5.38-5.26 5.67.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.13 0 .3.21.67.79.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z"/></svg>',
    },
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
    role: "Software Developer",
    company: "Infodesk",
    period: "Mar 2026 - Present",
    highlights: [
      "Deployed DeepSeek OCR V2 using the vLLM library on GPU infrastructure for document parsing, processing 1,000+ documents per day in production.",
      "Engineered cross-architecture GPU compatibility for DeepSeek OCR V2 converted inference pipeline to float16 with xFormers for backward compatibility on Nvidia Turing (T4), and enabled bfloat16 with Flash Attention for forward compatibility on Ampere (A100) and newer architectures.",
      "Optimized KV cache utilization and implemented input caching for PDF page-to-image pipelines with pre-tokenized batched image inputs, improving throughput.",
      "Contributed to the development of the Deep Research feature, enhancing existing Copilot enterprise applications and integrating AI capabilities into existing software infrastructure.",
      "Deploying and managing AI solutions on Azure infrastructure, including Azure Container Apps, Azure Functions, and Azure App Service.",
    ],
  },
  {
    role: "Associate Software Developer",
    company: "Infodesk",
    period: "Jul 2025 - Feb 2026",
    highlights: [
      "Built and scaled a taxonomy classification pipeline, fine-tuning LLMs via the OpenAI API and implementing evaluation frameworks to monitor and maintain classification accuracy in production.",
      "Developed a centralized summarization service integrated across multiple applications, with rate limiting and hash-encrypted API key authentication backed by PostgreSQL and Django REST Framework.",
      "Designed and maintained enterprise AI solutions using LangChain, OpenAI, and LangGraph covering agentic workflows.",
      "Collaborated with cross-functional teams to embed AI capabilities into existing applications.",
    ],
  },
  {
    role: "AI/ML Developer Intern",
    company: "Infodesk",
    period: "Jan 2025 - Jul 2025",
    highlights: [
      "Gained hands-on experience with LLMs, MCP, agentic AI, multi-agent systems, CI/CD pipelines, SDLC, and core software engineering practices.",
      "Optimized AI services to improve system performance and efficiency.",
      "Researched and evaluated document extraction libraries, analyzing quality, cost, and performance trade-offs.",
      "Developed a scalable document extraction tool using Tesseract for script detection and distributed Apache Tika instances via sidecar containers.",
      "Deployed the solution on Azure Container Apps and conducted performance profiling of monolithic vs. distributed architectures.",
      "Contributed to feature development and code optimization for an existing enterprise product.",
    ],
  },
];

const skillGroups = [
  {
    name: "Specialized",
    items: [
      "Agentic AI",
      "Multi-Agent Systems",
      "Prompt Engineering",
      "Vector Databases",
      "LLM Fine-tuning",
      "Explainable AI",
      "Computer Vision",
    ],
  },
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
    title: "StockSense - Agentic AI Tutoring Platform",
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
  "2026": ["Claude 101 - Anthropic"],
  "2024": [
    "Microsoft AI Skill Challenge - Microsoft",
    "Azure AI Services Suite - Natural Language Processing, Document Intelligence, Computer Vision",
    "Google Analytics for Beginners - Google Analytics Academy",
    "IBM Enterprise-grade AI - Getting Started with Enterprise AI",
  ],
  "2023": [
    "IBM Enterprise Data Science - Professional Certification",
    "Google Cloud Computing Foundations - NPTEL Certification, Score: 87/100",
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
        const icon = link.icon ? `<span class="chip-link__icon" aria-hidden="true">${link.icon}</span>` : "";
        return `<a class="chip-link" href="${link.href}"${externalAttrs}>${icon}<span>${link.label}</span></a>`;
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
      (item, index) => `
      <article class="timeline-card" style="--delay: ${index * 90}ms;">
        <p class="timeline-meta">${item.period}</p>
        <div class="timeline-content">
          <h3>${item.role}</h3>
          <p class="timeline-company">${item.company}</p>
          <ul>
            ${item.highlights.map((point) => `<li>${point}</li>`).join("")}
          </ul>
        </div>
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
      (group, index) => `
      <article class="skill-group" style="--delay: ${index * 70}ms;">
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
        <p class="project-number">${String(index + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}</p>
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
      (year, index) => `
      <article class="cert-group" style="--delay: ${index * 80}ms;">
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
  return "light";
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
  const cards = document.querySelectorAll(
    ".project-card, .skill-group, .timeline-card, .cert-group"
  );
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
    { threshold: 0.12, rootMargin: "0px 0px -4% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
  cards.forEach((card) => observer.observe(card));
}

function initScrollProgress() {
  const bar = document.getElementById("scroll-progress-bar");
  if (!bar) return;

  let ticking = false;
  const update = () => {
    const doc = document.documentElement;
    const scrollTop = window.scrollY || doc.scrollTop;
    const max = doc.scrollHeight - window.innerHeight;
    const pct = max > 0 ? (scrollTop / max) * 100 : 0;
    bar.style.width = `${Math.min(100, Math.max(0, pct))}%`;
    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  };

  update();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
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

function initCalendly() {
  const openCalendly = (event) => {
    event.preventDefault();
    if (window.Calendly && typeof window.Calendly.initPopupWidget === "function") {
      window.Calendly.initPopupWidget({ url: profile.calendlyUrl });
    } else {
      window.open(profile.calendlyUrl, "_blank", "noopener,noreferrer");
    }
  };

  document.querySelectorAll("[data-calendly]").forEach((el) => {
    el.addEventListener("click", openCalendly);
  });
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
  initScrollProgress();
  initCalendly();
}

document.addEventListener("DOMContentLoaded", init);
