//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//def const DOMS

const utmSource =
  "&utm_source=https://github.com/LucasHenriqueDiniz&utm_medium=Mannco-Store-Enhancer";

const currencyMap = {
  USD: { number: 1, translation: "Dollar (United States)" },
  GBP: { number: 2, translation: "Pound (United Kingdom)" },
  EUR: { number: 3, translation: "Euro (European Union)" },
  RUB: { number: 5, translation: "Ruble (Russia)" },
  CNY: { number: 23, translation: "Renminbi (China)" },
  PLN: { number: 6, translation: "Złoty (Poland)" },
  PHP: { number: 12, translation: "Peso (Philippines)" },
  BRL: { number: 7, translation: "Real (Brazil)" },
  CAD: { number: 20, translation: "Dollar (Canada)" },
  AUD: { number: 21, translation: "Dollar (Australia)" },
  HKD: { number: 29, translation: "Dollar (Hong Kong)" },
};

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

console.log("ItemPageEnhancer");

function ItemPageEnhancer(config) {
  console.log(config);

  //functions
  /*function createSelector(text, options, defaultValue, appendElement, onChange) {
        // Create a div container
        const container = document.createElement('div');
      
        // Create a label element for the text
        const labelElement = document.createElement('label');
        labelElement.textContent = text;
        container.appendChild(labelElement);
      
        // Get the select element
        const selectElement = document.createElement('select');
        selectElement.classList.add('selector-element');
      
        // Create an option element for each option
        options.forEach(option => {
          const optionElement = document.createElement('option');
          optionElement.value = option;
          optionElement.text = option;
          selectElement.appendChild(optionElement);
        });
      
        // Set the default value
        selectElement.value = defaultValue;
      
        // Add event listener for value change
        selectElement.addEventListener('change', onChange);
      
        // Append the select element to the container
        container.appendChild(selectElement);
      
        // Append the container to the appendElement
        appendElement.appendChild(container);
    }*/
  function calcularFees(valorOriginal) {
    // Validar se o valor original é um número
    if (isNaN(valorOriginal)) {
      console.error("Valor original inválido: " + valorOriginal);
      return 0;
    }

    // Obter o valor das fees de acordo com a tabela
    const fees =
      valorOriginal === 0.01 || valorOriginal === 0.02
        ? 0
        : valorOriginal === 0.03
        ? 0.01
        : valorOriginal === 0.1 || valorOriginal === 0.11
        ? 0.02
        : valorOriginal * 0.05;

    return fees;
  }

  function checkLucro(valorVenda) {
    return (sellValue - calcularFees(sellValue) - valorVenda).toFixed(2);
  }

  //copy info to clipboard easily
  function copyToClipboard(texto) {
    // Verifies if the Clipboard API is available in the browser
    if (!navigator.clipboard) {
      console.error("The Clipboard API is not supported in this browser.");
      return;
    }
    // Copies the text to the clipboard
    navigator.clipboard
      .writeText(texto)
      .then(() => {
        Type.alert.success(texto + clipBoardSucessToast, "");
      })
      .catch((error) => {
        Type.alert.error(texto + clipBoardErrorToast, "");
      });
  }

  // misc fixes to improve user experience
  document.querySelector("#content > div:nth-child(3)").classList.add("mt-1");
  document.querySelector(".placingtext").remove();
  document
    .querySelector("div.nologinbo > div.d-grid.gap-2.d-md-flex")
    .classList.add("simetricalPlease");
  document.querySelector(
    "div.nologinbo > div.d-grid.gap-2.d-md-flex"
  ).style.gridColumn = "span 2";
  document.querySelector("div.nologinbo > div:nth-child(2)").style.gridColumn =
    "span 2";

  const itemPriceInput = document.querySelector("#cashout-priceach");
  const quantityInput = document.querySelector("div.form-group > input");

  const buyOrderCard = document.querySelector("#content > div:nth-child(4)");
  buyOrderCard.classList.add("mt-1");

  const buyOrderInputZone = document.querySelector(
    "#content > div:nth-child(4) > div > div.col-xl-4.col-lg-7.pe-0 > div"
  );

  const buttonsContainer = document.createElement("div");
  const humanConfirm =
    document.querySelector("#success-icon > circle") !== null;
  buttonsContainer.classList.add("simetricalPlease");
  buyOrderInputZone.appendChild(buttonsContainer);

  const moneyAvaible = parseFloat(
    document
      .querySelector("#account-dropdown > div > span.account-balance.ecurrency")
      .textContent.replace(/[^\d.,-]/g, "")
      .trim()
  );
  const sellValue =
    parseFloat(
      document
        .querySelector(".card-body .important-text > span")
        .textContent.replace(/[^\d.,-]/g, "")
        .trim()
    ) || 0;
  const firstSellingItems = document.querySelector("#transacContent").children;

  let highestBuyOrder =
    parseFloat(
      document
        .querySelector("table > tbody > tr:nth-child(2) > td:nth-child(1)")
        .textContent.replace(/[^\d.,-]/g, "")
        .trim()
    ) || 0;

  const quantidadeBuyOrders =
    document.querySelector("table > tbody").childElementCount - 1 || 0;

  const itemName = document
    .querySelector(".item-info__type")
    .textContent.trim();

  //TextLater
  const JustOneCentButtonTextContentEN = "Boost Order";
  const JustOneCentButtonTitleEN =
    "Create a buy order using the (highest buy order value + 0.01)";

  const matchingBuyOrderTextContent = "Match BuyOrder";
  const matchingBuyOrderTitle =
    "Creates a matching buy order with the highest price right now";

  const justOneCentTextContent = "Just One Cent";
  const justOneCentTitle = "creates a buy order for 0.01 cents";

  const backToTopButtonTitleEN = "go back to the top of the page";

  const clipBoardSucessToast = "copied to your clipboard";
  const clipBoardErrorToast = "was not copied to your clipboard";
  const clipBoardTitle = "Click to copy to your clipboard";

  const FeesCalculatorTitle =
    "The profit is calculated by [(fees - BuyValue) - SellValue]";
  const FeesCalculatorText = "Profit";

  const afterFeesMessage = "Profit: ";

  var appID = window.location.href.match(/(?<=\/)[0-9]{3,6}/g);
  if (appID != 440 && appID != 730 && appID != 252490 && appID != 570) {
    var dt = document.querySelectorAll("dt");
    if (dt[dt.length - 1].textContent === "SKU") {
      appID = 440;
      console.log(appID);
    } else if (dt[dt.length - 2].textContent === "Hero") {
      appID = 570;
      console.log(appID);
    } else if (dt.length === 2) {
      appID = 252490;
      console.log("lenght = 2 - appID = " + appID);
    } else if (dt.length === 4) {
      appID = 730;
      console.log(appID);
    } else {
      console.log("SKU NOT FOUND");
      appID = null;
    }
  }

  if (config.enableItemPageEnhancer) {
    if (config.removeGlobalAlert) {
      document.querySelectorAll(".global-alert").forEach((e) => e.remove());
    }
    //enableBoostOrderButton
    if (config.enableBoostOrderButton) {
      function plusOneCent() {
        if (
          config.boostOrderCustomQuantity === 0 ||
          config.boostOrderCustomQuantity === "" ||
          config.boostOrderCustomQuantity === null ||
          config.boostOrderCustomQuantity === undefined
        ) {
          quantidade =
            highestBuyOrder < 0.02
              ? 20
              : highestBuyOrder < 0.1
              ? 10
              : highestBuyOrder < 1
              ? 5
              : 1;
        } else {
          quantidade = config.boostOrderCustomQuantity;
        }

        switch (config.automaticallyAjustBuyOrderQuantityWithAvaibleMoney) {
          case true:
            // Verifica se é necessário diminuir a quantidade
            if ((highestBuyOrder + 0.01) * quantidade > moneyAvaible) {
              quantidade = Math.floor(moneyAvaible / (highestBuyOrder + 0.01));
            }
            break;
          case false:
            break;
          default:
            console.log(
              "error with ajustWithAvaibleMoney, value:",
              ajustWithAvaibleMoney
            );
        }

        quantityInput.value = quantidade;
        itemPriceInput.value = (
          highestBuyOrder + config.boostOrderCustomValue
        ).toFixed(2);
        Item.addBuyOrder();

        switch (config.autoRefreshPageAfterSetNewBuyOrder) {
          case true:
            setTimeout(function () {
              window.location.reload();
            }, 750);
            break;
          case false:
            break;
          default:
            console.log(
              "error with the refreshAfter button",
              RefreshAfterButton
            );
        }
      }

      var centOrder = document.createElement("button");
      centOrder.className = "btn btn-primary AutoOrder";
      centOrder.textContent = JustOneCentButtonTextContentEN;
      centOrder.title = JustOneCentButtonTitleEN;
      buttonsContainer.appendChild(centOrder);
      centOrder.addEventListener("click", plusOneCent);
    }

    if (config.removeItemDetailsTitle) {
      document.querySelector("#content > div:nth-child(1) > h1").remove();
    }

    if (config.removeBreadcrumb) {
      document.querySelector("#content > div:nth-child(1) > nav").remove();
    }
    if (config.removeItemDetailsTitle || config.removeBreadcrumb) {
      document
        .querySelector("#content > div.row > div.col-lg-8 > div")
        .classList.add("mt-0");
      document
        .querySelector("#content > div.row > div.col-lg-4 > div")
        .classList.add("mt-0");
      document
        .querySelector(
          "#content > div.row > div.col-lg-4 > div > div.card-body.border-top"
        )
        .classList.add("pt-1");
    }

    //enableJustOneCentButton
    if (config.enableJustOneCentButton) {
      function createOneCentOrder() {
        if (config.justOneCentCustomQuantity === 0) {
          quantidade = 25;
        } else {
          quantidade = config.justOneCentCustomQuantity;
        }

        switch (config.automaticallyAjustBuyOrderQuantityWithAvaibleMoney) {
          case true:
            // Verifica se é necessário diminuir a quantidade
            if (0.01 * quantidade > moneyAvaible) {
              quantidade = Math.floor(moneyAvaible / 0.01);
            }
            break;
          case false:
            break;
          default:
            console.log(
              "error with ajustWithAvaibleMoney, value:",
              ajustWithAvaibleMoney
            );
        }

        quantityInput.value = quantidade;
        itemPriceInput.value = 0.01;
        Item.addBuyOrder();

        switch (config.autoRefreshPageAfterSetNewBuyOrder) {
          case true:
            setTimeout(function () {
              window.location.reload();
            }, 750);
            break;
          case false:
            break;
          default:
            console.log(
              "error with the refreshAfter button",
              RefreshAfterButton
            );
        }
      }

      var justOneCent = document.createElement("button");
      justOneCent.className = "btn btn-primary justOneCent";
      justOneCent.textContent = justOneCentTextContent;
      justOneCent.title = justOneCentTitle;
      buttonsContainer.appendChild(justOneCent);
      justOneCent.addEventListener("click", createOneCentOrder);

      /*
            LATER
        activeJustOneCentOnKeyPress: false,
        customKeyPressJustOneCent: '',
            */
    }
    //enableMatchingBuyOrderButton
    if (config.enableMatchingBuyOrderButton) {
      function createMatchingBuyOrder() {
        if (config.matchingBuyOrderCustomQuantity === 0) {
          quantidade =
            highestBuyOrder < 0.02
              ? 20
              : highestBuyOrder < 0.1
              ? 10
              : highestBuyOrder < 1
              ? 5
              : 1;
        } else {
          quantidade = config.matchingBuyOrderCustomQuantity;
        }

        switch (config.automaticallyAjustBuyOrderQuantityWithAvaibleMoney) {
          case true:
            // Verifica se é necessário diminuir a quantidade
            if (highestBuyOrder * quantidade > moneyAvaible) {
              quantidade = Math.floor(moneyAvaible / highestBuyOrder);
            }
            break;
          case false:
            break;
          default:
            console.log(
              "error with ajustWithAvaibleMoney, value:",
              ajustWithAvaibleMoney
            );
        }

        quantityInput.value = quantidade;
        itemPriceInput.value = highestBuyOrder.toFixed(2);

        Item.addBuyOrder();

        switch (config.autoRefreshPageAfterSetNewBuyOrder) {
          case true:
            setTimeout(function () {
              window.location.reload();
            }, 750);
            break;
          case false:
            break;
          default:
            console.log(
              "error with the refreshAfter button",
              RefreshAfterButton
            );
        }
      }

      var matchingBuyOrder = document.createElement("button");
      matchingBuyOrder.className = "btn btn-primary matchingBuyOrder";
      matchingBuyOrder.textContent = matchingBuyOrderTextContent;
      matchingBuyOrder.title = matchingBuyOrderTitle;
      buttonsContainer.appendChild(matchingBuyOrder);
      matchingBuyOrder.addEventListener("click", createMatchingBuyOrder);

      /*
            LATER
                activeMatchingBuyOrderOnKeyPress: false,
                customKeyPressMatchingBuyOrder: '',
            */
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //General Pages Configs

    //Back to the top button
    if (config.itemPageGoToTopOfPage) {
      var backToTopButton = document.createElement("button");
      backToTopButton.title = backToTopButtonTitleEN;
      backToTopButton.className = "back-to-top";

      var iconElement = document.createElement("i");
      iconElement.className = "fa fa-lg fa-arrow-up";
      backToTopButton.appendChild(iconElement);

      document.body.appendChild(backToTopButton);

      backToTopButton.addEventListener("click", function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });

      window.addEventListener("scroll", function () {
        // Calcula a posição atual da rolagem em relação à altura total da página
        const scrollPosition = window.scrollY;
        const totalHeight = document.body.clientHeight - window.innerHeight;
        const scrollPercentage = (scrollPosition / totalHeight) * 100;

        // Atualiza a classe do botão com base na posição atual da rolagem
        if (scrollPercentage > 75) {
          backToTopButton.classList.add("show");
        } else {
          backToTopButton.classList.remove("show");
        }
      });
    }
    //Adds button to view skin on swap.gg to inspec online
    if (config.openCsgoSkinInSwap) {
      if (appID == 730) {
        for (let i = 0; i < firstSellingItems.length; i++) {
          let inspectLink =
            firstSellingItems[
              i
            ].lastElementChild.lastElementChild.previousElementSibling.getAttribute(
              "href"
            );
          let button = document.createElement("button");
          button.textContent = "View on swap.gg";
          button.className = "btn btn-sm btn-secondary";
          button.onclick = function () {
            window.open(
              `https://market.swap.gg/screenshot?inspectLink=${inspectLink}`
            );
          };
          firstSellingItems[i]
            .querySelector(".table-items__actions")
            .appendChild(button);
        }
      }
    }
    //Add button on item name to copy to clipboard using the copyToClipboard function
    if (config.buyOrdersCopyItemNameToClipboard) {
      var itemNameElement = document.querySelector(
        "#content > div.row > div.col-lg-8 > div > div > div.item-info__aside > h2"
      );

      itemNameElement.style.display = "flex";
      itemNameElement.style.flexDirection = "row";

      const clipboard = document.createElement("i");
      clipboard.className = "fa fa-clipboard-list clipboard";
      if (itemNameElement.children.length != 1) {
      }
      itemNameElement.appendChild(clipboard);
      itemNameElement.title = clipBoardTitle;

      itemNameElement.addEventListener("click", function () {
        copyToClipboard(itemName);
      });
    }
    //Add button on item price to copy to clipboard using the copyToClipboard function
    if (config.itemPageCopyItemPriceToClipboard) {
      clipboard = document.createElement("i");
      clipboard.className = "fa fa-clipboard-list clipboard";
      document
        .querySelector("#content span.important-text")
        .appendChild(clipboard);
      document.querySelector("#content span.important-text").title =
        clipBoardTitle;

      document
        .querySelector("#content span.important-text")
        .addEventListener("click", function () {
          copyToClipboard(sellValue);
        });
    }
    //adds a new row in the buy orders table showing the profit for each current buy orders
    if (config.buyOrdersEnableProfitCalculator) {
      var ProfitLabel = document.createElement("th");
      ProfitLabel.scope = "col";
      ProfitLabel.title = FeesCalculatorTitle;
      ProfitLabel.textContent = FeesCalculatorText;
      document
        .querySelector("#content > div > div > div > div > table > tbody > tr")
        .appendChild(ProfitLabel);

      for (var i = 1; quantidadeBuyOrders >= i; i++) {
        const currentRow = document.querySelector(
          `table > tbody > tr:nth-child(${i})`
        );

        let currentBuyOrderRaw =
          currentRow.firstElementChild.textContent.replace(/[^\d.,-]/g, "");

        currentRow.classList.add("profitHover");

        let profitValue = checkLucro(currentBuyOrderRaw);

        var profitLabel = document.createElement("td");
        profitLabel.textContent = "$" + profitValue;
        if (profitLabel.textContent <= 0) {
          profitLabel.className = "red-txt";
        } else {
          profitLabel.className = "green-txt";
        }

        document
          .querySelector("div > table > tbody")
          .children[i].appendChild(profitLabel);

        profitLabel.parentElement.addEventListener("click", function (event) {
          try {
            itemPriceInput.value =
              event.currentTarget.firstElementChild.textContent.replace(
                /[^\d.,-]/g,
                ""
              );
            if (quantityInput.value === "") {
              quantityInput.value = 1;
            }
          } catch (err) {
            console.log("error with profitcalculator", err);
          }
        });
      }
    }
    // remove the graph chart for the item sales
    if (config.itemPageRemoveSalesGraph) {
      document.querySelector(".card-body.card-chart").parentElement.remove();
    }
    //add a button to hide the item graph chart
    if (
      config.itemPageMinimizeSalesGraphButton &&
      !config.itemPageRemoveSalesGraph
    ) {
      const h1 = document.querySelector(
        "#content > div:nth-child(3) > div > h3"
      );
      const graphCard = document.querySelector(".card-body.card-chart");

      // Create the new div and its contents
      const div = document.createElement("div");
      div.style.display = "flex";
      div.style.justifyContent = "space-between";
      div.style.alignItems = "center";

      const newH1 = document.createElement("h1");
      newH1.textContent = h1.textContent;
      newH1.style.fontSize = "1rem";
      div.appendChild(newH1);

      const hideGraphButton = document.createElement("button");
      hideGraphButton.textContent = "/\\";
      hideGraphButton.classList.add("btn", "btn-secondary");
      div.appendChild(hideGraphButton);

      graphCard.style.height = "25px";
      hideGraphButton.setAttribute("value", false);

      // Replace the h1 with the new div
      h1.parentNode.replaceChild(div, h1);

      // Handle button clicks for graph minimization
      hideGraphButton.addEventListener("click", function (event) {
        if (hideGraphButton.getAttribute("value") === "true") {
          graphCard.style.height = "25px";
          hideGraphButton.textContent = "/\\";
          hideGraphButton.setAttribute("value", false);
        } else {
          graphCard.style.height = "auto";
          hideGraphButton.textContent = "\\/";
          hideGraphButton.setAttribute("value", true);
        }
      });
    }
    //chenges buyorder background depending if you have hghest buy order
    if (config.changeBuyOrdersBackgroundIfNotHighestBuyOrder) {
      try {
        if (sellValue === highestBuyOrder) {
          buyOrderCard.style.backgroundColor = String(
            config.buyOrdersBackgroundColorTrue
          );
        } else {
          buyOrderCard.style.backgroundColor = String(
            config.buyOrdersBackgroundColorFalse
          );
        }
      } catch (err) {
        console.log(err, "error with bg bgcolor");
      }
    }
    //chenges buyorder border depending if you have hghest buy order
    if (config.changeBuyOrdersBorderIfNotHighestBuyOrder) {
      try {
        buyOrderCard.style.borderStyle = config.buyOrdersBorderStyle;
        if (sellValue === highestBuyOrder) {
          buyOrderCard.style.backgroundColor = String(
            config.buyOrdersBorderColorTrue
          );
        } else {
          buyOrderCard.style.backgroundColor = String(
            config.buyOrdersBorderColorFalse
          );
        }
      } catch (err) {
        console.log(err, "error with bg border");
      }
    }
    // FIXME: This feature is not working
    if (config.buyOrdersShowCurrentFees && false) {
      function updateFeesElement() {
        var boxValue = itemPriceInput.value;
        var quantityValue = quantityInput.value;

        if (quantityValue === "") {
          quantityValue = 1;
        }

        afterFeesValue =
          "$" + (checkLucro(boxValue) * quantityValue).toFixed(2);

        document.querySelector("#afterFeesValue").textContent =
          afterFeesMessage + afterFeesValue;
      }

      itemPriceInput.addEventListener("input", updateFeesElement);
      quantityInput.addEventListener("input", updateFeesElement);

      var afterFeesElement = document.createElement("div");
      afterFeesElement.textContent = afterFeesMessage + "$0.00";
      afterFeesElement.className = "fees-calculator";
      afterFeesElement.id = "afterFeesValue";
      itemPriceInput.parentNode.appendChild(afterFeesElement);

      document.querySelector(
        "div.nologinbo > div.input-group.mb-3"
      ).style.backgroundColor = "#202334";
      document.querySelector(
        "div.nologinbo > div.input-group.mb-3"
      ).style.borderRadius = "1rem";
      document.querySelector(
        "div.nologinbo > div.input-group.mb-3"
      ).style.height = "80px";

      if (itemPriceInput.value != "") {
        updateFeesElement();
      }
    }

    // adds a yellow border to on hold items and green to painted
    if (true) {
      for (let i = 0; i < firstSellingItems.length; i++) {
        const currentItem = firstSellingItems[i];
        const isPainted =
          currentItem.firstElementChild.firstElementChild.title === "No color"
            ? false
            : true;
        const isOnHold =
          firstSellingItems[i].querySelector(".item-magnifier").parentElement
            .firstElementChild.style.color != "yellow"
            ? false
            : true;

        if (isOnHold) {
          currentItem.style.border = "1px dashed yellow";
        } else if (isPainted) {
          currentItem.style.border = "1px dashed green";
        }
      }
    }

    /* Dont Work.
        if(config.createSelectorForItemsList) {
            let options = [10, 25, 50, 100, 150];
            let appendElement = document.querySelector("#content > div:nth-child(5) > div > h3");
            
            function handleSelectorChange() {
              const selectedValue = this.value;
              console.log("Selected value:", selectedValue);
              Type.createPagination(selectedValue, 1, 'itemListPagination','',9999); return false;
            }
            
            createSelector("Select an option:", options, 50, appendElement, handleSelectorChange);
        }*/
  }
}

waitForSettings(ItemPageEnhancer);
