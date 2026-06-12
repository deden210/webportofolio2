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
  const text = "Deden Nur Hidayat";
  let i = 0;

  function typingEffect() {
    if (i < text.length) {
      // Menggunakan textContent lebih aman dan efisien daripada innerHTML untuk teks biasa
      typingElement.textContent += text.charAt(i);
      i++;
      setTimeout(typingEffect, 100);
    }
  }

  // Menjalankan fungsi efek mengetik
  typingEffect();
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