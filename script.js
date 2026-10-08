(function () {
  "use strict";

  var STORAGE_KEY = "pathpilot-latest-profile";

  var CAREERS = [
    {
      id: "fullstack",
      name: "Full Stack Developer",
      icon: "💻",
      difficulty: "Medium",
      direction: "Product engineering, startups, SaaS, and web platforms.",
      coreSkills: ["html", "css", "javascript", "git", "sql", "api", "react", "node"],
      skillTokens: [
        "html", "css", "javascript", "js", "typescript", "react", "node", "nodejs",
        "express", "mongodb", "sql", "git", "api", "rest", "frontend", "backend",
        "web", "bootstrap", "tailwind", "nextjs", "java", "python", "ui", "ux"
      ],
      interestTokens: [
        "web", "website", "websites", "app", "apps", "ui", "ux", "product",
        "coding", "software", "development", "web development", "frontend", "backend", "fullstack",
        "full stack", "startups", "design"
      ],
      domainTokens: ["web", "fullstack", "full stack", "software", "frontend", "backend", "product", "app"],
      whyTemplate: "Your mix of {skills} and interest in {interests} aligns with building complete web products — from interface to database.",
      projects: [
        { title: "Campus resource portal", detail: "A responsive site where students find notes, events, and club updates with login and search." },
        { title: "Personal finance tracker", detail: "CRUD app with charts, categories, and a simple REST API plus a clean dashboard." },
        { title: "Team project board", detail: "Kanban-style task app with authentication, comments, and deployment on a free host." }
      ],
      recommended: ["JavaScript", "React or vanilla DOM", "Node.js / Express", "SQL or MongoDB", "Git & GitHub", "REST APIs", "Responsive CSS"],
      roadmap: {
        1: {
          learn: "HTML, CSS, JavaScript basics, Git, and how the web works (HTTP, browsers, hosting).",
          projects: "Personal portfolio and a static college club page.",
          intern: "Apply to campus web/tech clubs; contribute small GitHub issues.",
          place: "Build a GitHub profile and learn to explain projects clearly."
        },
        2: {
          learn: "DOM, APIs, a frontend framework, Node/Express, and relational databases.",
          projects: "Full-stack notes app and a REST API with authentication.",
          intern: "Target summer internships as junior web/full-stack intern.",
          place: "Start LeetCode easy problems 3x/week and mock resume reviews."
        },
        3: {
          learn: "System design lite, testing, CI, cloud deploy, TypeScript, and performance.",
          projects: "Team SaaS-style app with roles, payments mock, and production deploy.",
          intern: "Aim for a product-company internship; ship a feature, not just a tutorial.",
          place: "Contest/DSA consistency, 2 strong case-study projects, LinkedIn outreach."
        },
        4: {
          learn: "Polish architecture, observability, and interview system-design stories.",
          projects: "Capstone with real users; open-source one library or template.",
          intern: "Convert internship to PPO or freelance a small client site.",
          place: "Daily DSA + mock interviews; freeze resume 6 weeks before placements."
        }
      },
      plan: {
        1: ["Set up VS Code, Git, and GitHub.", "Rebuild a simple landing page in HTML/CSS.", "Publish the page with GitHub Pages.", "Log 5 concepts you still find fuzzy."],
        2: ["Learn JavaScript arrays, objects, and DOM events.", "Add interactive filters or a form validator.", "Complete one beginner JS challenge set.", "Read a short article on HTTP and REST."],
        3: ["Build a to-do app that saves to localStorage.", "Learn fetch() and consume a public API.", "Write a README with screenshots.", "Ask a peer for UI feedback and revise."],
        4: ["Sketch a mini full-stack idea (frontend + JSON file or simple backend).", "Learn Git branching and a clean commit style.", "Deploy an updated portfolio with 2 projects.", "Write a 30-day-after plan: what to learn next month."]
      }
    },
    {
      id: "data",
      name: "Data Engineer",
      icon: "🛢️",
      difficulty: "Medium-High",
      direction: "Data platforms, analytics infrastructure, cloud pipelines, and BI teams.",
      coreSkills: ["python", "sql", "etl", "excel", "pandas", "warehouse", "cloud", "pipelines"],
      skillTokens: [
        "python", "sql", "excel", "pandas", "spark", "kafka", "etl", "airflow",
        "aws", "azure", "gcp", "docker", "java", "database", "databases", "data",
        "tableau", "powerbi", "power bi", "hive", "warehouse", "snowflake", "dbt"
      ],
      interestTokens: [
        "data", "analytics", "pipeline", "pipelines", "database", "databases",
        "big data", "cloud", "dashboards", "visualization", "data visualization", "bi", "etl", "warehousing"
      ],
      domainTokens: ["data", "analytics", "database", "cloud", "bi", "engineering"],
      whyTemplate: "Your {skills} background plus curiosity about {interests} maps well to moving, cleaning, and serving reliable data at scale.",
      projects: [
        { title: "Student marks warehouse", detail: "Ingest CSVs, clean with Python, load into SQLite/Postgres, and write SQL marts for reports." },
        { title: "API-to-dashboard pipeline", detail: "Schedule a daily pull from a public API, store history, and chart trends." },
        { title: "Mini data quality monitor", detail: "Checks for nulls, duplicates, and late files, then emails or logs a simple quality report." }
      ],
      recommended: ["Advanced SQL", "Python (pandas)", "Data modeling", "ETL / orchestration", "Cloud storage", "Warehouses", "Basic Linux & Git"],
      roadmap: {
        1: {
          learn: "Python fundamentals, Excel, and introductory SQL. Understand tables, keys, and clean data habits.",
          projects: "Analyze a public CSV and present 5 insights.",
          intern: "Join analytics/data clubs; volunteer to clean survey data.",
          place: "Document every analysis; start a tidy GitHub with notebooks."
        },
        2: {
          learn: "Joins, window functions, pandas, and a first look at warehouses vs OLTP.",
          projects: "Build an ETL script that refreshes a local warehouse nightly.",
          intern: "Apply for data intern roles; highlight SQL + one pipeline project.",
          place: "Practice SQL interview questions and explain trade-offs of schemas."
        },
        3: {
          learn: "Orchestration (Airflow ideas), Spark basics, cloud storage, and data modeling (star schema).",
          projects: "End-to-end pipeline with tests, logs, and a BI dashboard.",
          intern: "Seek data engineering / analytics engineering internships.",
          place: "System-design for data (batch vs stream) and SQL-heavy mocks."
        },
        4: {
          learn: "Reliability, cost, partitioning, and how analysts consume your tables.",
          projects: "Capstone pipeline with SLAs, documentation, and a runbook.",
          intern: "Own a production-like dataset; write on-call style notes.",
          place: "Portfolio of 2 pipelines + SQL case studies; company research."
        }
      },
      plan: {
        1: ["Install Python and a SQL client (or DB Browser for SQLite).", "Complete a short Python refresher: files, lists, dicts.", "Load a CSV and print summary stats.", "Write 10 practice SELECT queries."],
        2: ["Learn JOIN, GROUP BY, and WHERE deeply.", "Clean a messy dataset (dates, nulls, duplicates).", "Save cleaned output to SQLite.", "Sketch a source → transform → table diagram."],
        3: ["Automate the clean-and-load script.", "Add simple data-quality checks.", "Build one dashboard chart from the table.", "Read about star schemas vs flat files."],
        4: ["Package the project with README and sample data.", "Learn 5 Linux/Git commands you will actually use.", "Rehearse explaining the pipeline in 2 minutes.", "List 3 internships or teams that hire data interns."]
      }
    },
    {
      id: "aiml",
      name: "AI/ML Engineer",
      icon: "🧠",
      difficulty: "High",
      direction: "Applied ML, NLP/vision products, research-adjacent engineering, and AI features in apps.",
      coreSkills: ["python", "ml", "numpy", "pandas", "statistics", "sklearn", "math", "nlp"],
      skillTokens: [
        "python", "machine learning", "ml", "ai", "tensorflow", "pytorch", "numpy",
        "pandas", "statistics", "stats", "deep learning", "nlp", "computer vision",
        "sklearn", "scikit-learn", "keras", "math", "linear algebra", "probability"
      ],
      interestTokens: [
        "ai", "ml", "machine learning", "artificial intelligence", "robotics",
        "research", "nlp", "vision", "chatbots", "models", "deep learning"
      ],
      domainTokens: ["ai", "ml", "machine learning", "artificial intelligence", "research", "data science"],
      whyTemplate: "Interest in {interests} combined with {skills} is a strong start for applied machine learning — experiments, metrics, and shipping models.",
      projects: [
        { title: "Campus FAQ chatbot", detail: "Retrieve answers from a small document set; evaluate accuracy on 20 real questions." },
        { title: "Placement-salary baseline model", detail: "Train a simple sklearn model, compare baselines, and write an error analysis." },
        { title: "Image or text classifier", detail: "End-to-end notebook: data split, training, metrics, and a tiny demo UI." }
      ],
      recommended: ["Python", "NumPy & pandas", "Statistics", "scikit-learn", "ML fundamentals", "PyTorch or TensorFlow", "Experiment tracking"],
      roadmap: {
        1: {
          learn: "Python, math comfort (functions, vectors), and data wrangling. Avoid jumping to huge models first.",
          projects: "Exploratory analysis + a from-scratch linear regression toy.",
          intern: "Research/AI clubs; reproduce a simple tutorial and write what you learned.",
          place: "Show curiosity with notes, not only certificates."
        },
        2: {
          learn: "Probability, sklearn, train/test splits, overfitting, and classic ML algorithms.",
          projects: "Two supervised projects with clear metrics and a baseline.",
          intern: "Apply for ML/data science internships with notebooks that tell a story.",
          place: "Explain bias/variance; practice coding interviews in Python."
        },
        3: {
          learn: "Deep learning basics, NLP or CV track, evaluation, and ML system pieces (data, train, serve).",
          projects: "One deployed demo (Streamlit/static UI) plus a proper experiment log.",
          intern: "Target applied ML internships; own a metric, not just a notebook.",
          place: "ML design questions, SQL, and 1–2 standout case studies."
        },
        4: {
          learn: "Responsible AI, latency/cost, and production inference basics.",
          projects: "Capstone with dataset card, limitations, and a demo video.",
          intern: "Research internship or AI feature team; publish a short blog/report.",
          place: "Portfolio of 2 rigorous ML projects; mock interviews weekly."
        }
      },
      plan: {
        1: ["Refresh Python: functions, list/dict comprehensions, files.", "Learn NumPy arrays and pandas DataFrames.", "Pick one beginner dataset and describe it in writing.", "Review mean, variance, and train vs test in plain language."],
        2: ["Implement train/test split and a baseline (majority class or mean).", "Fit a simple sklearn model and print metrics.", "Plot one confusion or residual chart.", "Write 5 sentences on what the model gets wrong."],
        3: ["Tune one hyperparameter and compare runs in a table.", "Try a second algorithm and keep the better one.", "Package a short demo (notebook or tiny script).", "Read one article on data leakage."],
        4: ["Create a clean GitHub repo with README and limitations.", "Record a 2-minute walkthrough of results.", "List next skills: PyTorch or NLP, based on interest.", "Find 3 AI intern role descriptions and note required skills."]
      }
    }
  ];

  var views = {
    landing: document.getElementById("landingView"),
    form: document.getElementById("formView"),
    results: document.getElementById("resultsView"),
    detail: document.getElementById("detailView")
  };

  var startJourneyBtn = document.getElementById("startJourneyBtn");
  var brandBtn = document.getElementById("brandBtn");
  var startOverBtn = document.getElementById("startOverBtn");
  var demoBtn = document.getElementById("demoBtn");
  var profileForm = document.getElementById("profileForm");
  var formError = document.getElementById("formError");
  var backToResultsBtn = document.getElementById("backToResultsBtn");
  var careerCards = document.getElementById("careerCards");
  var compareHead = document.querySelector("#compareTable thead");
  var compareBody = document.querySelector("#compareTable tbody");
  var detailContent = document.getElementById("detailContent");

  var state = {
    profile: null,
    results: []
  };

  function showView(name) {
    Object.keys(views).forEach(function (key) {
      views[key].classList.toggle("active", key === name);
    });
    startOverBtn.classList.toggle("hidden", name === "landing");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  var ALIASES = {
    js: ["javascript"],
    javascript: ["js"],
    ts: ["typescript"],
    node: ["nodejs", "node.js"],
    nodejs: ["node"],
    "node.js": ["node"],
    ml: ["machine learning", "ai"],
    ai: ["artificial intelligence", "machine learning", "ml"],
    "artificial intelligence": ["ai", "ml"],
    "machine learning": ["ml", "ai"],
    fullstack: ["full stack"],
    "full stack": ["fullstack"],
    powerbi: ["power bi"],
    "power bi": ["powerbi"],
    sklearn: ["scikit-learn"],
    "scikit-learn": ["sklearn"]
  };

  function tokenize(text) {
    return String(text || "")
      .toLowerCase()
      .split(/[,;/|&]+/)
      .map(function (part) {
        return part.trim().replace(/\s+/g, " ");
      })
      .filter(Boolean);
  }

  function expandTokens(list) {
    var out = list.slice();
    list.forEach(function (token) {
      var extra = ALIASES[token];
      if (extra) out = out.concat(extra);
    });
    return unique(out);
  }

  function unique(list) {
    var seen = {};
    return list.filter(function (item) {
      if (seen[item]) return false;
      seen[item] = true;
      return true;
    });
  }

  function tokensMatch(needle, token) {
    if (token === needle) return true;
    if (needle === "java" && token.indexOf("javascript") !== -1) return false;
    if (token === "java" && needle.indexOf("javascript") !== -1) return false;
    if (needle.length <= 3 || token.length <= 3) return false;
    return token.indexOf(needle) !== -1 || needle.indexOf(token) !== -1;
  }

  function tokenHits(needles, haystackTokens) {
    var hits = [];
    needles.forEach(function (needle) {
      var n = needle.toLowerCase();
      var matched = haystackTokens.some(function (token) {
        return tokensMatch(n, token);
      });
      if (matched) hits.push(needle);
    });
    return unique(hits);
  }

  function overlapRatio(hits, universe) {
    if (!universe.length) return 0;
    return hits.length / universe.length;
  }

  function clamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
  }

  function prettyJoin(items, fallback) {
    if (!items.length) return fallback;
    if (items.length === 1) return items[0];
    return items.slice(0, -1).join(", ") + " and " + items[items.length - 1];
  }

  function yearLabel(n) {
    return ({ 1: "1st", 2: "2nd", 3: "3rd", 4: "4th" })[n] + " year";
  }

  function computeMatch(career, profile) {
    var studentSkills = expandTokens(profile.skills);
    var studentInterests = expandTokens(profile.interests);
    var studentDomain = expandTokens(tokenize(profile.domain));
    var skillHits = tokenHits(career.skillTokens, studentSkills);
    var interestHits = tokenHits(career.interestTokens, studentInterests);
    var domainHits = tokenHits(career.domainTokens, studentDomain);
    var coreHits = tokenHits(career.coreSkills, studentSkills);

    var skillCoverage = overlapRatio(skillHits, career.skillTokens);
    var studentSkillUse = profile.skills.length ? skillHits.length / Math.max(profile.skills.length, 1) : 0;
    var coreCoverage = overlapRatio(coreHits, career.coreSkills);
    var interestCoverage = overlapRatio(interestHits, career.interestTokens);
    var studentInterestUse = profile.interests.length ? interestHits.length / Math.max(profile.interests.length, 1) : 0;
    var domainScore = domainHits.length ? 1 : tokenHits(career.domainTokens, studentInterests.concat(studentSkills)).length ? 0.55 : 0.18;

    var yearBoost = 0.04 * (5 - profile.year);

    var raw =
      0.28 * skillCoverage +
      0.18 * studentSkillUse +
      0.22 * coreCoverage +
      0.12 * interestCoverage +
      0.1 * studentInterestUse +
      0.1 * domainScore +
      yearBoost;

    var percent = Math.round(clamp(32 + raw * 62, 38, 96));

    var strengths = coreHits.map(function (s) {
      return s.replace(/\b\w/g, function (c) {
        return c.toUpperCase();
      });
    });
    if (!strengths.length) {
      strengths = skillHits.slice(0, 4).map(function (s) {
        return s.replace(/\b\w/g, function (c) {
          return c.toUpperCase();
        });
      });
    }
    if (!strengths.length) {
      strengths = ["Curiosity and a clear preferred domain", "Willingness to learn through projects"];
    }

    var gaps = career.recommended.filter(function (rec) {
      var recTokens = tokenize(rec.replace(/[()]/g, " ").replace(/\b(or|and)\b/gi, ","));
      return tokenHits(expandTokens(recTokens), studentSkills).length === 0;
    });

    var skillPhrase = prettyJoin(profile.skills.slice(0, 3), "your current toolkit");
    var interestPhrase = prettyJoin(profile.interests.slice(0, 3), "your stated interests");
    var why = career.whyTemplate
      .replace("{skills}", skillPhrase)
      .replace("{interests}", interestPhrase);

    if (domainHits.length) {
      why += " Preferred domain “" + profile.domain + "” also points this way.";
    }

    return {
      career: career,
      match: percent,
      why: why,
      strengths: unique(strengths).slice(0, 6),
      gaps: gaps.slice(0, 6),
      skillHits: skillHits,
      interestHits: interestHits
    };
  }

  function simulate(profile) {
    return CAREERS.map(function (career) {
      return computeMatch(career, profile);
    }).sort(function (a, b) {
      return b.match - a.match;
    });
  }

  function saveProfile(profile) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    } catch (err) {
      /* storage may be blocked; app still works */
    }
  }

  function loadProfile() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (err) {
      return null;
    }
  }

  function fillForm(profile) {
    document.getElementById("studentName").value = profile.name || "";
    document.getElementById("currentYear").value = String(profile.year || "");
    document.getElementById("skills").value = (profile.skills || []).join(", ");
    document.getElementById("interests").value = (profile.interests || []).join(", ");
    document.getElementById("domain").value = profile.domain || "";
  }

  function readForm() {
    var name = document.getElementById("studentName").value.trim();
    var year = Number(document.getElementById("currentYear").value);
    var skills = unique(tokenize(document.getElementById("skills").value));
    var interests = unique(tokenize(document.getElementById("interests").value));
    var domain = document.getElementById("domain").value.trim();
    return { name: name, year: year, skills: skills, interests: interests, domain: domain };
  }

  function validate(profile) {
    if (!profile.name) return "Please enter your name.";
    if (!(profile.year >= 1 && profile.year <= 4)) return "Please select your current year.";
    if (profile.skills.length < 1) return "Add at least one skill.";
    if (profile.interests.length < 1) return "Add at least one interest.";
    if (!profile.domain) return "Please add a preferred area or domain.";
    return "";
  }

  function renderResults() {
    var profile = state.profile;
    var results = state.results;
    var best = results[0];

    document.getElementById("resultsEyebrow").textContent = profile.name + " · " + yearLabel(profile.year);
    document.getElementById("resultsTitle").textContent = "Your three futures";
    document.getElementById("resultsSub").textContent =
      "Best current fit: " + best.career.name + " at " + best.match +
      "% match. Scores come from overlap between your skills, interests, domain, and each career’s core toolkit — not from random numbers.";

    careerCards.innerHTML = results
      .map(function (item, index) {
        var career = item.career;
        return (
          '<article class="career-card' + (index === 0 ? " best" : "") + '">' +
          '<div class="card-icon">' + career.icon + "</div>" +
          "<h3>" + career.name + "</h3>" +
          (index === 0 ? '<span class="badge">Best match</span>' : "") +
          '<div class="match-ring" style="--p:' + item.match + '"><span>' + item.match + "%</span></div>" +
          '<p class="why">' + escapeHtml(item.why) + "</p>" +
          "<strong>Strengths</strong>" +
          '<ul class="mini-list">' + item.strengths.map(function (s) { return "<li>" + escapeHtml(s) + "</li>"; }).join("") + "</ul>" +
          "<strong>Skill gaps</strong>" +
          '<ul class="mini-list">' + (item.gaps.length ? item.gaps : ["You already cover the starter stack — go deeper."]).map(function (s) { return "<li>" + escapeHtml(s) + "</li>"; }).join("") + "</ul>" +
          "<strong>3 project ideas</strong>" +
          '<ul class="mini-list">' + career.projects.map(function (p) { return "<li><b>" + escapeHtml(p.title) + "</b> — " + escapeHtml(p.detail) + "</li>"; }).join("") + "</ul>" +
          '<button type="button" class="primary-btn explore-btn" data-id="' + career.id + '">Explore Path</button>' +
          "</article>"
        );
      })
      .join("");

    compareHead.innerHTML =
      "<tr><th>Lens</th>" +
      results.map(function (item) { return "<th>" + item.career.icon + " " + item.career.name + "</th>"; }).join("") +
      "</tr>";

    var rows = [
      ["Match", results.map(function (i) { return i.match + "%"; })],
      ["Difficulty", results.map(function (i) { return i.career.difficulty; })],
      ["Main skills", results.map(function (i) { return i.career.recommended.slice(0, 4).join(", "); })],
      ["Projects", results.map(function (i) { return i.career.projects.map(function (p) { return p.title; }).join("; "); })],
      ["Career direction", results.map(function (i) { return i.career.direction; })]
    ];

    compareBody.innerHTML = rows
      .map(function (row) {
        return "<tr><th>" + row[0] + "</th>" + row[1].map(function (cell) { return "<td>" + escapeHtml(cell) + "</td>"; }).join("") + "</tr>";
      })
      .join("");
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderDetail(careerId) {
    var item = state.results.filter(function (r) { return r.career.id === careerId; })[0];
    if (!item) return;
    var career = item.career;
    var year = state.profile.year;

    var strengthChips = item.strengths.map(function (s) { return '<span class="chip good">' + escapeHtml(s) + "</span>"; }).join("");
    var gapChips = (item.gaps.length ? item.gaps : ["Go deeper on system design and production habits"]).map(function (s) { return '<span class="chip gap">' + escapeHtml(s) + "</span>"; }).join("");
    var recChips = career.recommended.map(function (s) { return '<span class="chip">' + escapeHtml(s) + "</span>"; }).join("");

    var yearsHtml = [1, 2, 3, 4]
      .map(function (y) {
        var mile = career.roadmap[y];
        var current = y === year ? " current" : "";
        var tag = y === year ? ' <span class="badge">You are here</span>' : "";
        return (
          '<article class="block year-card' + current + '">' +
          "<h3>Year " + y + tag + "</h3>" +
          "<p><b>Learn:</b> " + escapeHtml(mile.learn) + "</p>" +
          "<p><b>Projects:</b> " + escapeHtml(mile.projects) + "</p>" +
          "<p><b>Internships:</b> " + escapeHtml(mile.intern) + "</p>" +
          "<p><b>Placement prep:</b> " + escapeHtml(mile.place) + "</p>" +
          "</article>"
        );
      })
      .join("");

    var planHtml = [1, 2, 3, 4]
      .map(function (w) {
        return (
          '<article class="block"><h3>Week ' + w + "</h3><ul class='mini-list'>" +
          career.plan[w].map(function (step) { return "<li>" + escapeHtml(step) + "</li>"; }).join("") +
          "</ul></article>"
        );
      })
      .join("");

    var projectsHtml = career.projects
      .map(function (p) {
        return '<li><b>' + escapeHtml(p.title) + "</b> — " + escapeHtml(p.detail) + "</li>";
      })
      .join("");

    detailContent.innerHTML =
      '<div class="detail-hero">' +
      "<div><p class='eyebrow'>Selected path</p><h2>" + career.icon + " " + career.name + "</h2>" +
      "<p class='panel-sub'>Match score <b>" + item.match + "%</b> for " + escapeHtml(state.profile.name) +
      " (" + yearLabel(year) + "). Difficulty: " + career.difficulty + ".</p></div>" +
      '<div class="match-ring" style="--p:' + item.match + '"><span>' + item.match + "%</span></div></div>" +
      '<div class="section-grid">' +
      '<div class="block"><h3>Why this career fits</h3><p>' + escapeHtml(item.why) + "</p></div>" +
      '<div class="block"><h3>Career direction</h3><p>' + escapeHtml(career.direction) + "</p></div>" +
      '<div class="block"><h3>Current strengths</h3><div class="chips">' + strengthChips + "</div></div>" +
      '<div class="block"><h3>Skill gaps</h3><div class="chips">' + gapChips + "</div></div>" +
      '<div class="block"><h3>Recommended skills</h3><div class="chips">' + recChips + "</div></div>" +
      '<div class="block"><h3>3 project ideas</h3><ul class="mini-list">' + projectsHtml + "</ul></div>" +
      "</div>" +
      '<div class="block" style="margin-bottom:16px"><h3>📅 Year-by-year roadmap</h3><div class="roadmap">' + yearsHtml + "</div></div>" +
      '<div class="block"><h3>🚀 First 30 days plan</h3><div class="plan-grid">' + planHtml + "</div></div>";

    showView("detail");
  }

  function runSimulation(profile) {
    state.profile = profile;
    state.results = simulate(profile);
    saveProfile(profile);
    renderResults();
    showView("results");
  }

  startJourneyBtn.addEventListener("click", function () {
    showView("form");
    var saved = loadProfile();
    if (saved && saved.name) fillForm(saved);
  });

  brandBtn.addEventListener("click", function () {
    showView("landing");
  });

  startOverBtn.addEventListener("click", function () {
    profileForm.reset();
    formError.hidden = true;
    state.profile = null;
    state.results = [];
    showView("landing");
  });

  demoBtn.addEventListener("click", function () {
    fillForm({
      name: "Aanya Sharma",
      year: 2,
      skills: ["Python", "HTML", "CSS", "SQL", "Git"],
      interests: ["AI", "web development", "data visualization"],
      domain: "Software / AI"
    });
    formError.hidden = true;
  });

  profileForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var profile = readForm();
    var error = validate(profile);
    if (error) {
      formError.hidden = false;
      formError.textContent = error;
      return;
    }
    formError.hidden = true;
    runSimulation(profile);
  });

  careerCards.addEventListener("click", function (event) {
    var btn = event.target.closest(".explore-btn");
    if (!btn) return;
    renderDetail(btn.getAttribute("data-id"));
  });

  backToResultsBtn.addEventListener("click", function () {
    showView("results");
  });
})();
