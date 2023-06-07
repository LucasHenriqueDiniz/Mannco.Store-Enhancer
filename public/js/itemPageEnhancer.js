//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//def const DOMS

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

function ItemPageEnhancer(config) {
    console.log(config)

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
        // Verificar se o valor original é um número
        if (typeof valorOriginal !== 'number') {
            return 0;
        }

        // Calcular o valor das fees
        let fees;
        if (valorOriginal < 0.11) {
            fees = Math.floor(valorOriginal * 100) / 100; // Arredondar para duas casas decimais para valores menores que 0.11
        } else {
            fees = valorOriginal * 0.05; // Substitua 0.05 pela taxa correta para valores maiores ou iguais a 0.11
        }
        return parseFloat(fees.toFixed(2));
    }

    function checkLucro(valorVenda) {
        return (sellValue - calcularFees(sellValue) - valorVenda).toFixed(2)
    }
    //copy info to clipboard easily
    function copyToClipboard(texto) {
        // Verifies if the Clipboard API is available in the browser
        if (!navigator.clipboard) {
            console.error('The Clipboard API is not supported in this browser.');
            return;
        }
        // Copies the text to the clipboard
        navigator.clipboard.writeText(texto)
            .then(() => {
                Type.alert.success(texto + clipBoardSucessToast, '');
            })
            .catch((error) => {
                Type.alert.error(texto + clipBoardErrorToast, '');
            });
    }
    
    const itemPriceBox = document.querySelector("div.input-group.mb-3 > input");
    const quantityBox = document.querySelector("div.form-group > input")
    const itemPriceBoxBox = document.querySelector("div.col-xl-4.col-lg-7")
    const pageSidebar = document.querySelector("#page-sidebar")
    const itemSidebar = document.querySelector("#page-sidebar .item-sidebar")
    const noLogin = document.querySelector('.nologinbo')
    const buyOrderBackground = document.querySelector("#content > div:nth-child(4) > div")
    var moneyAvaible
    var sellValue

    if (document.querySelector(".card-body .important-text > span").dataset.originalTitle != undefined) {
        sellValue = parseFloat(document.querySelector(".card-body .important-text > span").dataset.originalTitle.replace(/[^\d.,-]/g, "").trim())
    } else {
        sellValue = parseFloat(document.querySelector(".card-body .important-text > span").textContent.replace(/[^\d.,-]/g, "").trim())
    }

    if (document.querySelector('.account-info .account-balance').dataset.originalTitle != undefined) {
        moneyAvaible = parseFloat(document.querySelector('.account-info .account-balance').dataset.originalTitle.replace(/[^\d.,-]/g, "").trim())
    } else {
        moneyAvaible = parseFloat(document.querySelector('.account-info .account-balance').textContent.replace(/[^\d.,-]/g, "").trim())
    }

    let highestBuyOrder = Number(document.querySelector("#content > div:nth-child(4) > div > div > div.col-xl-8.col-lg-5.mt-md-3 > table > tbody > tr:nth-child(2) > td:nth-child(1)").textContent.slice(1))
    if (isNaN(highestBuyOrder)) {
        highestBuyOrder = 0.00
    }

    const quantidadeBuyOrders = document.querySelector("#content > div:nth-child(4) > div > div > div.col-xl-8.col-lg-5.mt-md-3 > table > tbody").childElementCount - 1

    const parentDiv = document.querySelector("#content > div:nth-child(4) > div > div > div.col-xl-4.col-lg-7 > div.input-group.mb-3")
    const firstItemConteiner = document.querySelector("#page-sidebar > div.card.mb-0 > div > div.item-info > ul > li:nth-child(1) > dl > dd").textContent
    const utmSource = '&utm_source=https://github.com/LucasHenriqueDiniz&utm_medium=Mannco-Store-Enhancer'

    const currencyMap = {
        USD: { number: 1, translation: 'Dollar (United States)' },
        GBP: { number: 2, translation: 'Pound (United Kingdom)' },
        EUR: { number: 3, translation: 'Euro (European Union)' },
        RUB: { number: 5, translation: 'Ruble (Russia)' },
        CNY: { number: 23, translation: 'Renminbi (China)' },
        PLN: { number: 6, translation: 'Złoty (Poland)' },
        PHP: { number: 12, translation: 'Peso (Philippines)' },
        BRL: { number: 7, translation: 'Real (Brazil)' },
        CAD: { number: 20, translation: 'Dollar (Canada)' },
        AUD: { number: 21, translation: 'Dollar (Australia)' },
        HKD: { number: 29, translation: 'Dollar (Hong Kong)' }
      };

    const itemName = document.querySelector("#page-sidebar .item-name").textContent.trim()


    //TextLater
    const JustOneCentButtonTextContentEN = "Boost Order";
    const JustOneCentButtonTitleEN = 'Create a buy order using the (highest buy order value + 0.01)';

    const matchingBuyOrderTextContent = 'Match BuyOrder'
    const matchingBuyOrderTitle = 'Creates a matching buy order with the highest price right now'

    const justOneCentTextContent = 'Just One Cent'
    const justOneCentTitle = 'creates a buy order for 0.01 cents'

    const backToTopButtonTitleEN = 'go back to the top of the page'

    const clipBoardSucessToast = 'copied to your clipboard'
    const clipBoardErrorToast = 'was not copied to your clipboard'
    const clipBoardTitle = 'Click to copy to your clipboard'

    const FeesCalculatorTitle = 'The profit is calculated by [(fees - BuyValue) - SellValue]'
    const FeesCalculatorText = "Profit"

    const afterFeesMessage = 'Profit: '

    var appID = window.location.href.match(/(?<=\/)[0-9]{3,6}/g)
    if (appID != 440 && appID != 730 && appID != 252490 && appID != 570) {
        var dt = document.querySelectorAll('dt')
        if (dt[dt.length - 1].textContent === "SKU") {
            appID = 440;
            console.log(appID)
        } else if (dt[dt.length - 2].textContent === "Hero") {
            appID = 570;
            console.log(appID)
        } else if (dt.length === 2) {
            appID = 252490;
            console.log("lenght = 2 - appID = " + appID)
        } else if (dt.length === 4) {
            appID = 730;
            console.log(appID)
        } else {
            console.log("SKU NOT FOUND")
            appID = null;
        }
    }
    //
    if (config.enableItemPageEnhancer) {
        //enableBoostOrderButton
        if (config.enableBoostOrderButton) {
            function plusOneCent() {
                if (config.boostOrderCustomQuantity === 0) {
                    quantidade = (highestBuyOrder < 0.02) ? 20 :
                        (highestBuyOrder < 0.10) ? 10 :
                            (highestBuyOrder < 1) ? 5 : 1;
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
                        console.log('error with ajustWithAvaibleMoney, value:', ajustWithAvaibleMoney)

                }

                quantityBox.value = quantidade
                itemPriceBox.value = (highestBuyOrder + config.boostOrderCustomValue).toFixed(2);
                Item.addBuyOrder()

                switch (config.autoRefreshPageAfterSetNewBuyOrder) {
                    case true:
                        setTimeout(function () {
                            window.location.reload();
                        }, 750);
                        break;
                    case false:
                        break;
                    default:
                        console.log('error with the refreshAfter button', RefreshAfterButton)
                }
            }

            var centOrder = document.createElement("button");
            centOrder.className = "btn btn-primary AutoOrder";
            centOrder.textContent = JustOneCentButtonTextContentEN
            centOrder.title = JustOneCentButtonTitleEN
            noLogin.appendChild(centOrder);
            centOrder.addEventListener("click", plusOneCent)


            /*ADD LATER FUNCTION IN ALL PAGE WITH ALL CUSTOMKEYPRESSES 
            if (config.activeBoostOrderOnKeyPress) {
                config.customKeyPressBoostOrder //Enter
            }*/
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
                        console.log('error with ajustWithAvaibleMoney, value:', ajustWithAvaibleMoney)

                }

                quantityBox.value = quantidade
                itemPriceBox.value = 0.01;
                Item.addBuyOrder()

                switch (config.autoRefreshPageAfterSetNewBuyOrder) {
                    case true:
                        setTimeout(function () {
                            window.location.reload();
                        }, 750);
                        break;
                    case false:
                        break;
                    default:
                        console.log('error with the refreshAfter button', RefreshAfterButton)
                }
            }

            var justOneCent = document.createElement("button");
            justOneCent.className = "btn btn-primary justOneCent";
            justOneCent.textContent = justOneCentTextContent
            justOneCent.title = justOneCentTitle
            noLogin.appendChild(justOneCent);
            justOneCent.addEventListener("click", createOneCentOrder)

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
                    quantidade = (highestBuyOrder < 0.02) ? 20 :
                        (highestBuyOrder < 0.10) ? 10 :
                            (highestBuyOrder < 1) ? 5 : 1;
                } else {
                    quantidade = config.matchingBuyOrderCustomQuantity;
                }

                switch (config.automaticallyAjustBuyOrderQuantityWithAvaibleMoney) {
                    case true:
                        // Verifica se é necessário diminuir a quantidade
                        if ((highestBuyOrder) * quantidade > moneyAvaible) {
                            quantidade = Math.floor(moneyAvaible / (highestBuyOrder));
                        }
                        break;
                    case false:
                        break;
                    default:
                        console.log('error with ajustWithAvaibleMoney, value:', ajustWithAvaibleMoney)

                }

                quantityBox.value = quantidade
                itemPriceBox.value = (highestBuyOrder).toFixed(2);

                Item.addBuyOrder()

                switch (config.autoRefreshPageAfterSetNewBuyOrder) {
                    case true:
                        setTimeout(function () {
                            window.location.reload();
                        }, 750);
                        break;
                    case false:
                        break;
                    default:
                        console.log('error with the refreshAfter button', RefreshAfterButton)
                }
            }

            var matchingBuyOrder = document.createElement("button");
            matchingBuyOrder.className = "btn btn-primary matchingBuyOrder";
            matchingBuyOrder.textContent = matchingBuyOrderTextContent
            matchingBuyOrder.title = matchingBuyOrderTitle
            noLogin.appendChild(matchingBuyOrder);
            matchingBuyOrder.addEventListener("click", createMatchingBuyOrder)

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
            backToTopButton.className = 'back-to-top';

            var iconElement = document.createElement("i");
            iconElement.className = 'fa fa-lg fa-arrow-up';
            backToTopButton.appendChild(iconElement);

            document.body.appendChild(backToTopButton);

            backToTopButton.addEventListener("click", function () {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            });

            window.addEventListener("scroll", function () {
                // Calcula a posição atual da rolagem em relação à altura total da página
                const scrollPosition = window.scrollY;
                const totalHeight = document.body.clientHeight - window.innerHeight;
                const scrollPercentage = scrollPosition / totalHeight * 100;

                // Atualiza a classe do botão com base na posição atual da rolagem
                if (scrollPercentage > 75) {
                    backToTopButton.classList.add("show");
                } else {
                    backToTopButton.classList.remove("show");
                }
            });
        }
        //Minimize Item Info
        if (config.itemPageMinimizeItemInfo) {

            var HideItemInfo = document.createElement('div');
            if (config.itemPageMinimizeItemInfoDefaultStance === 'minimized') {
                itemSidebar.style.height = document.querySelector("#page-sidebar div.card-item").clientHeight + 55 + 'px';
                HideItemInfo.setAttribute('value', 'true');
            } else {
                HideItemInfo.setAttribute('value', 'false');
            }

            HideItemInfo.className = 'hide-item'
            pageSidebar.appendChild(HideItemInfo);

            circole = document.createElement('div')
            circole.className = 'circle-item'
            HideItemInfo.appendChild(circole)

            var iconElement = document.createElement("i");
            iconElement.className = 'fa fa-arrow-down';
            HideItemInfo.appendChild(iconElement);

            HideItemInfo.addEventListener("click", function (event) {
                var contentHeight = document.querySelector("#page-sidebar div.card-item").clientHeight + 55;

                if (event.currentTarget.getAttribute('value') === 'false') {
                    requestAnimationFrame(function () {
                        itemSidebar.style.height = contentHeight + 'px';
                    });
                    event.currentTarget.setAttribute('value', 'true');
                } else {
                    requestAnimationFrame(function () {
                        itemSidebar.style.height = '100%';
                    });
                    event.currentTarget.setAttribute('value', 'false');
                }
            });
        }
        //Adds button to view skin on swap.gg to inspec online
        if (config.openCsgoSkinInSwap) {
            var itemsactions = document.querySelectorAll("td.table-itemsactions.table-items__actions")
            if (appID == 730) {
                for (let i = 0; i < itemsactions.length; i++) {
                    let inspectLink = itemsactions[i].lastElementChild.previousElementSibling.getAttribute('href');
                    let button = document.createElement('button')
                    button.textContent = 'View on swap.gg'
                    button.className = 'btn btn-secondary'
                    button.onclick = function () {
                        window.open(`https://market.swap.gg/screenshot?inspectLink=${inspectLink}`)
                    };
                    itemsactions[i].appendChild(button)
                }
            }
        }
        //Add button on item name to copy to clipboard using the copyToClipboard function
        if (config.buyOrdersCopyItemNameToClipboard) {
            var itemNameElement = document.querySelector("#page-sidebar .item-name")
            
            const clipboard = document.createElement('i');
            clipboard.className = 'fa fa-clipboard-list clipboard';
            if (itemNameElement.children.length != 1) {
                clipboard.style.position = 'absolute'
                clipboard.style.right = '15%'
            }
            itemNameElement.appendChild(clipboard)
            itemNameElement.title = clipBoardTitle

            itemNameElement.addEventListener('click', function () {
                copyToClipboard(itemName);
            });
        }
        //Add button on item price to copy to clipboard using the copyToClipboard function
        if (config.itemPageCopyItemPriceToClipboard) {
            clipboard = document.createElement('i')
            clipboard.className = 'fa fa-clipboard-list clipboard'
            document.querySelector("#content span.important-text").appendChild(clipboard)
            document.querySelector("#content span.important-text").title = clipBoardTitle

            document.querySelector("#content span.important-text").addEventListener('click', function () {
                copyToClipboard(sellValue);
            });
        }
        //adds a new row in the buy orders table showing the profit for each current buy orders
        if (config.buyOrdersEnableProfitCalculator) {
            var ProfitLabel = document.createElement('th')
            ProfitLabel.scope = 'col'
            ProfitLabel.title = FeesCalculatorTitle
            ProfitLabel.textContent = FeesCalculatorText
            document.querySelector("#content > div > div > div > div > table > tbody > tr").appendChild(ProfitLabel)
            for (var i = 1; quantidadeBuyOrders >= i; i++) {
                let currentBuyOrderRaw = document.querySelector(`#content > div:nth-child(4) > div > div > div.col-xl-8.col-lg-5.mt-md-3 > table > tbody > tr:nth-child(${i + 1}) > td:nth-child(1)`);
                let currentBuyOrder = currentBuyOrderRaw.textContent.slice(1).replace(' or less', '');
                currentBuyOrderRaw.parentNode.className = 'profitHover'

                let profitValue = checkLucro(currentBuyOrder)

                var profitLabel = document.createElement('td')
                profitLabel.textContent = ("$" + profitValue)
                if (profitLabel.textContent <= 0) {
                    profitLabel.className = 'red-txt'
                } else {
                    profitLabel.className = 'green-txt'
                }

                document.querySelector("#content > div:nth-child(4) > div > div > div.col-xl-8.col-lg-5.mt-md-3 > table > tbody").children[i].appendChild(profitLabel)

                profitLabel.parentElement.addEventListener('click', function (event) {
                    try {
                        itemPriceBox.value = event.currentTarget.firstElementChild.textContent.replace(/[^\d.,-]/g, "")
                        if (quantityBox.value === '') {
                            quantityBox.value = 1
                        }
                    } catch (err) { console.log('error with profitcalculator', err) }
                })
            }

        }
        // remove the graph chart for the item sales
        if (config.itemPageRemoveSalesGraph) {
            document.querySelector(".card-body.card-chart").parentElement.style.display = 'none'
        }
        //add a button to hide the item graph chart
        if (config.itemPageMinimizeSalesGraphButton && !config.itemPageRemoveSalesGraph) {
            //itemPageSalesGraphDefaultStance
            const graphCard = document.querySelector(".card-body.card-chart")
            const graphHeader = document.querySelector("#content > div:nth-child(3) > div > h3")

            var salesGraphBtn = document.createElement('div');

            if (config.itemPageSalesGraphDefaultStance === 'minimized') {
                graphCard.style.height = graphHeader.clientHeight + 25 + 'px';
                graphHeader.setAttribute('value', false)
            } else {
                graphHeader.setAttribute('value', true)
            }
            salesGraphBtn.className = 'salesGraphIcon'
            graphHeader.appendChild(salesGraphBtn)

            var iconGraph = document.createElement('i');
            iconGraph.className = 'fa fa-chevron-down'
            salesGraphBtn.appendChild(iconGraph)


            salesGraphBtn.addEventListener('click', function (event) {
                if (event.currentTarget.getAttribute('value') === 'false') {
                    graphCard.style.height = graphHeader.clientHeight + 25 + 'px';
                    event.currentTarget.setAttribute('value', 'true');
                } else {
                    graphCard.style.height = '500px';
                    event.currentTarget.setAttribute('value', 'false');
                }
            })

        }
        //fixes some small things, most of them is because the site is ugly and bad :z
        if (config.itemPageSmallFixes) {

            //fix item icon
            document.querySelector("#page-sidebar div.card-item > img").style.maxWidth = '100%'
            //center the item name
            document.querySelector("#page-sidebar div.card-item").style.textAlign = 'center'
            //remove gamees selector
            document.querySelector("#header-navbar > ul.navbar-nav.header__navbar-links > li:nth-child(1)").remove()
            //remove buy order text
            document.querySelector('.placingtext').style.display = 'none'
            //centrelize Sales History
            document.querySelector('.card-body.card-chart > h3').style.display = 'flex';
            document.querySelector('.card-body.card-chart > h3').style.alignItems = 'center';
            //add shadow to item name to help to read
            document.querySelector("#page-sidebar div.card-item").style.textShadow = '1px 1px 4px rgba(0, 0, 0, 1)';
            //add radius to backgroundBuyOrder the borders remove it
            buyOrderBackground.style.borderRadius = '1rem'
            //
            document.querySelector('.form-control.boprice ').style.borderRadius = '1rem 0 0 0'
            //
            document.querySelector('#recipient-username-addon').style.borderRadius = '1rem'

        }
        //organize buttons layout
        if (config.organizeButtonsLayout) {
            if (!document.querySelector("div.nologinbo > form .removebuyorder").checkVisibility()) {
                document.querySelector('div.nologinbo > .addbuyorder').classList.add('grid-2')
                document.querySelector("div.nologinbo > form").style.display = 'none'
            }

            if (document.querySelector("div.nologinbo").children.length % 2 == 0) {
                document.querySelector("div.nologinbo").lastElementChild.classList.add('grid-2')
            }
        } else {
            document.querySelector("div.nologinbo").style.display = 'block'
        }
        //chenges buyorder background depending if you have hghest buy order       
        if (config.changeBuyOrdersBackgroundIfNotHighestBuyOrder) {
            try {
                if (sellValue === highestBuyOrder) {
                    buyOrderBackground.style.backgroundColor = String(config.buyOrdersBackgroundColorTrue)
                } else {
                    buyOrderBackground.style.backgroundColor = String(config.buyOrdersBackgroundColorFalse)
                }
            } catch (err) { console.log(err, 'error with bg bgcolor') }
        }
        //chenges buyorder border depending if you have hghest buy order
        if (config.changeBuyOrdersBorderIfNotHighestBuyOrder) {
            try {
                buyOrderBackground.style.borderStyle = config.buyOrdersBorderStyle
                if (sellValue === highestBuyOrder) {
                    buyOrderBackground.style.backgroundColor = String(config.buyOrdersBorderColorTrue)
                } else {
                    buyOrderBackground.style.backgroundColor = String(config.buyOrdersBorderColorFalse)
                }
            } catch (err) { console.log(err, 'error with bg border') }
        }
        //adds a profit label in the price box
        if (config.buyOrdersShowCurrentFees) {
            function updateFeesElement() {
                var boxValue = itemPriceBox.value
                var quantityValue = quantityBox.value

                if (quantityValue === '') {
                    quantityValue = 1
                }

                afterFeesValue = '$' + (checkLucro(boxValue) * quantityValue).toFixed(2)

                document.querySelector('#afterFeesValue').textContent = afterFeesMessage + afterFeesValue
            }

            itemPriceBox.addEventListener('input', updateFeesElement)
            quantityBox.addEventListener('input', updateFeesElement)

            var afterFeesElement = document.createElement("div");
            afterFeesElement.textContent = afterFeesMessage + "$0.00";
            afterFeesElement.className = 'fees-calculator'
            afterFeesElement.id = 'afterFeesValue'
            itemPriceBox.parentNode.appendChild(afterFeesElement);

            document.querySelector("div.nologinbo > div.input-group.mb-3").style.backgroundColor = '#202334';
            document.querySelector("div.nologinbo > div.input-group.mb-3").style.borderRadius = '1rem';
            document.querySelector("div.nologinbo > div.input-group.mb-3").style.height = '80px'

            if (itemPriceBox.value != '') {
                updateFeesElement()
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

waitForSettings(ItemPageEnhancer)
