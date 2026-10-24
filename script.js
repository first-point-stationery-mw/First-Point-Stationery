// ==========================================
// FIRST POINT STATIONERY
// Main JavaScript
// ==========================================


// ---------- MOBILE NAVIGATION ----------

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

  menuBtn.addEventListener("click", () => {

    // Open or close the mobile menu
    const isOpen = navLinks.classList.toggle("active");

    // Update accessibility information
    menuBtn.setAttribute("aria-expanded", isOpen);

    // Change menu icon
    menuBtn.innerHTML = isOpen
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });


  // Close menu after clicking a navigation link
  navLinks.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("active");

      menuBtn.setAttribute("aria-expanded", "false");

      menuBtn.innerHTML =
        '<i class="fa-solid fa-bars"></i>';
    });

  });

}


// ---------- AUTOMATIC COPYRIGHT YEAR ----------

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}


// ---------- SCROLL REVEAL ANIMATION ----------

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

  const observer = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          // Stop observing after the animation
          observer.unobserve(entry.target);
        }

      });

    },
    {
      threshold: 0.12
    }
  );


  revealElements.forEach((element) => {
    observer.observe(element);
  });

} else {

  // Fallback for older browsers
  revealElements.forEach((element) => {
    element.classList.add("visible");
  });

}


// ---------- CLOSE MOBILE MENU WHEN CLICKING OUTSIDE ----------

document.addEventListener("click", (event) => {

  if (!menuBtn || !navLinks) return;

  const clickedInsideMenu =
    navLinks.contains(event.target);

  const clickedMenuButton =
    menuBtn.contains(event.target);

  if (!clickedInsideMenu && !clickedMenuButton) {

    navLinks.classList.remove("active");

    menuBtn.setAttribute("aria-expanded", "false");

    menuBtn.innerHTML =
      '<i class="fa-solid fa-bars"></i>';
  }

});


// ---------- CLOSE MENU WHEN SCREEN BECOMES LARGE ----------

window.addEventListener("resize", () => {

  if (!menuBtn || !navLinks) return;

  if (window.innerWidth > 768) {

    navLinks.classList.remove("active");

    menuBtn.setAttribute("aria-expanded", "false");

    menuBtn.innerHTML =
      '<i class="fa-solid fa-bars"></i>';
  }

});
