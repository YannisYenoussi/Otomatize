// Tailwind config extracted from html/code.html
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0F172A", // Deep Navy
        secondary: "#14B8A6", // Light Teal
        accent: "#F8FAFC", // Soft Gray
        "background-light": "#FFFFFF",
        "background-dark": "#020617",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.75rem",
        'xl': '1.5rem',
      },
    },
  },
};

// Inject shared components (navbar) into pages
document.addEventListener('DOMContentLoaded', function () {
  const root = document.getElementById('navbar-root');
  if (!root) return;
  fetch('components/navbar.html')
    .then(function (res) {
      if (!res.ok) throw new Error('Failed to load navbar');
      return res.text();
    })
    .then(function (html) {
      root.innerHTML = html;
    })
    .catch(function (err) {
      console.error(err);
    });
});
