
      // Mobile menu toggle
      const mobileMenuButton = document.getElementById("mobile-menu-button");
      const mobileMenu = document.getElementById("mobile-menu");

      mobileMenuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });

      // Login modal
      const loginLinks = document.querySelectorAll('a[href="#login"]');
      const loginModal = document.getElementById("login-modal");
      const closeLogin = document.getElementById("close-login");

      loginLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          loginModal.classList.remove("hidden");
        });
      });

      closeLogin.addEventListener("click", () => {
        loginModal.classList.add("hidden");
      });

      // Registration modal
      const registerLinks = document.querySelectorAll('a[href="#register"]');
      const registerModal = document.getElementById("register-modal");
      const closeRegister = document.getElementById("close-register");

      registerLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          registerModal.classList.remove("hidden");
        });
      });

      closeRegister.addEventListener("click", () => {
        registerModal.classList.add("hidden");
      });

      // Close modals when clicking outside
      window.addEventListener("click", (e) => {
        if (e.target === loginModal) {
          loginModal.classList.add("hidden");
        }
        if (e.target === registerModal) {
          registerModal.classList.add("hidden");
        }
      });

      // Smooth scrolling for navigation links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          const targetId = this.getAttribute("href");
          if (targetId === "#login" || targetId === "#register") return;

          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: "smooth",
            });

            // Close mobile menu if open
            if (!mobileMenu.classList.contains("hidden")) {
              mobileMenu.classList.add("hidden");
            }
          }
        });
      });

      // Animation on scroll
      const fadeElements = document.querySelectorAll(".fade-in");

      const fadeInObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = 1;
              entry.target.style.transform = "translateY(0)";
            }
          });
        },
        { threshold: 0.1 }
      );

      fadeElements.forEach((element) => {
        element.style.opacity = 0;
        element.style.transform = "translateY(20px)";
        element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        fadeInObserver.observe(element);
      });
  