// app.js - Main application JavaScript

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize Flatpickr date picker
  initDatePicker();

  // Initialize charts
  initCharts();

  // Initialize search functionality
  initSearch();

  // Initialize map
  initMap();

  // Initialize notification dropdown
  initNotifications();

  // Initialize user dropdown
  initUserDropdown();
});

// Initialize Flatpickr date picker
function initDatePicker() {
  if (typeof flatpickr !== "undefined") {
    flatpickr(".datepicker", {
      mode: "range",
      dateFormat: "Y-m-d",
      static: true,
      position: "right",
    });
  }
}

// Initialize charts using Chart.js
function initCharts() {
  // Chart One - Monthly Sales
  const chartOneCtx = document.getElementById("chartOne");
  if (chartOneCtx) {
    new Chart(chartOneCtx, {
      type: "line",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Sales",
            data: [
              6500, 5900, 8000, 8100, 5600, 5500, 4000, 7500, 8200, 7800, 9000,
              9500,
            ],
            borderColor: "#3b82f6",
            backgroundColor: "rgba(59, 130, 246, 0.1)",
            tension: 0.4,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              display: true,
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
      },
    });
  }

  // Chart Two - Monthly Target
  const chartTwoCtx = document.getElementById("chartTwo");
  if (chartTwoCtx) {
    new Chart(chartTwoCtx, {
      type: "doughnut",
      data: {
        labels: ["Achieved", "Remaining"],
        datasets: [
          {
            data: [75, 25],
            backgroundColor: ["#10b981", "#e5e7eb"],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "70%",
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }

  // Chart Three - Statistics
  const chartThreeCtx = document.getElementById("chartThree");
  if (chartThreeCtx) {
    new Chart(chartThreeCtx, {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
          {
            label: "Sales",
            data: [6500, 5900, 8000, 8100, 5600, 5500, 4000],
            backgroundColor: "#3b82f6",
            borderRadius: 6,
          },
          {
            label: "Revenue",
            data: [7500, 6900, 9000, 9100, 6600, 6500, 5000],
            backgroundColor: "#10b981",
            borderRadius: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}

// Initialize search functionality
function initSearch() {
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");

  if (searchInput && searchButton) {
    // Focus search on Cmd/Ctrl + K
    document.addEventListener("keydown", function (e) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        searchInput.focus();
      }
    });

    // Search button click
    searchButton.addEventListener("click", function () {
      performSearch(searchInput.value);
    });

    // Enter key in search
    searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        performSearch(searchInput.value);
      }
    });
  }
}

function performSearch(query) {
  if (query.trim()) {
    console.log("Searching for:", query);
    // Implement actual search logic here
    alert("Search functionality would search for: " + query);
  }
}

// Initialize map (placeholder - would need actual map library)
function initMap() {
  const mapElement = document.getElementById("mapOne");
  if (mapElement) {
    // This is a placeholder for map initialization
    // You would typically use Leaflet, Google Maps, or Mapbox here
    console.log("Map element found, would initialize map here");
  }
}

// Initialize notification dropdown functionality
function initNotifications() {
  // Additional notification logic can be added here
  console.log("Notification system initialized");
}

// Initialize user dropdown functionality
function initUserDropdown() {
  // Additional user dropdown logic can be added here
  console.log("User dropdown initialized");
}

// Utility function for dark mode toggle
function toggleDarkMode() {
  const html = document.documentElement;
  const isDark = html.classList.contains("dark");

  if (isDark) {
    html.classList.remove("dark");
    localStorage.setItem("darkMode", "false");
  } else {
    html.classList.add("dark");
    localStorage.setItem("darkMode", "true");
  }
}

// Export functions if using modules
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    initDatePicker,
    initCharts,
    initSearch,
    initMap,
    initNotifications,
    initUserDropdown,
    toggleDarkMode,
  };
}

$(document).ready(function () {
  $("#togglePassword").on("click", function () {
    const passwordInput = $("#passwordInput");
    const showIcon = $("#showPasswordIcon");
    const hideIcon = $("#hidePasswordIcon");

    const isPassword = passwordInput.attr("type") === "password";

    // Toggle input type
    passwordInput.attr("type", isPassword ? "text" : "password");

    // Toggle icons
    if (isPassword) {
      showIcon.addClass("hidden");
      hideIcon.removeClass("hidden");
    } else {
      showIcon.removeClass("hidden");
      hideIcon.addClass("hidden");
    }
  });
});
