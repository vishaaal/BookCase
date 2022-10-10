const setNormalView = (isNormalView) => {
  if (isNormalView) {
    document.querySelector("#normal-view").classList.add("selected");
    document.querySelector("#compact-view").classList.remove("selected");

    document.querySelectorAll(".card-body").forEach((cardBody) => {
      cardBody.classList.remove("hidden");
    });

    document.querySelectorAll(".row>div").forEach((ele) => {
      ele.classList.replace("col-lg-2", "col-lg-4");
    });
  } else {
    document.querySelector("#compact-view").classList.add("selected");
    document.querySelector("#normal-view").classList.remove("selected");

    document.querySelectorAll(".card-body").forEach((cardBody) => {
      cardBody.classList.add("hidden");
    });

    document.querySelectorAll(".row>div").forEach((ele) => {
      ele.classList.replace("col-lg-4", "col-lg-2");
    });
  }
};

setNormalView(true); // By default normal view is enabled.

document.querySelector("#normal-view").addEventListener("mousedown", () => {
  setNormalView(true);
});

document.querySelector("#compact-view").addEventListener("mousedown", () => {
  setNormalView(false);
});

const fixBrokenImages = () => {
  const fallbackURL = "images/fallback_image.png";
  const img = document.getElementsByTagName("img");
  for (let i = 0; i < img.length; i++) {
    let t = img[i];
    if (t.naturalWidth === 0) {
      t.src = fallbackURL;
    }
  }

  // document.querySelector("form#search-form").addEventListener("submit", (e) => {
  //   e.preventDefault();
  //   console.log(document.querySelector("#search-bar").value);
  // });
};

window.onload = fixBrokenImages;

function search(q) {
  const re = new RegExp(q, "i");

  const cards = [...document.querySelectorAll(".card")];

  cards.forEach((c) => {
    if (!re.test(c.querySelector("h5").textContent)) {
      // c.style.display = "none";
      c.parentElement.style.display = "none";
    } else {
      c.parentElement.style.display = "block";
    }
  });
}
