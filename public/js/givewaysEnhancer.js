/*global chrome*/

const pageHeader = $("div.page-header > div > div");
const referenceElements = $(".raffle-list__item");
let missingGiveaways = 0;

function waitForSettings(callback) {
  const observer = new MutationObserver((mutationsList, observer) => {
    const settings = document.querySelector(".mannco-enhancer");
    if (settings) {
      observer.disconnect();
      callback(JSON.parse(settings.dataset.config));
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

function enterRaffle(button, url) {
  missingGiveaways--;
  updateText();
  button.setAttribute('value', 'true');
  Type.alert.success('Success!', 'You entered the giveaway');
  button.textContent = 'Leave';
  button.style.backgroundColor = 'red';
  console.log('enterRaffle', button.value);

  $.ajax({
    method: "GET",
    xhrFields: {
      withCredentials: true
    },
    url: `/requests/raffle.php?mode=join&url=${url}`
  }).done(function (response) {
    if (response.indexOf('ok') !== -1) {
      $('.rafflejoined').show();
      $('.raffleenter').hide();
    } else {
      Type.alert.error('Error', "This is full");
    }
  });
}

function leaveRaffle(button, url) {
  missingGiveaways++;
  updateText();
  button.setAttribute('value', 'false');
  Type.alert.error(':(', 'You left the giveaway');
  button.textContent = 'Enter';
  button.style.backgroundColor = 'green';
  console.log('leaveRaffle', button.value);

  $.ajax({
    method: "GET",
    xhrFields: {
      withCredentials: true
    },
    url: `/requests/raffle.php?mode=leave&url=${url}`
  }).done(function (response) {
    if (response.indexOf('ok') !== -1) {
      $('.raffleenter').show();
      $('.rafflejoined').hide();
    }
  });
}

function updateText() {
  const missingText = document.querySelector(".missingGiveways");
  if (missingGiveaways === 0) {
    missingText.style.display = 'none';
  } else {
    missingText.style.display = 'flex';
    missingText.textContent = `Missing ${missingGiveaways} giveaways!`;
  }
  missingText.addEventListener('click', function() {
// Find the first element with the specified border color
const targetElement = referenceElements.filter(function() {
  return $(this).css("border-left-color") === 'rgb(16, 17, 34)';
}).first();

// Scroll the screen to the target element
if (targetElement.length > 0) {
  $('html, body').animate({
    scrollTop: targetElement.offset().top
  }, 500);
}
  })
}

function highlightJoinedRaffles(raffles) {
  for (let i = 0; i < referenceElements.length; i++) {
    const href = referenceElements[i].href;
    const giveawayId = href.split("/giveaways/details/").pop();
    if (raffles.indexOf(giveawayId) !== -1) {
      referenceElements[i].style.borderLeft = '3px solid lime';
      referenceElements[i].style.transition = 'all 0.2s ease-in-out 0s';
    } else {
      referenceElements[i].style.borderLeft = '3px solid #101122';
      referenceElements[i].style.transition = 'all 0.2s ease-in-out 0s';
      missingGiveaways++;
    }
  }
  updateText();
}

function fetchJoinedRaffles() {
  fetch("https://mannco.store/requests/raffle.php?mode=getJoined")
    .then(response => response.text())
    .then(data => {
      const joinedRaffles = data.split(',');
      highlightJoinedRaffles(joinedRaffles);
    })
    .catch(error => {
      console.error(error);
      const joinedRaffles = Raffle.joined;
      highlightJoinedRaffles(joinedRaffles);
    });
}

function startGiveawayEnhancer(config) {
  console.log(config);
  console.log('enableGiveawayEnhancer:', config.enableGiveawayEnhancer);
  Type.alert.success("Welcome", "");
  setTimeout(() => {
    if (config.showAllGivewaysInTheSamePage) {
      console.log('showAllGivewaysInTheSamePage enabled');
      Type.createPagination(1000, 1, 'raffleitem', '');
      document.querySelector("#main > div > nav").remove();
    }
  }, 500);

  if (config.showMissingGiveaways) {
    console.log('showMissingGiveaways enabled');
    const missingText = document.createElement("button");
    missingText.title = 'Click to go to the next missing Giveaway';
    missingText.className = 'missingGiveways';
    document.querySelector("#wrapper > div.page-header > div > div").insertAdjacentElement("afterend", missingText);
    updateText();
  }

  if (config.giveawayBorders) {
    console.log('giveawayBorders enabled');
    fetchJoinedRaffles();
  }

  if (config.quickEnterButton) {
    console.log('quickEnterButton enabled');
    document.querySelector("#wrapper > div.page-header > div > div").style.width = 'calc(100% + 85px)';

    for (let i = 0; i < referenceElements.length; i++) {
      const newElement = document.createElement("button");
      newElement.classList.add("raffle-button");

      if (referenceElements[i].style.borderLeft === '3px solid lime') {
        newElement.textContent = 'Leave';
        newElement.setAttribute('value', 'true');
      } else {
        newElement.textContent = 'Enter';
        newElement.setAttribute('value', 'false');
      }

      if (i === 0) {
        newElement.classList.add("first");
      }
      if (i === referenceElements.length - 1) {
        newElement.classList.add("last");
      }

      referenceElements[i].appendChild(newElement);

      newElement.onclick = function (event) {
        event.preventDefault();
        event.stopPropagation();

        const url = event.target.parentElement.href.replace('https://mannco.store/giveaways/details/', '');

        if (event.target.getAttribute('value') === 'false') {
          enterRaffle(event.target, url);
          event.target.parentElement.style.borderLeft = '3px solid lime';
          event.target.parentElement.querySelector('[data-toggle="tooltip"]').style.display = 'flex';
        } else {
          leaveRaffle(event.target, url);
          event.target.parentElement.style.borderLeft = '3px solid #101122';
          event.target.parentElement.querySelector('[data-toggle="tooltip"]').style.display = 'none';
        }
      };

      setTimeout(() => {
        console.log('1!');
        if (referenceElements[i].style.borderLeft === '3px solid lime') {
          console.log('true');
          newElement.setAttribute('value', 'true');
          newElement.textContent = 'Leave';
          newElement.style.backgroundColor = 'red';
        } else {
          console.log('false');
          newElement.setAttribute('value', 'false');
          newElement.textContent = 'Enter';
          newElement.style.backgroundColor = 'green';
        }
      }, 500);
    }
  }
}

  waitForSettings(startGiveawayEnhancer);
