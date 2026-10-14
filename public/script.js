"use strict";

const ARROW_ICON = '<svg class="icon"><use href="#arrow" /></svg>';
const CHECK_ICON = '<svg class="icon"><use href="#check" /></svg>';

const englishContent = [
  [".skip-link", "Skip to content"],
  [".main-nav > a:nth-of-type(1)", "Solutions"],
  [".main-nav > a:nth-of-type(2)", "Experience"],
  [".main-nav > a:nth-of-type(3)", "Products"],
  [".main-nav > a:nth-of-type(4)", "About Henter"],
  [".main-nav .nav-contact", `Let's talk ${ARROW_ICON}`],
  [".hero-copy > .eyebrow", '<span class="status-dot"></span> Technology with business vision'],
  [".hero h1", 'Technology that<br />takes your business<br /><span class="gradient-text">further.</span>'],
  [".hero-description", "Well-built systems. Efficient infrastructure. Applied artificial intelligence. Henter brings these areas together to turn challenges into solutions that make sense for your business."],
  [".hero-actions .button", `Let's discuss your project ${ARROW_ICON}`],
  [".hero-actions .quiet-link", "Explore our solutions <span>↓</span>"],
  [".hero-proof > span:nth-child(2)", "Years of experience<br /><strong>in technology</strong>"],
  [".hero-proof > span:nth-child(4)", "From code to infrastructure.<br /><strong>From discovery to delivery.</strong>"],
  [".label-cloud > span", "Infrastructure<br /><strong>A foundation for growth</strong>"],
  [".label-code > span", "Software<br /><strong>Ideas in motion</strong>"],
  [".label-nextjs > span", "Frontend<br /><strong>Next.js</strong>"],
  [".label-microservices > span", "Architecture<br /><strong>Microservices</strong>"],
  [".label-python > span", "Backend<br /><strong>Python</strong>"],
  [".label-ai > span", "Artificial intelligence<br /><strong>New possibilities</strong>"],
  [".career-strip > p", "Leadership experience<br /><strong>at companies and projects such as</strong>"],
  [".career-companies > span:first-child small", "projects for Gerdau"],
  [".career-companies > span:last-child small", "projects for TIM"],
  [".services-section .section-heading .eyebrow", "01 / Solutions"],
  [".services-section .section-heading h2", 'Your challenge.<br /><span class="muted-heading">Henter builds the solution.</span>'],
  [".services-section .section-heading > p", "A perspective that connects business, software, and operations—building what is missing and improving what already exists."],
  [".software-card h3", "Software that grows<br />with your business."],
  [".software-card > p", "Custom applications, APIs, and integrations. From launching a new product to evolving the systems already running your operation."],
  [".software-card .service-tags", "<li>Python · Django · FastAPI</li><li>REST APIs & integrations</li><li>Microservices & distributed systems</li>"],
  [".software-card .card-link", `Build a solution ${ARROW_ICON}`],
  [".cloud-card h3", "More efficiency.<br />Less waste."],
  [".cloud-card > p", "Infrastructure, server tuning, and resource optimization. Find bottlenecks, adjust capacity, and improve performance and reliability."],
  [".cloud-card .service-tags", "<li>AWS & Kubernetes</li><li>Tuning & databases</li><li>Cost & capacity</li>"],
  [".cloud-card .card-link", `Improve my operation ${ARROW_ICON}`],
  [".architecture-card h3", "Architecture for<br />your next step."],
  [".architecture-card > p", "Technical decisions that balance growth, maintenance, and simplicity. Clear direction for new projects and systems in transformation."],
  [".architecture-card .service-tags", "<li>Architecture review</li><li>Cloud & microservices</li><li>Technical leadership</li>"],
  [".architecture-card .card-link", `Plan the evolution ${ARROW_ICON}`],
  [".ai-card h3", "AI with one purpose:<br />to be useful."],
  [".ai-card > p", "Custom agents, intelligent search, and process automation. Connect company knowledge to solutions that support real work."],
  [".ai-card .service-tags", "<li>Agentic AI & AI agents</li><li>Agno Agents & LangChain</li><li>RAG · Bedrock · semantic search</li>"],
  [".ai-card .card-link", `Explore the possibilities ${ARROW_ICON}`],
  [".services-note p", "A new project, a legacy system, or an environment that needs to evolve.<br /><strong>The starting point is understanding what your business needs.</strong>"],
  [".experience-section .section-heading .eyebrow", "02 / Experience behind the delivery"],
  [".experience-section .section-heading h2", 'Business vision.<br /><span class="muted-heading">Experience with complexity.</span>'],
  [".experience-section .section-heading > p", "The professional background of Rafael Henter, who leads Henter Digital Solutions' technical work."],
  ["#tab-industria > span:first-child", "<small>INDUSTRY & AI</small>Avenue Code / Gerdau"],
  ["#tab-marketplace > span:first-child", "<small>SAAS & PROCUREMENT</small>Supplai"],
  ["#tab-commerce > span:first-child", "<small>E-COMMERCE & INTEGRATIONS</small>Olist"],
  ["#tab-infra > span:first-child", "<small>OPERATIONS & PERFORMANCE</small>Amdocs / TIM"],
  ["#panel-industria .panel-label", "ARCHITECTURE · DISTRIBUTED SYSTEMS · AI"],
  ["#panel-industria h3", "Technology for<br />industrial operations."],
  ["#panel-industria > p", "Work at Avenue Code on Gerdau projects: microservices architecture, APIs, and industrial monitoring platforms connecting software engineering, data, and artificial intelligence."],
  ["#panel-industria .check-list", `<li>${CHECK_ICON}Designed and implemented scalable, event-driven microservices for enterprise industrial monitoring platforms using Python backend development practices, leveraging message-based orchestration and asynchronous processing to handle high-volume telemetry streams.</li><li>${CHECK_ICON}Architected and developed high-performance REST APIs with Django, integrating machine learning and data science pipelines.</li><li>${CHECK_ICON}Built enterprise AI solutions using AWS Bedrock, LangChain, RAG, and vector embeddings for intelligent document retrieval and chatbot platforms.</li><li>${CHECK_ICON}Designed cloud-native backend solutions using AWS, Docker, Kubernetes (EKS), Celery, RabbitMQ, Redis, PostgreSQL, and S3.</li><li>${CHECK_ICON}Developed large-scale data processing pipelines using Pandas and optimized custom Django QuerySets for high-volume industrial datasets.</li><li>${CHECK_ICON}Improved platform scalability, reliability, and performance through distributed architecture, asynchronous processing, and infrastructure optimization.</li><li>${CHECK_ICON}Led technical discussions, architecture decisions, code reviews, and mentoring initiatives for distributed engineering teams.</li><li>${CHECK_ICON}Collaborated with cross-functional teams including Data Science, Product, and Frontend to deliver scalable enterprise solutions.</li>`],
  ["#panel-industria .panel-footer > span:last-child", "Since 2021"],
  ["#panel-marketplace .panel-label", "PRODUCT · MARKETPLACE · LEADERSHIP"],
  ["#panel-marketplace h3", "From architecture<br />to a SaaS product."],
  ["#panel-marketplace > p", "Backend architecture and development for a procurement platform connecting property managers to service providers through quotes and reverse auctions."],
  ["#panel-marketplace .check-list", `<li>${CHECK_ICON}Led backend architecture and development of a SaaS procurement platform connecting property managers with service providers.</li><li>${CHECK_ICON}Designed and implemented a marketplace where suppliers competed through reverse auctions and direct quotations for services such as security, cleaning, electrical, and maintenance.</li><li>${CHECK_ICON}Built the platform on Django using a microservices architecture and asynchronous, event-driven processing to decouple services, improve fault isolation, and scale business workflows under fluctuating procurement loads.</li><li>${CHECK_ICON}Designed and implemented secure REST APIs and backend services from scratch, delivering a maintainable, cloud-ready architecture.</li><li>${CHECK_ICON}Managed and mentored a distributed React frontend team across India while collaborating on backend platform delivery.</li><li>${CHECK_ICON}Integrated the platform with multiple payment providers.</li><li>${CHECK_ICON}Integrated the platform with multiple CRM systems used by real estate agencies.</li>`],
  ["#panel-commerce .panel-label", "INTEGRATIONS · SCALE · E-COMMERCE"],
  ["#panel-commerce h3", "Connecting systems.<br />Expanding operations."],
  ["#panel-commerce > p", "Development of services and integrations for Olist's platform, connecting sellers to marketplaces such as Amazon, CNOVA, and B2W."],
  ["#panel-commerce .check-list", `<li>${CHECK_ICON}Built scalable integrations with Amazon, CNOVA, B2W, and other marketplaces, enabling sellers to automatically publish products across multiple sales channels from a single platform.</li><li>${CHECK_ICON}Built an electronic invoice (NF-e) generator integrated with SEFAZ.</li><li>${CHECK_ICON}Product, inventory, price, and order synchronization.</li><li>${CHECK_ICON}APIs and microservices for distributed operations.</li><li>${CHECK_ICON}Platform scalability and reliability work.</li>`],
  ["#panel-infra .panel-label", "INFRASTRUCTURE · TUNING · CAPACITY"],
  ["#panel-infra h3", "Performance starts<br />with a solid foundation."],
  ["#panel-infra > p", "Work at Amdocs in TIM environments, covering load balancing, capacity planning, and server and database tuning."],
  ["#panel-infra .check-list", `<li>${CHECK_ICON}Linux, Windows Server, Solaris, and HP-UX environments.</li><li>${CHECK_ICON}PostgreSQL, MySQL, and SQL Server optimization.</li><li>${CHECK_ICON}Automation, monitoring, and production diagnostics.</li><li>${CHECK_ICON}Developed automation scripts and monitoring tools to streamline infrastructure operations and reduce manual effort.</li><li>${CHECK_ICON}Collaborated with development and operations teams to troubleshoot production issues and optimize enterprise environments.</li>`],
  [".intelligence-section .eyebrow", "Artificial intelligence in practice"],
  [".intelligence-section h2", 'Connected knowledge.<br /><span class="muted-heading">Work that flows.</span>'],
  [".intelligence-section .section-description", "Henter designs AI agents and Agentic AI solutions around your processes using technologies such as Agno Agents, LangChain, and RAG. The goal is to put company knowledge to practical use, with integrations and workflows defined for each need."],
  [".intelligence-section .quiet-link", `Design an agent for my business ${ARROW_ICON}`],
  [".agent-flow > .panel-label", "APPLICATION POSSIBILITIES"],
  [".agent-use:nth-of-type(1) h3", "Find what matters."],
  [".agent-use:nth-of-type(1) p", "Assistants that search documents and knowledge bases using intelligent retrieval."],
  [".agent-use:nth-of-type(2) h3", "Connect the steps."],
  [".agent-use:nth-of-type(2) p", "Agents integrated with systems to support workflows and organize tasks."],
  [".agent-use:nth-of-type(3) h3", "Make room for strategy."],
  [".agent-use:nth-of-type(3) p", "Automation of repetitive routines, designed around your operational processes."],
  [".products-section .section-heading .eyebrow", "03 / Henter Products"],
  [".products-section .section-heading h2", 'Beyond consulting.<br /><span class="muted-heading">Solutions under development.</span>'],
  [".products-section .section-heading > p", "Technical expertise also takes shape in our own products. See what is currently being developed."],
  [".product-card .visual-caption", "CONCEPT IDENTITY"],
  [".product-card:nth-child(1) .visual-caption", "PRODUCT PREVIEW"],
  [".product-card:nth-child(1) .product-status", "<i></i> Nearing completion"],
  [".product-card:nth-child(1) .product-body > p", "A platform for managing deliveries and recording photos, signatures, and locations in a single workflow."],
  [".product-card:nth-child(1) .card-link", `Learn more ${ARROW_ICON}`],
  [".product-card:nth-child(2) .product-status", "<i></i> In development"],
  [".product-card:nth-child(2) h3", "Pre-Enrollment"],
  [".product-card:nth-child(2) .product-body > p", "A pre-enrollment system for government services, currently being developed for this service context."],
  [".product-card:nth-child(2) .card-link", `Discuss the project ${ARROW_ICON}`],
  [".product-card:nth-child(3) .product-status", "<i></i> New version planned"],
  [".product-card:nth-child(3) .visual-caption", "PRODUCT SCREEN"],
  [".product-card:nth-child(3) h3", "Cota Simples"],
  [".product-card:nth-child(3) .product-body > p", "A quotation system for businesses. A business creates a quotation, suppliers submit their prices, and the system selects the winner based on multiple criteria."],
  [".product-card:nth-child(3) .card-link", `See what's next ${ARROW_ICON}`],
  [".products-footnote span", "New solutions will join this portfolio. The work continues."],
  [".about-section .eyebrow", "04 / About Henter"],
  [".about-section h2", 'A complete perspective.<br /><span class="muted-heading">Hands-on leadership.</span>'],
  [".founder-card p", "Technical leadership<br />Staff Software Engineer & Architect"],
  [".founder-card a", `View career history ${ARROW_ICON}`],
  [".about-lead", "Henter Digital Solutions combines software development, infrastructure, and artificial intelligence to build technology with purpose."],
  [".about-copy > p:nth-of-type(2)", "Rafael Henter leads the technical work, bringing more than 25 years of experience across complex enterprise environments and the leadership and mentoring of international teams."],
  [".about-copy > p:nth-of-type(3)", "This perspective connects architecture decisions to day-to-day operations. From the first conversation to implementation, every project starts with a clear understanding of the problem, context, and business priorities."],
  [".about-values > span:nth-child(1)", `${CHECK_ICON} Clear decisions`],
  [".about-values > span:nth-child(2)", `${CHECK_ICON} Simple solutions`],
  [".about-values > span:nth-child(3)", `${CHECK_ICON} Quality delivery`],
  [".about-links > a:nth-child(1)", "Henter on LinkedIn ↗"],
  [".about-links > a:nth-child(2)", "Code & projects ↗"],
  [".process-section .section-heading .eyebrow", "From conversation to solution"],
  [".process-section .section-heading h2", 'A clear path.<br /><span class="muted-heading">From the start to the next step.</span>'],
  [".process-section .section-heading > p", "Defined scope, explained decisions, and deliveries aligned with what your business needs."],
  [".process-grid article:nth-child(1) h3", "Understand"],
  [".process-grid article:nth-child(1) p", "Understand the context, bottlenecks, and the goal guiding the project."],
  [".process-grid article:nth-child(2) h3", "Design"],
  [".process-grid article:nth-child(2) p", "Define priorities, architecture, and a clear work plan."],
  [".process-grid article:nth-child(3) h3", "Build"],
  [".process-grid article:nth-child(3) p", "Implement and validate the solution against the agreed context and criteria."],
  [".process-grid article:nth-child(4) h3", "Evolve"],
  [".process-grid article:nth-child(4) p", "Document decisions and guide maintenance and next steps."],
  [".contact-copy .eyebrow", '<span class="status-dot"></span> Your next project starts with a conversation'],
  [".contact-copy h2", 'Shall we build<br /><span class="gradient-text">the next step?</span>'],
  [".contact-copy > p", "Tell us what you want to create, improve, or unblock. Henter will help you find a path forward."],
  [".contact-form label[for='interest']", "How can Henter help?"],
  [".contact-form label[for='message']", "Tell us a little about your project"],
  [".contact-form .button", `Talk on WhatsApp ${ARROW_ICON}`],
  [".form-note", "The message opens in WhatsApp for you to review and send."],
  ["#whatsapp-fallback", "Open the conversation in WhatsApp ↗"],
  [".footer-top > p", "Software · Cloud · AI<br />From strategy to operations."],
  [".footer-bottom > a", "Back to top ↑"],
];

const pageMetadata = {
  pt: {
    title: "Consultoria Python, Cloud e IA | Henter Digital Solutions",
    description: "Consultoria em software, Python, Django, FastAPI, microsserviços, cloud e agentes de IA. Arquitetura e liderança técnica com mais de 25 anos de experiência.",
    ogDescription: "Consultoria em Python, Django, FastAPI, microsserviços, cloud e agentes de IA, com arquitetura e liderança técnica de ponta a ponta.",
    locale: "pt_BR",
    imageAlt: "Henter Digital Solutions — From Data to Decisions",
  },
  en: {
    title: "Python, Cloud & AI Consulting | Henter Digital Solutions",
    description: "Software consulting for Python, Django, FastAPI, microservices, cloud, and AI agents, backed by over 25 years of architecture and technical leadership.",
    ogDescription: "Python, Django, FastAPI, microservices, cloud, and AI agent consulting with end-to-end architecture and technical leadership.",
    locale: "en_US",
    imageAlt: "Henter Digital Solutions — From Data to Decisions",
  },
};

const interestLabels = {
  pt: {
    software: "Desenvolvimento de software",
    infrastructure: "Infraestrutura, tuning e otimização",
    architecture: "Arquitetura e liderança técnica",
    ai: "Agentes de IA e automação",
    products: "Produtos Henter",
    discovery: "Quero entender as possibilidades",
  },
  en: {
    software: "Software development",
    infrastructure: "Infrastructure, tuning, and optimization",
    architecture: "Architecture and technical leadership",
    ai: "AI agents and automation",
    products: "Henter products",
    discovery: "I want to explore the possibilities",
  },
};

const translatedElements = englishContent.map(([selector, english]) => ({
  selector,
  english,
  portuguese: Array.from(document.querySelectorAll(selector), (element) => element.innerHTML),
}));

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.getElementById("main-nav");
const interest = document.getElementById("interest");
let currentLanguage = "pt";

function initialLanguage() {
  const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
  if (requestedLanguage === "pt" || requestedLanguage === "en") return requestedLanguage;
  return navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en";
}

function updateMenuLabel() {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  const labels = currentLanguage === "en"
    ? { open: "Open menu", close: "Close menu" }
    : { open: "Abrir menu", close: "Fechar menu" };
  menuButton.setAttribute("aria-label", isOpen ? labels.close : labels.open);
}

function updateMetadata(language) {
  const metadata = pageMetadata[language];
  const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
  const localizedUrl = requestedLanguage === "pt" || requestedLanguage === "en"
    ? `https://henter.com.br/?lang=${language}`
    : "https://henter.com.br/";
  document.title = metadata.title;
  document.querySelector('meta[name="description"]').content = metadata.description;
  document.querySelector('meta[property="og:title"]').content = metadata.title;
  document.querySelector('meta[property="og:description"]').content = metadata.ogDescription;
  document.querySelector('meta[property="og:locale"]').content = metadata.locale;
  document.querySelector('meta[property="og:url"]').content = localizedUrl;
  document.querySelector('meta[property="og:image:alt"]').content = metadata.imageAlt;
  document.querySelector('meta[name="twitter:title"]').content = metadata.title;
  document.querySelector('meta[name="twitter:description"]').content = metadata.ogDescription;
  document.querySelector('meta[name="twitter:image:alt"]').content = metadata.imageAlt;
  document.querySelector('link[rel="canonical"]').href = localizedUrl;
}

function updateInterestOptions(language) {
  const selectedValue = interest.value;
  Array.from(interest.options).forEach((option) => {
    option.textContent = interestLabels[language][option.value];
  });
  interest.value = selectedValue;
}

function updateProductLinks(language) {
  const messages = language === "en"
    ? [
        "Hello! I would like to learn more about Canhoto Simples.",
        "Hello! I would like to discuss the Pre-Enrollment system.",
        "Hello! I would like to learn more about Cota Simples.",
      ]
    : [
        "Olá! Quero saber mais sobre o Canhoto Simples.",
        "Olá! Quero conversar sobre o sistema de Pré-Matrícula.",
        "Olá! Quero saber mais sobre o Cota Simples.",
      ];
  document.querySelectorAll(".product-card .card-link").forEach((link, index) => {
    link.href = "https://wa.me/5524992755167?text=" + encodeURIComponent(messages[index]);
  });
}

function applyLanguage(language, updateUrl = false) {
  currentLanguage = language;
  document.documentElement.lang = language === "pt" ? "pt-BR" : "en";

  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", language);
    history.replaceState(null, "", url);
  }

  translatedElements.forEach(({ selector, english, portuguese }) => {
    document.querySelectorAll(selector).forEach((element, index) => {
      element.innerHTML = language === "en" ? english : portuguese[index];
    });
  });

  updateMetadata(language);
  updateInterestOptions(language);
  updateProductLinks(language);
  document.getElementById("message").placeholder = language === "en"
    ? "What challenge would you like to solve?"
    : "Qual desafio você quer resolver?";
  navigation.setAttribute("aria-label", language === "en" ? "Main navigation" : "Navegação principal");
  document.querySelector(".experience-tabs").setAttribute("aria-label", language === "en" ? "Professional experience" : "Experiências profissionais");
  document.querySelectorAll(".brand").forEach((brand, index) => {
    const label = language === "en" ? "home" : index === 0 ? "início" : "voltar ao início";
    brand.setAttribute("aria-label", `Henter Digital Solutions — ${label}`);
  });
  document.querySelector(".language-switch").setAttribute("aria-label", language === "en" ? "Select language" : "Selecionar idioma");
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === language));
  });
  updateMenuLabel();

}

function closeMenu() {
  navigation.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  updateMenuLabel();
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") !== "true";
  navigation.classList.toggle("is-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  updateMenuLabel();
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
    closeMenu();
    menuButton.focus();
  }
});

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.language, true));
});

const tabs = Array.from(document.querySelectorAll(".experience-tab"));
const panels = Array.from(document.querySelectorAll(".experience-panel"));

function activateTab(selectedTab) {
  tabs.forEach((tab) => {
    const selected = tab === selectedTab;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });
  panels.forEach((panel) => {
    panel.hidden = panel.id !== selectedTab.getAttribute("aria-controls");
  });
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => activateTab(tab));
  tab.addEventListener("keydown", (event) => {
    let nextIndex;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
    if (event.key === "ArrowUp" || event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tabs.length - 1;
    if (nextIndex !== undefined) {
      event.preventDefault();
      activateTab(tabs[nextIndex]);
      tabs[nextIndex].focus();
    }
  });
});

document.querySelectorAll("[data-interest]").forEach((link) => {
  link.addEventListener("click", () => {
    interest.value = link.dataset.interest;
  });
});

const form = document.getElementById("contact-form");
const whatsappFallback = document.getElementById("whatsapp-fallback");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const description = document.getElementById("message").value.trim();
  const selectedInterest = interest.selectedOptions[0].textContent;
  const message = currentLanguage === "en"
    ? `Hello! I found Henter Digital Solutions and I am interested in ${selectedInterest}.${description ? `\n\n${description}` : " I would like to discuss a project."}`
    : `Olá! Conheci a Henter Digital Solutions e tenho interesse em ${selectedInterest}.${description ? `\n\n${description}` : " Gostaria de conversar sobre um projeto."}`;
  const url = "https://wa.me/5524992755167?text=" + encodeURIComponent(message);
  whatsappFallback.href = url;
  whatsappFallback.hidden = false;
  window.open(url, "_blank", "noopener,noreferrer");
});

applyLanguage(initialLanguage());
