function appendIcon(iconName, appendElement) {
  var createIcon = document.createElement("i");
  createIcon.className = iconName;
  createIcon.style.display = "flex";
  createIcon.style.justifyContent = "center";
  createIcon.style.alignItems = "center";
  appendElement.appendChild(createIcon);
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "executeFunction") {
    // Call the website function here
    Type.alert.success("mensagem", "");
  }
});

const startProfileEnhancer = () => {
  const config = {
    enableProfileEnhancer: true,
    enableRemoveAllBuyOrderButton: true,
    enableExportBuyOrderButton: true,
    saveAllBuyOrders: false,
    enableExportTransactionHistoryButton: false,
    profileSmallFixes: false,
    increaseBoxes: true,
    addButtonsToMinimize: true,
  };

  chrome.storage.sync.get(Object.keys(config), (result) => {
    Object.keys(config).forEach((key) => {
      config[key] = result[key] !== undefined ? result[key] : config[key];
    });

    console.log("enableProfileEnhancer:", config.enableProfileEnhancer);

    if (config.enableProfileEnhancer) {
      try {
        document.querySelector(
          "#tab-dashboard > div:nth-child(1) > div:nth-child(2) > div > div > div.row > div:nth-child(1)"
        ).className = "col-4";
        document.querySelector(
          "#tab-dashboard > div:nth-child(1) > div:nth-child(2) > div > div > div.row > div.col-6.shelf-space"
        ).className = "shelf-space col-4";
      } catch (err) {
        console.log(err);
      }

      const totalItemsValue = parseFloat(
        document
          .querySelector(
            "#tab-dashboard > div:nth-child(1) > div:nth-child(2) > div > div > div.row > div:nth-child(1) > span.important-text.ecurrency"
          )
          .textContent.replace(/[^\d.,-]/g, "")
          .trim()
      );

      function calculateFees(amount) {
        return (amount * 5) / 100;
      }

      afterFeesDiv = document.createElement("div");
      afterFeesDiv.className = "col-4";
      document
        .querySelector(
          "#tab-dashboard > div:nth-child(1) > div:nth-child(2) > div > div > div.row > div:nth-child(1)"
        )
        .insertAdjacentElement("afterend", afterFeesDiv);

      afterFeesValue = document.createElement("div");
      afterFeesValue.className = "important-text";
      afterFeesValue.textContent =
        "$" + (totalItemsValue - calculateFees(totalItemsValue)).toFixed(2);
      afterFeesDiv.appendChild(afterFeesValue);

      afterFeesDesc = document.createElement("div");
      afterFeesDesc.className = "small-text d-block";
      afterFeesDesc.textContent = "Item Value after fees";
      afterFeesDiv.appendChild(afterFeesDesc);

      // Functions
      function minimize(event) {
        const button = event.target;
        const parentElement =
          button.parentNode.parentNode.parentNode.parentNode;

        if (button.value === "true") {
          parentElement.classList.add("minimize");
          button.setAttribute("value", "false");
        } else {
          parentElement.classList.remove("minimize");
          button.setAttribute("value", "true");
        }
        console.log(parentElement);
      }

      function close(event) {
        const button = event.target;
        const parentElement =
          button.parentNode.parentNode.parentNode.parentNode;
        if (button.value === "false") {
          parentElement.classList.add("closed");
          button.setAttribute("value", "true");
        } else {
          parentElement.classList.remove("closed");
          button.setAttribute("value", "false");
        }
        console.log(parentElement);
      }

      function DownloadTransactions() {
        console.log("DownloadTransactions");
      }

      function RemoveAllBuyOrders() {
        console.log("RemoveAllBuyOrders");
      }

      function DownloadBuyOrders() {
        const table = document.querySelector(
          "#tab-history > div:nth-child(2) > div:nth-child(2) > div > div > div.table-responsive.large-cell > table"
        );
        const data = Array.from(table.rows).map((row) =>
          Array.from(row.cells).map((cell) => cell.innerText)
        );
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.aoa_to_sheet(data);
        XLSX.utils.book_append_sheet(workbook, worksheet, "Table Data");
        XLSX.writeFile(workbook, "BuyOrders.xlsx");
        Type.alert.success("Excel Downloaded: Check your downloads", "");
      }

      // Create Buttons
      const BuyOrderCardHead = document.querySelector(
        "#tab-history > div:nth-child(2) > div:nth-child(2) > div > div > div.card-head"
      );

      // Transactions
      const DownloadTransaction = document.createElement("button");
      DownloadTransaction.className =
        "btn btn-primary w-lg-100 float-right export";
      document
        .querySelector(
          "#tab-history > div:nth-child(1) > div:nth-child(2) > div > div > div.card-head"
        )
        .appendChild(DownloadTransaction);
      DownloadTransaction.addEventListener("click", () => {
        var ValorColocado = 0;
        iziToast.info({
          timeout: 15000,
          overlay: true,
          displayMode: "once",
          id: "inputs",
          zindex: 999,
          title: "How many pages do you want to download?",
          message: "1 page = 10 items",
          position: "center",
          drag: false,
          inputs: [
            [
              '<input type="number">',
              "keyup",
              function (instance, toast, input, e) {
                ValorColocado = parseInt(input.value);
              },
            ],
          ],
          buttons: [
            [
              "<button><b>Confirm</b></button>",
              function (instance, toast) {
                console.log(ValorColocado);
                DownloadTransc(ValorColocado);
                instance.hide({ transitionOut: "fadeOut" }, toast, "button");
              },
              true,
            ],
          ],
          onClosing: function (instance, toast, closedBy) {
            console.info("Closing | closedBy: " + closedBy);
          },
        });

        const exportIconT = document.createElement("i");
        exportIconT.className = "fas fa-download";
        DownloadTransaction.appendChild(exportIconT);

        const buttonText = document.createElement("text");
        buttonText.textContent = "Export";
        DownloadTransaction.appendChild(buttonText);
      });

      // Buy Orders
      if (config.enableRemoveAllBuyOrderButton) {
        // Remove Buy Orders
        const removeBuyOrders = document.createElement("button");
        removeBuyOrders.textContent = "Remove All Buy Orders";
        removeBuyOrders.className =
          "btn btn-danger w-lg-100 float-right export";
        BuyOrderCardHead.appendChild(removeBuyOrders);
        removeBuyOrders.addEventListener("click", () => {
          iziToast.question({
            timeout: 10000,
            transitionIn: "bounceInUp",
            transitionOut: "bounceInDown",
            layout: 1,
            close: false,
            overlay: true,
            displayMode: "once",
            id: "question",
            backgroundColor: "red",
            iconColor: "white",
            titleSize: "25",
            titleColor: "white",
            messageSize: "25",
            zindex: 999,
            title: "Are you sure you want to remove all Buy Orders?",
            close: true,
            closeOnEscape: true,
            message: "",
            position: "center",
            buttons: [
              [
                "<button><b>YES</b></button>",
                function (instance, toast) {
                  RemoveAllBuyOrders();
                  instance.hide({ transitionOut: "fadeOut" }, toast, "button");
                },
                true,
              ],
              [
                "<button>NO</button>",
                function (instance, toast) {
                  instance.hide({ transitionOut: "fadeOut" }, toast, "button");
                },
              ],
            ],
            onClosing: function (instance, toast, closedBy) {
              console.info("Closing | closedBy: " + closedBy);
            },
            onClosed: function (instance, toast, closedBy) {
              console.info("Closed | closedBy: " + closedBy);
            },
          });
        });
      }

      // Download Buy Orders
      if (config.enableExportBuyOrderButton) {
        const DowloadBuyOrder = document.createElement("button");
        DowloadBuyOrder.className =
          "btn btn-primary w-lg-100 float-right export";
        BuyOrderCardHead.appendChild(DowloadBuyOrder);
        DowloadBuyOrder.addEventListener("click", DownloadBuyOrders);

        const exportIconDB = document.createElement("i");
        exportIconDB.className = "fas fa-download";
        DowloadBuyOrder.appendChild(exportIconDB);

        const buttonTextBO = document.createElement("text");
        buttonTextBO.textContent = "Export";
        DowloadBuyOrder.appendChild(buttonTextBO);
      }

      document.querySelector("h3 > span").style.letterSpacing = "0px";

      // Minimize Buttons
      if (config.increaseBoxes) {
        document.querySelectorAll("div.col-xl-6.d-flex").forEach((element) => {
          try {
            if (element.querySelector(".card-head")) {
              var current = element.querySelector(".card-head");
              const minimizeButton = document.createElement("button");
              minimizeButton.value = true;
              minimizeButton.className = "minimizeBtn controls";
              current.appendChild(minimizeButton);
              appendIcon("fas fa-window-minimize", minimizeButton);
              minimizeButton.addEventListener("click", minimize);

              const closeButton = document.createElement("button");
              closeButton.value = true;
              closeButton.className = "closeBtn controls";
              current.appendChild(closeButton);
              appendIcon("fas fa-window-close", closeButton);
              closeButton.addEventListener("click", close);

              current.style.display = "flex";
              current.style.flexDirection = "row";
              current.style.alignItems = "center";
              current.classList.add("trans");
            } else {
              const closeButton = document.createElement("button");
              closeButton.value = true;
              closeButton.className = "closeBtn controls";
              element.querySelector("div > h3").appendChild(closeButton);
              appendIcon("fas fa-window-close", closeButton);
              closeButton.addEventListener("click", close);

              const minimizeButton = document.createElement("button");
              minimizeButton.value = true;
              minimizeButton.className = "minimizeBtn controls";
              element.querySelector("div > h3").appendChild(minimizeButton);
              appendIcon("fas fa-window-minimize", minimizeButton);
              minimizeButton.addEventListener("click", minimize);
            }
          } catch (err) {
            console.log(err);
          }

          element.className = "col-xl-12 d-flex trans";
        });
      }
    }
  });
};

startProfileEnhancer();

try {
  Type.alert.success("Mannco.Store Enhancer", "");
} catch (err) {
  console.log(err), "hell";
}
