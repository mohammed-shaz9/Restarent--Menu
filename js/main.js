var popup = document.getElementById("popup");
const scrollToTopButton = document.getElementById("scrollToTopButton");
const menuOverLay = document.getElementById("menuOverlay");
const navLinks = document.getElementById("navLinks");

// Show the selected menu category and hide other categories

document.addEventListener("DOMContentLoaded", function () {
  let categoryBtns = document.querySelectorAll(".category-button");
  categoryBtns.forEach(function (button) {
    button.addEventListener("click", function () {
      let category = button.dataset.category;
      console.log(category);
      let categories = document.querySelectorAll(".menu-category");
      console.log(categories);
      categories.forEach(function (category) {
        category.classList.remove("active");
      });
      let selectedCategory = document.querySelector(
        '.menu-category[data-category="' + category + '"]'
      );
      console.log(selectedCategory);
      selectedCategory.classList.add("active");
    });
  });
});

// Scroll target in the navbar

document.addEventListener("DOMContentLoaded", function () {
  //   debugger;
  var hashLinks = document.querySelectorAll('a[href^="#"]');
  console.log(hashLinks);
  hashLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      console.log(e);
      var targetId = link.getAttribute("href").substring(1);
      console.log(targetId);
      document.getElementById(targetId).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});

// Show popup everytime you press on the item

document.addEventListener("DOMContentLoaded", function () {
  var CategoryItems = document.querySelectorAll(
    ".appItem, .mainItem, .dessItem, .bevItem"
  );
  CategoryItems.forEach(function (item) {
    item.addEventListener("click", () => {
      const ingredients = item.getAttribute("data-ingredients").split(",");
      displayPopup(ingredients);
    });
    popup.addEventListener("click", () => {
      closePopup();
    });
    document
      .getElementById("close")
      .addEventListener("click", () => closePopup());
  });
});

function displayPopup(ingredients) {
  let ingredientLists = document.getElementById("ingredients-list");
  ingredientLists.innerHTML = "";

  ingredients.forEach((ingredient) => {
    const listItem = document.createElement("li");
    listItem.textContent = ingredient.trim();
    ingredientLists.appendChild(listItem);
  });

  // Display popup function
  popup.style.display = "flex";
}
// close popup function
const closePopup = () => (popup.style.display = "none");

window.addEventListener("scroll", () => {
  // show the button
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollToTopButton.style.display = "block";
    scrollToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  } else {
    scrollToTopButton.style.display = "none";
  }
});

// Function to clear the inputs in contact section
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
    });
  }
});

// Toggle menu icon and show the list of menu
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  menuToggle.addEventListener("click", () => {
    if (
      navLinks.style.display === "flex" &&
      menuOverLay.style.display === "flex"
    ) {
      navLinks.style.display = "none";
      menuOverLay.style.display = "none";

      // calling the function of closing toggle
      // overlayClick();
    } else {
      navLinks.style.display = "flex";
      menuOverLay.style.display = "flex";
    }
  });
});

// Fuction close menu toggle (when you press the overlay it will close the menu)
document.addEventListener("DOMContentLoaded", () => {
  menuOverLay.addEventListener("click", () => {
    navLinks.style.display = "none";
    menuOverLay.style.display = "none";
  });
});
// Another way to apply close menu and overlay
// function overlayClick() {
//   menuOverLay.addEventListener("click", () => {
//     navLinks.style.display = "none";
//     menuOverLay.style.display = "none";
//   });
// }

// Filter function

document.addEventListener("DOMContentLoaded", function () {
  const menuSearchInput = document.getElementById("menuSearch");
  const menuItems = document.querySelectorAll(".itemsUl > div");
  const searchIcon = document.querySelector(".search-icon");

  // Add event listeners for input and icon click
  if (menuSearchInput && menuItems && searchIcon) {
    menuSearchInput.addEventListener("input", filterMenuItems);
    searchIcon.addEventListener("click", function () {
      filterMenuItems();
      menuSearchInput.value = "";
    });
  }

  function filterMenuItems() {
    const searchTerm = menuSearchInput.value.toLowerCase();

    menuItems.forEach((item) => {
      const itemName = item.querySelector("li").textContent.toLowerCase();

      if (itemName.includes(searchTerm)) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  }
});

// Function to route to menu

function navigateToMenu() {
  window.location.href = "index.html#menu";
}

document.querySelectorAll(".menuNav").forEach((nav) => {
  nav.addEventListener("click", function () {
    navigateToMenu();
  });
});

// Function to route to contact us

function navigateToContact() {
  window.location.href = "index.html#contactUs";
}
document.querySelectorAll(".contactUsNav").forEach((nav) => {
  nav.addEventListener("click", function () {
    navigateToContact();
  });
});
