const modules = [
  {
    id: "internet-foundations",
    stage: "Stage 1",
    title: "Internet & Web Foundations",
    duration: "1 to 2 weeks",
    focus: "Foundations",
    summary:
      "Start with how the web actually works so later tools make sense instead of feeling random.",
    why: "Understanding DNS, browsers, hosting, and HTTP gives you the mental model needed to debug real full stack issues across frontend, backend, and deployment.",
    topics: ["Internet", "HTTP", "DNS", "Browsers", "Hosting", "CLI"],
    projects: [
      "Build a simple 'How the Web Works' visual explainer page with diagrams for request-response flow.",
      "Create a tiny static personal site and deploy it to understand domains, hosting, and browser delivery.",
      "Use browser devtools to inspect network requests from a public API explorer and document what you learned."
    ],
    practices: [
      "Learn the request lifecycle before memorizing framework-specific abstractions.",
      "Use browser devtools early for headers, status codes, timing, and payload inspection.",
      "Document every new concept in plain English to reinforce systems thinking."
    ],
    interview: [
      {
        q: "What happens when you type a URL into the browser and press Enter?",
        a: "The browser resolves DNS, establishes a connection, sends an HTTP request, receives the response, downloads dependent assets, and renders the page."
      },
      {
        q: "What is the difference between HTTP and HTTPS?",
        a: "HTTPS is HTTP over TLS, which encrypts data in transit and verifies server identity."
      }
    ],
    quiz: {
      question: "Which tool is most useful for inspecting request headers and status codes while learning the web?",
      options: ["Browser devtools network tab", "A database GUI", "A CSS framework"],
      answer: 0
    }
  },
  {
    id: "frontend-core",
    stage: "Stage 2",
    title: "HTML, CSS, and JavaScript Core",
    duration: "3 to 5 weeks",
    focus: "Frontend",
    summary:
      "Master the building blocks first: semantics, layout, accessibility, and core JavaScript before frameworks.",
    why: "Frameworks change. Strong fundamentals make every future library easier, especially when building interactive interfaces and debugging browser behavior.",
    topics: ["HTML", "CSS", "Responsive Design", "Accessibility", "JavaScript", "DOM"],
    projects: [
      "Build a responsive landing page from scratch using semantic HTML and custom CSS.",
      "Create a habit tracker with localStorage, filtering, and DOM-driven updates.",
      "Rebuild a pricing page and focus on spacing, typography, and accessible form controls."
    ],
    practices: [
      "Prefer semantic HTML elements before reaching for div-heavy layouts.",
      "Build layouts mobile-first and test keyboard navigation as you go.",
      "Write small focused JavaScript functions instead of one giant event script."
    ],
    interview: [
      {
        q: "What is the difference between block, inline, and inline-block?",
        a: "They define how elements participate in layout. Block takes full width, inline flows with text, and inline-block keeps inline flow while allowing dimensions."
      },
      {
        q: "Why is event delegation useful in JavaScript?",
        a: "It lets you attach one handler higher in the tree and manage dynamic children efficiently through event bubbling."
      }
    ],
    quiz: {
      question: "Which approach best supports accessibility and maintainability?",
      options: ["Semantic HTML with keyboard testing", "Only styling divs until it looks right", "Skipping labels on small forms"],
      answer: 0
    }
  },
  {
    id: "frontend-frameworks",
    stage: "Stage 3",
    title: "Frontend Frameworks, Tooling, and State",
    duration: "3 to 4 weeks",
    focus: "Frontend",
    summary:
      "Once the basics are comfortable, move into component-based UI, routing, state, and modern tooling.",
    why: "This is where you learn how production interfaces are structured: reusable components, state flows, build tools, and API-driven rendering.",
    topics: ["React", "Routing", "State Management", "Vite", "Component Design", "API Fetching"],
    projects: [
      "Build a dashboard that consumes a REST API and includes loading, empty, and error states.",
      "Create a multi-page recipe app with client-side routing and reusable card components.",
      "Turn a plain JavaScript app into a React version to compare patterns and tradeoffs."
    ],
    practices: [
      "Break features into components around responsibility, not visual fragments alone.",
      "Handle loading, empty, error, and success states explicitly.",
      "Keep state close to where it is used before introducing global state."
    ],
    interview: [
      {
        q: "When should local component state be preferred over global state?",
        a: "When the data is only needed by a small part of the UI and lifting it higher would add unnecessary complexity."
      },
      {
        q: "Why are keys important when rendering lists in React?",
        a: "Keys help React identify stable items across renders so it can reconcile updates correctly."
      }
    ],
    quiz: {
      question: "What is the best first step when an API-backed page can be loading, empty, successful, or broken?",
      options: ["Model each UI state clearly", "Only design the success state", "Store everything in one global object immediately"],
      answer: 0
    }
  },
  {
    id: "backend-basics",
    stage: "Stage 4",
    title: "Backend Development, APIs, and Auth",
    duration: "4 to 6 weeks",
    focus: "Backend",
    summary:
      "Learn server-side programming, REST conventions, authentication, validation, and application structure.",
    why: "The backend is where business logic lives. This stage teaches how client actions become validated requests, persisted data, and secure APIs.",
    topics: ["Node.js", "REST APIs", "Authentication", "Validation", "Middleware", "Security"],
    projects: [
      "Build a task API with CRUD endpoints, validation, and structured error responses.",
      "Create an auth-enabled notes app with sign up, login, protected routes, and hashed passwords.",
      "Design a simple issue tracker backend with roles, status transitions, and audit-friendly timestamps."
    ],
    practices: [
      "Validate input at the API boundary and never trust client-provided data.",
      "Use consistent response formats and meaningful HTTP status codes.",
      "Separate controllers, business logic, and data access instead of mixing them in one file."
    ],
    interview: [
      {
        q: "Why should passwords never be stored in plain text?",
        a: "If the database is exposed, plain text passwords are immediately compromised. Use strong hashing with a dedicated password hashing algorithm."
      },
      {
        q: "What is the difference between authentication and authorization?",
        a: "Authentication verifies who the user is. Authorization determines what the user is allowed to do."
      }
    ],
    quiz: {
      question: "Which backend practice is most important at the API boundary?",
      options: ["Validating and sanitizing input", "Styling the JSON nicely", "Returning 200 for every outcome"],
      answer: 0
    }
  },
  {
    id: "databases",
    stage: "Stage 5",
    title: "Databases, Data Modeling, and Caching",
    duration: "3 to 5 weeks",
    focus: "Data",
    summary:
      "Move from temporary data to durable systems by learning SQL, schemas, relationships, indexing, and caching.",
    why: "Many full stack bugs are really data modeling bugs. Good schema choices affect correctness, performance, and how easy your features are to build.",
    topics: ["SQL", "PostgreSQL", "Schema Design", "Indexes", "ORMs", "Caching"],
    projects: [
      "Model a blog database with users, posts, comments, and likes, then query meaningful views.",
      "Build a bookstore inventory app with relational data and search filters.",
      "Add Redis-backed caching to an API endpoint and compare repeated request timings."
    ],
    practices: [
      "Design tables around real relationships and access patterns, not just object shapes.",
      "Add indexes deliberately and confirm why each one exists.",
      "Use migrations and seed scripts so your schema changes are repeatable."
    ],
    interview: [
      {
        q: "When would you choose a relational database for an application?",
        a: "When the system benefits from structured schemas, relationships, transactions, and consistent querying."
      },
      {
        q: "What problem does an index solve?",
        a: "Indexes speed up lookups on selected columns at the cost of storage and slower writes."
      }
    ],
    quiz: {
      question: "What is the strongest reason to learn data modeling early?",
      options: ["It shapes correctness and performance", "It makes CSS simpler", "It removes the need for validation"],
      answer: 0
    }
  },
  {
    id: "testing-devops",
    stage: "Stage 6",
    title: "Testing, DevOps, and Production Readiness",
    duration: "3 to 4 weeks",
    focus: "Production",
    summary:
      "Finish the path by learning testing, CI, deployment, observability, and the habits that keep apps reliable.",
    why: "Shipping is not the end of development. This stage teaches how teams protect quality, deploy safely, and troubleshoot production issues.",
    topics: ["Testing", "CI/CD", "Docker", "Deployment", "Logging", "Monitoring"],
    projects: [
      "Add unit and integration tests to an existing API and automate them in CI.",
      "Containerize a full stack app and run frontend, backend, and database services together.",
      "Deploy a portfolio project with environment variables, health checks, and basic monitoring."
    ],
    practices: [
      "Test behavior and critical flows, not framework internals.",
      "Keep secrets out of source control and use environment-specific configuration.",
      "Add logging and health checks before deployment, not after incidents."
    ],
    interview: [
      {
        q: "What is the value of CI in a team workflow?",
        a: "CI runs checks automatically so broken changes are caught quickly and consistently before release."
      },
      {
        q: "Why are environment variables commonly used in deployment?",
        a: "They allow configuration to change by environment without changing application code."
      }
    ],
    quiz: {
      question: "Which setup best prepares an app for real deployment?",
      options: ["Tests, logging, CI, and environment config", "Only a polished homepage", "Manual fixes directly in production"],
      answer: 0
    }
  }
];

const state = {
  selectedModuleId: modules[0].id,
  search: "",
  stageFilter: "all",
  completed: loadJson("fullstack-guild-completed", []),
  savedProjects: loadJson("fullstack-guild-saved", []),
  revealedAnswers: loadJson("fullstack-guild-revealed", []),
  quizResults: loadJson("fullstack-guild-quiz-results", {})
};

const elements = {
  pathNav: document.getElementById("path-nav"),
  moduleGrid: document.getElementById("module-grid"),
  overviewCard: document.getElementById("overview-card"),
  completionRate: document.getElementById("completion-rate"),
  progressFill: document.getElementById("progress-fill"),
  modulesDone: document.getElementById("modules-done"),
  activeFocus: document.getElementById("active-focus"),
  savedProjects: document.getElementById("saved-projects"),
  topicSearch: document.getElementById("topic-search"),
  stageFilter: document.getElementById("stage-filter"),
  jumpToCurrent: document.getElementById("jump-to-current"),
  resetProgress: document.getElementById("reset-progress"),
  moduleTemplate: document.getElementById("module-template")
};

initialize();

function initialize() {
  renderStageFilter();
  bindGlobalEvents();
  render();
}

function render() {
  const filteredModules = getFilteredModules();
  if (!filteredModules.some((module) => module.id === state.selectedModuleId)) {
    state.selectedModuleId = filteredModules[0]?.id ?? modules[0].id;
  }

  renderOverview(filteredModules);
  renderPathNav(filteredModules);
  renderModuleGrid(filteredModules);
  updateProgress(filteredModules);
}

function renderStageFilter() {
  const focuses = [...new Set(modules.map((module) => module.focus))];
  const fragment = document.createDocumentFragment();

  focuses.forEach((focus) => {
    const option = document.createElement("option");
    option.value = focus;
    option.textContent = focus;
    fragment.appendChild(option);
  });

  elements.stageFilter.appendChild(fragment);
}

function bindGlobalEvents() {
  elements.topicSearch.addEventListener("input", (event) => {
    state.search = event.target.value.trim().toLowerCase();
    render();
  });

  elements.stageFilter.addEventListener("change", (event) => {
    state.stageFilter = event.target.value;
    render();
  });

  elements.jumpToCurrent.addEventListener("click", () => {
    const nextModule =
      modules.find((module) => !state.completed.includes(module.id)) ?? modules[modules.length - 1];
    state.selectedModuleId = nextModule.id;
    render();
    scrollCardIntoView(nextModule.id);
  });

  elements.resetProgress.addEventListener("click", () => {
    state.completed = [];
    state.savedProjects = [];
    state.revealedAnswers = [];
    state.quizResults = {};
    persistState();
    render();
  });
}

function renderOverview(filteredModules) {
  const nextModule =
    modules.find((module) => !state.completed.includes(module.id)) ?? modules[modules.length - 1];

  elements.overviewCard.innerHTML = `
    <p class="eyebrow">Suggested Path</p>
    <h2>Learn in sequence, build as you go</h2>
    <p>
      This app follows the roadmap-inspired learning order: start with web fundamentals, master frontend basics,
      level up with a framework, then move into backend APIs, databases, and production skills.
    </p>
    <div class="overview-highlights">
      <span class="highlight-pill">Next up: ${nextModule.title}</span>
      <span class="highlight-pill">Visible modules: ${filteredModules.length}</span>
      <span class="highlight-pill">Interview prep included</span>
      <span class="highlight-pill">Projects mapped to each stage</span>
    </div>
  `;
}

function renderPathNav(filteredModules) {
  elements.pathNav.innerHTML = "";

  filteredModules.forEach((module, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "path-item";

    if (module.id === state.selectedModuleId) {
      button.classList.add("is-active");
    }

    if (state.completed.includes(module.id)) {
      button.classList.add("is-complete");
    }

    button.innerHTML = `
      <span class="path-title">${index + 1}. ${module.title}</span>
      <span class="path-meta">
        <span>${module.stage}</span>
        <span>${module.duration}</span>
      </span>
    `;

    button.addEventListener("click", () => {
      state.selectedModuleId = module.id;
      render();
      scrollCardIntoView(module.id);
    });

    elements.pathNav.appendChild(button);
  });
}

function renderModuleGrid(filteredModules) {
  elements.moduleGrid.innerHTML = "";

  filteredModules.forEach((module) => {
    const fragment = elements.moduleTemplate.content.cloneNode(true);
    const card = fragment.querySelector(".module-card");

    card.dataset.moduleId = module.id;
    if (state.completed.includes(module.id)) {
      card.classList.add("is-complete");
    }

    fragment.querySelector(".module-stage").textContent = `${module.stage}  •  ${module.focus}`;
    fragment.querySelector(".module-title").textContent = module.title;
    fragment.querySelector(".module-summary").textContent = module.summary;
    fragment.querySelector(".module-why").textContent = module.why;
    fragment.querySelector(".duration-pill").textContent = module.duration;

    const topicRow = fragment.querySelector(".topics-row");
    module.topics.forEach((topic) => {
      const chip = document.createElement("span");
      chip.className = "chip";
      chip.textContent = topic;
      topicRow.appendChild(chip);
    });

    const projectList = fragment.querySelector(".project-list");
    module.projects.forEach((project) => {
      const item = document.createElement("li");
      item.textContent = project;
      projectList.appendChild(item);
    });

    const practiceList = fragment.querySelector(".practice-list");
    module.practices.forEach((practice) => {
      const item = document.createElement("li");
      item.textContent = practice;
      practiceList.appendChild(item);
    });

    const interviewList = fragment.querySelector(".interview-list");
    module.interview.forEach((qa, qaIndex) => {
      const item = document.createElement("article");
      item.className = "interview-item";
      const showAnswers = state.revealedAnswers.includes(module.id);

      item.innerHTML = `
        <div class="interview-question">${qaIndex + 1}. ${qa.q}</div>
        <p class="interview-answer" ${showAnswers ? "" : "hidden"}>${qa.a}</p>
      `;
      interviewList.appendChild(item);
    });

    const toggleInterviewButton = fragment.querySelector(".toggle-interview");
    toggleInterviewButton.textContent = state.revealedAnswers.includes(module.id)
      ? "Hide Answers"
      : "Reveal Answers";
    toggleInterviewButton.addEventListener("click", () => toggleAnswers(module.id));

    const quizFeedback = fragment.querySelector(".quiz-feedback");
    const quizQuestion = fragment.querySelector(".quiz-question");
    const quizOptions = fragment.querySelector(".quiz-options");
    const quizResult = state.quizResults[module.id];

    quizQuestion.textContent = module.quiz.question;
    quizFeedback.textContent = quizResult
      ? quizResult.correct
        ? "Correct"
        : "Try again"
      : "Choose one";

    module.quiz.options.forEach((option, optionIndex) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "quiz-option";
      button.textContent = option;

      if (quizResult) {
        if (optionIndex === module.quiz.answer) {
          button.classList.add("is-correct");
        } else if (optionIndex === quizResult.selected && !quizResult.correct) {
          button.classList.add("is-wrong");
        }
      }

      button.addEventListener("click", () => handleQuizAnswer(module.id, optionIndex));
      quizOptions.appendChild(button);
    });

    const completeButton = fragment.querySelector(".complete-btn");
    completeButton.textContent = state.completed.includes(module.id)
      ? "Completed"
      : "Mark Complete";
    completeButton.addEventListener("click", () => toggleComplete(module.id));

    const bookmarkButton = fragment.querySelector(".bookmark-btn");
    bookmarkButton.textContent = state.savedProjects.includes(module.id)
      ? "Saved"
      : "Save Project";
    if (state.savedProjects.includes(module.id)) {
      bookmarkButton.classList.add("is-saved");
    }
    bookmarkButton.addEventListener("click", () => toggleSaved(module.id));

    elements.moduleGrid.appendChild(fragment);
  });
}

function updateProgress(filteredModules) {
  const completedCount = state.completed.length;
  const completionPercent = Math.round((completedCount / modules.length) * 100);
  const selectedModule = modules.find((module) => module.id === state.selectedModuleId) ?? modules[0];

  elements.completionRate.textContent = `${completionPercent}%`;
  elements.progressFill.style.width = `${completionPercent}%`;
  elements.modulesDone.textContent = String(completedCount);
  elements.activeFocus.textContent = selectedModule.focus;
  elements.savedProjects.textContent = String(state.savedProjects.length);

  if (filteredModules.length === 0) {
    elements.moduleGrid.innerHTML = `
      <article class="module-card">
        <h3>No modules match that search yet</h3>
        <p class="module-summary">Try a broader search term or switch the stage filter back to All stages.</p>
      </article>
    `;
  }
}

function getFilteredModules() {
  return modules.filter((module) => {
    const matchesStage = state.stageFilter === "all" || module.focus === state.stageFilter;
    const query = state.search;
    const matchesSearch =
      query.length === 0 ||
      module.title.toLowerCase().includes(query) ||
      module.summary.toLowerCase().includes(query) ||
      module.topics.some((topic) => topic.toLowerCase().includes(query)) ||
      module.projects.some((project) => project.toLowerCase().includes(query));

    return matchesStage && matchesSearch;
  });
}

function toggleComplete(moduleId) {
  state.completed = state.completed.includes(moduleId)
    ? state.completed.filter((id) => id !== moduleId)
    : [...state.completed, moduleId];
  persistState();
  render();
}

function toggleSaved(moduleId) {
  state.savedProjects = state.savedProjects.includes(moduleId)
    ? state.savedProjects.filter((id) => id !== moduleId)
    : [...state.savedProjects, moduleId];
  persistState();
  render();
}

function toggleAnswers(moduleId) {
  state.revealedAnswers = state.revealedAnswers.includes(moduleId)
    ? state.revealedAnswers.filter((id) => id !== moduleId)
    : [...state.revealedAnswers, moduleId];
  persistState();
  render();
}

function handleQuizAnswer(moduleId, selectedIndex) {
  const module = modules.find((entry) => entry.id === moduleId);
  if (!module) {
    return;
  }

  state.quizResults[moduleId] = {
    selected: selectedIndex,
    correct: selectedIndex === module.quiz.answer
  };
  persistState();
  render();
}

function scrollCardIntoView(moduleId) {
  const card = document.querySelector(`[data-module-id="${moduleId}"]`);
  if (card) {
    card.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function persistState() {
  localStorage.setItem("fullstack-guild-completed", JSON.stringify(state.completed));
  localStorage.setItem("fullstack-guild-saved", JSON.stringify(state.savedProjects));
  localStorage.setItem("fullstack-guild-revealed", JSON.stringify(state.revealedAnswers));
  localStorage.setItem("fullstack-guild-quiz-results", JSON.stringify(state.quizResults));
}

function loadJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch (error) {
    return fallback;
  }
}
