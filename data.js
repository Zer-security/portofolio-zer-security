/* ============================================================
   PROFILE.js — satu file ini isi semua data pribadi/konten.
   Edit di sini untuk update nama, bio, link, skill, tools, dst.
   Semua halaman otomatis ambil data dari sini lewat script.js
   ============================================================ */

const PROFILE = {
  name: "Fathon Kamal",
  alias: "fatonkamal035",
  role: { id: "Aspiring Cybersecurity Professional", en: "Aspiring Cybersecurity Professional" },
  tagline: {
    id: "Belajar ethical hacking dari nol — satu langkah pasti setiap minggu.",
    en: "Learning ethical hacking from scratch — one deliberate step every week."
  },
  focus: ["Networking", "Linux", "Security Fundamentals", "CTF / Security Labs", "Technical Write-ups"],
  status: "Portfolio",

  bio: {
    id: [
      "Saya masih di tahap awal perjalanan cybersecurity — belajar dari nol lewat roadmap terstruktur, mulai dari dasar jaringan, Linux, sampai tools penetration testing dasar.",
      "Fokus saat ini: memahami fundamental jaringan dan sistem Linux dengan benar sebelum lompat ke tools yang lebih kompleks. Saya latihan langsung di Kali Linux dan menyelesaikan room-room di TryHackMe sambil mendokumentasikan setiap progres di sini.",
      "Tujuannya sederhana: konsisten belajar setiap minggu, dan suatu saat bisa berkontribusi nyata di bidang cybersecurity dan ethical hacking."
    ],
    en: [
      "I'm still early in my cybersecurity journey — learning from zero through a structured roadmap, starting from networking fundamentals, Linux, up to basic penetration testing tools.",
      "Current focus: understanding networking and Linux fundamentals properly before jumping into more complex tools. I practice hands-on in Kali Linux and complete rooms on TryHackMe while documenting the progress here.",
      "The goal is simple: stay consistent week after week, and eventually make a real contribution in cybersecurity and ethical hacking."
    ]
  },

  // TO VERIFY: URL lama dipertahankan sampai pemilik mengonfirmasi URL final.
  links: {
    github: "https://github.com/fatonkamal035-Cybersecurity/fatonkamal035-Cybersecurity.github.io",
    youtube: "https://youtube.com/@gxsmacine_025?si=J67fFeJ-gTtg4mq9",
    tiktok: "https://www.tiktok.com/@fkrr_025?_r=1&_t=ZS-98RF6zHrfpx",
    instagram: "https://www.instagram.com/fkrr_035?igsh=MWtvOXd1YmMxM2FtYg==",
    email: "fathonkamal045@gmail.com",
    tryhackme: "https://tryhackme.com/p/fatonkamal035",
    hackthebox: "https://profile.hackthebox.com/profile/019f945a-256c-727d-b4b6-a1d0f106f0dd",
    discord: "https://discord.gg/zxSYjNhP",
    linkedin: "https://www.linkedin.com/in/fathon-r-97636842a/"
  },

  dashboard: [
    { label: "NETWORK LEARNING", value: "Ongoing", ok: true },
    { label: "SECURITY LEARNING", value: "Ongoing", ok: true },
    { label: "LEARNING STATUS", value: "Active", ok: true },
    { label: "CTF PRACTICE", value: "Ongoing", ok: true },
    { label: "GITHUB", value: "Repository", ok: true }
  ],

  // TO VERIFY: level dan atribusi sumber TryHackMe belum diperiksa ulang.
  skillMatrix: {
    level: { id: "Foundational", en: "Foundational" },
    note: {
      id: "Level ini diambil langsung dari Skills Matrix TryHackMe — masih tahap awal di semua kategori, ditampilkan apa adanya.",
      en: "This level is taken directly from the TryHackMe Skills Matrix — still early stage across every category, shown as-is."
    },
    categories: [
      "Security Operations", "Red Teaming", "Incident Response",
      "Exploitation", "Malware Analysis", "Penetration Testing"
    ]
  },

  skillGroups: [
    {
      category: { id: "Keamanan", en: "Security" },
      items: [
        { name: { id: "Fundamental Keamanan Siber", en: "Security Fundamentals" }, level: { id: "Foundational", en: "Foundational" }, note: { id: "Sedang menjalani path Cyber Security 101 di TryHackMe", en: "Currently working through the Cyber Security 101 path on TryHackMe" }, evidence: { label: { id: "Lihat progress →", en: "See progress →" }, href: "writeups.html#learning-journey" } },
        { name: { id: "Web Security Fundamentals", en: "Web Security Fundamentals" }, level: { id: "Learning", en: "Learning" }, note: { id: "HTTP, status code, cookies, DNS", en: "HTTP, status codes, cookies, DNS" }, evidence: { label: { id: "Baca write-up →", en: "Read write-up →" }, href: "writeups.html#web-fundamentals" } },
        { name: { id: "Password & Credential Attacks", en: "Password & Credential Attacks" }, level: { id: "Practicing", en: "Practicing" }, note: { id: "Praktik brute-force dengan Hydra", en: "Practiced brute-force attacks with Hydra" }, evidence: { label: { id: "Lihat progress →", en: "See progress →" }, href: "writeups.html#learning-journey" } }
      ]
    },
    {
      category: { id: "Jaringan", en: "Networking" },
      items: [
        { name: { id: "Jaringan Dasar (TCP/IP, Subnetting, OSI)", en: "Networking Fundamentals (TCP/IP, Subnetting, OSI)" }, level: { id: "Learning", en: "Learning" }, note: { id: "Belajar lewat roadmap terstruktur", en: "Learning through a structured roadmap" }, evidence: null },
        { name: { id: "Network Scanning (Nmap)", en: "Network Scanning (Nmap)" }, level: { id: "Practicing", en: "Practicing" }, note: { id: "Praktik Nmap Live Host Discovery", en: "Practiced Nmap Live Host Discovery" }, evidence: { label: { id: "Lihat progress →", en: "See progress →" }, href: "writeups.html#learning-journey" } },
        { name: { id: "Analisis Paket (Wireshark)", en: "Packet Analysis (Wireshark)" }, level: { id: "Learning", en: "Learning" }, note: { id: "Baru mulai mempelajari dasar-dasarnya", en: "Just getting started with the basics" }, evidence: null }
      ]
    },
    {
      category: { id: "Sistem", en: "Systems" },
      items: [
        { name: { id: "Linux & Kali Linux", en: "Linux & Kali Linux" }, level: { id: "Practicing", en: "Practicing" }, note: { id: "Instalasi selesai, aktif latihan command line", en: "Installation complete, actively practicing the command line" }, evidence: { label: { id: "Baca write-up →", en: "Read write-up →" }, href: "writeups.html#linux-fundamentals" } }
      ]
    }
  ],

  tools: [
    { name: "Kali Linux", category: { id: "Sistem Operasi", en: "Operating System" }, desc: { id: "Distro utama untuk latihan dan eksplorasi tools security.", en: "Main distro for practicing and exploring security tools." }, url: "https://www.kali.org/" },
    { name: "Nmap", category: { id: "Jaringan", en: "Network" }, desc: { id: "Network scanning & host discovery.", en: "Network scanning & host discovery." }, url: "https://nmap.org/" },
    { name: "Wireshark", category: { id: "Jaringan", en: "Network" }, desc: { id: "Analisis paket & traffic jaringan.", en: "Packet & network traffic analysis." }, url: "https://www.wireshark.org/" },
    { name: "Hydra", category: { id: "Exploitation", en: "Exploitation" }, desc: { id: "Network logon cracker untuk latihan credential attack.", en: "Network logon cracker for credential attack practice." }, url: "https://github.com/vanhauser-thc/thc-hydra" },
    { name: "TryHackMe", category: { id: "Platform Latihan", en: "Practice Platform" }, desc: { id: "Platform utama latihan hands-on cybersecurity.", en: "Main hands-on cybersecurity practice platform." }, url: "https://tryhackme.com/p/fatonkamal035" },
    { name: "Hack The Box", category: { id: "Platform Latihan", en: "Practice Platform" }, desc: { id: "Platform latihan lanjutan, baru dimulai.", en: "Advanced practice platform, just getting started." }, url: "https://profile.hackthebox.com/profile/019f945a-256c-727d-b4b6-a1d0f106f0dd" }
  ],

  projects: [
    {
      id: "mcp-kali",
      name: "mcp-kali",
      category: { id: "MCP / Database Security", en: "MCP / Database Security" },
      label: "Featured Project",
      // Keep objective for compatibility with the current script.js renderer.
      objective: "A security-focused Model Context Protocol (MCP) server project exploring controlled database access, authentication, authorization, audit logging, threat modeling, and automated testing. VMware Tanzu Greenplum is the target integration.",
      description: "A security-focused Model Context Protocol (MCP) server project exploring controlled database access, authentication, authorization, audit logging, threat modeling, and automated testing. VMware Tanzu Greenplum is the target integration.",
      status: "Security-Focused MCP Server Project in Development",
      testStatus: "To be verified",
      greenplumIntegration: "Target integration",
      pythonFoundation: "To be verified",
      typescriptImplementation: "In development",
      // TO VERIFY: repository URL has not been confirmed; renderer must not treat this as a URL.
      github: "To be confirmed"
    },
    {
      name: { id: "Portofolio Website Ini", en: "This Portfolio Website" },
      category: { id: "Web / Personal Branding", en: "Web / Personal Branding" },
      label: { id: "Learning Project", en: "Learning Project" },
      objective: { id: "Membangun portofolio pribadi untuk mendokumentasikan progres belajar cybersecurity secara terbuka dan bisa diakses recruiter.", en: "Build a personal portfolio to document my cybersecurity learning progress openly and make it accessible to recruiters." },
      built: { id: "Website multi-halaman dengan struktur data terpusat (satu file data.js untuk semua konten), dukungan dwibahasa (ID/EN), dan terminal CLI interaktif kecil.", en: "A multi-page site with centralized data (one data.js file driving all content), bilingual support (ID/EN), and a small interactive CLI terminal." },
      learned: { id: "Cara memisahkan data dan tampilan (data-driven rendering), dasar aksesibilitas web, dan pentingnya desain yang jujur — bukan sekadar terlihat keren.", en: "How to separate data from presentation (data-driven rendering), basic web accessibility, and the importance of honest design — not just looking cool." },
      desc: { id: "Website portofolio pribadi bertema cybersecurity, dibangun dengan HTML/CSS/JS murni dan di-hosting di GitHub Pages.", en: "Personal cybersecurity-themed portfolio site, built with vanilla HTML/CSS/JS and hosted on GitHub Pages." },
      status: { id: "Portfolio", en: "Portfolio" },
      github: "https://github.com/fatonkamal035-Cybersecurity/fatonkamal035-Cybersecurity.github.io"
    }
  ],
  // TO VERIFY: tautan write-up GitHub lama dipertahankan sampai URL final dikonfirmasi.
  writeups: [
    {
      slug: "web-fundamentals",
      title: { id: "Web Fundamentals", en: "Web Fundamentals" },
      platform: "TryHackMe",
      category: { id: "Web Security", en: "Web Security" },
      difficulty: "Easy",
      description: {
        id: "Pengenalan dasar cara kerja web — bagaimana browser dan server berkomunikasi lewat HTTP. Praktik langsung request/response, status code, cookies, dan DNS lewat browser & cURL.",
        en: "A basics-level look at how the web works — how browsers and servers communicate over HTTP. Hands-on practice with requests/responses, status codes, cookies, and DNS via browser & cURL."
      },
      topics: ["HTTP", "Status Codes", "Cookies", "DNS", "cURL"],
      roomUrl: "https://tryhackme.com/room/webfundamentals",
      writeupUrl: "https://github.com/fatonkamal035-Cybersecurity/fatonkamal035-Cybersecurity.github.io/blob/main/notes/web-fundamentals.md"
    },
    {
      slug: "linux-fundamentals",
      title: { id: "Linux Fundamentals Part 1", en: "Linux Fundamentals Part 1" },
      platform: "TryHackMe",
      category: { id: "Linux", en: "Linux" },
      difficulty: "Easy",
      description: {
        id: "Pengenalan dasar navigasi Linux lewat terminal — perintah ls, cd, pwd, cat, dan struktur filesystem Linux. Fondasi yang dipakai hampir semua tools security (Nmap, Wireshark, dll).",
        en: "A basics-level introduction to navigating Linux via the terminal — ls, cd, pwd, cat, and the Linux filesystem structure. A foundation used by nearly every security tool (Nmap, Wireshark, etc.)."
      },
      topics: ["CLI Navigation", "Filesystem", "ls/cd/pwd/cat"],
      roomUrl: "https://tryhackme.com/room/linuxfundamentalspart1",
      writeupUrl: "https://github.com/fatonkamal035-Cybersecurity/fatonkamal035-Cybersecurity.github.io/blob/main/notes/linux-fundamentals-part-1.md"
    }
  ],

  // TO VERIFY: jangan tampilkan statistik/room list sebagai data terkini sebelum diverifikasi.
  // Data lama dipertahankan sesuai instruksi; renderer perlu menyembunyikan data ini di tahap terpisah.
  ctf: {
    tryhackme: {
      rank: "Top 50%",
      level: "2 · APPRENTICE",
      points: 448,
      streak: 4,
      badges: 3,
      roomsCompleted: 7,
      rooms: [
        { name: "Hydra", difficulty: "Easy" },
        { name: "Linux Fundamentals Part 1", difficulty: "Easy" },
        { name: "Nmap Live Host Discovery", difficulty: "Medium" },
        { name: "Careers in Cyber", difficulty: "Info" },
        { name: "Search Skills", difficulty: "Easy" },
        { name: "Defensive Security Intro", difficulty: "Easy" },
        { name: "Offensive Security Intro", difficulty: "Easy" }
      ]
    },
    hackthebox: {
      // TO VERIFY: catatan profil HTB dipertahankan; status terkini belum dikonfirmasi.
      note: { id: "Profil aktif — statistik lengkap menyusul setelah menyelesaikan lebih banyak challenge.", en: "Active profile — full stats coming soon after completing more challenges." }
    }
  },

  certifications: []
};

const I18N = {
  nav: {
    home: { id: "Home", en: "Home" },
    about: { id: "About", en: "About" },
    skills: { id: "Skills", en: "Skills" },
    projects: { id: "Projects", en: "Projects" },
    writeups: { id: "Write-ups", en: "Write-ups" },
    certifications: { id: "Certifications", en: "Certifications" },
    contact: { id: "Contact", en: "Contact" }
  }
};
