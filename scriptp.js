/* ==========================================================================
   1. SMOOTH SCROLL FOR NAV LINKS
   ========================================================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

/* ==========================================================================
   2. TYPING EFFECT (HERO SECTION)
   ========================================================================== */
const typingElement = document.getElementById("typing");

if (typingElement) {
  const words = ["Deden Nur Hidayat", "Web Developer", "SI Student"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      typingElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
      typeSpeed = 2000; // Berhenti sejenak saat kata selesai diketik
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length; // Ganti ke kata berikutnya
      typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

/* ==========================================================================
   3. DARK / LIGHT MODE TOGGLE
   ========================================================================== */
const toggleBtn = document.getElementById("theme-toggle");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    // Mengubah ikon tombol berdasarkan mode yang aktif
    if (document.body.classList.contains("light-mode")) {
      toggleBtn.textContent = "☀️";
    } else {
      toggleBtn.textContent = "🌙";
    }
  });
}

/* ==========================================================================
   4. MOBILE HAMBURGER MENU
   ========================================================================== */
const navMenu = document.getElementById("nav-menu");

// Fungsi untuk buka/tutup menu hamburger
function toggleMenu() {
  if (navMenu) {
    navMenu.classList.toggle("active");
  }
}

// Menutup menu navbar secara otomatis setelah link diklik (khusus tampilan mobile)
document.querySelectorAll("#nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    if (navMenu) {
      navMenu.classList.remove("active");
    }
  });
});

// Log penanda bahwa script berhasil dimuat
console.log("Portfolio Website Loaded Successfully");

// Highlight Menu Navigation on Scroll
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((a) => {
    a.classList.remove("active-nav"); 
    if (a.getAttribute("href").includes(current)) {
      a.classList.add("active-nav");
    }
  });
});

// Dynamic Time Greeting
const greetingElement = document.getElementById("time-greeting");
if (greetingElement) {
  const hours = new Date().getHours();
  let greeting = "Halo";

  if (hours >= 5 && hours < 12) {
    greeting = "Selamat Pagi ";
  } else if (hours >= 12 && hours < 17) {
    greeting = "Selamat Siang";
  } else if (hours >= 17 && hours < 20) {
    greeting = "Selamat Sore ";
  } else {
    greeting = "Selamat Malam ";
  }

  greetingElement.textContent = greeting;
}

// Copy Email to Clipboard
function copyEmail() {
  const emailText = document.getElementById("my-email").textContent;
  const copyIcon = document.getElementById("copy-icon");

  navigator.clipboard.writeText(emailText).then(() => {
    // Beri efek visual kalau sukses disalin
    copyIcon.className = "fas fa-check"; // Berubah jadi ikon centang
    copyIcon.style.color = "#00ff00"; // Berubah jadi warna hijau
    
    // Kembalikan ke ikon semula setelah 2 detik
    setTimeout(() => {
      copyIcon.className = "fas fa-copy";
      copyIcon.style.color = "cyan";
    }, 2000);
  }).catch(err => {
    console.error("Gagal menyalin text: ", err);
  });
}