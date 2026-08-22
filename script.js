/* ============================================================
   script.js — logika bersama untuk semua halaman.
   Baca data dari PROFILE (data.js) dan render ke setiap
   halaman lewat mount point (id) yang cocok.
   ============================================================ */

let currentLang = 'id';

function t(field){
  if(field == null) return '';
  if(typeof field === 'string' || typeof field === 'number') return field;
  return field[currentLang] ?? field.id ?? '';
}

/* ---------- ICONS (original generic pictograms) ---------- */
const ICONS = {
  github: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M8.5 8l-4 4 4 4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.5 8l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.5 6l-3 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M10 9l6 3-6 3V9z" fill="currentColor" stroke="none"/></svg>',
  tiktok: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><circle cx="9" cy="17" r="3" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 17V4.5c0-.6.6-1 1.1-.7 1 .6 2.3 1.3 3.9 1.4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><rect x="3" y="6" width="18" height="13" rx="3" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12.5" r="3.4" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M8 6l1.5-2h5L16 6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
  tryhackme: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M5 3v18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M5 4h12l-2.5 3.5L17 11H5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
  hackthebox: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M12 2.5l8 4.5v10l-8 4.5-8-4.5V7l8-4.5z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M4 7l8 4.5 8-4.5M12 11.5V21" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
  email: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M3.5 6.5l8.5 6 8.5-6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  discord: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><rect x="4" y="7" width="16" height="11" rx="5" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="9" cy="12.5" r="1.1" fill="currentColor" stroke="none"/><circle cx="15" cy="12.5" r="1.1" fill="currentColor" stroke="none"/><path d="M8 7l1-2h6l1 2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="8" cy="8.5" r="1.1" fill="currentColor" stroke="none"/><path d="M8 11v6M12.5 11v6M12.5 13.5c0-1.6 1.2-2.5 2.5-2.5s2.5 .9 2.5 2.5V17" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'
};

const LINK_META = {
  github: { label: 'GitHub', sub: (v) => v.replace('https://github.com/', 'github.com/') },
  tryhackme: { label: 'TryHackMe', sub: (v) => v.replace('https://', '') },
  hackthebox: { label: 'Hack The Box', sub: () => (currentLang === 'id' ? 'Profil publik' : 'Public profile') },
  youtube: { label: 'YouTube', sub: () => '@gxsmacine_025' },
  tiktok: { label: 'TikTok', sub: () => '@fkrr_025' },
  instagram: { label: 'Instagram', sub: () => '@fkrr_035' },
  discord: { label: 'Discord', sub: () => (currentLang === 'id' ? 'Gabung server' : 'Join server') },
  linkedin: { label: 'LinkedIn', sub: (v) => v.replace('https://www.linkedin.com/in/', 'linkedin.com/in/') },
  email: { label: 'Email', sub: (v) => v }
};
const CONNECT_ORDER = ['github', 'tryhackme', 'hackthebox', 'youtube', 'tiktok', 'instagram', 'discord', 'linkedin', 'email'];
const FOOTER_ORDER = ['github', 'youtube', 'tiktok', 'instagram', 'tryhackme', 'hackthebox', 'discord', 'linkedin'];

/* ---------- STATIC BILINGUAL TEXT ---------- */
function applyStaticLang(){
  document.querySelectorAll('[data-id]').forEach(el=>{
    const val = el.getAttribute('data-' + currentLang);
    if(val !== null) el.textContent = val;
  });
  document.documentElement.setAttribute('lang', currentLang === 'id' ? 'id' : 'en');
  document.querySelectorAll('.lang-opt').forEach(b=>{
    b.classList.toggle('active', b.dataset.lang === currentLang);
  });
}

function setLang(lang){
  if(lang === currentLang) return;
  currentLang = lang;
  applyStaticLang();
  renderAll();
}

function bindLangSwitch(){
  document.querySelectorAll('.lang-opt').forEach(btn=>{
    btn.addEventListener('click', ()=> setLang(btn.dataset.lang));
  });
}

/* ---------- DYNAMIC RENDER FUNCTIONS ---------- */
function renderBrandAlias(){
  document.querySelectorAll('.brand .alias').forEach(el=> el.textContent = PROFILE.alias);
}

function renderNavIcons(){
  document.querySelectorAll('.nav-icon-github').forEach(el=>{ el.innerHTML = ICONS.github; el.href = PROFILE.links.github; });
  document.querySelectorAll('.nav-icon-linkedin').forEach(el=>{ el.innerHTML = ICONS.linkedin; el.href = PROFILE.links.linkedin; });
}

function renderHeroRole(){
  const roleEl = document.getElementById('heroRole');
  if(roleEl) roleEl.innerHTML = `<span class="status-dot">●</span> ${t(PROFILE.role)}`;
  const tagsEl = document.getElementById('heroFocusTags');
  if(tagsEl) tagsEl.innerHTML = PROFILE.focus.map(f=> `<span>${f}</span>`).join('');
}

function renderWhoami(mountId){
  const el = document.getElementById(mountId);
  if(!el) return;
  const items = [
    { label:{id:'Nama',en:'Name'}, value: PROFILE.name },
    { label:{id:'Alias',en:'Alias'}, value: PROFILE.alias },
    { label:{id:'Role',en:'Role'}, value: t(PROFILE.role) },
    { label:{id:'Fokus',en:'Focus'}, value: PROFILE.focus.join(', ') },
    { label:{id:'Status',en:'Status'}, value: '\u25CF ' + PROFILE.status, cls:' status-online' }
  ];
  el.innerHTML = items.map(it=> `<div class="whoami-item"><span class="label">${t(it.label)}</span><span class="value${it.cls||''}">${it.value}</span></div>`).join('');
}

function renderDashboard(mountId){
  const el = document.getElementById(mountId);
  if(!el) return;
  el.innerHTML = PROFILE.dashboard.map(d=> `<div class="dash-card"><div class="dlabel">${d.label}</div><div class="dvalue"><span class="pulse-dot"></span>${d.value}</div></div>`).join('');
}

function renderSkillGroups(mountId){
  const el = document.getElementById(mountId);
  if(!el) return;
  el.innerHTML = PROFILE.skillGroups.map(group=> `
    <div class="skill-group">
      <h3 class="skill-group-title">${t(group.category)}</h3>
      <div class="skill-group-items">
        ${group.items.map(s=>{
          const lvlKey = (s.level.en || '').toLowerCase();
          const evidence = s.evidence ? `<div><a class="evidence-link" href="${s.evidence.href}">${t(s.evidence.label)}</a></div>` : '';
          return `<div class="skill-card">
            <div class="name-row"><span class="name">${t(s.name)}</span><span class="level-badge lvl-${lvlKey}">${t(s.level)}</span></div>
            <p class="note">${t(s.note)}</p>
            ${evidence}
          </div>`;
        }).join('')}
      </div>
    </div>`).join('');
}

function renderSkillMatrix(tagsId, noteId){
  const tagsEl = document.getElementById(tagsId);
  if(tagsEl){
    tagsEl.innerHTML = PROFILE.skillMatrix.categories.map(c=>
      `<span class="matrix-tag"><span class="lvl">${t(PROFILE.skillMatrix.level)}</span>${c}</span>`).join('');
  }
  const noteEl = document.getElementById(noteId);
  if(noteEl) noteEl.textContent = t(PROFILE.skillMatrix.note);
}

function renderTools(mountId){
  const el = document.getElementById(mountId);
  if(!el) return;
  el.innerHTML = PROFILE.tools.map(tool=> `
    <div class="tool-card">
      <div class="t-cat">${t(tool.category)}</div>
      <h3>${tool.name}</h3>
      <p>${t(tool.desc)}</p>
      <a class="t-link" href="${tool.url}" target="_blank" rel="noopener">${tool.url.replace('https://','').replace(/\/$/,'')} \u2192</a>
    </div>`).join('');
}

function renderProjects(mountId){
  const el = document.getElementById(mountId);
  if(!el) return;
  el.innerHTML = PROFILE.projects.map(p=> `
    <div class="project-card">
      <div class="p-cat">${t(p.category)}</div>
      <span class="status-badge" style="margin-bottom:10px;">${t(p.label)}</span>
      <h3>${t(p.name)}</h3>
      <p>${t(p.objective || p.desc)}</p>
      ${p.built ? `<p><strong style="color:var(--ink);">${currentLang==='id'?'Dibangun':'Built'}:</strong> ${t(p.built)}</p>` : ''}
      ${p.learned ? `<p><strong style="color:var(--ink);">${currentLang==='id'?'Dipelajari':'Learned'}:</strong> ${t(p.learned)}</p>` : ''}
      <span class="status-badge">${t(p.status)}</span>
      ${p.github ? `<div style="margin-top:10px;"><a class="p-link" href="${p.github}" target="_blank" rel="noopener">GitHub \u2192</a></div>` : ''}
    </div>`).join('');
}

function renderWriteups(mountId){
  const el = document.getElementById(mountId);
  if(!el) return;
  const progressNote = document.getElementById('writeupsProgressNote');
  if(progressNote){
    const done = PROFILE.writeups.length;
    const total = PROFILE.ctf.tryhackme.roomsCompleted;
    progressNote.textContent = currentLang === 'id'
      ? `${done} dari ${total} room TryHackMe yang sudah diselesaikan sudah didokumentasikan penuh di sini. Sisanya menyusul.`
      : `${done} of ${total} completed TryHackMe rooms are fully documented here. The rest are coming.`;
  }
  el.innerHTML = PROFILE.writeups.map(w=> `
    <div class="writeup-card" id="${w.slug}">
      <div class="w-cat">${w.platform} · ${t(w.category)}</div>
      <h3>${t(w.title)}</h3>
      <div class="tag-row"><span class="diff-tag ${w.difficulty.toLowerCase()}">${w.difficulty}</span>${w.topics.map(tp=> `<span>${tp}</span>`).join('')}</div>
      <p>${t(w.description)}</p>
      <a class="w-link" href="${w.writeupUrl}" target="_blank" rel="noopener" data-id="Baca Write-up →" data-en="Read Write-up →">${currentLang==='id'?'Baca Write-up →':'Read Write-up →'}</a>
    </div>`).join('');
}

function renderLearningJourney(){
  const th = PROFILE.ctf.tryhackme;
  const statsEl = document.getElementById('ctfStats');
  if(statsEl){
    const stats = [
      { num: th.rank, lbl:{id:'Rank',en:'Rank'} },
      { num: 'Lv ' + th.level.split(' ')[0], lbl:{id:'Level',en:'Level'} },
      { num: th.points, lbl:{id:'Poin',en:'Points'} },
      { num: th.streak, lbl:{id:'Streak',en:'Streak'} },
      { num: th.badges, lbl:{id:'Badge',en:'Badges'} },
      { num: th.roomsCompleted, lbl:{id:'Room Selesai',en:'Rooms Done'} }
    ];
    statsEl.innerHTML = stats.map(s=> `<div class="ctf-stat"><div class="num">${s.num}</div><div class="lbl">${t(s.lbl)}</div></div>`).join('');
  }
  const roomsEl = document.getElementById('ctfRooms');
  if(roomsEl){
    roomsEl.innerHTML = th.rooms.map(r=> `<div class="room-item"><span class="rname">${r.name}</span><span class="diff-tag ${r.difficulty.toLowerCase()}">${r.difficulty}</span></div>`).join('');
  }
  const htbEl = document.getElementById('htbNote');
  if(htbEl) htbEl.textContent = t(PROFILE.ctf.hackthebox.note);
}

function renderCertifications(mountId){
  const el = document.getElementById(mountId);
  if(!el) return;
  if(!PROFILE.certifications || PROFILE.certifications.length === 0){
    const title = currentLang === 'id' ? 'Belum ada sertifikasi' : 'No certifications yet';
    const desc = currentLang === 'id'
      ? 'Slot ini akan terisi begitu sertifikasi cybersecurity pertama diperoleh. Tidak ada data yang dikarang di sini.'
      : "This slot fills in once the first cybersecurity certification is earned. No data is invented here.";
    el.innerHTML = `<div class="empty-state"><div class="icon">// NULL</div><h3>${title}</h3><p>${desc}</p></div>`;
  }
}

function connectHref(key, val){ return key === 'email' ? ('mailto:' + val) : val; }

function renderConnect(mountId){
  const el = document.getElementById(mountId);
  if(!el) return;
  el.innerHTML = CONNECT_ORDER.map(key=>{
    const val = PROFILE.links[key];
    if(!val) return '';
    const meta = LINK_META[key];
    const sub = meta.sub(val);
    return `<a class="connect-card" href="${connectHref(key,val)}" target="_blank" rel="noopener">
      <span class="c-icon">${ICONS[key]}</span>
      <span class="c-text"><span class="c-label">${meta.label}</span><span class="c-sub">${sub}</span></span>
      <span class="arrow">\u2192</span>
    </a>`;
  }).join('');
}

function renderFooterSocials(mountId){
  const el = document.getElementById(mountId);
  if(!el) return;
  el.innerHTML = FOOTER_ORDER.map(key=>{
    const val = PROFILE.links[key];
    if(!val) return '';
    return `<a href="${val}" target="_blank" rel="noopener" aria-label="${key}">${ICONS[key]}</a>`;
  }).join('');
}

function renderBio(mountId){
  const el = document.getElementById(mountId);
  if(!el) return;
  el.innerHTML = PROFILE.bio[currentLang].map(p=> `<p>${p}</p>`).join('');
}

function renderAll(){
  renderBrandAlias();
  renderNavIcons();
  renderHeroRole();
  renderWhoami('whoamiGrid');
  renderDashboard('dashGrid');
  renderSkillGroups('skillsGrid');
  renderSkillMatrix('skillMatrixTags', 'skillMatrixNote');
  renderTools('toolsGrid');
  renderProjects('projectsGrid');
  renderWriteups('writeupsGrid');
  renderLearningJourney();
  renderCertifications('certsArea');
  renderConnect('connectGrid');
  renderFooterSocials('footerSocials');
  renderBio('bioText');
}

/* ---------- MOBILE MENU ---------- */
function initMobileMenu(){
  const btn = document.querySelector('.hamburger');
  const menu = document.querySelector('.mobile-menu');
  if(!btn || !menu) return;
  btn.addEventListener('click', ()=>{
    menu.classList.toggle('open');
    btn.classList.toggle('open');
  });
  menu.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=> {
    menu.classList.remove('open');
    btn.classList.remove('open');
  }));
}

/* ---------- REVEAL ON SCROLL ---------- */
function initReveal(){
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const els = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window && !reduceMotion){
    const io = new IntersectionObserver(entries=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in-view'); io.unobserve(e.target); } });
    }, { threshold:0.12 });
    els.forEach(el=> io.observe(el));
  } else {
    els.forEach(el=> el.classList.add('in-view'));
  }
}

/* ---------- INTERACTIVE TERMINAL (home page highlight, supporting element) ---------- */
function initTerminal(){
  const input = document.getElementById('itermInput');
  const output = document.getElementById('itermOutput');
  if(!input || !output) return;

  function printLine(text, cls){
    const div = document.createElement('div');
    div.className = 'line' + (cls ? ' ' + cls : '');
    div.textContent = text;
    output.appendChild(div);
    output.scrollTop = output.scrollHeight;
  }

  const helpText = currentLang === 'id'
    ? 'Perintah tersedia:\n\n  whoami      tampilkan profil\n  skills      tampilkan skill matrix\n  tools       tampilkan toolkit\n  projects    tampilkan project\n  writeups    tampilkan write-up\n  contact     tampilkan info kontak\n  social      tampilkan link sosial\n  clear       bersihkan layar'
    : 'Available commands:\n\n  whoami      show profile\n  skills      show skill matrix\n  tools       show toolkit\n  projects    show projects\n  writeups    show write-ups\n  contact     show contact info\n  social      show social links\n  clear       clear the screen';

  const commands = {
    help: ()=> helpText,
    whoami: ()=> `Name     : ${PROFILE.name}\nAlias    : ${PROFILE.alias}\nRole     : ${t(PROFILE.role)}\nFocus    : ${PROFILE.focus.join(', ')}\nStatus   : \u25CF ${PROFILE.status}`,
    skills: ()=> {
      let out = `Level: ${t(PROFILE.skillMatrix.level)}\n`;
      PROFILE.skillMatrix.categories.forEach(c=> out += `  > ${c}\n`);
      return out.trim();
    },
    tools: ()=> PROFILE.tools.map(tool=> `  ${tool.name.padEnd(16)} ${t(tool.category)}`).join('\n'),
    projects: ()=> PROFILE.projects.map(p=> `  ${t(p.name)} [${t(p.status)}]`).join('\n'),
    writeups: ()=> PROFILE.writeups.map(w=> `  ${t(w.title).padEnd(28)} ${w.platform} · ${w.difficulty}`).join('\n'),
    contact: ()=> `Email   : ${PROFILE.links.email}\nDiscord : ${PROFILE.links.discord}`,
    social: ()=> Object.keys(PROFILE.links).map(k=> `  ${k.padEnd(11)} ${PROFILE.links[k]}`).join('\n')
  };

  input.addEventListener('keydown', (e)=>{
    if(e.key !== 'Enter') return;
    const raw = input.value.trim();
    if(!raw) return;
    printLine('$ ' + raw, 'cmd-echo');
    input.value = '';
    const cmd = raw.toLowerCase();
    if(cmd === 'clear'){
      output.innerHTML = '';
      return;
    }
    if(commands[cmd]){
      printLine(commands[cmd](), 'cmd-out');
    } else {
      const msg = currentLang === 'id'
        ? `command not found: "${raw}" — ketik 'help' untuk daftar perintah`
        : `command not found: "${raw}" — type 'help' for available commands`;
      printLine(msg, 'cmd-out');
    }
  });
}

/* ---------- CONTACT FORM (mailto-based, no backend/secrets) ---------- */
function initContactForm(){
  const form = document.getElementById('contactForm');
  if(!form) return;
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = form.querySelector('#cf-name');
    const email = form.querySelector('#cf-email');
    const msg = form.querySelector('#cf-message');
    [name, email, msg].forEach(f=> f.closest('.form-row').classList.remove('invalid'));
    let valid = true;
    if(!name.value.trim()){ name.closest('.form-row').classList.add('invalid'); valid = false; }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRe.test(email.value.trim())){ email.closest('.form-row').classList.add('invalid'); valid = false; }
    if(!msg.value.trim()){ msg.closest('.form-row').classList.add('invalid'); valid = false; }
    if(!valid) return;
    const subject = encodeURIComponent('Portfolio contact from ' + name.value.trim());
    const body = encodeURIComponent(msg.value.trim() + '\n\n\u2014 ' + name.value.trim() + ' (' + email.value.trim() + ')');
    window.location.href = `mailto:${PROFILE.links.email}?subject=${subject}&body=${body}`;
  });
}

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded', ()=>{
  applyStaticLang();
  bindLangSwitch();
  renderAll();
  initMobileMenu();
  initReveal();
  initTerminal();
  initContactForm();
});
