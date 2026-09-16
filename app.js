"use strict";

const instruments = [
  { id: "G1", group: "Government", css: "gov", title: "Inspect and protect", detail: "Conduct an unannounced, worker-centred inspection and arrange immediate protection where needed." },
  { id: "G2", group: "Government", css: "gov", title: "Return documents and preserve evidence", detail: "Order the return of identity documents and secure records without exposing workers to retaliation." },
  { id: "G3", group: "Government", css: "gov", title: "Regulate labour recruiters", detail: "License, monitor and sanction recruiters and labour contractors." },
  { id: "G4", group: "Government", css: "gov", title: "Investigate and enforce penalties", detail: "Investigate offences and apply effective labour, administrative or criminal penalties." },
  { id: "G5", group: "Government", css: "gov", title: "Extend legal protection", detail: "Bring excluded sectors and workers within effective labour and social protection." },
  { id: "G6", group: "Government", css: "gov", title: "Coordinate across borders and agencies", detail: "Share evidence and coordinate labour, migration, criminal and consular authorities." },
  { id: "G7", group: "Government", css: "gov", title: "Use market and procurement leverage", detail: "Use public procurement or market measures with worker-centred remediation." },
  { id: "G8", group: "Government", css: "gov", title: "Tripartite policy and action plan", detail: "Develop and review a national response with employers' and workers' organizations." },
  { id: "E1", group: "Employers", css: "employer", title: "Pay wages and remedy harm", detail: "Pay outstanding wages and provide effective remedy without requiring workers to surrender rights." },
  { id: "E2", group: "Employers", css: "employer", title: "Employer-pays recruitment", detail: "Refund worker-paid fees and ensure recruitment costs are not charged to workers." },
  { id: "E3", group: "Employers", css: "employer", title: "End restrictions and return documents", detail: "Restore freedom of movement and return documents immediately and safely." },
  { id: "E4", group: "Employers", css: "employer", title: "Trace the supply chain", detail: "Map suppliers to source and provide reliable information for investigation and remediation." },
  { id: "E5", group: "Employers", css: "employer", title: "Reform purchasing practices", detail: "Change prices, targets and lead times that create pressure for abusive labour practices." },
  { id: "E6", group: "Employers", css: "employer", title: "Remediate, do not simply terminate", detail: "Correct harm with suppliers and workers instead of shifting it through abrupt disengagement." },
  { id: "E7", group: "Employers", css: "employer", title: "Safe grievance channel", detail: "Provide a confidential, accessible channel with protection against retaliation." },
  { id: "E8", group: "Employers", css: "employer", title: "Joint workplace action", detail: "Act jointly with independent worker representatives and monitor agreed changes." },
  { id: "W1", group: "Workers", css: "worker", title: "Union access and confidential interviews", detail: "Enable independent representatives to meet workers safely and confidentially." },
  { id: "W2", group: "Workers", css: "worker", title: "Worker-led monitoring", detail: "Let workers and their organizations help design, test and monitor the response." },
  { id: "W3", group: "Workers", css: "worker", title: "Collective bargaining", detail: "Negotiate enforceable protections on wages, hours, mobility and recruitment." },
  { id: "W4", group: "Workers", css: "worker", title: "Worker-to-worker rights education", detail: "Share practical rights information in languages and channels workers trust." },
  { id: "W5", group: "Workers", css: "worker", title: "Independent complaint channel", detail: "Provide a trusted route outside management for complaints, referral and follow-up." },
  { id: "W6", group: "Workers", css: "worker", title: "Representation in remediation", detail: "Include freely chosen worker representatives in decisions about remedy and prevention." },
  { id: "W7", group: "Workers", css: "worker", title: "Cross-border union cooperation", detail: "Connect worker organizations across recruitment, production and destination countries." },
  { id: "W8", group: "Workers", css: "worker", title: "Worker-chosen support and referral", detail: "Connect workers safely to representatives, legal assistance and specialist services they choose." }
];

const risks = [
  {
    sector: "Coffee",
    short: "Withheld wages",
    title: "The withheld harvest wages",
    scenario: "Seasonal coffee pickers are recruited through a labour contractor. Their wages are held until the harvest ends, and anyone leaving early loses everything already earned. The estate says the pickers are not its employees.",
    question: "What combined response protects the workers now, remedies the withheld wages and prevents the practice returning next season?",
    criteria: [
      ["Immediate protection", "Stop wage withholding and ensure workers can leave without losing earned wages."],
      ["Remedy and enforcement", "Pay all wages due, examine the contractor–estate relationship and enforce responsibility."],
      ["Prevention and worker voice", "Regulate the contractor and use confidential worker input or monitoring before the next harvest."]
    ],
    suggested: ["G1", "G3", "E1", "E6", "W1", "W2"],
    note: "Withholding wages can be an indicator of forced labour, particularly when it prevents a worker from leaving. Examine the full facts; do not use an indicator count as a legal test.",
    hand: ["G1", "G3", "E1", "E5", "E6", "W1", "W2", "W7"],
    effects: { G1: ["protect", "remedy"], G3: ["prevent"], E1: ["remedy"], E5: ["prevent"], E6: ["remedy", "prevent"], W1: ["protect", "prevent"], W2: ["prevent"], W7: ["prevent"] }
  },
  {
    sector: "Garments",
    short: "Locked dormitory",
    title: "The locked dormitory",
    scenario: "Migrant workers live in employer-provided dormitories. The gate is locked at 21:00 and a guard records anyone requesting permission to leave. Management says the rule is for safety and applies equally to everyone.",
    question: "How will the group restore freedom of movement immediately and create a safe, enforceable way for workers to raise future concerns?",
    criteria: [
      ["Immediate protection", "Unlock the gate, restore freedom of movement and prohibit retaliation."],
      ["Remedy and enforcement", "Investigate the restriction, document harm and correct any related disciplinary measures."],
      ["Prevention and worker voice", "Guarantee independent access, safe complaints and joint monitoring of accommodation rules."]
    ],
    suggested: ["G1", "G2", "E3", "E7", "E8", "W1", "W5", "W6"],
    note: "Restriction of movement may signal forced labour when it is used to prevent workers from leaving employment. Safety measures must be necessary, proportionate and non-coercive.",
    hand: ["G1", "G2", "E3", "E7", "E8", "W1", "W5", "W6"],
    effects: { G1: ["protect", "remedy"], G2: ["remedy"], E3: ["protect"], E7: ["prevent"], E8: ["prevent"], W1: ["protect", "prevent"], W5: ["prevent"], W6: ["prevent"] }
  },
  {
    sector: "Cotton",
    short: "Harvest order",
    title: "The compulsory harvest order",
    scenario: "Teachers and municipal employees are ordered to spend weekends harvesting cotton. Refusal brings a salary deduction and a disciplinary entry. Local officials receive bonuses when the district meets its harvest target.",
    question: "What must happen immediately, and how can social dialogue help stop the system—not merely this weekend's order?",
    criteria: [
      ["Immediate protection", "Suspend the orders, salary threats and disciplinary penalties."],
      ["Remedy and enforcement", "Restore deductions, remove disciplinary entries and investigate those responsible."],
      ["Prevention and worker voice", "Review targets and incentives with independent worker representation and sustained oversight."]
    ],
    suggested: ["G4", "G8", "E5", "W3", "W5", "W6"],
    note: "State-imposed forced labour engages direct government responsibility. Social dialogue can strengthen prevention and oversight, but it does not replace the duty to stop coercion and enforce the law.",
    hand: ["G1", "G4", "G8", "E5", "E7", "W3", "W5", "W6"],
    effects: { G1: ["protect"], G4: ["protect", "remedy"], G8: ["prevent"], E5: ["prevent"], E7: ["protect", "prevent"], W3: ["prevent"], W5: ["protect", "prevent"], W6: ["prevent"] }
  },
  {
    sector: "Mining",
    short: "Recruitment debt",
    title: "The recruitment debt",
    scenario: "Migrant workers at a copper site are employed by a subcontractor. They paid a recruiter the equivalent of three months' wages, signed contracts they could not read and are threatened with dismissal and loss of immigration status if they complain.",
    question: "Combine your cards into a response that makes reporting safe, remedies the debt and changes recruitment practice.",
    criteria: [
      ["Immediate protection", "Stop threats, provide understandable contracts and create a safe route to report or leave."],
      ["Remedy and enforcement", "Refund recruitment fees, correct contracts and investigate recruiters and responsible businesses."],
      ["Prevention and worker voice", "Apply employer-pays recruitment, recruiter oversight and trusted rights education or representation."]
    ],
    suggested: ["G1", "G3", "G4", "E2", "E7", "W1", "W4", "W8"],
    note: "Recruitment debt, deception and threats can combine to remove freely given consent. Immigration-related vulnerability requires strong safeguards against retaliation.",
    hand: ["G1", "G3", "G4", "E2", "E7", "W1", "W4", "W8"],
    effects: { G1: ["protect"], G3: ["prevent"], G4: ["remedy"], E2: ["remedy", "prevent"], E7: ["protect", "prevent"], W1: ["protect", "prevent"], W4: ["prevent"], W8: ["protect", "prevent"] }
  },
  {
    sector: "Trade",
    short: "Opaque shipment",
    title: "The opaque shipment",
    scenario: "A consignment is suspended at an importing market because of suspected forced labour at a third-tier farm. The exporter cannot identify the farm. Abrupt cancellation could leave workers unpaid and destroy evidence.",
    question: "How will the group establish the facts, protect affected workers and prevent commercial pressure from shifting the harm elsewhere?",
    criteria: [
      ["Immediate protection", "Avoid retaliation or abrupt action that leaves workers unpaid; protect worker input and evidence."],
      ["Remedy and enforcement", "Trace the source, cooperate with competent authorities and remedy verified harm."],
      ["Prevention and worker voice", "Improve traceability and purchasing practices with worker-led monitoring and representation."]
    ],
    suggested: ["G6", "G7", "E4", "E5", "E6", "W2", "W6", "W7"],
    note: "Traceability is not remedy. A credible response establishes facts, protects people and addresses business practices that contributed to the risk.",
    hand: ["G6", "G7", "E4", "E5", "E6", "W2", "W6", "W7"],
    effects: { G6: ["remedy"], G7: ["remedy"], E4: ["remedy"], E5: ["prevent"], E6: ["protect", "remedy"], W2: ["prevent"], W6: ["protect", "prevent"], W7: ["prevent"] }
  },
  {
    sector: "Domestic work",
    short: "Retained passport",
    title: "The retained passport",
    scenario: "An employment agency holds a domestic worker's passport. She has no written contract, cannot leave the household unaccompanied and has no colleagues. Domestic work is excluded from parts of the labour code.",
    question: "What combined response secures her safety and documents now, provides remedy and closes the protection gap?",
    criteria: [
      ["Immediate protection", "Return the passport, enable a safe exit and offer confidential, worker-chosen assistance."],
      ["Remedy and enforcement", "Investigate the agency and household, recover wages or other remedy and enforce penalties where warranted."],
      ["Prevention and worker voice", "Extend effective protection, regulate the agency and provide independent complaint and representation routes."]
    ],
    suggested: ["G1", "G2", "G3", "G4", "G5", "E1", "E3", "W5", "W8"],
    note: "Document retention, isolation and restriction of movement are serious warning signs. Immediate protection must not wait for a wider policy process.",
    hand: ["G1", "G2", "G3", "G5", "E1", "E3", "W5", "W8"],
    effects: { G1: ["protect"], G2: ["protect", "remedy"], G3: ["prevent"], G5: ["prevent"], E1: ["remedy"], E3: ["protect"], W5: ["prevent"], W8: ["protect", "prevent"] }
  }
];

const STORAGE_KEY = "foa-forced-labour-card-game-v4";
const DEFAULT_LINK_COUNT = 6;
const OUTCOME_LABELS = {
  protect: "immediate protection",
  remedy: "remedy or enforcement",
  prevent: "prevention or worker voice"
};

const normaliseLinkCount = value => [4, 5, 6].includes(Number(value)) ? Number(value) : DEFAULT_LINK_COUNT;
const roundSeconds = mode => mode === "team" ? 90 : 150;

const defaultState = (mode = null, teamName = "", linkCount = DEFAULT_LINK_COUNT) => ({
  current: 0,
  broken: Array(risks.length).fill(false),
  resolved: Array(risks.length).fill(false),
  checked: Array.from({ length: risks.length }, () => [false, false, false]),
  revealed: Array(risks.length).fill(false),
  selected: Array.from({ length: risks.length }, () => []),
  feedback: Array(risks.length).fill(""),
  attempts: Array(risks.length).fill(0),
  seconds: roundSeconds(mode),
  elapsedSeconds: 0,
  startedAt: null,
  completedAt: null,
  running: false,
  started: false,
  mode,
  teamName,
  linkCount: normaliseLinkCount(linkCount)
});

let state = loadState();
let interval = null;
let toastTimeout = null;

const $ = (id) => document.getElementById(id);
const els = {
  chainTrack: $("chainTrack"), chainObjective: $("chainObjective"), score: $("scoreValue"), scoreTotal: $("scoreTotal"), modeChip: $("modeChip"),
  round: $("roundNumber"), roundTotal: $("roundTotal"), sector: $("sectorBadge"),
  title: $("riskTitle"), scenario: $("scenarioText"), question: $("questionText"), tableRule: $("tableRule"), timer: $("timer"),
  timerButton: $("timerButton"), addTime: $("addTimeButton"), reveal: $("revealButton"),
  response: $("responseCheck"), criteria: $("criteriaList"), suggested: $("suggestedCards"), legal: $("legalNote"),
  break: $("breakButton"), unresolved: $("unresolvedButton"), next: $("nextButton"),
  teamPanel: $("teamHandPanel"), virtualHand: $("virtualHand"), selectedCount: $("selectedCount"),
  teamFeedback: $("teamFeedback"), testCards: $("testCardsButton"), teamNameInput: $("teamNameInput"),
  resultsTeam: $("resultsTeamValue"), resultsLinks: $("resultsLinksValue"), resultsTime: $("resultsTimeValue"),
  reportTime: $("reportTimeInstruction"), foaFinding: $("foaFinding"), foaFindingText: $("foaFindingText"),
  start: $("startDialog"), instructions: $("instructionsDialog"), results: $("resultsDialog"), toast: $("toast"), printZone: $("printZone")
};

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && Array.isArray(saved.broken) && saved.broken.length === risks.length) {
      const restored = { ...defaultState(saved.mode, saved.teamName, saved.linkCount), ...saved, running: false };
      restored.linkCount = normaliseLinkCount(saved.linkCount);
      restored.current = Math.min(Math.max(0, Number(saved.current) || 0), restored.linkCount - 1);
      restored.selected = Array.isArray(saved.selected) && saved.selected.length === risks.length ? saved.selected : defaultState().selected;
      restored.feedback = Array.isArray(saved.feedback) && saved.feedback.length === risks.length ? saved.feedback : defaultState().feedback;
      return restored;
    }
  } catch (_) {}
  return defaultState();
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...state, running: false }));
}

function render() {
  renderMode();
  renderChain();
  renderRisk();
  renderTimer();
  saveState();
}

function renderMode() {
  const isTeam = state.mode === "team";
  document.body.classList.toggle("mode-team", isTeam);
  document.querySelectorAll(".facilitator-only").forEach(element => { element.hidden = isTeam; });
  els.teamPanel.hidden = !isTeam;
  if (!state.mode) els.modeChip.textContent = "Choose a mode";
  else if (isTeam) els.modeChip.textContent = state.teamName || "Team Challenge";
  else els.modeChip.textContent = "Facilitator mode";
}

function renderChain() {
  els.chainTrack.innerHTML = "";
  els.chainTrack.style.setProperty("--link-count", state.linkCount);
  els.chainTrack.setAttribute("aria-label", `${state.linkCount} risk links`);
  els.chainObjective.textContent = `Break all ${state.linkCount} links with complete responses`;
  els.scoreTotal.textContent = `/ ${state.linkCount} links`;
  risks.slice(0, state.linkCount).forEach((risk, index) => {
    const link = document.createElement("div");
    link.className = "chain-link";
    link.setAttribute("role", "listitem");
    if (index === state.current) link.classList.add("current");
    if (state.broken[index]) link.classList.add("broken");
    else if (state.resolved[index]) link.classList.add("unresolved");
    const status = state.broken[index] ? "Broken" : state.resolved[index] ? "Unresolved" : index === state.current ? "Current" : "Waiting";
    link.innerHTML = `<span><span class="link-number">LINK ${index + 1}</span><span class="link-state">${status}</span></span>`;
    link.setAttribute("aria-label", `Link ${index + 1}: ${risk.short}. ${status}.`);
    els.chainTrack.appendChild(link);
  });
  els.score.textContent = state.broken.slice(0, state.linkCount).filter(Boolean).length;
}

function renderRisk() {
  const risk = risks[state.current];
  const isTeam = state.mode === "team";
  els.round.textContent = state.current + 1;
  els.roundTotal.textContent = state.linkCount;
  els.sector.textContent = risk.sector;
  els.title.textContent = risk.title;
  els.scenario.textContent = risk.scenario;
  els.question.textContent = risk.question;
  els.tableRule.innerHTML = isTeam
    ? "<strong>Team rule:</strong> choose exactly three cards. Your response must include worker voice and at least two actor groups."
    : "<strong>At the table:</strong> describe your cards, but do not show them. The facilitator may break the link without revealing the check.";

  els.criteria.innerHTML = "";
  risk.criteria.forEach(([label, text], index) => {
    const item = document.createElement("label");
    item.className = "criterion";
    item.innerHTML = `<input type="checkbox" ${state.checked[state.current][index] ? "checked" : ""}><span><strong>${label}</strong><span>${text}</span></span>`;
    item.querySelector("input").addEventListener("change", (event) => {
      state.checked[state.current][index] = event.target.checked;
      saveState();
    });
    els.criteria.appendChild(item);
  });
  els.suggested.textContent = risk.suggested.map(id => instrumentById(id).title).join(" · ");
  els.legal.textContent = risk.note;

  if (isTeam) {
    els.response.hidden = true;
    renderTeamHand();
  } else {
    els.response.hidden = !state.revealed[state.current];
    els.reveal.textContent = state.revealed[state.current] ? "Hide optional response check" : "Reveal optional response check";
  }
  updateDecisionState();
}

function renderTeamHand() {
  const risk = risks[state.current];
  const selection = state.selected[state.current];
  const done = state.resolved[state.current];
  els.virtualHand.innerHTML = "";
  risk.hand.forEach(id => {
    const card = instrumentById(id);
    const selected = selection.includes(id);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `virtual-card ${card.css}${selected ? " selected" : ""}`;
    button.setAttribute("aria-pressed", selected ? "true" : "false");
    button.disabled = done || (selection.length >= 3 && !selected);
    button.innerHTML = `<span class="virtual-card-meta"><span>${card.group}</span><span>${card.id}</span></span><strong>${card.title}</strong><span class="virtual-card-detail">${card.detail}</span>`;
    button.addEventListener("click", () => toggleTeamCard(id));
    els.virtualHand.appendChild(button);
  });
  els.selectedCount.textContent = `${selection.length} / 3 selected`;
  els.selectedCount.classList.toggle("ready", selection.length === 3);
  els.teamFeedback.textContent = state.feedback[state.current] || "Discuss the eight cards, then select the strongest three-card response.";
  els.teamFeedback.classList.toggle("success", done && state.broken[state.current]);
  els.testCards.disabled = done || selection.length !== 3;
  els.testCards.textContent = done ? "Link broken" : "Test our 3 cards";
}

function toggleTeamCard(id) {
  if (state.mode !== "team" || state.resolved[state.current]) return;
  const selection = state.selected[state.current];
  const index = selection.indexOf(id);
  if (index >= 0) selection.splice(index, 1);
  else if (selection.length < 3) selection.push(id);
  state.feedback[state.current] = "";
  renderTeamHand();
  saveState();
}

function testTeamSelection() {
  if (state.mode !== "team" || state.resolved[state.current]) return;
  const risk = risks[state.current];
  const selection = state.selected[state.current];
  if (selection.length !== 3) return;

  state.attempts[state.current] += 1;
  const groups = new Set(selection.map(id => instrumentById(id).group));
  const hasWorkerVoice = selection.some(id => id.startsWith("W"));
  const covered = new Set(selection.flatMap(id => risk.effects[id] || []));
  const missing = Object.keys(OUTCOME_LABELS).filter(outcome => !covered.has(outcome));
  const hints = missing.map(outcome => OUTCOME_LABELS[outcome]);
  if (!hasWorkerVoice) hints.push("a Workers card");
  if (groups.size < 2) hints.push("instruments from at least two actor groups");

  if (hints.length === 0) {
    state.feedback[state.current] = buildSuccessBreakdown(risk, selection);
    resolveCurrent(true);
    return;
  }

  state.feedback[state.current] = `Not yet. Reconsider your cards: the response still needs ${joinNaturalLanguage(hints)}.`;
  renderTeamHand();
  saveState();
}

function buildSuccessBreakdown(risk, selection) {
  const used = new Set();
  const outcomeCard = (outcome, preferWorker = false) => {
    const candidates = selection.filter(id => (risk.effects[id] || []).includes(outcome));
    const preferred = preferWorker ? candidates.filter(id => id.startsWith("W")) : candidates;
    const id = preferred.find(candidate => !used.has(candidate))
      || preferred[0]
      || candidates.find(candidate => !used.has(candidate))
      || candidates[0];
    if (id) used.add(id);
    const card = instrumentById(id);
    return card ? `${card.id} · ${card.title}` : "Covered";
  };
  const groups = [...new Set(selection.map(id => instrumentById(id).group))];
  return [
    `Protection: ${outcomeCard("protect")}`,
    `Remedy/enforcement: ${outcomeCard("remedy")}`,
    `Prevention/worker voice: ${outcomeCard("prevent", true)}`,
    `Actor groups: ${groups.join(" + ")}`
  ].join("\n");
}

function joinNaturalLanguage(items) {
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items.at(-1)}`;
}

function updateDecisionState() {
  const done = state.resolved[state.current];
  els.break.disabled = done;
  els.unresolved.disabled = done;
  els.next.disabled = !done;
  els.next.innerHTML = state.current === state.linkCount - 1 ? "See results <span aria-hidden=\"true\">→</span>" : "Next risk <span aria-hidden=\"true\">→</span>";
}

function renderTimer() {
  const mins = Math.floor(state.seconds / 60).toString().padStart(2, "0");
  const secs = (state.seconds % 60).toString().padStart(2, "0");
  els.timer.textContent = `${mins}:${secs}`;
  els.timer.classList.toggle("urgent", state.seconds <= 30 && state.seconds > 0);
  els.timerButton.textContent = state.running ? "Pause timer" : state.seconds === 0 ? "Reset timer" : "Start timer";
}

function runTimer() {
  clearInterval(interval);
  interval = setInterval(() => {
    state.seconds = Math.max(0, state.seconds - 1);
    state.elapsedSeconds += 1;
    if (state.seconds === 0) {
      state.running = false;
      clearInterval(interval);
      showToast(state.mode === "team" ? "Time is up—make your final three-card choice." : "Time. Ask for the group's final joint response.");
    }
    renderTimer();
    saveState();
  }, 1000);
}

function toggleTimer() {
  if (state.seconds === 0) state.seconds = roundSeconds(state.mode);
  state.running = !state.running;
  if (state.running) runTimer();
  else clearInterval(interval);
  renderTimer();
  saveState();
}

function stopTimer(reset = false) {
  clearInterval(interval);
  state.running = false;
  if (reset) state.seconds = roundSeconds(state.mode);
  renderTimer();
}

function resolveCurrent(isBroken) {
  state.resolved[state.current] = true;
  state.broken[state.current] = isBroken;
  if (state.mode === "team" && isBroken && state.current === state.linkCount - 1) state.completedAt = Date.now();
  stopTimer(false);
  render();
  showToast(isBroken ? "Link broken! Protection, remedy and prevention are covered." : "Link remains unresolved. Carry the missing outcomes into the debrief.");
}

function nextRisk() {
  if (!state.resolved[state.current]) return;
  if (state.current < state.linkCount - 1) {
    state.current += 1;
    state.seconds = roundSeconds(state.mode);
    state.running = state.mode === "team";
    render();
    if (state.running) runTimer();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    showResults();
  }
}

function showResults() {
  const score = state.broken.slice(0, state.linkCount).filter(Boolean).length;
  const isTeam = state.mode === "team";
  const elapsedSeconds = isTeam && state.startedAt
    ? Math.max(0, Math.floor(((state.completedAt || Date.now()) - state.startedAt) / 1000))
    : state.elapsedSeconds;
  const time = formatElapsed(elapsedSeconds);
  els.resultsTeam.textContent = isTeam ? (state.teamName || "Team Challenge") : "Facilitator group";
  els.resultsLinks.textContent = `${score} / ${state.linkCount}`;
  els.resultsTime.textContent = time;
  els.reportTime.hidden = !isTeam;
  els.foaFinding.hidden = !isTeam;

  if (isTeam) {
    const workersPlayed = state.selected
      .slice(0, state.linkCount)
      .reduce((total, selection, index) => total + (state.broken[index] ? selection.filter(id => id.startsWith("W")).length : 0), 0);
    els.foaFindingText.textContent = `You broke ${score} links. Every successful response required a Workers card—this is a rule of the game, designed to make worker voice visible. You played ${workersPlayed} workers’ instruments. The finding to discuss is that without freedom of association and the protections of Convention No. 87, independent worker voice, representation and collective action are weakened or blocked.`;
  }

  if (score === state.linkCount) {
    $("resultsTitle").textContent = isTeam && state.teamName ? `${state.teamName} broke the chain!` : `All ${state.linkCount} links are broken`;
    $("resultsCopy").textContent = state.mode === "team"
      ? `You completed all ${state.linkCount} links. Every successful response combined protection, remedy, prevention and worker voice.`
      : "For this simulation, every response combined immediate protection, remedy and sustainable prevention.";
  } else if (score >= Math.ceil(state.linkCount * 2 / 3)) {
    $("resultsTitle").textContent = "A strong response—with gaps to examine";
    $("resultsCopy").textContent = `${score} of ${state.linkCount} links were broken. The unresolved links show where authority, information, remedy or worker voice was missing.`;
  } else {
    $("resultsTitle").textContent = "The chain still holds";
    $("resultsCopy").textContent = `${score} of ${state.linkCount} links were broken. Use the unresolved risks to identify what the group could not combine in time.`;
  }
  els.results.showModal();
}

function formatElapsed(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

function resetGame(confirmFirst = true) {
  if (confirmFirst && !window.confirm("Reset the game and return to mode selection?")) return;
  clearInterval(interval);
  if (els.results.open) els.results.close();
  state = defaultState();
  render();
  localStorage.removeItem(STORAGE_KEY);
  setLinkCountChoice(DEFAULT_LINK_COUNT);
  if (!els.start.open) els.start.showModal();
}

function startMode(mode) {
  const teamName = mode === "team" ? els.teamNameInput.value.trim() : "";
  const linkCount = normaliseLinkCount(document.querySelector('input[name="linkCount"]:checked')?.value);
  clearInterval(interval);
  state = defaultState(mode, teamName, linkCount);
  state.started = true;
  state.running = mode === "team";
  state.startedAt = mode === "team" ? Date.now() : null;
  if (els.start.open) els.start.close();
  render();
  if (state.running) runTimer();
}

function restartSameMode() {
  const mode = state.mode || "facilitator";
  const teamName = state.teamName;
  const linkCount = state.linkCount;
  clearInterval(interval);
  state = defaultState(mode, teamName, linkCount);
  state.started = true;
  state.running = mode === "team";
  state.startedAt = mode === "team" ? Date.now() : null;
  render();
  if (state.running) runTimer();
}

function setLinkCountChoice(linkCount) {
  const radio = document.querySelector(`input[name="linkCount"][value="${normaliseLinkCount(linkCount)}"]`);
  if (radio) radio.checked = true;
}

function showToast(message) {
  clearTimeout(toastTimeout);
  els.toast.textContent = message;
  els.toast.classList.add("show");
  toastTimeout = setTimeout(() => els.toast.classList.remove("show"), 3300);
}

function instrumentById(id) { return instruments.find(card => card.id === id); }

function buildPrintPack() {
  els.printZone.innerHTML = "";
  for (let start = 0; start < instruments.length; start += 8) {
    const page = document.createElement("section");
    page.className = "print-page";
    instruments.slice(start, start + 8).forEach(card => {
      const article = document.createElement("article");
      article.className = `print-card ${card.css}`;
      article.innerHTML = `<div><div class="card-type">${card.group} instrument</div><h2>${card.title}</h2><p>${card.detail}</p></div><div class="card-code">${card.id}</div>`;
      page.appendChild(article);
    });
    els.printZone.appendChild(page);
  }
  const guide = document.createElement("section");
  guide.className = "print-guide";
  guide.innerHTML = `
    <h1>FOA–Forced Labour Card Game</h1>
    <p class="guide-subtitle">Facilitator quick guide · 8 participants · about 25 minutes</p>
    <div class="guide-columns">
      <div class="guide-section"><h2>Set up</h2><ol><li>Cut and shuffle all 24 instrument cards.</li><li>Deal three cards to each participant.</li><li>Project the online board and select Facilitator mode.</li><li>Participants may describe cards, but may not show them.</li></ol></div>
      <div class="guide-section"><h2>Each link</h2><ol><li>Read the risk and start the 2:30 timer.</li><li>Participants combine instruments into one joint response.</li><li>When the proposal is credible, select Break this link.</li><li>The optional response check can support your debrief; it never has to be revealed.</li></ol></div>
      <div class="guide-section"><h2>Be generous</h2><p>There is no single correct combination. Accept any defensible proposal that achieves protection, remedy and prevention.</p></div>
      <div class="guide-section"><h2>Non-negotiable safeguards</h2><ul><li>Urgent protection and enforcement do not wait for dialogue.</li><li>Worker voice does not transfer responsibility to workers.</li><li>Indicators prompt inquiry; they are not a numerical legal test.</li></ul></div>
      <div class="guide-section"><h2>Debrief</h2><ol><li>What information did worker representatives surface?</li><li>Which actions had to be immediate?</li><li>What remedied harm versus preventing recurrence?</li><li>What was missing when a constituency could not contribute?</li></ol></div>
      <div class="guide-section"><h2>Timing</h2><p>Set-up 3 min · Choose 4, 5 or 6 links · Activity 12–18 min · Debrief 7–10 min.</p></div>
    </div>`;
  els.printZone.appendChild(guide);
}

function printPack() {
  buildPrintPack();
  window.print();
}

async function toggleFullscreen() {
  try {
    if (!document.fullscreenElement) await document.documentElement.requestFullscreen();
    else await document.exitFullscreen();
  } catch (_) { showToast("Fullscreen is not available in this browser."); }
}

function registerWebMCP() {
  const context = document.modelContext;
  if (!context?.registerTool) return;
  const tools = [
    {
      name: "start_foa_forced_labour_game",
      title: "Start FOA–Forced Labour Card Game",
      description: "Reset the board and start the facilitator version at link 1.",
      inputSchema: { type: "object", properties: {}, additionalProperties: false },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute: async () => { state = defaultState("facilitator"); state.started = true; if (els.start.open) els.start.close(); render(); return { current_link: 1, broken_links: 0 }; }
    },
    {
      name: "show_forced_labour_link",
      title: "Show game link",
      description: "Move the visible board to one of the six forced-labour risk links.",
      inputSchema: { type: "object", properties: { link: { type: "integer", minimum: 1, maximum: 6 } }, required: ["link"], additionalProperties: false },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute: async (input) => { if (!Number.isInteger(input?.link) || input.link < 1 || input.link > state.linkCount) throw new Error(`link must be an integer from 1 to ${state.linkCount}`); state.current = input.link - 1; stopTimer(true); render(); return { current_link: input.link, title: risks[state.current].title }; }
    },
    {
      name: "record_forced_labour_link_result",
      title: "Record link result",
      description: "Record the current facilitator-mode link as broken or unresolved.",
      inputSchema: { type: "object", properties: { broken: { type: "boolean" } }, required: ["broken"], additionalProperties: false },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute: async (input) => { if (typeof input?.broken !== "boolean") throw new Error("broken must be true or false"); resolveCurrent(input.broken); return { link: state.current + 1, broken: input.broken, total_broken: state.broken.filter(Boolean).length }; }
    }
  ];
  tools.forEach(tool => { try { void Promise.resolve(context.registerTool(tool)).catch(() => {}); } catch (_) {} });
}

$("startFacilitatorButton").addEventListener("click", () => startMode("facilitator"));
$("startTeamButton").addEventListener("click", () => startMode("team"));
$("startPrintButton").addEventListener("click", printPack);
$("startHowButton").addEventListener("click", () => els.instructions.showModal());
$("howButton").addEventListener("click", () => els.instructions.showModal());
$("printButton").addEventListener("click", printPack);
$("fullscreenButton").addEventListener("click", toggleFullscreen);
$("resetButton").addEventListener("click", () => resetGame(true));
els.timerButton.addEventListener("click", toggleTimer);
els.addTime.addEventListener("click", () => { state.seconds += 30; renderTimer(); saveState(); });
els.reveal.addEventListener("click", () => { state.revealed[state.current] = !state.revealed[state.current]; renderRisk(); saveState(); });
els.break.addEventListener("click", () => resolveCurrent(true));
els.unresolved.addEventListener("click", () => resolveCurrent(false));
els.testCards.addEventListener("click", testTeamSelection);
els.next.addEventListener("click", nextRisk);
$("reviewButton").addEventListener("click", () => els.results.close());
$("resetResultsButton").addEventListener("click", () => resetGame(false));
document.querySelectorAll("[data-close]").forEach(button => button.addEventListener("click", () => $(button.dataset.close).close()));

document.addEventListener("keydown", (event) => {
  if (event.target.matches("input, button, summary")) return;
  if (event.key.toLowerCase() === "f") toggleFullscreen();
  if (event.code === "Space") { event.preventDefault(); toggleTimer(); }
  if (event.key.toLowerCase() === "r" && state.mode === "facilitator") { state.revealed[state.current] = !state.revealed[state.current]; renderRisk(); }
  if (event.key.toLowerCase() === "n" && state.resolved[state.current]) nextRisk();
});

document.addEventListener("fullscreenchange", () => {
  $("fullscreenButton").setAttribute("aria-label", document.fullscreenElement ? "Exit fullscreen" : "Enter fullscreen");
});

buildPrintPack();
render();
if (!state.started) els.start.showModal();
registerWebMCP();
