// Get elements
const next = document.getElementById("next");
const previous = document.getElementById("previous");
const frameLink = document.getElementById("frame-link");

// Set variables
let stopLoop = false;

// Links data
const links = [
  "https://www.mulberry.com/gb/shop/women/bags/mini-bags?utm_source=adylic&utm_medium=display&utm_campaign=UK_MicroBags",
  "https://www.mulberry.com/gb/shop/women/coming-soon/city-weekender-double-yellow-heavy-grain-webbing?utm_source=adylic&utm_medium=display&utm_campaign=UK_BelgraveWeekender",
  "https://www.mulberry.com/gb/shop/whats-new",
  "https://www.mulberry.com/gb/shop/lily/medium-lily-sapphire-smooth-glossy-leather?utm_source=adylic&utm_medium=display&utm_campaign=UK_Festive_LilySapphire",
];

// Provides a delay for the loop
function timer(s) {
  return new Promise((res) => setTimeout(res, s));
}

// Global counter
let counter = 0;

// Initial loop of images
async function loadImage() {
  for (counter = 1; counter < links.length + 1 && !stopLoop; counter++) {
    // Set first image and text
    gsap.set(`#image-${counter}`, {
      delay: 0.1,
      autoAlpha: 1,
    });
    gsap.to(`#image-${counter}`, {
      duration: 0.8,
      opacity: "1",
    });
    gsap.set(`#copy-${counter}`, {
      delay: 0.1,
      autoAlpha: 1,
    });
    gsap.to(`#copy-${counter}`, {
      duration: 0.8,
      opacity: "1",
    });

    // Set Link
    frameLink.href = links[counter - 1];

    if (counter !== links.length) {
      // Iterate over images
      gsap.set(`#image-${counter}`, {
        autoAlpha: 0,
      });
      gsap.to(`#image-${counter}`, {
        delay: 3,
        duration: 0.8,
        opacity: "0",
      });

      gsap.set(`#copy-${counter}`, {
        autoAlpha: 0,
      });
      gsap.to(`#copy-${counter}`, {
        delay: 3,
        duration: 0.8,
        opacity: "0",
      });
    }
    await timer(3000);
  }

  // Stop loop adding extra count on finish
  counter--;
}

loadImage();

// Next button
next.addEventListener("click", function (e) {
  // Stop loop if mid iteration
  stopLoop = true;

  // Remove current image and text
  gsap.set(`#image-${counter}`, {
    autoAlpha: 0,
  });
  gsap.to(`#image-${counter}`, {
    duration: 0.8,
    opacity: "0",
  });
  gsap.set(`#copy-${counter}`, {
    autoAlpha: 0,
  });
  gsap.to(`#copy-${counter}`, {
    duration: 0.8,
    opacity: "0",
  });

  if (counter == links.length) {
    // If at end of images, reset to start
    counter = 1;
    gsap.set(`#image-${counter}`, {
      delay: 0.1,
      autoAlpha: 1,
    });
    gsap.to(`#image-${counter}`, {
      duration: 0.8,
      opacity: "1",
    });
    gsap.set(`#copy-${counter}`, {
      delay: 0.1,
      autoAlpha: 1,
    });
    gsap.to(`#copy-${counter}`, {
      duration: 0.8,
      opacity: "1",
    });
    frameLink.href = links[counter - 1];
  } else {
    // Iterate over remaining images
    counter++;
    gsap.set(`#image-${counter}`, {
      delay: 0.1,
      autoAlpha: 1,
    });
    gsap.to(`#image-${counter}`, {
      duration: 0.8,
      opacity: "1",
    });
    gsap.set(`#copy-${counter}`, {
      delay: 0.1,
      autoAlpha: 1,
    });
    gsap.to(`#copy-${counter}`, {
      duration: 0.8,
      opacity: "1",
    });
    frameLink.href = links[counter - 1];
  }
});

// Previous button
previous.addEventListener("click", function (e) {
  // Stop loop if mid iteration
  stopLoop = true;

  // Remove current image and text
  gsap.set(`#image-${counter}`, {
    autoAlpha: 0,
  });
  gsap.to(`#image-${counter}`, {
    duration: 0.8,
    opacity: "0",
  });
  gsap.set(`#copy-${counter}`, {
    autoAlpha: 0,
  });
  gsap.to(`#copy-${counter}`, {
    duration: 0.8,
    opacity: "0",
  });

  if (counter == 1) {
    // If at start of images, reset to end
    counter = links.length;
    gsap.set(`#image-${counter}`, {
      delay: 0.1,
      autoAlpha: 1,
    });
    gsap.to(`#image-${counter}`, {
      duration: 0.8,
      opacity: "1",
    });
    gsap.set(`#copy-${counter}`, {
      delay: 0.1,
      autoAlpha: 1,
    });
    gsap.to(`#copy-${counter}`, {
      duration: 0.8,
      opacity: "1",
    });
    frameLink.href = links[counter - 1];
  } else {
    // Iterate over remaining images in reverse
    counter--;
    gsap.set(`#image-${counter}`, {
      delay: 0.1,
      autoAlpha: 1,
    });
    gsap.to(`#image-${counter}`, {
      duration: 0.8,
      opacity: "1",
    });
    gsap.set(`#copy-${counter}`, {
      delay: 0.1,
      autoAlpha: 1,
    });
    gsap.to(`#copy-${counter}`, {
      duration: 0.8,
      opacity: "1",
    });
    frameLink.href = links[counter - 1];
  }
});

// Link functionality
frameLink.addEventListener("click", function (e) {
  window.open(links[counter - 1], "_blank");
});

// Inital fade for remaining elements
gsap.to(".fade-in", {
  duration: 0.8,
  opacity: "1",
});
