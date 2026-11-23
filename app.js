// ==========================================================================
// 3-Month Ankle-Safe Gym Coach - Application Logic & State Controller
// ==========================================================================

const STORAGE_KEY = "ANKLE_COACH_DATA_V1";

// Helper: Get formatted date string YYYY-MM-DD
function getTodayDateStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

// Default application state
const DEFAULT_STATE = {
  phase: "m1", // 'm1' | 'm2' | 'm3'
  selectedDay: 1, // 1 to 7
  activeTab: "workout", // 'workout' | 'prep' | 'diet' | 'progress' | 'safety'
  todayPain: 1, // 0 to 10
  painHistory: {}, // { 'YYYY-MM-DD': score }
  completedSets: {}, // { 'date_exerciseId_setIdx': boolean }
  actualSetData: {}, // { 'date_exerciseId_setIdx': { weight: string, reps: string } }
  exerciseSwaps: {}, // { 'exerciseId': 'original' | 'busy' | 'stiff' }
  prepCompleted: {}, // { 'date_prepId': boolean }
  dietChecks: {}, // { 'date_mealId_itemIdx': boolean }
  waterGlasses: 6, // 250ml glasses (target 14 = 3.5L)
  weightLog: [
    { id: 1, date: "2026-11-01", weightKg: 93.0, waistCm: 102.0, anklePain: 2, note: "Starting transformation baseline" },
    { id: 2, date: "2026-11-08", weightKg: 92.2, waistCm: 101.0, anklePain: 1, note: "End Week 1 - Ankle adapting well" },
    { id: 3, date: "2026-11-15", weightKg: 91.5, waistCm: 100.0, anklePain: 1, note: "End Week 2 - Peroneal eversion strong" },
    { id: 4, date: "2026-11-22", weightKg: 90.7, waistCm: 99.0, anklePain: 1, note: "End Week 3 - Zero swelling post-session" }
  ]
};

// Global State
let appState = loadState();

// Web Audio API Audio Synthesizer for Rest Timer
let audioCtx = null;

function initAudio() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
}

function playBeep(freq = 600, duration = 0.12, type = "sine") {
  try {
    initAudio();
    if (!audioCtx) return;
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    console.warn("Audio play prevented:", e);
  }
}

// Pleasant Triple Chime for Rest Timer Finish
function playFinishChime() {
  playBeep(523.25, 0.2, "sine"); // C5
  setTimeout(() => playBeep(659.25, 0.2, "sine"), 150); // E5
  setTimeout(() => playBeep(783.99, 0.35, "sine"), 300); // G5
}

// State Persistence
function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (!parsed.selectedDay) {
        const jsDay = new Date().getDay();
        parsed.selectedDay = jsDay === 0 ? 7 : jsDay;
      }
      return { ...DEFAULT_STATE, ...parsed };
    }
  } catch (e) {
    console.error("Failed to load local storage:", e);
  }
  const jsDay = new Date().getDay();
  const initDay = jsDay === 0 ? 7 : jsDay;
  return { ...DEFAULT_STATE, selectedDay: initDay };
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
  } catch (e) {
    console.error("Failed to save state:", e);
  }
}

// Toast Notification
function showToast(message) {
  let toast = document.getElementById("app-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "app-toast";
    toast.className = "toast-notice";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

// Rest Timer Engine
let timerInterval = null;
let timerSecondsRemaining = 0;
let timerTotalSeconds = 0;
let isTimerPaused = false;

function startRestTimer(seconds) {
  initAudio();
  playBeep(440, 0.1, "sine");
  clearInterval(timerInterval);
  timerTotalSeconds = seconds;
  timerSecondsRemaining = seconds;
  isTimerPaused = false;
  
  const dock = document.getElementById("floating-timer");
  if (dock) {
    dock.classList.remove("hidden");
  }
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    if (!isTimerPaused) {
      timerSecondsRemaining--;
      if (timerSecondsRemaining <= 3 && timerSecondsRemaining > 0) {
        playBeep(700, 0.08, "triangle");
      }
      if (timerSecondsRemaining <= 0) {
        clearInterval(timerInterval);
        timerInterval = null;
        updateTimerDisplay();
        playFinishChime();
        showToast("🔔 Rest finished! Get ready for your next set.");
        setTimeout(() => {
          if (dock) dock.classList.add("hidden");
        }, 4000);
      } else {
        updateTimerDisplay();
      }
    }
  }, 1000);
}

function toggleTimerPause() {
  isTimerPaused = !isTimerPaused;
  const btn = document.getElementById("timer-pause-btn");
  if (btn) {
    btn.textContent = isTimerPaused ? "Resume" : "Pause";
    btn.classList.toggle("active", isTimerPaused);
  }
}

function addTimerSeconds(addSec) {
  timerSecondsRemaining += addSec;
  timerTotalSeconds += addSec;
  updateTimerDisplay();
  playBeep(550, 0.08, "sine");
}

function resetRestTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  timerSecondsRemaining = 0;
  const dock = document.getElementById("floating-timer");
  if (dock) {
    dock.classList.add("hidden");
  }
}

function updateTimerDisplay() {
  const display = document.getElementById("timer-countdown-text");
  if (display) {
    const mins = Math.floor(timerSecondsRemaining / 60);
    const secs = timerSecondsRemaining % 60;
    display.textContent = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }
}

// Pre-Workout Pain Check-In Gate Handler
function handlePainChange(newScore) {
  appState.todayPain = parseInt(newScore, 10);
  const today = getTodayDateStr();
  appState.painHistory[today] = appState.todayPain;
  saveState();
  renderPainGate();
  renderWorkoutTab();
}

function getPainDescription(score) {
  if (score <= 1) {
    return {
      label: "Optimal Safe (0–1/10)",
      badgeClass: "score-green",
      feedbackClass: "",
      text: "Zero or negligible discomfort. Left ankle syndesmosis is calm. Cleared for standard daily split with progressive overload."
    };
  } else if (score <= 3) {
    return {
      label: "Mild Sensitivity (2–3/10)",
      badgeClass: "score-yellow",
      feedbackClass: "warning",
      text: "Mild tightness detected. Complete the 8–10 min Ankle Prep Routine thoroughly. Maintain 0% treadmill grade and focus on conscious big-toe tripod grounding."
    };
  } else if (score <= 6) {
    return {
      label: "⚠️ PAIN GATE TRIGGERED (≥4/10)",
      badgeClass: "score-orange",
      feedbackClass: "warning",
      text: "SAFETY OVERRIDE: Distal syndesmosis protection active. All lower-body exercises and treadmill walking are automatically swapped for seated upper-body/core work and 15–20 mins recumbent cycling."
    };
  } else {
    return {
      label: "🚨 HIGH PAIN ALERT (7–10/10)",
      badgeClass: "score-red",
      feedbackClass: "danger",
      text: "ACUTE HARDWARE / LIGAMENT STRESS: Stop all lifting immediately. Elevate left foot above heart level, apply wrapped ice for 15 minutes, perform gentle unweighted ankle pumps, and consult your orthopedic surgeon if swelling persists."
    };
  }
}

function renderPainGate() {
  const score = appState.todayPain;
  const desc = getPainDescription(score);

  const container = document.getElementById("pain-gate-container");
  if (!container) return;

  const isWarning = score >= 4 && score <= 6;
  const isDanger = score >= 7;

  container.className = `pain-gate-card ${isWarning ? "warning" : ""} ${isDanger ? "danger" : ""}`;
  container.innerHTML = `
    <div class="pain-gate-header">
      <div class="pain-gate-title">
        <span>🩺 Daily Pre-Workout Ankle Pain Gate</span>
      </div>
      <div class="pain-score-pill ${desc.badgeClass}">Pain: ${score}/10</div>
    </div>
    <div class="slider-container">
      <input type="range" class="pain-slider" id="pain-slider-input" min="0" max="10" value="${score}" 
        oninput="handlePainChange(this.value)">
      <div class="pain-scale-labels">
        <span>0 (Zero Pain)</span>
        <span>3 (Mild)</span>
        <span>4 (Swap Gate)</span>
        <span>7+ (Stop)</span>
        <span>10 (Severe)</span>
      </div>
    </div>
    <div class="pain-feedback-box ${desc.feedbackClass}">
      <strong>${desc.label}:</strong> ${desc.text}
    </div>
  `;
}

// Phase Switcher Handler
function switchPhase(phaseKey) {
  appState.phase = phaseKey;
  saveState();
  renderPhaseSelector();
  renderWorkoutTab();
  showToast(`Switched to Phase: ${getPhaseName(phaseKey)}`);
}

function getPhaseName(phaseKey) {
  if (phaseKey === "m1") return "Month 1 (Weeks 1–4: Adaptation)";
  if (phaseKey === "m2") return "Month 2 (Weeks 5–8: Dense Strength 5–8 Reps)";
  return "Month 3 (Weeks 9–12: Power & Supersets)";
}

function renderPhaseSelector() {
  const container = document.getElementById("phase-selector-container");
  if (!container) return;

  const p = appState.phase;
  container.innerHTML = `
    <div class="phase-selector-card">
      <div class="phase-header">
        <span class="phase-title-label">🏋️ 3-Month Training Phase</span>
        <span class="phase-info-badge">${getPhaseName(p)}</span>
      </div>
      <div class="phase-tabs">
        <button class="phase-tab-btn ${p === "m1" ? "active" : ""}" onclick="switchPhase('m1')">
          Month 1<br><span style="font-size:0.7rem;font-weight:normal">Adaptation</span>
        </button>
        <button class="phase-tab-btn ${p === "m2" ? "active" : ""}" onclick="switchPhase('m2')">
          Month 2<br><span style="font-size:0.7rem;font-weight:normal">Dense 5–8 Reps</span>
        </button>
        <button class="phase-tab-btn ${p === "m3" ? "active" : ""}" onclick="switchPhase('m3')">
          Month 3<br><span style="font-size:0.7rem;font-weight:normal">Power & Supersets</span>
        </button>
      </div>
      <div class="phase-subtitle-text">
        ${p === "m1" ? "Controlled 3s eccentrics, neuromuscular rep-grooving, joint conditioning." : 
          p === "m2" ? "Heavier progressive resistance (5–8 reps), dense 75–90s rest, tight waist focus." : 
          "Explosive concentric drive, antagonist conditioning supersets, peak definition."}
      </div>
    </div>
  `;
}

// Day Tabs Selector
function selectDay(dayNum) {
  appState.selectedDay = parseInt(dayNum, 10);
  saveState();
  renderDayTabs();
  renderWorkoutTab();
}

function renderDayTabs() {
  const container = document.getElementById("day-tabs-container");
  if (!container) return;

  const currentJsDay = new Date().getDay();
  const todayMapped = currentJsDay === 0 ? 7 : currentJsDay;

  let html = `<div class="day-tabs">`;
  for (let d = 1; d <= 7; d++) {
    const dayData = WORKOUT_SPLIT[d];
    const isSelected = appState.selectedDay === d;
    const isToday = todayMapped === d;
    const shortFocus = d === 1 ? "Push" : 
                       d === 2 ? "Quad/Glute" : 
                       d === 3 ? "Pull/Posture" : 
                       d === 4 ? "Hamstring" : 
                       d === 5 ? "Supersets" : 
                       d === 6 ? "Rehab/Core" : "Recovery";

    html += `
      <button class="day-tab-btn ${isSelected ? "active" : ""} ${isToday ? "today" : ""}" 
        onclick="selectDay(${d})">
        <span class="day-tab-name">${dayData.dayName.substring(0, 3)}</span>
        <span class="day-tab-focus">${shortFocus}</span>
      </button>
    `;
  }
  html += `</div>`;
  container.innerHTML = html;
}

// In-App Form Video Launcher Modal
function openVideoModal(query, exerciseName, cuesText) {
  const modal = document.getElementById("video-form-modal");
  if (!modal) return;

  const cleanQuery = decodeURIComponent(query);
  const ytSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(cleanQuery)}`;

  const titleEl = document.getElementById("video-modal-title");
  const linkEl = document.getElementById("video-modal-link");
  const cuesEl = document.getElementById("video-modal-cues");

  if (titleEl) titleEl.textContent = exerciseName;
  if (linkEl) linkEl.href = ytSearchUrl;
  if (cuesEl) cuesEl.innerHTML = cuesText || "1. Joint alignment & grip.<br>2. Slow 3-second eccentric path.<br>3. 80% pressure on 1st MTP big-toe mound with zero outer foot roll.";

  modal.classList.add("open");
}

function closeVideoModal() {
  const modal = document.getElementById("video-form-modal");
  if (modal) modal.classList.remove("open");
}

// Ankle Prep Routine Toggle & Checks
function toggleAnklePrepSection() {
  const list = document.getElementById("prep-checklist");
  const icon = document.getElementById("prep-expand-icon");
  if (list) {
    list.classList.toggle("open");
    if (icon) {
      icon.textContent = list.classList.contains("open") ? "▲" : "▼";
    }
  }
}

function togglePrepCheck(prepId) {
  const today = getTodayDateStr();
  const key = `${today}_${prepId}`;
  appState.prepCompleted[key] = !appState.prepCompleted[key];
  saveState();
  renderAnklePrepBanner();
  showToast(appState.prepCompleted[key] ? "✓ Ankle prep drill completed" : "Ankle drill unchecked");
}

function renderAnklePrepBanner() {
  const container = document.getElementById("ankle-prep-container");
  if (!container) return;

  const today = getTodayDateStr();
  let doneCount = 0;
  ANKLE_PREP_ROUTINE.forEach(item => {
    if (appState.prepCompleted[`${today}_${item.id}`]) doneCount++;
  });
  const total = ANKLE_PREP_ROUTINE.length;
  const isAllDone = doneCount === total;

  let html = `
    <div class="ankle-prep-banner">
      <div class="prep-banner-content" onclick="toggleAnklePrepSection()">
        <div class="prep-badge-title">
          <span>🛡️ Mandatory 8–10 Min Left Ankle Prep Block</span>
          <span style="font-size:0.8rem;color:var(--text-secondary)" id="prep-expand-icon">▼</span>
        </div>
        <div class="prep-progress-pill ${isAllDone ? "score-green" : ""}">
          ${isAllDone ? "✓ Prep Ready" : `${doneCount}/${total} Completed`}
        </div>
      </div>
      
      <div class="prep-checklist-container" id="prep-checklist">
        <p style="font-size:0.75rem;color:var(--text-secondary);margin-bottom:12px">
          Pinned before lifting Mon–Sat: Lubricates syndesmotic screw interface and fires peroneus longus to stop outer foot roll.
        </p>
  `;

  ANKLE_PREP_ROUTINE.forEach(item => {
    const isDone = !!appState.prepCompleted[`${today}_${item.id}`];
    const steps = item.postureSteps;
    const videoQ = item.videoQuery || item.title;

    html += `
      <div class="prep-item-card">
        <div class="prep-item-header">
          <label class="prep-checkbox-label">
            <input type="checkbox" class="prep-checkbox" ${isDone ? "checked" : ""} 
              onchange="togglePrepCheck('${item.id}')">
            <div>
              <div class="prep-item-title">${item.title}</div>
              <div class="prep-item-meta">${item.sets} • ${item.reps}</div>
            </div>
          </label>
        </div>

        <!-- 1-Tap Form Video Button -->
        <div class="video-action-row" style="margin:8px 0 6px 30px">
          <a href="https://www.youtube.com/results?search_query=${encodeURIComponent(videoQ)}" 
             target="_blank" rel="noopener noreferrer" class="yt-watch-btn">
            <span class="yt-play-icon">▶</span>
            <span>Watch Form (15s Shorts)</span>
          </a>
        </div>

        ${item.image ? `
          <div class="demo-photo-container" style="margin-left:30px">
            <img src="${item.image}" alt="${item.title}" class="demo-photo-img" loading="lazy">
          </div>
        ` : ""}

        <div class="prep-purpose"><strong>Purpose:</strong> ${item.purpose}</div>

        <!-- 3-Step Posture Card for Prep -->
        ${steps ? `
          <div class="posture-3step-card" style="margin-left:30px">
            <div class="posture-card-title">
              <span>📐 3-Step Execution Checklist</span>
              <span style="font-size:0.7rem;color:var(--accent-emerald)">Syndesmosis Safe</span>
            </div>
            <div class="posture-steps-grid">
              <div class="step-card-item">
                <div class="step-number-badge step-1-badge">1</div>
                <div>
                  <div class="step-text-title">${steps.step1.title}</div>
                  <div class="step-text-desc">${steps.step1.desc}</div>
                </div>
              </div>
              <div class="step-card-item">
                <div class="step-number-badge step-2-badge">2</div>
                <div>
                  <div class="step-text-title">${steps.step2.title}</div>
                  <div class="step-text-desc">${steps.step2.desc}</div>
                </div>
              </div>
              <div class="step-card-item">
                <div class="step-number-badge step-3-badge">3</div>
                <div>
                  <div class="step-text-title">${steps.step3.title}</div>
                  <div class="step-text-desc">${steps.step3.desc}</div>
                </div>
              </div>
            </div>
          </div>
        ` : ""}

        <ul class="prep-cues-list">
          ${item.cues.map(c => `<li>${c}</li>`).join("")}
        </ul>
      </div>
    `;
  });

  html += `
      </div>
    </div>
  `;

  container.innerHTML = html;
}

// Exercise Set Inputs & Completion Handling
function handleSetDataChange(exerciseId, setIdx, field, val) {
  const today = getTodayDateStr();
  const key = `${today}_${exerciseId}_${setIdx}`;
  if (!appState.actualSetData[key]) {
    appState.actualSetData[key] = { weight: "", reps: "" };
  }
  appState.actualSetData[key][field] = val;
  saveState();
}

function toggleSetComplete(exerciseId, setIdx, restSec) {
  const today = getTodayDateStr();
  const key = `${today}_${exerciseId}_${setIdx}`;
  appState.completedSets[key] = !appState.completedSets[key];
  saveState();

  const isChecked = appState.completedSets[key];
  const row = document.getElementById(`set-row-${exerciseId}-${setIdx}`);
  const btn = document.getElementById(`check-btn-${exerciseId}-${setIdx}`);
  if (row) row.classList.toggle("done", isChecked);
  if (btn) {
    btn.classList.toggle("checked", isChecked);
    btn.textContent = isChecked ? "✓" : "";
  }

  if (isChecked && restSec > 0) {
    startRestTimer(restSec);
    showToast(`✓ Set ${setIdx + 1} logged! ${restSec}s rest timer started.`);
  } else {
    showToast(isChecked ? `✓ Set ${setIdx + 1} logged!` : `Set ${setIdx + 1} unmarked`);
  }
}

// Exercise Swap Trigger (Busy Gym or Stiff Ankle)
function setExerciseSwap(exerciseId, swapType) {
  appState.exerciseSwaps[exerciseId] = swapType;
  saveState();
  renderWorkoutTab();
  showToast(swapType === "busy" ? "Loaded Busy Gym alternative" : 
            swapType === "stiff" ? "Loaded Ankle Stiff alternative" : "Restored original exercise");
}

// Toggle Exercise Cues Accordion
function toggleCues(exerciseId) {
  const cuesBody = document.getElementById(`cues-${exerciseId}`);
  const icon = document.getElementById(`cue-icon-${exerciseId}`);
  if (cuesBody) {
    cuesBody.classList.toggle("open");
    if (icon) {
      icon.textContent = cuesBody.classList.contains("open") ? "▲" : "▼";
    }
  }
}

// Render Workout Tab for Current Day
function renderWorkoutTab() {
  const container = document.getElementById("workout-content-area");
  if (!container) return;

  const dayNum = appState.selectedDay;
  const today = getTodayDateStr();
  const isHighPain = appState.todayPain >= 4;

  // Day 7: Recovery Routine
  if (dayNum === 7) {
    container.innerHTML = `
      <div class="day-overview-card">
        <div class="day-header-flex">
          <div>
            <div class="day-main-title">Sunday: Complete Recovery & Orthopedic Reset</div>
            <div class="day-main-sub">Rest, rehydration, swelling assessment & weekly measurements</div>
          </div>
          <span class="tag tag-emerald">Rest Day</span>
        </div>
      </div>

      <div class="exercise-card">
        <div class="exercise-card-header">
          <div>
            <div class="exercise-name">🌿 Sunday Full Recovery Checklist</div>
            <div class="exercise-muscles">Cellular restoration & titanium syndesmosis joint health</div>
          </div>
        </div>
        <div style="margin-top:14px;font-size:0.82rem;line-height:1.6;color:var(--text-secondary)">
          <div class="prep-item-card">
            <strong>1. Left Ankle 24-Hour Swelling Audit:</strong> Look at your left medial and lateral malleolus. Are the bony outlines crisp and identical to the right ankle? If any slight puffiness exists, sit with left foot elevated above heart level for 20 minutes and apply ice.
          </div>
          <div class="prep-item-card" style="margin-top:8px">
            <strong>2. Weekly Progress Metric Entry:</strong> Step on digital scale first thing in the morning after using the bathroom and before drinking water. Measure waist circumference with a tape at navel level. Log both in the Progress Tracker tab.
          </div>
          <div class="prep-item-card" style="margin-top:8px">
            <strong>3. Hydration & Protein Check:</strong> Drink 3.5 Liters of water throughout Sunday. Keep protein high (~140g) using paneer, curd, dal, and soya chunks to repair muscle tissue broken down during the 6-day split.
          </div>
          <div class="prep-item-card" style="margin-top:8px">
            <strong>4. Sleep Target:</strong> Aim for 8.0–8.5 hours of uninterrupted sleep tonight to optimize natural growth hormone and joint collagen synthesis.
          </div>
        </div>
      </div>
    `;
    return;
  }

  // If High Pain Gate Triggered, Render Alternative Routine
  if (isHighPain) {
    const swapData = HIGH_PAIN_SWAP_WORKOUT;
    let html = `
      <div class="day-overview-card" style="border-color: rgba(245, 158, 11, 0.4); background: linear-gradient(135deg, rgba(245, 158, 11, 0.12), rgba(15, 23, 42, 0.9))">
        <div class="day-header-flex">
          <div>
            <div class="day-main-title" style="color:#fde68a">${swapData.title}</div>
            <div class="day-main-sub">${swapData.notice}</div>
          </div>
        </div>
        <div class="cardio-highlight-box" style="border-color:rgba(245, 158, 11, 0.4); color:#fde68a">
          🚴 <strong>Cardio Swap:</strong> ${swapData.cardioBlock}
        </div>
      </div>
    `;

    swapData.exercises.forEach((ex) => {
      const videoQ = ex.videoQuery || ex.name;
      const steps = ex.postureSteps;

      html += `
        <div class="exercise-card">
          <div class="exercise-card-header">
            <div>
              <div class="exercise-name">${ex.name}</div>
              <div class="exercise-muscles">${ex.targetMuscles}</div>
              <div class="exercise-badges">
                <span class="tag tag-amber">${ex.sets} Sets</span>
                <span class="tag tag-amber">${ex.reps}</span>
                <span class="tag tag-emerald">Zero Ankle Impact</span>
              </div>
            </div>
          </div>

          <!-- 1-Tap Form Video Button -->
          <div class="video-action-row">
            <a href="https://www.youtube.com/results?search_query=${encodeURIComponent(videoQ)}" 
               target="_blank" rel="noopener noreferrer" class="yt-watch-btn">
              <span class="yt-play-icon">▶</span>
              <span>Watch Form Video (15s Shorts)</span>
            </a>
          </div>

          <!-- Realistic Demo Photo -->
          ${ex.image ? `
            <div class="demo-photo-container">
              <div class="demo-photo-badge">📷 Form Demo Photo</div>
              <img src="${ex.image}" alt="${ex.name}" class="demo-photo-img" loading="lazy" 
                   onerror="this.parentElement.style.display='none'">
            </div>
          ` : ""}

          <!-- 3-Step Visual Posture Card -->
          ${steps ? `
            <div class="posture-3step-card">
              <div class="posture-card-title">
                <span>📐 3-Step Biomechanical Posture Checklist</span>
                <span style="font-size:0.7rem;color:var(--accent-emerald)">100% Unloaded</span>
              </div>
              <div class="posture-steps-grid">
                <div class="step-card-item">
                  <div class="step-number-badge step-1-badge">1</div>
                  <div>
                    <div class="step-text-title">${steps.step1.title}</div>
                    <div class="step-text-desc">${steps.step1.desc}</div>
                  </div>
                </div>
                <div class="step-card-item">
                  <div class="step-number-badge step-2-badge">2</div>
                  <div>
                    <div class="step-text-title">${steps.step2.title}</div>
                    <div class="step-text-desc">${steps.step2.desc}</div>
                  </div>
                </div>
                <div class="step-card-item">
                  <div class="step-number-badge step-3-badge">3</div>
                  <div>
                    <div class="step-text-title">${steps.step3.title}</div>
                    <div class="step-text-desc">${steps.step3.desc}</div>
                  </div>
                </div>
              </div>
            </div>
          ` : ""}

          <div style="font-size:0.78rem;color:var(--text-secondary);margin:8px 0">
            <strong>How to Perform:</strong> ${ex.cues}
          </div>

          <div class="card-timer-bar">
            <span class="card-timer-label">Rest Timer:</span>
            <div class="timer-preset-chips">
              <button class="timer-chip" onclick="startRestTimer(60)">60s</button>
              <button class="timer-chip" onclick="startRestTimer(75)">75s</button>
              <button class="timer-chip" onclick="startRestTimer(90)">90s</button>
            </div>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
    return;
  }

  // Normal Day Workout Split
  const day = WORKOUT_SPLIT[dayNum];
  const phaseKey = appState.phase;

  let html = `
    <div class="day-overview-card">
      <div class="day-header-flex">
        <div>
          <div class="day-main-title">${day.title}</div>
          <div class="day-main-sub">${day.subtitle}</div>
        </div>
        <span class="tag tag-cyan">${day.sessionDuration}</span>
      </div>
      <div class="cardio-highlight-box">
        🏃 <strong>Cardio Protocol:</strong> ${day.cardioBlock}
      </div>
    </div>
  `;

  // Exercises
  day.exercises.forEach((ex) => {
    const currentSwap = appState.exerciseSwaps[ex.id] || "original";
    const phaseInfo = ex.phaseData[phaseKey];
    const isBusySwap = currentSwap === "busy";
    const isStiffSwap = currentSwap === "stiff";

    const displayName = isBusySwap ? ex.busyGymSwap.name : 
                        isStiffSwap ? ex.stiffAnkleSwap.name : ex.name;

    const displayReason = isBusySwap ? ex.busyGymSwap.reason :
                          isStiffSwap ? ex.stiffAnkleSwap.reason : null;

    const videoQuery = isBusySwap ? (ex.busyGymSwap.videoQuery || ex.busyGymSwap.name) :
                       isStiffSwap ? (ex.stiffAnkleSwap.videoQuery || ex.stiffAnkleSwap.name) :
                       (ex.videoQuery || ex.name);

    const steps = ex.postureSteps;
    const muscleTags = ex.muscleTags;

    html += `
      <div class="exercise-card" id="card-${ex.id}">
        <div class="exercise-card-header">
          <div class="exercise-title-group">
            <div class="exercise-name">${displayName}</div>
            <div class="exercise-muscles">${ex.targetMuscles}</div>
            
            <div class="exercise-badges" style="margin-top:6px">
              <span class="tag tag-cyan">${phaseInfo.sets} Sets</span>
              <span class="tag tag-emerald">${phaseInfo.reps}</span>
              <span class="tag tag-amber">Start: ${phaseInfo.weightKg}</span>
              <span class="tag tag-violet">Tempo: ${phaseInfo.tempo}</span>
            </div>
          </div>
        </div>

        <!-- Swap Buttons -->
        <div class="swap-controls">
          <button class="swap-btn ${currentSwap === "original" ? "active" : ""}" 
            onclick="setExerciseSwap('${ex.id}', 'original')">
            Original
          </button>
          <button class="swap-btn ${isBusySwap ? "active" : ""}" 
            onclick="setExerciseSwap('${ex.id}', 'busy')">
            Gym Busy Swap
          </button>
          <button class="swap-btn ${isStiffSwap ? "active" : ""}" 
            onclick="setExerciseSwap('${ex.id}', 'stiff')">
            Ankle Stiff Swap
          </button>
        </div>

        ${displayReason ? `
          <div style="background:rgba(245, 158, 11, 0.1);border-left:3px solid var(--accent-amber);padding:6px 10px;margin-top:8px;border-radius:4px;font-size:0.75rem;color:#fde68a">
            <strong>Swap Active:</strong> ${displayReason}
          </div>
        ` : ""}

        <!-- 1-Tap YouTube Shorts Form Video Button -->
        <div class="video-action-row">
          <a href="https://www.youtube.com/results?search_query=${encodeURIComponent(videoQuery)}" 
             target="_blank" rel="noopener noreferrer" class="yt-watch-btn">
            <span class="yt-play-icon">▶</span>
            <span>Watch Form Video (15s Shorts)</span>
          </a>
          <button class="swap-btn" style="color:var(--accent-sky)" 
            onclick="openVideoModal('${encodeURIComponent(videoQuery)}', '${displayName.replace(/'/g, "\\'")}', '${ex.cues.tripodFoot.replace(/'/g, "\\'")}')">
            Quick Form Checklist
          </button>
        </div>

        <!-- Muscle Target Tags -->
        ${muscleTags ? `
          <div class="muscle-tags-container">
            ${muscleTags.primary ? muscleTags.primary.map(m => `<span class="muscle-tag tag-primary-muscle">🎯 ${m}</span>`).join("") : ""}
            ${muscleTags.secondary ? muscleTags.secondary.map(m => `<span class="muscle-tag tag-secondary-muscle">⚡ ${m}</span>`).join("") : ""}
            ${muscleTags.ankleSafety ? muscleTags.ankleSafety.map(m => `<span class="muscle-tag tag-ankle-safety">🛡️ ${m}</span>`).join("") : ""}
          </div>
        ` : ""}

        <!-- Realistic Demo Photo -->
        ${ex.image ? `
          <div class="demo-photo-container">
            <div class="demo-photo-badge">📷 Form Demo Photo</div>
            <img src="${ex.image}" alt="${displayName}" class="demo-photo-img" loading="lazy" 
                 onerror="this.parentElement.style.display='none'">
          </div>
        ` : ""}

        <!-- Clean 3-Step Visual Posture Card -->
        ${steps ? `
          <div class="posture-3step-card">
            <div class="posture-card-title">
              <span>📐 3-Step Biomechanical Posture Checklist</span>
              <span style="font-size:0.7rem;color:var(--accent-emerald)">Left Ankle Safe</span>
            </div>
            <div class="posture-steps-grid">
              <div class="step-card-item">
                <div class="step-number-badge step-1-badge">1</div>
                <div>
                  <div class="step-text-title">${steps.step1.title}</div>
                  <div class="step-text-desc">${steps.step1.desc}</div>
                </div>
              </div>
              <div class="step-card-item">
                <div class="step-number-badge step-2-badge">2</div>
                <div>
                  <div class="step-text-title">${steps.step2.title}</div>
                  <div class="step-text-desc">${steps.step2.desc}</div>
                </div>
              </div>
              <div class="step-card-item">
                <div class="step-number-badge step-3-badge">3</div>
                <div>
                  <div class="step-text-title">${steps.step3.title}</div>
                  <div class="step-text-desc">${steps.step3.desc}</div>
                </div>
              </div>
            </div>
          </div>
        ` : ""}

        <!-- Collapsible Step-by-Step Cues -->
        <div class="cues-accordion">
          <div class="cues-header" onclick="toggleCues('${ex.id}')">
            <span>📖 Detailed Execution & Orthopedic Tripod Cues</span>
            <span id="cue-icon-${ex.id}">▼</span>
          </div>
          <div class="cues-body" id="cues-${ex.id}">
            <div class="cue-point">
              <span class="cue-label">Setup:</span> ${ex.cues.setup}
            </div>
            <div class="cue-point">
              <span class="cue-label" style="color:var(--accent-emerald)">Left Ankle Tripod Cue:</span> ${ex.cues.tripodFoot}
            </div>
            <div class="cue-point">
              <span class="cue-label">Breathing & Cadence:</span> ${ex.cues.breathingTempo}
            </div>
            <div class="cue-point">
              <span class="cue-label" style="color:var(--accent-rose)">Common Mistakes to Avoid:</span> ${ex.cues.mistakes}
            </div>
            ${isBusySwap ? `
              <div class="cue-point" style="margin-top:6px;color:#fde68a">
                <span class="cue-label" style="color:#fde68a">Busy Equipment Adjustment:</span> ${ex.busyGymSwap.adjustCues}
              </div>
            ` : ""}
            ${isStiffSwap ? `
              <div class="cue-point" style="margin-top:6px;color:#a7f3d0">
                <span class="cue-label" style="color:#a7f3d0">Ankle Stiff Adjustment:</span> ${ex.stiffAnkleSwap.adjustCues}
              </div>
            ` : ""}
          </div>
        </div>

        <!-- Interactive Sets Table -->
        <div class="weight-instruction-banner">
          <span class="weight-instruction-badge">💡 Target Load:</span>
          <span class="weight-instruction-text">${phaseInfo.weightKg}</span>
        </div>

        <div class="sets-table-wrapper">
          <div class="sets-table-header">
            <div>Set</div>
            <div>Weight (kg)</div>
            <div>Reps Done</div>
            <div>Done</div>
          </div>
    `;

    for (let s = 0; s < phaseInfo.sets; s++) {
      const setKey = `${today}_${ex.id}_${s}`;
      const isCompleted = !!appState.completedSets[setKey];
      const savedData = appState.actualSetData[setKey] || {};
      
      // Clean numeric weight extraction (e.g. extracts "14" from "14 kg each hand...")
      const cleanTargetMatch = String(phaseInfo.weightKg || "").match(/([0-9]+(?:\.[0-9]+)?)/);
      const defaultWeight = cleanTargetMatch ? cleanTargetMatch[1] : "";
      
      // Auto-sanitize corrupted string concatenations (e.g. 141414810) from previous bug
      let currentWeightVal = (savedData.weight !== undefined && savedData.weight !== null && savedData.weight !== "") 
        ? savedData.weight 
        : defaultWeight;
      if (currentWeightVal && parseFloat(currentWeightVal) > 500) {
        currentWeightVal = defaultWeight;
      }

      html += `
        <div class="set-row ${isCompleted ? "done" : ""}" id="set-row-${ex.id}-${s}">
          <div class="set-index">${s + 1}</div>
          <div class="set-input-group">
            <input type="number" step="0.5" class="set-input" placeholder="${defaultWeight || 'kg'}" 
              value="${currentWeightVal}" 
              oninput="handleSetDataChange('${ex.id}', ${s}, 'weight', this.value)">
            <span class="set-unit">kg</span>
          </div>
          <div class="set-input-group">
            <input type="number" class="set-input" placeholder="${phaseInfo.reps}" 
              value="${savedData.reps || ""}" 
              oninput="handleSetDataChange('${ex.id}', ${s}, 'reps', this.value)">
            <span class="set-unit">reps</span>
          </div>
          <div>
            <button class="set-check-btn ${isCompleted ? "checked" : ""}" 
              id="check-btn-${ex.id}-${s}" 
              onclick="toggleSetComplete('${ex.id}', ${s}, ${phaseInfo.restSec})">
              ${isCompleted ? "✓" : ""}
            </button>
          </div>
        </div>
      `;
    }

    html += `
        </div>

        <!-- One-Tap Rest Timer Bar -->
        <div class="card-timer-bar">
          <span class="card-timer-label">Rest Countdown:</span>
          <div class="timer-preset-chips">
            <button class="timer-chip" onclick="startRestTimer(60)">60s</button>
            <button class="timer-chip" onclick="startRestTimer(75)">75s</button>
            <button class="timer-chip" onclick="startRestTimer(90)">90s</button>
            <button class="timer-chip" onclick="startRestTimer(120)">120s</button>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// Diet Tab Render & Logic
function toggleDietCheck(mealId, itemIdx) {
  const today = getTodayDateStr();
  const key = `${today}_${mealId}_${itemIdx}`;
  appState.dietChecks[key] = !appState.dietChecks[key];
  saveState();
  renderDietTab();
  showToast(appState.dietChecks[key] ? "✓ Meal item logged" : "Meal item unmarked");
}

function adjustWater(amount) {
  appState.waterGlasses = Math.max(0, Math.min(20, (appState.waterGlasses || 0) + amount));
  saveState();
  renderDietTab();
}

function renderDietTab() {
  const container = document.getElementById("diet-content-area");
  if (!container) return;

  const today = getTodayDateStr();

  let totalCal = 0;
  let totalProtein = 0;
  let checkedCount = 0;
  let totalItemCount = 0;

  DIET_MEALS.forEach(meal => {
    const mealCheckedAll = meal.items.every((it, idx) => appState.dietChecks[`${today}_${meal.id}_${idx}`]);
    meal.items.forEach((it, idx) => {
      totalItemCount++;
      if (appState.dietChecks[`${today}_${meal.id}_${idx}`]) {
        checkedCount++;
        const pNum = parseFloat(it.protein) || 0;
        totalProtein += pNum;
      }
    });
    if (mealCheckedAll) {
      totalCal += meal.calories;
    }
  });

  const waterTotalLiters = ((appState.waterGlasses || 0) * 0.25).toFixed(1);
  const waterPercent = Math.min(100, Math.round(((appState.waterGlasses || 0) / 14) * 100));

  let html = `
    <!-- Macro Summary -->
    <div class="macro-ring-card">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <span style="font-size:0.95rem;font-weight:700;color:#fff">🥗 Daily Indian Nutrition Dashboard</span>
        <span class="tag tag-emerald">Strict: No Chicken / No Eggs</span>
      </div>
      <p style="font-size:0.75rem;color:var(--text-secondary);margin-top:4px">
        Calibrated for 93kg -> 75kg fat loss while preserving lean skeletal muscle & syndesmosis healing.
      </p>

      <div class="macro-ring-grid">
        <div class="macro-card-item">
          <div class="macro-val" style="color:var(--accent-sky)">${totalCal || "~1,950"}</div>
          <div class="macro-label">Target Kcal</div>
        </div>
        <div class="macro-card-item">
          <div class="macro-val" style="color:var(--accent-emerald)">${Math.round(totalProtein) || 145}g</div>
          <div class="macro-label">Protein Target</div>
        </div>
        <div class="macro-card-item">
          <div class="macro-val" style="color:var(--accent-amber)">${checkedCount}/${totalItemCount}</div>
          <div class="macro-label">Items Eaten</div>
        </div>
      </div>
    </div>

    <!-- Hydration Tracker (3.5L Target) -->
    <div class="hydration-card">
      <div class="hydration-header">
        <div class="hydration-title">💧 Hydration Fuel (3.5 Liters Goal)</div>
        <span style="font-size:0.8rem;font-weight:700;color:var(--accent-sky)">
          ${waterTotalLiters}L / 3.5L (${appState.waterGlasses} glasses)
        </span>
      </div>
      <div class="hydration-progress-bar">
        <div class="hydration-fill" style="width: ${waterPercent}%"></div>
      </div>
      <div class="hydration-controls">
        <button class="hydration-btn" onclick="adjustWater(-1)">-</button>
        <span style="font-size:0.75rem;color:var(--text-secondary);flex:1;text-align:center">
          Tap + for each 250ml glass
        </span>
        <button class="hydration-btn" onclick="adjustWater(1)">+</button>
      </div>
    </div>
  `;

  // Meals List
  DIET_MEALS.forEach(meal => {
    html += `
      <div class="meal-card">
        <div class="meal-header">
          <div>
            <span class="meal-time-badge">${meal.time}</span>
            <div class="meal-title">${meal.title}</div>
          </div>
          <div class="meal-macro-pill">${meal.calories} kcal • ${meal.proteinGrams}g Protein</div>
        </div>
    `;

    meal.items.forEach((item, itemIdx) => {
      const isChecked = !!appState.dietChecks[`${today}_${meal.id}_${itemIdx}`];
      html += `
        <div class="meal-item-row">
          <input type="checkbox" class="meal-item-checkbox" ${isChecked ? "checked" : ""} 
            onchange="toggleDietCheck('${meal.id}', ${itemIdx})">
          <div class="meal-item-name">
            <strong>${item.name}</strong> 
            <span style="color:var(--text-muted);font-size:0.75rem">(${item.qty})</span>
          </div>
          <div class="meal-item-protein">${item.protein}</div>
        </div>
      `;
    });

    html += `
        <div class="meal-notes">${meal.notes}</div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// Progress Tracker Tab Render & Logic
function handleLogSubmit(e) {
  e.preventDefault();
  const weightInput = document.getElementById("log-weight");
  const waistInput = document.getElementById("log-waist");
  const painInput = document.getElementById("log-pain");
  const noteInput = document.getElementById("log-note");

  const weight = parseFloat(weightInput.value);
  const waist = parseFloat(waistInput.value) || 0;
  const pain = parseInt(painInput.value, 10) || 0;
  const note = noteInput.value || "Weekly check-in";

  if (!weight || weight < 40 || weight > 200) {
    alert("Please enter a valid weight in kg.");
    return;
  }

  const newEntry = {
    id: Date.now(),
    date: getTodayDateStr(),
    weightKg: weight,
    waistCm: waist,
    anklePain: pain,
    note: note
  };

  appState.weightLog.unshift(newEntry);
  saveState();
  renderProgressTab();
  showToast("✓ Weight & waist measurement logged!");
}

function deleteLogEntry(id) {
  if (confirm("Delete this log entry?")) {
    appState.weightLog = appState.weightLog.filter(item => item.id !== id);
    saveState();
    renderProgressTab();
  }
}

function exportDataAsJSON() {
  const json = JSON.stringify(appState, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `AnkleCoach_Backup_${getTodayDateStr()}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importDataFromJSON(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(evt) {
    try {
      const parsed = JSON.parse(evt.target.result);
      if (parsed && typeof parsed === "object") {
        appState = { ...DEFAULT_STATE, ...parsed };
        saveState();
        initApp();
        showToast("✓ Data restored successfully from backup!");
      }
    } catch (err) {
      alert("Invalid backup JSON file.");
    }
  };
  reader.readAsText(file);
}

function renderProgressTab() {
  const container = document.getElementById("progress-content-area");
  if (!container) return;

  const currentWeight = appState.weightLog.length > 0 ? appState.weightLog[0].weightKg : 93.0;
  const startWeight = 93.0;
  const targetWeight = 75.0;
  const milestoneWeight = 84.0;

  const totalKgLost = (startWeight - currentWeight).toFixed(1);
  const totalGoalSpan = startWeight - targetWeight;
  const progressPercent = Math.max(0, Math.min(100, Math.round(((startWeight - currentWeight) / totalGoalSpan) * 100)));

  let html = `
    <!-- Weight Journey Card -->
    <div class="weight-journey-card">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <span style="font-size:1.05rem;font-weight:800;color:#fff">📉 93 kg ➔ 75 kg Transformation Journey</span>
        <span class="tag tag-emerald">${totalKgLost >= 0 ? `-${totalKgLost} kg Lost` : `+${Math.abs(totalKgLost)} kg`}</span>
      </div>
      
      <div class="journey-bar-container">
        <div class="journey-bar-track">
          <div class="journey-bar-fill" style="width: ${progressPercent}%"></div>
        </div>
        <div class="journey-milestones">
          <span>Start: 93 kg</span>
          <span style="color:var(--accent-amber);font-weight:700">3-Mo Target: 84 kg</span>
          <span style="color:var(--accent-emerald);font-weight:700">Goal: 75 kg</span>
        </div>
      </div>
      
      <div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:8px;margin-top:12px;text-align:center">
        <div class="macro-card-item">
          <div class="macro-val" style="color:var(--accent-sky)">${currentWeight} kg</div>
          <div class="macro-label">Current Weight</div>
        </div>
        <div class="macro-card-item">
          <div class="macro-val" style="color:var(--accent-emerald)">${progressPercent}%</div>
          <div class="macro-label">Journey Done</div>
        </div>
        <div class="macro-card-item">
          <div class="macro-val" style="color:var(--accent-amber)">${(currentWeight - milestoneWeight).toFixed(1)} kg</div>
          <div class="macro-label">To 3-Mo Marker</div>
        </div>
      </div>
    </div>

    <!-- Visual Chart (Canvas Rendering) -->
    <div class="exercise-card">
      <div style="font-size:0.9rem;font-weight:700;margin-bottom:8px">📈 Weight & Ankle Pain Trend</div>
      <canvas id="progress-chart" width="400" height="180" style="width:100%;height:180px;background:#020617;border-radius:8px;border:1px solid var(--border-subtle)"></canvas>
    </div>

    <!-- Log Measurement Form -->
    <div class="log-entry-form">
      <div style="font-size:0.9rem;font-weight:700;margin-bottom:10px">📝 Log Measurement Entry</div>
      <form onsubmit="handleLogSubmit(event)">
        <div class="form-grid-3">
          <div class="form-group">
            <label>Weight (kg)</label>
            <input type="number" step="0.1" id="log-weight" class="form-input" required placeholder="e.g. 91.2">
          </div>
          <div class="form-group">
            <label>Waist (cm)</label>
            <input type="number" step="0.5" id="log-waist" class="form-input" placeholder="e.g. 99.5">
          </div>
          <div class="form-group">
            <label>Ankle Pain (0–10)</label>
            <input type="number" min="0" max="10" id="log-pain" class="form-input" value="${appState.todayPain}">
          </div>
        </div>
        <div class="form-group" style="margin-bottom:10px">
          <label>Workout Note / Joint Sensation</label>
          <input type="text" id="log-note" class="form-input" placeholder="e.g. Good hip thrust drive, no lateral screw ache">
        </div>
        <button type="submit" class="primary-btn">Save Progress Entry</button>
      </form>
    </div>

    <!-- Backup & Export / Import Controls -->
    <div class="exercise-card" style="display:flex;justify-content:space-between;align-items:center;padding:12px 16px">
      <div>
        <div style="font-size:0.85rem;font-weight:700">💾 Data Backup & Portability</div>
        <div style="font-size:0.72rem;color:var(--text-muted)">Save progress to JSON or restore on your mobile phone</div>
      </div>
      <div style="display:flex;gap:8px">
        <button class="swap-btn" onclick="exportDataAsJSON()">Export JSON</button>
        <label class="swap-btn" style="cursor:pointer">
          Import JSON
          <input type="file" accept=".json" style="display:none" onchange="importDataFromJSON(event)">
        </label>
      </div>
    </div>

    <!-- History Table -->
    <div class="exercise-card">
      <div style="font-size:0.9rem;font-weight:700;margin-bottom:8px">📋 Measurement History Log</div>
      <table class="history-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Weight</th>
            <th>Waist</th>
            <th>Pain</th>
            <th>Notes</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
  `;

  appState.weightLog.forEach(item => {
    html += `
      <tr>
        <td style="font-weight:600">${item.date}</td>
        <td style="color:var(--accent-sky);font-weight:700">${item.weightKg} kg</td>
        <td>${item.waistCm ? `${item.waistCm} cm` : "—"}</td>
        <td><span class="pain-score-pill ${getPainDescription(item.anklePain).badgeClass}" style="font-size:0.7rem;padding:1px 6px">${item.anklePain}/10</span></td>
        <td style="color:var(--text-secondary);max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${item.note}</td>
        <td><button class="swap-btn" style="padding:2px 6px;font-size:0.65rem;color:var(--accent-rose)" onclick="deleteLogEntry(${item.id})">✕</button></td>
      </tr>
    `;
  });

  html += `
        </tbody>
      </table>
    </div>
  `;

  container.innerHTML = html;
  setTimeout(drawProgressChart, 50);
}

// Draw HTML5 Canvas Chart for Weight & Pain Trend
function drawProgressChart() {
  const canvas = document.getElementById("progress-chart");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;

  ctx.clearRect(0, 0, w, h);

  const logs = [...appState.weightLog].reverse();
  if (logs.length < 2) {
    ctx.fillStyle = "#64748b";
    ctx.font = "12px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Log at least 2 entries to view trajectory chart", w / 2, h / 2);
    return;
  }

  const weights = logs.map(l => l.weightKg);
  const minW = Math.min(...weights, 75) - 2;
  const maxW = Math.max(...weights, 93) + 2;

  const paddingLeft = 40;
  const paddingRight = 20;
  const paddingTop = 20;
  const paddingBottom = 30;

  const chartW = w - paddingLeft - paddingRight;
  const chartH = h - paddingTop - paddingBottom;

  // Grid lines
  ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let i = 0; i <= 4; i++) {
    const y = paddingTop + (chartH / 4) * i;
    ctx.moveTo(paddingLeft, y);
    ctx.lineTo(w - paddingRight, y);

    const val = (maxW - ((maxW - minW) / 4) * i).toFixed(0);
    ctx.fillStyle = "#64748b";
    ctx.font = "9px sans-serif";
    ctx.textAlign = "right";
    ctx.fillText(`${val}kg`, paddingLeft - 5, y + 3);
  }
  ctx.stroke();

  // Target 84kg benchmark dashed lines
  const y84 = paddingTop + chartH * ((maxW - 84) / (maxW - minW));
  ctx.strokeStyle = "rgba(245, 158, 11, 0.4)";
  ctx.setLineDash([4, 4]);
  ctx.beginPath();
  ctx.moveTo(paddingLeft, y84);
  ctx.lineTo(w - paddingRight, y84);
  ctx.stroke();
  ctx.setLineDash([]);

  // Weight Trend Line
  ctx.strokeStyle = "#38bdf8";
  ctx.lineWidth = 3;
  ctx.beginPath();
  logs.forEach((item, idx) => {
    const x = paddingLeft + (chartW / (logs.length - 1)) * idx;
    const y = paddingTop + chartH * ((maxW - item.weightKg) / (maxW - minW));
    if (idx === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  // Draw points
  logs.forEach((item, idx) => {
    const x = paddingLeft + (chartW / (logs.length - 1)) * idx;
    const y = paddingTop + chartH * ((maxW - item.weightKg) / (maxW - minW));

    ctx.fillStyle = "#38bdf8";
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#94a3b8";
    ctx.font = "8px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(item.date.substring(5), x, h - 10);
  });
}

// Safety Red Flags Modal Controls
function openSafetyModal() {
  const modal = document.getElementById("safety-modal");
  if (modal) modal.classList.add("open");
}

function closeSafetyModal() {
  const modal = document.getElementById("safety-modal");
  if (modal) modal.classList.remove("open");
}

// Yes Fit Gym Palanpur Machine Guide Modal Controls
function openGymGuideModal() {
  const modal = document.getElementById("gym-guide-modal");
  if (modal) modal.classList.add("open");
}

function closeGymGuideModal() {
  const modal = document.getElementById("gym-guide-modal");
  if (modal) modal.classList.remove("open");
}

// Bottom Navigation Switching
function switchTab(tabKey) {
  appState.activeTab = tabKey;
  saveState();

  document.querySelectorAll(".nav-item").forEach(item => {
    item.classList.toggle("active", item.getAttribute("data-tab") === tabKey);
  });

  document.querySelectorAll(".tab-panel").forEach(panel => {
    panel.classList.toggle("active", panel.id === `tab-${tabKey}`);
  });

  if (tabKey === "workout") {
    renderPhaseSelector();
    renderDayTabs();
    renderAnklePrepBanner();
    renderWorkoutTab();
  } else if (tabKey === "prep") {
    renderAnklePrepBanner();
  } else if (tabKey === "diet") {
    renderDietTab();
  } else if (tabKey === "progress") {
    renderProgressTab();
  } else if (tabKey === "safety") {
    openSafetyModal();
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// App Initialization
function initApp() {
  renderPainGate();
  renderPhaseSelector();
  renderDayTabs();
  renderAnklePrepBanner();
  renderWorkoutTab();
  renderDietTab();
  renderProgressTab();

  document.querySelectorAll(".nav-item").forEach(btn => {
    btn.addEventListener("click", () => {
      const tab = btn.getAttribute("data-tab");
      switchTab(tab);
    });
  });

  const pauseBtn = document.getElementById("timer-pause-btn");
  if (pauseBtn) {
    pauseBtn.addEventListener("click", toggleTimerPause);
  }
}

// Run when DOM is ready
window.addEventListener("DOMContentLoaded", () => {
  initApp();
});
