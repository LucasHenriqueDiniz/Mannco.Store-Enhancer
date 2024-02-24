// Ideias to implement
// hide withdrawn, unusual, etc items,
// fast sell items open a modal to sell all items in the current tab and going to next one
// add a button to sell all items in the current tab
// add a button to withdraw all items in the current tab
// detect painted items
// maybe style better this ugly ass page

const sidebar = document.querySelector("#inventory-sidebar");
const sellButton = document.querySelector(
  "#inventory-sidebar > div > button.btn.btn-primary.btn-block.mb-3.sell"
);
const withdrawButton = document.querySelector(
  "#inventory-sidebar > div > button.btn.btn-primary.btn-block.mb-3.withdraw"
);
const confirmSaleButton = document.querySelector(
  "#modal-total-items > div > div > div.modal-footer > button.btn.btn-primary"
);

const inventoryButton = document.querySelector("a[href='#tab-site-inventory']");
const inventoryItems = Array.from(
  document.querySelector("#site-inventory-items").children
);

const onSaleButton = document.querySelector("#pills-on-sale-tab");
const onSaleItems = Array.from(
  document.querySelector("#on-sale-items").children
);

const AllItems = inventoryItems.concat(onSaleItems);
const activeTab = document.querySelector(".nav-link.active").getAttribute("id");
let currentActive;

const csgoFloats = [
  "Minimal Wear",
  "Factory New",
  "Field-Tested",
  "Well-Worn",
  "Battle-Scarred",
];

const isSpecialRarities = ["★", "StatTrak™", "Souvenir"];
const isLevelSpecials = ["Level:100", "Level:69", "Level:1"];

function updateActiveTab() {
  if (activeTab === "pills-site-inventory-tab") {
    currentActive = "Inventory";
  } else {
    currentActive = "OnSale";
  }
}

onSaleButton.addEventListener("click", function () {
  updateActiveTab();
  onSaleItems[0].click();
});

inventoryButton.addEventListener("click", function () {
  updateActiveTab();
  inventoryItems[0].click();
});

// remove gloval alerts
document.querySelectorAll(".global-alert").forEach((e) => e.remove());

// detect keys to sell and withdraw
document.addEventListener("keydown", function (event) {
  //   se apertar shift e enter, vende tudo
  if (event.shiftKey && event.key === "Enter") {
    sellButton.click();
  } else if (event.shiftKey && event.key === "w") {
    withdrawButton.click();
  } else if (event.key === "Enter") {
    confirmSaleButton.click();
  }
});

for (let i = 0; i < AllItems.length; i++) {
  var currentItem = AllItems[i];
  var itemName = currentItem.querySelector(
    ".item-name-description"
  ).textContent;
  var itemInfo = currentItem
    .querySelector(".item-info > h5")
    .textContent.trim()
    .split("\n");

  if (itemInfo.length > 0) {
    itemInfo = itemInfo[0].replace("★ ", "");
  }

  var isWithdrawnBLocked = false;
  var isLevelSpecial = false;
  var isSpecialRarity = false;
  var isSticker = false;
  var isGraffiti = false;
  var isStatTrak = false;
  var isUncraftable = false;
  var isUnusual = false;
  var isStrange = false;
  var isGenuine = false;
  var isFestivized = false;
  var isVintage = false;
  var isAustralium = false;

  // TODO find a way to detect painted items, already have done it in the past but lost the code
  var isPainted = false;

  csgoFloats.forEach((float) => {
    if (itemName.includes(float)) {
      currentItem.setAttribute("data-float", float);
    }
  });

  isSpecialRarities.forEach((rarity) => {
    if (itemName.includes(rarity)) {
      if (rarity === "StatTrak™") {
        isStatTrak = true;
        currentItem.setAttribute("data-statTrak", true);
        currentItem.classList.add("statTrak");
      } else if (rarity === "★") {
        currentItem.classList.add("specialRarity");
        isSpecialRarity = true;
      }
      currentItem.setAttribute("data-rarity", rarity);
    }
  });

  isLevelSpecials.forEach((level) => {
    if (itemName.includes(level)) {
      isLevelSpecial = true;
      currentItem.setAttribute("data-level", level.replace("Level:", ""));
    }
  });

  if (itemName.includes("Sticker")) {
    currentItem.setAttribute("data-sticker", true);
    isSticker = true;
  } else if (itemName.includes("Graffiti")) {
    currentItem.setAttribute("data-graffiti", true);
    isGraffiti = true;
  } else if (itemName.includes("Unusual")) {
    currentItem.classList.add("unusual");
    currentItem.setAttribute("data-unusual", true);
    isUnusual = true;
  } else if (
    itemName.includes("Strange") &&
    !itemName.includes("Strange Part")
  ) {
    currentItem.classList.add("strange");
    currentItem.setAttribute("data-strange", true);
    isStrange = true;
  } else if (itemName.includes("Genuine")) {
    currentItem.classList.add("genuine");
    currentItem.setAttribute("data-genuine", true);
    isGenuine = true;
  } else if (itemName.includes("Uncraftable")) {
    currentItem.classList.add("uncraftable");
    currentItem.setAttribute("data-uncraftable", true);
    isUncraftable = true;
  } else if (itemName.includes("Festivized")) {
    currentItem.classList.add("festivized");
    currentItem.setAttribute("data-festivized", true);
    isFestivized = true;
  } else if (itemName.includes("Vintage")) {
    currentItem.classList.add("vintage");
    currentItem.setAttribute("data-vintage", true);
    isVintage = true;
  } else if (itemName.includes("Australium")) {
    currentItem.classList.add("australium");
    currentItem.setAttribute("data-australium", true);
    isAustralium = true;
  }

  if (
    currentItem.querySelector("span[style='color: yellow ']") !== null ||
    currentItem.querySelector("span[style='color: yellow;']") !== null ||
    currentItem.querySelector("span[style='color: yellow; ']") !== null
  ) {
    isWithdrawnBLocked = true;
  }

  // add class to style the items
  if (isWithdrawnBLocked) {
    currentItem.classList.add("withdrawn-blocked");
  } else if (isPainted) {
    currentItem.classList.add("painted");
  }
}

const FastSellButtonParent = document.createElement("li");
FastSellButtonParent.classList.add("nav-item");
// insert before the site inventory button parent
document
  .querySelector("#page-heading > ul")
  .insertBefore(FastSellButtonParent, inventoryButton.parentElement);

const FastSellButton = document.createElement("button");
// TODO add a function to sell all items in the current tab and remove the disabled class
FastSellButton.classList.add("nav-link", "disabled");
FastSellButton.textContent = "Fast Sell";
FastSellButtonParent.appendChild(FastSellButton);

const ExtensionsInfo = document.createElement("div");
ExtensionsInfo.classList.add("info");
ExtensionsInfo.textContent = "🛈";
ExtensionsInfo.title =
  "This extension is a work in progress, expect bugs and missing features. <br/> Keybinds: <br/> Shift + Enter = Sell current Item <br> Shift + W = Withdrawn current item <br> Enter = Confirm sale";
document.querySelector("#page-heading > h1").appendChild(ExtensionsInfo);
document.querySelector("#page-heading > h1").classList.add("d-flex");
