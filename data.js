/* ============================================================
   PROFILE.js — satu file ini isi semua data pribadi/konten.
   Edit di sini untuk update nama, bio, link, skill, tools, dst.
   Semua halaman otomatis ambil data dari sini lewat script.js
   ============================================================ */

const PROFILE = {
  name: "Zer-security",
  alias: "Zerkoth",
  role: { id: "Pembelajar Cybersecurity", en: "Cybersecurity Learner" },
  tagline: {
    id: "Belajar Linux, jaringan, dan keamanan web lewat praktik dan catatan yang bisa diperiksa.",
    en: "Learning Linux, networking, and web security through hands-on practice and verifiable notes."
  },
  focus: ["Networking", "Linux", "Security Fundamentals", "CTF / Security Labs", "Technical Write-ups"],
  status: "Learning in public",

  bio: {
    id: [
      "Saya belajar cybersecurity dari fundamental: jaringan, Linux, dan cara kerja aplikasi web. Saya membuat catatan supaya bisa meninjau kembali apa yang sudah saya pahami dan bagian yang masih membingungkan.",
      "Di luar latihan lab, saya mengembangkan secure-mcp-server: server MCP untuk Kali Linux yang membatasi akses ke tool baca-saja yang didaftarkan secara eksplisit. Proyek ini membantu saya berlatih tentang autentikasi, kontrol akses, pengujian, dan dokumentasi keamanan.",
      "Portofolio ini adalah catatan kerja yang terus berkembang, bukan daftar keahlian yang saya anggap sudah dikuasai. Saya membedakan hasil yang sudah diuji dari rencana dan pekerjaan yang belum diverifikasi."
    ],
    en: [
      "I am learning cybersecurity from the fundamentals: networking, Linux, and how web applications work. I write notes so I can revisit what I understand and what still needs clarification.",
      "Alongside lab practice, I work on secure-mcp-server: an MCP server for Kali Linux that limits access to explicitly registered read-only tools. The project gives me practice with authentication, access control, testing, and security documentation.",
      "This portfolio is an evolving work log, not a list of skills I claim to have mastered. I distinguish tested results from plans and work that has not yet been verified."
    ]
  },

  // Confirmed: GitHub portfolio URL points to the current repository.
  links: {
    github: "https://github.com/Zer-security",
    tiktok: "https://www.tiktok.com/@zer_753_x?_r=1&_t=ZS-9AYFaGrs0CD",
    instagram: "https://instagram.com/zer_security?cplk=MWtvOXd1YmMxM2FtYg%3D%3D",
    email: "fathonkamal045@gmail.com",
    tryhackme: "https://tryhackme.com/p/Zersecurity",
    hackthebox: "https://profile.hackthebox.com/profile/019f945a-256c-727d-b4b6-a1d0f106f0dd?utm_medium=copy_url",
    discord: "https://discord.gg/gCRpQCBS",
    linkedin: "https://www.linkedin.com/in/fathon-r-97636842a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    x: "https://x.com/Zerkoth7goc",
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
    { name: "TryHackMe", category: { id: "Platform Latihan", en: "Practice Platform" }, desc: { id: "Platform utama latihan hands-on cybersecurity.", en: "Main hands-on cybersecurity practice platform." }, url: "https://tryhackme.com/p/Zersecurity" },
    { name: "Hack The Box", category: { id: "Platform Latihan", en: "Practice Platform" }, desc: { id: "Platform latihan lanjutan, baru dimulai.", en: "Advanced practice platform, just getting started." }, url: "https://profile.hackthebox.com/profile/019f945a-256c-727d-b4b6-a1d0f106f0dd?utm_medium=copy_url" }
  ],

  projects: [
    {
      id: "mcp-kali",
      name: { id: "Secure MCP Server untuk Kali Linux", en: "Secure MCP Server for Kali Linux" },
      category: { id: "MCP / Keamanan Linux", en: "MCP / Linux Security" },
      label: { id: "Proyek unggulan", en: "Featured project" },
      objective: {
        id: "Server MCP untuk Kali Linux yang menyediakan tool baca-saja yang diizinkan secara eksplisit. Dirancang tanpa endpoint shell umum atau eksekusi kode arbitrer.",
        en: "An MCP server for Kali Linux that exposes explicitly allowlisted read-only tools. It is designed without a generic shell endpoint or arbitrary code execution."
      },
      description: {
        id: "Server MCP untuk Kali Linux yang menyediakan tool baca-saja yang diizinkan secara eksplisit. Dirancang tanpa endpoint shell umum atau eksekusi kode arbitrer.",
        en: "An MCP server for Kali Linux that exposes explicitly allowlisted read-only tools. It is designed without a generic shell endpoint or arbitrary code execution."
      },
      built: {
        id: "OAuth 2.0 + PKCE, scope mcp:read, TLS, validasi host, rate limiting, dan audit log dengan redaksi nilai sensitif.",
        en: "OAuth 2.0 + PKCE, the mcp:read scope, TLS, host validation, rate limiting, and audit logs with sensitive-value redaction."
      },
      learned: {
        id: "Least privilege, pemisahan autentikasi dan otorisasi, validasi input, serta pentingnya bukti pengujian.",
        en: "Least privilege, separating authentication from authorization, input validation, and the importance of test evidence."
      },
      status: { id: "Rilis v1.0.0; pengembangan berlanjut", en: "v1.0.0 released; ongoing development" },
      testStatus: { id: "CI repositori: 123 test lulus; tes integrasi dikecualikan dari perintah CI tersebut.", en: "Repository CI: 123 tests passed; integration tests are excluded from that CI command." },
      github: "https://github.com/Zer-security/secure-mcp-server"
    },
    {
      name: { id: "Zer OS", en: "Zer OS" },
      category: { id: "Operating System", en: "Operating System" },
      label: { id: "In development", en: "In development" },
      objective: {
        id: "Proyek sistem operasi Linux kustom. Lihat repositori untuk kode, rancangan, dan status implementasi terkini.",
        en: "A custom Linux operating-system project. See the repository for source code, design notes, and current implementation status."
      },
      status: { id: "In development", en: "In development" },
      github: "https://github.com/Zer-security/zer-os"
    },
    {
      name: { id: "Linux Kernel", en: "Linux Kernel" },
      category: { id: "Kernel Development", en: "Kernel Development" },
      label: { id: "OS foundation", en: "OS foundation" },
      objective: {
        id: "Repositori kernel Linux fork yang menjadi fondasi pengembangan sistem operasi kustom.",
        en: "A forked Linux kernel repository intended as a foundation for custom operating-system development."
      },
      status: { id: "Kernel foundation", en: "Kernel foundation" },
      github: "https://github.com/Zer-security/Linux-Kernel"
    },
    {
      name: { id: "Security Tools", en: "Security Tools" },
      category: { id: "Python / Security", en: "Python / Security" },
      label: { id: "Utility collection", en: "Utility collection" },
      objective: {
        id: "Kumpulan utilitas Python untuk pembelajaran cybersecurity, inspeksi jaringan, DNS/OSINT, pemeriksaan keamanan web, hashing, dan riset defensif.",
        en: "A collection of Python utilities for cybersecurity learning, network inspection, DNS and OSINT, web-security checks, hashing, and defensive research."
      },
      status: { id: "In development", en: "In development" },
      github: "https://github.com/Zer-security/security-tools"
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
      github: "https://github.com/Zer-security/portofolio-zer-security"
    }
  ],
  // Confirmed: write-up links point to the notes in the current repository.
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
      writeupUrl: "https://github.com/Zer-security/portofolio-zer-security/blob/main/notes/web-fundamentals.md"
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
      writeupUrl: "https://github.com/Zer-security/portofolio-zer-security/blob/main/notes/linux-fundamentals-part-1.md"
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
