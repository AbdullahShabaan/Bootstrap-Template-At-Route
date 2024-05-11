// Landing Scroll
let landing = document.querySelector(".landing");
window.addEventListener("scroll", function () {
  landing.style.backgroundPosition = `0 ${this.window.scrollY / 4}px`;
});

// Portfolio image madel
let carsoul = document.getElementById("carousel");
let carsoulImages = document.querySelectorAll(".carousel-porftolio .photo img");
let carsoulItem = document.querySelectorAll(
  ".carousel-porftolio .carousel-item"
);
let imageBtn = document.querySelectorAll(".portfolio-card .show-image");
imageBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    carsoul.classList.toggle("open");

    // Remove active class from images
    carsoulItem.forEach((e) => {
      e.classList.remove("active");
    });

    // add active class to image
    carsoulImages.forEach((e) => {
      if (e.getAttribute("src") == btn.getAttribute("data-src")) {
        e.parentElement.parentElement.classList.add("active");
      }
    });

    // Exit Btn
    document.getElementById("exit-portfolio").onclick = function () {
      carsoul.classList.remove("open");
    };

    // Exit any where
    window.addEventListener("click", function (e) {
      if (e.target == carsoul) {
        carsoul.classList.remove("open");
      }
    });
  });
});

// nav scrolling
let nav = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  if (this.window.scrollY > 600) {
    nav.classList.add("scrolling");
  } else {
    nav.classList.remove("scrolling");
  }
});

// animation logic

let words = ["Larry Daniels", "Developer", "Designer"];
let element = document.getElementById("text-animation");
let sleepTime = 50;
let currentIndex = 0;

function sleep(second) {
  return new Promise((resolve) => {
    setTimeout(resolve, second);
  });
}

let writeLoop = async () => {
  while (true) {
    if (currentIndex > words.length - 1) {
      currentIndex = 0;
    }
    let currentWord = words[currentIndex];
    for (let i = 0; i < currentWord.length; i++) {
      element.innerText = currentWord.substring(0, i + 1);
      await sleep(sleepTime);
    }
    await sleep(sleepTime * 50);

    for (let i = currentWord.length; i > 0; i--) {
      element.innerText = currentWord.substring(0, i - 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 10);
    currentIndex++;
  }
};
writeLoop();

// change links color based on section
let sections = document.querySelectorAll(".section");
let navLinks = document.querySelectorAll("nav .navbar-nav .nav-link");
window.addEventListener("scroll", function () {
  sections.forEach((s) => {
    let currecntScroll = window.scrollY;
    let offset = s.offsetTop;
    let offsetHeight = s.offsetHeight;
    let sectionId = s.getAttribute("id");
    if (
      currecntScroll >= offset - 100 &&
      currecntScroll < offset + offsetHeight
    ) {
      navLinks.forEach((e) => {
        e.classList.remove("active");
      });
      let currentLink = this.document.querySelector(
        "nav .navbar-nav  a[href*=" + sectionId + "]"
      );
      if (currentLink) {
        currentLink.classList.add("active");
      }
    }
  });
});

// Skills Animation
let about = document.getElementById("about");
let prog = document.querySelectorAll(".progress-bar");
let aboutHeight = about.offsetHeight + about.offsetTop;
window.addEventListener("scroll", function () {
  if (
    this.window.scrollY + 200 >= about?.offsetTop &&
    this.window.scrollY <= aboutHeight + 200
  ) {
    prog.forEach((e) => {
      e.style.width = e.getAttribute("aria-valuenow") + "%";
    });
  } else {
    prog.forEach((e) => {
      e.style.width = "0%";
    });
  }
});

// Stat Animation Numbers
let statSection = document.getElementById("stat");
let statNumber = document.querySelectorAll(".stat .stat-number");
let trigger = false;
function increaseNumber(element) {
  trigger = true;
  let numberGoal = element.getAttribute("data-number");
  let counter = setInterval(() => {
    element.textContent++;
    if (element.textContent == numberGoal) {
      clearInterval(counter);
    }
  }, 1000 / numberGoal);
}
window.addEventListener("scroll", function () {
  if (this.window.scrollY + 400 > statSection.offsetTop && !trigger) {
    statNumber.forEach((e) => {
      increaseNumber(e);
    });
  }
});

// Loading Animation
let loadingAnimation = document.querySelector(".loading-animation");
let loading = document.querySelector(".load-circle");
let topLoading = document.querySelector(".loading .top");
let bottomLoading = document.querySelector(".loading .bottom");
window.addEventListener("load", function () {
  topLoading.style.height = "0";
  bottomLoading.style.height = "0";
  loading.style.opacity = "0";

  setTimeout(() => {
    loadingAnimation.style.display = "none";
  }, 500);
});
