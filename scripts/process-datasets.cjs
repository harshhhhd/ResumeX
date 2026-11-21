const fs = require('fs');
const path = require('path');

const csvPath = path.join(__dirname, '..', 'DATASET', 'Company_Data.csv');
const jsonlPath = path.join(__dirname, '..', 'DATASET', 'train_data.jsonl');
const outputPath = path.join(__dirname, '..', 'src', 'data', 'interview-questions-dataset.json');

// Keyword extraction helper
const STOP_WORDS = new Set([
  'the', 'and', 'for', 'with', 'that', 'this', 'from', 'what', 'which', 'how',
  'would', 'you', 'your', 'are', 'can', 'about', 'explain', 'describe', 'using',
  'when', 'why', 'have', 'does', 'into', 'between', 'give', 'tell', 'some'
]);

function extractKeywords(text) {
  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9#+_\s]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 2 && !STOP_WORDS.has(w));
  const unique = Array.from(new Set(words));
  return unique.slice(0, 8);
}

function cleanQuestion(q) {
  if (!q) return '';
  let cleaned = q.replace(/^["']|["']$/g, '').trim();
  cleaned = cleaned.replace(/\s+/g, ' ');
  if (cleaned.length > 0) {
    cleaned = cleaned[0].toUpperCase() + cleaned.slice(1);
  }
  if (cleaned.length > 0 && !/[?.!]$/.test(cleaned)) {
    cleaned += '?';
  }
  return cleaned;
}

function assignPhase(q, domain) {
  const lower = q.toLowerCase();
  if (lower.includes('tell me about') || lower.includes('introduce') || lower.includes('walk me through your background') || lower.includes('inspired you')) {
    return 'intro';
  }
  if (lower.includes('what would you do') || lower.includes('scenario') || lower.includes('production') || lower.includes('stakeholder') || lower.includes('co-worker') || lower.includes('deadline')) {
    return 'scenario';
  }
  if (lower.includes('design') || lower.includes('architecture') || lower.includes('scale') || lower.includes('pipeline') || lower.includes('large') || lower.includes('system') || lower.includes('infrastructure')) {
    return 'architecture';
  }
  if (lower.includes('trend') || lower.includes('future') || lower.includes('influence') || lower.includes('practice') || lower.includes('learning')) {
    return 'closing';
  }
  return 'technical';
}

function generateHint(phase, domain, q) {
  switch (phase) {
    case 'intro':
      return 'Focus on technical context, your specific contributions, challenges overcome, and measurable impact.';
    case 'architecture':
      return 'Discuss architectural tradeoffs, scalability bottlenecks, fault tolerance, and system constraints.';
    case 'scenario':
      return 'Demonstrate analytical rigor, pragmatic communication with stakeholders, and structured problem-solving.';
    case 'closing':
      return 'Highlight technical curiosity, engineering best practices, and continuous professional development.';
    default:
      return `Demonstrate depth of knowledge in ${domain}, addressing edge cases, algorithmic efficiency, and real-world application.`;
  }
}

function generateIdealOutline(phase, q) {
  switch (phase) {
    case 'intro':
      return 'Clear 2-minute overview introducing experience, explaining problem context of a major project, technical stack decisions, personal contribution, and outcome.';
    case 'architecture':
      return 'Defines requirements, breaks down components, addresses bottlenecks (concurrency, data volume, network/disk I/O), and justifies design choices.';
    case 'scenario':
      return 'Identifies core problem, evaluates options pragmatically, explains mitigation strategy, communicates clearly, and reflects on root causes.';
    case 'closing':
      return 'Shares concrete examples of recently adopted patterns or tools, assessing tradeoffs and long-term maintainability.';
    default:
      return 'Directly defines the concept, contrasts alternatives, provides a concrete implementation example, and notes performance considerations.';
  }
}

const profileTaxonomy = {
  data_scientist: {
    title: 'Data Scientist',
    aliases: ['data science', 'data scientist', 'statistician', 'applied scientist', 'ai researcher'],
    items: []
  },
  machine_learning_engineer: {
    title: 'Machine Learning Engineer',
    aliases: ['machine learning', 'machine learning engineer', 'ml engineer', 'deep learning', 'nlp', 'computer vision', 'ai engineer'],
    items: []
  },
  data_analyst: {
    title: 'Data Analyst',
    aliases: ['data analyst', 'data analytics', 'business intelligence', 'bi analyst', 'bi engineer', 'tableau', 'reporting analyst'],
    items: []
  },
  data_engineer: {
    title: 'Data Engineer',
    aliases: ['data engineer', 'big data engineer', 'etl developer', 'data platform engineer', 'pipeline engineer'],
    items: []
  },
  python_developer: {
    title: 'Python Backend Developer',
    aliases: ['python', 'python developer', 'backend engineer', 'backend developer', 'software engineer', 'software developer', 'api engineer'],
    items: []
  },
  sql_database_engineer: {
    title: 'SQL & Database Engineer',
    aliases: ['sql', 'sql engineer', 'database administrator', 'dba', 'database engineer', 'data architect'],
    items: []
  },
  frontend_engineer: {
    title: 'Frontend Engineer',
    aliases: ['frontend', 'front end', 'react', 'typescript', 'javascript', 'ui engineer', 'web developer'],
    items: []
  },
  behavioral_general: {
    title: 'Behavioral & Leadership',
    aliases: ['behavioral', 'general', 'leadership', 'situational'],
    items: []
  }
};

function matchCategory(domainOrRole) {
  const text = (domainOrRole || '').toLowerCase();
  for (const [key, val] of Object.entries(profileTaxonomy)) {
    for (const alias of val.aliases) {
      if (text.includes(alias)) return key;
    }
  }
  return 'python_developer';
}

const seen = new Set();
let count = 0;

// 1. Process Company_Data.csv
if (fs.existsSync(csvPath)) {
  const content = fs.readFileSync(csvPath, 'utf8');
  const lines = content.split('\n');
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    let inQuotes = false;
    let cols = [];
    let current = '';
    for (let c = 0; c < line.length; c++) {
      const char = line[c];
      if (char === '"') inQuotes = !inQuotes;
      else if (char === ',' && !inQuotes) {
        cols.push(current);
        current = '';
      } else current += char;
    }
    cols.push(current);

    const rawQ = cols[0];
    const domain = cols[1];
    const company = cols[2];

    const q = cleanQuestion(rawQ);
    if (!q || q.length < 25 || seen.has(q.toLowerCase())) continue;
    seen.add(q.toLowerCase());

    const catKey = matchCategory(domain);
    const phase = assignPhase(q, domain || profileTaxonomy[catKey].title);

    profileTaxonomy[catKey].items.push({
      id: `ds_${++count}`,
      question: q,
      category: catKey,
      domain: domain ? domain.trim() : profileTaxonomy[catKey].title,
      company: company && company.trim() ? company.trim() : null,
      phase,
      contextHint: generateHint(phase, domain || profileTaxonomy[catKey].title, q),
      expectedKeywords: extractKeywords(q),
      idealAnswerOutline: generateIdealOutline(phase, q)
    });
  }
}

// 2. Process train_data.jsonl
if (fs.existsSync(jsonlPath)) {
  const content = fs.readFileSync(jsonlPath, 'utf8');
  const lines = content.split('\n');
  for (const line of lines) {
    if (!line.trim()) continue;
    try {
      const obj = JSON.parse(line);
      const match = obj.text.match(/### Instruction: Generate a (.*?) interview question(?: for (.*?))?\n\n### Response: (.*)/s);
      if (match) {
        const role = match[1].trim();
        const company = match[2]?.trim() || null;
        const rawResp = match[3].trim();
        const q = cleanQuestion(rawResp);

        if (!q || q.length < 25 || seen.has(q.toLowerCase())) continue;
        seen.add(q.toLowerCase());

        const catKey = matchCategory(role);
        const phase = assignPhase(q, role);

        profileTaxonomy[catKey].items.push({
          id: `ds_${++count}`,
          question: q,
          category: catKey,
          domain: role,
          company: company,
          phase,
          contextHint: generateHint(phase, role, q),
          expectedKeywords: extractKeywords(q),
          idealAnswerOutline: generateIdealOutline(phase, q)
        });
      }
    } catch (e) {}
  }
}

// Also supplement frontend_engineer with core benchmark questions if low count
if (profileTaxonomy.frontend_engineer.items.length < 15) {
  const feQuestions = [
    {
      q: "How do you handle state management, asynchronous data fetching, and race conditions in production React applications?",
      phase: "technical"
    },
    {
      q: "Can you explain the difference between client-side rendering (CSR), server-side rendering (SSR), and incremental static regeneration (ISR)? What are the performance tradeoffs of each?",
      phase: "technical"
    },
    {
      q: "When optimizing Core Web Vitals (specifically LCP, CLS, and INP), what tools and profiling strategies do you use to locate performance bottlenecks?",
      phase: "architecture"
    },
    {
      q: "How do you architect a reusable, accessible design system component library in TypeScript to prevent unintended re-renders?",
      phase: "architecture"
    },
    {
      q: "Imagine a critical UI regression causes form submissions to hang for users on mobile networks right after release. Walk me through your triage and rollback process.",
      phase: "scenario"
    },
    {
      q: "How do you approach automated testing across unit, integration, and end-to-end layers in a modern frontend architecture?",
      phase: "technical"
    },
    {
      q: "What is your approach to handling browser caching, asset versioning, and code splitting across modern bundlers?",
      phase: "architecture"
    },
    {
      q: "What is a recent frontend standard, CSS feature, or framework paradigm you have adopted, and how has it improved developer experience or user experience?",
      phase: "closing"
    }
  ];

  for (const item of feQuestions) {
    const q = cleanQuestion(item.q);
    if (!seen.has(q.toLowerCase())) {
      seen.add(q.toLowerCase());
      profileTaxonomy.frontend_engineer.items.push({
        id: `fe_${++count}`,
        question: q,
        category: 'frontend_engineer',
        domain: 'Frontend Engineering',
        company: null,
        phase: item.phase,
        contextHint: generateHint(item.phase, 'Frontend Engineering', q),
        expectedKeywords: extractKeywords(q),
        idealAnswerOutline: generateIdealOutline(item.phase, q)
      });
    }
  }
}

// Create curated dataset output: top 30-50 per profile for compact, fast loading
const curatedOutput = {};
let totalCurated = 0;

for (const [key, val] of Object.entries(profileTaxonomy)) {
  // Sort: questions with company first, then length
  const sorted = val.items.sort((a, b) => {
    if (a.company && !b.company) return -1;
    if (!a.company && b.company) return 1;
    return b.question.length - a.question.length;
  });

  // Pick balanced questions across phases
  const byPhase = { intro: [], technical: [], architecture: [], scenario: [], closing: [] };
  for (const q of sorted) {
    if (byPhase[q.phase]) {
      byPhase[q.phase].push(q);
    }
  }

  // Take top from each phase
  const curated = [
    ...(byPhase.intro.slice(0, 8)),
    ...(byPhase.technical.slice(0, 25)),
    ...(byPhase.architecture.slice(0, 15)),
    ...(byPhase.scenario.slice(0, 15)),
    ...(byPhase.closing.slice(0, 8)),
  ];

  curatedOutput[key] = {
    title: val.title,
    totalInDataset: val.items.length,
    questions: curated
  };

  totalCurated += curated.length;
  console.log(`Curated ${key} (${val.title}): ${curated.length} questions (from ${val.items.length} total)`);
}

console.log(`\nWriting ${totalCurated} curated questions to ${outputPath}...`);
fs.writeFileSync(outputPath, JSON.stringify(curatedOutput, null, 2), 'utf8');
console.log('Done!');
