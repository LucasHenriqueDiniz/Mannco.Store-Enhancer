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

function itemPageEnhancerMarkets(config) {
  console.log("itemPageEnhancerMarket is disabled for now");
  return 0;
  console.log(config);

  const utmSource = "&utm_source=https://github.com/LucasHenriqueDiniz";

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

  const itemName = document
    .querySelector(".item-info__type")
    .textContent.trim();

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

  var gameIdMap = {
    440: "tf2",
    730: "csgo",
    252490: "rust",
    570: "dota2",
  };
  // Mapeamento de sites para links e imagens
  const siteMap = {
    "Tradeit.gg": {
      link: "",
      imgSrc: "https://tradeit.gg/_nuxt/img/logo_horizontal.8189732.svg",
      fees: "5",
    },
    "Market CSGO": {
      link: "",
      imgSrc: "https://i.imgur.com/SucZNHt.png",
      fees: "5",
    },
    ShadowPay: {
      link: "",
      imgSrc: "https://docs.shadowpay.com/images/logo.png",
      fees: "5",
    },
    DMarket: {
      link: `https://dmarket.com/ingame-items/item-list/${
        gameIdMap[appID]
      }-skins?title=${encodeURIComponent(itemName)}`,
      imgSrc:
        "https://cdn.freebiesupply.com/logos/large/2x/dmarket-logo-svg-vector.svg",
      fees: "3",
    },
    Bitskins: {
      link: "",
      imgSrc: "https://csgo-bets.org/wp-content/uploads/2021/07/bitskins.png",
      fees: "2",
    },
    BUFF163: {
      link: "",
      imgSrc: "https://i.imgur.com/OgdAZZ2.png",
      fees: "5",
    },
    "Mannco.store": {
      link: "",
      imgSrc: "https://mannco.store/statics/img/logo.svg",
      fees: "5",
    },
    Skinport: {
      link: "",
      imgSrc: "https://docs.skinport.com/source/images/logo.png",
      fees: "0",
    },
    Steam: {
      link: `https://steamcommunity.com/market/listings/${appID}/${itemName}`,
      imgSrc:
        "https://logodownload.org/wp-content/uploads/2018/01/steam-logo-2.png",
      fees: "5",
    },
    CSGOFloat: {
      link: "",
      imgSrc: "https://csgofloat.com/assets/full_logo.png",
      fees: "5",
    },
    WAXPEER: {
      link: "",
      imgSrc:
        "https://globalcsgo.com/wp-content/uploads/2021/02/waxpeer-logo-1.png",
      fees: "5",
    },
    GamerPay: {
      link: "",
      imgSrc: "https://i.imgur.com/uaBBvGh.png",
      fees: "5",
    },
    "Lis Skins": {
      link: "",
      imgSrc: "https://csgo.steamanalyst.com/images/lisskins-logo.png",
      fees: "5",
    },
    SkinBid: {
      link: "",
      imgSrc:
        "https://s3.eu-west-3.amazonaws.com/skinsnipe.com/img/common/logos/markets/logo-skinbid.png",
      fees: "5",
    },
    SkinBaron: {
      link: "",
      imgSrc:
        "https://tradeplz.com/wp-content/uploads/2016/06/skinbaron-logo.png",
      fees: "5",
    },
    "CS.DEALS": {
      link: "",
      imgSrc: "https://cs.deals/pt/assets/media-kit/logo-horizontal-full.png",
      fees: "5",
    },
    "SWAP.GG": {
      link: "",
      imgSrc: "https://blog.swap.gg/content/images/2019/04/logo.png",
      fees: "2",
    },
    "CS.MONEY": {
      link: "",
      imgSrc: "https://assets.csgocaptain.com/cs-money.png",
      fees: "3",
    },
    "BUFF Market": {
      link: "",
      imgSrc: "https://i.imgur.com/Wijajmv.png",
      fees: "2",
    },
    BitSkins: {
      link: "",
      imgSrc: "https://csgo-bets.org/wp-content/uploads/2021/07/bitskins.png",
      fees: "1",
    },
    "CS.TRADE": {
      link: "",
      imgSrc: "https://cs.trade/images/page/cstrade-logo.png",
      fees: "2",
    },
    "LOOT.FARM": {
      link: `https://loot.farm/#skin=${appID}_${itemName}`,
      imgSrc: "https://i.imgur.com/IQ5VVGr.png",
      fees: "2",
    },
    "TF2.tm": {
      link: "",
      imgSrc: "https://i.imgur.com/VMONvM3.png",
      fees: "2",
    },
    /*
    '': {
        link: '',
        imgSrc: '',
        fees: ''
    },
    */
  };

  // create an array of objects with necessary information
  const items = [
    //{ imgSrc: '...', fees: '...', volume: '...', price: 10, link: '...' },
  ];

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //  APICALLS functions
  //add decimal 420 -> 4.20 699 -> 6.99
  function addDecimal(num) {
    // Converte o número em uma string
    let numStr = num.toString();

    // Adiciona um zero à esquerda se o número for menor do que 100
    if (numStr.length < 3) {
      numStr = "0" + numStr;
    }

    // Insere um ponto duas casas à esquerda do final da string
    let resultStr = numStr.slice(0, -2) + "." + numStr.slice(-2);

    // Converte a string resultante de volta em um número e retorna
    return parseFloat(resultStr);
  }
  //

  async function webScrapping(name, url, mode, volumeElement, priceElement) {
    return new Promise((resolve) => {
      fetch(url)
        .then((response) => response.text())
        .then((responseText) => {
          let parser = new DOMParser();
          let htmlDocument = parser.parseFromString(responseText, "text/html");
          console.log(`Requesting value for ${name}`);

          let volume = null;
          let price = null;
          let link = null;
          let count = 0;

          const intervalId = setInterval(async function () {
            if (count < 5) {
              console.log(`${name} | waiting to load...`);
              if (htmlDocument.querySelector(priceElement)) {
                console.log(`${name} | price element check pass`);
                switch (mode) {
                  case "count":
                    volume =
                      htmlDocument.querySelectorAll(volumeElement).length;
                    break;
                  case "text":
                    volume = volumeElement.textContent;
                    break;
                  case "command":
                    volume = volumeElement;
                    break;
                  case "children":
                    volume = volumeElement.children.length;
                    break;
                  default:
                    console.log(
                      `\n \u001b[31m ${name} | Not a valid mode, please use "count" to count how many child elements, "text" to take textContent from the element, and 'command' to use a command \n`
                    );
                    break;
                }
                let test = htmlDocument.querySelector(priceElement);

                try {
                  price = test.textContent.replaceAll("\n", "").trim();
                } catch (err) {
                  console.log(
                    `\n \u001b[31m ${name} | error with the price element in the web scraping of the site ${name} \n`
                  );
                }
                link = url + utmSource;
                if (price) {
                  console.log(
                    `${name} - Encontrado! O item "${itemName}" custa: ${price} | volume: ${volume}`
                  );
                  const { imgSrc, fees } = siteMap[name];
                  items.push({
                    imgSrc,
                    fees,
                    volume,
                    price,
                    link,
                  });
                  displayItems();
                } else {
                  console.log(
                    "\n O item não foi encontrado na lista de resultados. \n"
                  );
                }
                clearInterval(intervalId);
              }
              count++;
            } else {
              clearInterval(intervalId);
              console.log(
                `\n \u001b[31m give up in the web scraping of the site ${name} \n`
              );
              console.log("url : ", url);
              console.log("priceElem: ", priceElement);
              console.log("volumeElem: ", volumeElement);
            }
          }, 10000);
          resolve();
        })
        .catch((error) => {
          console.error(error);
          resolve();
        });
    });
  }

  webScrapping(
    "Tradeit.gg",
    `https://tradeit.gg/${gameIdMap[appID]}/store?search=${encodeURIComponent(
      itemName
    )}&aff=SIH`,
    "text",
    "#siteInventoryContainer .item-details .flex span",
    "#siteInventoryContainer .store-price-wrapper .price"
  );
}

itemPageEnhancerMarkets(itemPageEnhancerMarkets);
/*
const parentDiv = document.querySelector("#content > div:nth-child(4) > div > div > div.col-xl-4.col-lg-7 > div.input-group.mb-3")
const firstItemConteiner = document.querySelector("#page-sidebar > div.card.mb-0 > div > div.item-info > ul > li:nth-child(1) > dl > dd").textContent
const utmSource = '&utm_source=https://github.com/LucasHenriqueDiniz'

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
  
  const itemName = document.querySelector("#page-sidebar > div > div > div.card-item > h2 > span").textContent.trim()

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

var gameIdMap = {
    440: 'tf2',
    730: 'csgo',
    252490: 'rust',
    570: 'dota2'
}
// Mapeamento de sites para links e imagens
const siteMap = {
    'Tradeit.gg': {
        link: '',
        imgSrc: 'https://tradeit.gg/_nuxt/img/logo_horizontal.8189732.svg',
        fees: '5'
    },
    'Market CSGO': {
        link: '',
        imgSrc: 'https://i.imgur.com/SucZNHt.png',
        fees: '5'
    },
    'ShadowPay': {
        link: '',
        imgSrc: 'https://docs.shadowpay.com/images/logo.png',
        fees: '5'
    },
    'DMarket': {
        link: `https://dmarket.com/ingame-items/item-list/${gameIdMap[appID]}-skins?title=${encodeURIComponent(itemName)}`,
        imgSrc: 'https://cdn.freebiesupply.com/logos/large/2x/dmarket-logo-svg-vector.svg',
        fees: '3'
    },
    'Bitskins': {
        link: '',
        imgSrc: 'https://csgo-bets.org/wp-content/uploads/2021/07/bitskins.png',
        fees: '2'
    },
    'BUFF163': {
        link: '',
        imgSrc: 'https://i.imgur.com/OgdAZZ2.png',
        fees: '5'
    },
    'Mannco.store': {
        link: '',
        imgSrc: 'https://mannco.store/statics/img/logo.svg',
        fees: '5'
    },
    'Skinport': {
        link: '',
        imgSrc: 'https://docs.skinport.com/source/images/logo.png',
        fees: '0'
    },
    'Steam': {
        link: `https://steamcommunity.com/market/listings/${appID}/${itemName}`,
        imgSrc: 'https://logodownload.org/wp-content/uploads/2018/01/steam-logo-2.png',
        fees: '5'
    },
    'CSGOFloat': {
        link: '',
        imgSrc: 'https://csgofloat.com/assets/full_logo.png',
        fees: '5'
    },
    'WAXPEER': {
        link: '',
        imgSrc: 'https://globalcsgo.com/wp-content/uploads/2021/02/waxpeer-logo-1.png',
        fees: '5'
    },
    'GamerPay': {
        link: '',
        imgSrc: 'https://i.imgur.com/uaBBvGh.png',
        fees: '5'
    },
    'Lis Skins': {
        link: '',
        imgSrc: 'https://csgo.steamanalyst.com/images/lisskins-logo.png',
        fees: '5'
    },
    'SkinBid': {
        link: '',
        imgSrc: 'https://s3.eu-west-3.amazonaws.com/skinsnipe.com/img/common/logos/markets/logo-skinbid.png',
        fees: '5'
    },
    'SkinBaron': {
        link: '',
        imgSrc: 'https://tradeplz.com/wp-content/uploads/2016/06/skinbaron-logo.png',
        fees: '5'
    },
    'CS.DEALS': {
        link: '',
        imgSrc: 'https://cs.deals/pt/assets/media-kit/logo-horizontal-full.png',
        fees: '5'
    },
    'SWAP.GG': {
        link: '',
        imgSrc: 'https://blog.swap.gg/content/images/2019/04/logo.png',
        fees: '2'
    },
    'CS.MONEY': {
        link: '',
        imgSrc: 'https://assets.csgocaptain.com/cs-money.png',
        fees: '3'
    },
    'BUFF Market': {
        link: '',
        imgSrc: 'https://i.imgur.com/Wijajmv.png',
        fees: '2'
    },
    'BitSkins': {
        link: '',
        imgSrc: 'https://csgo-bets.org/wp-content/uploads/2021/07/bitskins.png',
        fees: '1'
    },
    'CS.TRADE': {
        link: '',
        imgSrc: 'https://cs.trade/images/page/cstrade-logo.png',
        fees: '2'
    },
    'LOOT.FARM': {
        link: `https://loot.farm/#skin=${appID}_${itemName}`,
        imgSrc: 'https://i.imgur.com/IQ5VVGr.png',
        fees: '2'
    },
    'TF2.tm': {
        link: '',
        imgSrc: 'https://i.imgur.com/VMONvM3.png',
        fees: '2'
    },
    
//'': {
//    link: '',
//    imgSrc: '',
//    fees: ''
//},

};

// create an array of objects with necessary information
const items = [
    //{ imgSrc: '...', fees: '...', volume: '...', price: 10, link: '...' },
];

        var verticalMarkets = document.createElement('div');
        verticalMarkets.className = 'vertical-market'
        pageSidebar.appendChild(verticalMarkets);
        if (appID == 730) {
            requestCsgoSkins()
        } else {
            //STEAM
            SteamAPI()
            //bitskins
            Bitskins()
            //DMarket
            DMarketAPI()
            //SWAP.GG
            SwapGGAPI()
            //Skinport
            SkinportAPI()
            //CS.TRADE
            CSTRADE()
            //LOOTFARM
            LOOTFARM()
            //TradeITgg
            TradeITgg()
        }
//add decimal 420 -> 4.20 699 -> 6.99
function addDecimal(num) {
    // Converte o número em uma string
    let numStr = num.toString();

    // Adiciona um zero à esquerda se o número for menor do que 100
    if (numStr.length < 3) {
        numStr = '0' + numStr;
    }

    // Insere um ponto duas casas à esquerda do final da string
    let resultStr = numStr.slice(0, -2) + '.' + numStr.slice(-2);

    // Converte a string resultante de volta em um número e retorna
    return parseFloat(resultStr);
}
//
function createRow(imgSrc, fees, volume, price, link) {
    let marketRow = document.createElement('div');
    marketRow.className = 'marketRow'

    let imgHolder = document.createElement('div');
    imgHolder.style.display = 'flex';
    imgHolder.style.justifyContent = 'center';
    marketRow.appendChild(imgHolder)

    let icon = document.createElement('img');
    icon.src = imgSrc;
    icon.style.maxWidth = '80%';
    icon.style.maxHeight = '80px';
    icon.style.paddingTop = '10px';
    imgHolder.appendChild(icon);

    let feesValue = document.createElement('div');
    feesValue.innerText = fees + "%";
    feesValue.style.fontSize = '16px';
    feesValue.style.padding = '0px 0px 0px 10px';
    feesValue.style.color = 'white';
    feesValue.style.display = 'flex';
    feesValue.style.flexDirection = 'column';
    feesValue.style.justifyContent = 'center';
    feesValue.title = "This value is the current fees from the marketplace";
    imgHolder.appendChild(feesValue);

    googleIcon('Info', 'back-arrow', feesValue, 'font-size: 15px; margin-left: 3px; color: #9EA7B3')

    let divider = document.createElement('hr');
    divider.style.border = 'none';
    divider.style.borderTop = '1px solid rgba(16,24,34,.5)';
    divider.style.marginTop = '8px';
    divider.style.marginBottom = '0px';
    marketRow.appendChild(divider);

    let priceVolumeWrapper = document.createElement('div');
    priceVolumeWrapper.className = 'volume-wrapper'
    priceVolumeWrapper.addEventListener('click', function () {
        //ex -> `https://steamcommunity.com/market/listings/${appID}/${encodeURIComponent(itemName)}`;
        window.open(link)
    })

    marketRow.appendChild(priceVolumeWrapper);

    let itemVolume = document.createElement('div');
    itemVolume.innerText = volume + " available";
    itemVolume.style.fontSize = '16px';
    itemVolume.style.color = 'white';
    itemVolume.style.padding = '0px 15px 15px 15px'
    itemVolume.style.display = 'flex'
    itemVolume.style.flexDirection = 'column-reverse'
    priceVolumeWrapper.appendChild(itemVolume);

    let buy = document.createElement('span');
    buy.innerText = "Buy";
    buy.style.fontSize = '12px';
    buy.style.color = '#3b84af';
    buy.style.marginRight = '5px';
    buy.style.margiTop = '5px';
    buy.style.transform = 'translateY(10%)';
    itemVolume.appendChild(buy);

    let itemPrice = document.createElement('div');
    itemPrice.innerText = price;
    itemPrice.style.fontSize = '24px';
    itemPrice.style.fontWeight = 'bold';
    itemPrice.style.color = 'white';
    itemPrice.style.padding = '10px 15px 15px 0px'
    itemPrice.style.display = 'flex';
    itemPrice.style.flexDirection = 'row-reverse';
    itemPrice.style.alignItems = 'flex-end';
    priceVolumeWrapper.appendChild(itemPrice);

    let from = document.createElement('span');
    from.innerText = "from";
    from.style.fontSize = '12px';
    from.style.color = '#3b84af';
    from.style.transform = 'translateY(-15%)';
    from.style.marginRight = '5px';
    itemPrice.appendChild(from);


    verticalMarkets.appendChild(marketRow);
}

//WEBSCRAPPER
async function webScrapping(name, url, mode, volumeElement, priceElement) {
    return new Promise(resolve => {
        GM.xmlHttpRequest({
            method: "GET",
            url: url,
            onload: async function (response) {
                let parser = new DOMParser();
                let htmlDocument = parser.parseFromString(response.responseText, "text/html");
                console.log(`Requesting value for ${name}`)

                let volume = null;
                let price = null;
                let link = null;
                let count = 0;

                const intervalId = setInterval(async function () {
                    if (count < 5) {
                        console.log(`${name} | waiting to load...`)
                        if (htmlDocument.querySelector(priceElement)) {
                            console.log(`${name} | price element check pass`)
                            switch (mode) {
                                case 'count':
                                    volume = htmlDocument.querySelectorAll(volumeElement).length
                                    break;
                                case 'text':
                                    volume = volumeElement.textContent
                                    break;
                                case 'command':
                                    volume = volumeElement
                                    break;
                                case 'children':
                                    volume = volumeElement.children.length
                                    break;
                                default:
                                    console.log(`\n \u001b[31m ${name} | Not a valid mode, please use "count" to count how many child elements, "text" to take an textContent from the elemnet and 'command' to use a command  \n`)
                                    break;
                            }
                            let test = htmlDocument.querySelector(priceElement);

                            try {
                                price = test.textContent.replaceAll('\n', '').trim()
                            }
                            catch (err) {
                                console.log(`\n \u001b[31m ${name} | error with the price element in the webscrapping of the site ${name} \n`)
                            }
                            link = url + utmSource
                            if (price) {
                                console.log(`${name} - Encontrado! O item "${itemName}" custa: ${price} | volume: ${volume}`);
                                const { imgSrc, fees } = siteMap[name]
                                items.push({
                                    imgSrc,
                                    fees,
                                    volume,
                                    price,
                                    link
                                });
                                displayItems()
                            } else {
                                console.log("\n O item não foi encontrado na lista de resultados. \n");
                            }
                            clearInterval(intervalId)
                        }
                        count++;
                    } else {
                        clearInterval(intervalId);
                        console.log(`\n \u001b[31m give up in the webscrapping of the site ${name} \n`)
                        console.log('url : ', url)
                        console.log('priceElem: ', priceElement)
                        console.log('volumeElem: ', volumeElement)
                    }
                }, 10000);
                resolve();
            },
            onerror: function (error) {
                console.error(error);
                resolve();
            }
        });
    });
}
//Create a row using items arr
function displayItems() {
    const verticalMarket = document.querySelector(".vertical-market")

    console.log('Updating items arr and display box')

    document.querySelector("#page-sidebar > div.vertical-market").innerHTML = "";

    items.sort((a, b) => parseFloat(a.price.replace('$', '').trim()) - parseFloat(b.price.replace('$', '').trim()));

    items.forEach(item => {
        createRow(item.imgSrc, item.fees, item.volume, item.price, item.link);
    });

    if (verticalMarket.children >= 3) {
        verticalMarket.style.maxHeight = verticalMarket.children[0].clientHeight + verticalMarket.children[1].clientHeight + verticalMarket.children[2].clientHeight + 10 * 3 + 'px'
    }

    if (verticalMarket.children.length === 4 && !document.querySelector("#hide-arrow\\ markets")) {

        var colapseButton = document.createElement('div')
        pageSidebar.appendChild(colapseButton)
        googleIcon('expand_more', 'hide-arrow markets', colapseButton, 'font-size: 50px; transition: height 200ms ease-out 0s; transition-property: transform, color; color: rgba(0,0,0,0.5);}')

        colapseButton.addEventListener('click', () => {
            if (itemHideButton.dataset.value === "off") {
                itemHideButton.dataset.value = "on";
                document.querySelector("#hide-arrow\\ markets").innerHTML = 'expand_more'
                itemHideButton.title = "Colapse markets box";
                document.querySelector("#page-sidebar > div.vertical-market").style.maxHeight = verticalMarket.children[0].clientHeight + verticalMarket.children[1].clientHeight + verticalMarket.children[2].clientHeight + 10 * 3 + 'px';
            } else {
                itemHideButton.dataset.value = "off";
                document.querySelector("#hide-arrow\\ markets").innerHTML = 'expand_less'
                itemHideButton.title = "Hide markets box";
                document.querySelector("#page-sidebar > div.vertical-market").style.maxHeight = '5000px';
            }
        })
    }
}
//DMarket

function DMarketAPI() {
    const apiUrl = `https://api.dmarket.com/exchange/v1/market/items?gameId=${gameIdMap[appID]}&limit=100&title=${encodeURIComponent(itemName)}&currency=USD&bestPrice=true&orderBy=price&orderDir=asc`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log('Requesting value for DMarket');

            let volume = null;
            let price = null;

            const { imgSrc, fees, link } = siteMap["DMarket"];
            const { objects } = data;
            volume = objects.length;
            price = `$${addDecimal(objects[0].price.USD)}`;

            if (volume || price) {
                console.log(`DMakert | Encontrado! O item "${itemName}" custa: ${price} | volume: ${volume}`);
                items.push({
                    imgSrc,
                    fees,
                    volume,
                    price,
                    link
                });
                displayItems();
            } else {
                console.log(`\n \u001b[31m Dmarket | problem finding the price for DMkaret \n`)
            }
        })
        .catch(error => console.error(error));
}
//SWAP.GG
function SwapGGAPI() {
    GM.xmlHttpRequest({
        method: "GET",
        url: `https://market-api.swap.gg/v1/pricing/lowest?appId=${appID}`,
        onload: function (response) {
            const obj = JSON.parse(response.responseText);
            console.log('Requesting Swap.gg item price')

            // Converter o objeto JSON em um array JSON
            let arr = Object.entries(obj.result);

            // Encontrar o primeiro item que corresponde ao critério de pesquisa
            let result = arr.find(([name]) => name.includes(itemName));

            // Verificar se o item foi encontrado e obter suas propriedades
            if (result) {
                let [name, { price, quantity, link }] = result;

                // Formatar o preço como uma string com separador de milhares e casas decimais
                let formattedPrice = String(`$` + addDecimal(price));
                let fullLink = link + utmSource
                console.log(`SWAP.GG | Encontrado! O item "${name}" custa: ${formattedPrice} | volume: ${quantity} | link: ${link}`);

                // Adicionar o item à lista de itens e exibir a lista
                let { imgSrc, fees } = siteMap["SWAP.GG"];
                items.push({
                    imgSrc,
                    fees,
                    volume: quantity,
                    price: formattedPrice,
                    link: fullLink
                });
                displayItems();
            } else {
                console.log(`\n \u001b[31m SWAP.GG | problem finding the price for SWAP.gg \n`)
            }
        }
    });
}
//SkinportAPI
function SkinportAPI() {
    GM.xmlHttpRequest({
        method: "GET",
        url: `https://api.skinport.com/v1/items?app_id=${appID}&currency=USD&tradable=0`,
        responseType: "json",
        onload: function (response) {

            const obj = JSON.parse(response.responseText);
            // Converter o objeto JSON em um array JSON
            console.log("Requesting Skinport items");

            let volume = null
            let price = null
            let link = null

            const filteredResults = obj.filter(item => item.market_hash_name === itemName);

            volume = filteredResults[0].quantity
            price = filteredResults[0].min_price
            link = filteredResults[0].market_page + utmSource

            console.log(volume, price, link)
            console.log(filteredResults)
            const { imgSrc, fees } = siteMap["Skinport"];

            if (price || volume) {
                console.log(`Skinport | Encontrado! O item ${itemName} custa: $${price} | volume: ${volume} | link: ${link}`);
                items.push({
                    imgSrc,
                    fees,
                    volume,
                    price: '$' + price,
                    link
                });
                displayItems();

            } else {
                console.log(`\n \u001b[31m Skinport | Problem finding the price for Skinport \n`)
            }
        },
        onerror: function (error) {
            console.error(error);
        }
    });
}
//CSTRADE
function CSTRADE() {
    GM.xmlHttpRequest({
        method: "GET",
        url: `https://cdn.cs.trade:8443/api/getInventoryCmp?order_by=price_desc&bot=all`,
        responseType: "json",
        onload: function (response) {
            const obj = JSON.parse(response.responseText).inventory;
            // Converter o objeto JSON em um array JSON
            console.log("Requesting CS.trade items");

            let link = `https://cs.trade/?sort_by=price_asc&market_name=${itemName}` + utmSource

            let result = obj.find(item => item.n === itemName);
            let price = result ? result.p : null;
            let volume = obj.reduce((count, item) => item.n === itemName ? count + 1 : count, 1);


            const { imgSrc, fees } = siteMap["CS.TRADE"];

            if (price) {
                let formattedPrice = price.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 })
                console.log(`CS.TRADE | Encontrado! O item ${itemName} custa: $${price} | volume: ${volume} | link: ${link}`);
                items.push({
                    imgSrc,
                    fees,
                    volume,
                    price: formattedPrice,
                    link
                });
                displayItems();

            } else {
                console.log("CS.TRADE | O item não foi encontrado na lista de resultados.");
            }
        },
        onerror: function (error) {
            console.error(error);
        }
    });
}
//LOOTFARM api
function LOOTFARM() {
    GM.xmlHttpRequest({
        method: "GET",
        url: `https://loot.farm/botsInventory_${appID}.json`,
        onload: function (response) {
            // Analisa a resposta em JSON
            let obj = Object.values(JSON.parse(response.responseText).result);
            // Imprime os dados no console
            let result = obj.find(item => item.n === itemName);
            let price = result ? result.p : null;
            let arrayCount = 0;
            let volume = 0;

            for (let key in result.u) {
                let value = result.u[key];
                if (Array.isArray(value)) {
                    arrayCount++;
                    volume += value.length;
                }
            }

            console.log("LOOT.FARM | Soma dos comprimentos dos arrays em u:", volume);
            let formattedPrice = `$${addDecimal(price)}`;

            const { imgSrc, fees } = siteMap["LOOT.FARM"];

            if (price) {
                console.log(`LOOT.FARM |Encontrado! O item ${itemName} custa: $${price} | volume: ${volume} | link: ${link}`);
                items.push({
                    imgSrc,
                    fees,
                    volume,
                    price: formattedPrice,
                    link
                });
                //displayItems();

            } else {
                console.log(`\n \u001b[31m LOOT.FARM | Problem finding the price for LOOT.FARM \n`)
            }
        },
        onerror: function (error) {
            console.error(error);
        }
    });
}
//Reqeust steam prices
function SteamAPI() {
    var apiLink = `https://steamcommunity.com/market/priceoverview/?appid=${appID}&currency=${currency}&market_hash_name=${encodeURIComponent(itemName)}`
    GM.xmlHttpRequest({
        method: "GET",
        url: apiLink,
        responseType: "json",
        onload: function (response) {
            var obj = JSON.parse(response.responseText);
            let volumeSteam = obj.volume ? obj.volume : 0;
            let lowestPriceSteam = obj.lowest_price ? obj.lowest_price : null;

            const { imgSrc, fees, link } = siteMap["Steam"];

            if (lowestPriceSteam) {
                console.log(`Encontrado! O item "${itemName}" custa: ${lowestPriceSteam} | volume: ${volumeSteam}`);
                items.push({
                    imgSrc,
                    fees,
                    volume: volumeSteam,
                    price: lowestPriceSteam,
                    link
                });
                displayItems();
            } else {
                console.log("O item não foi encontrado na lista de resultados.");
            }
        }
    });
}
////WEB-SCRAPPERS
//TRade it GG
async function TradeITgg() {
    await webScrapping('Tradeit.gg', `https://tradeit.gg/${gameIdMap[appID]}/store?search=${encodeURIComponent(itemName)}&aff=SIH`, 'text', "#siteInventoryContainer .item-details .flex span", "#siteInventoryContainer .store-price-wrapper .price")
}
//BITSKINS
async function Bitskins() {
    await webScrapping('Bitskins', `https://bitskins.com/?market_hash_name=${encodeURIComponent(itemName)}&advanced=1&appid=${appID}&show_trade_delayed_items=0&sort_by=bumped_at&sort_by=price&order=asc`, 'count', ".col-lg-3.col-md-4.col-sm-5.col-xs-12.item-solo", "body > div:nth-child(10) > div > div:nth-child(3) > div > div > div:nth-child(1) > div > div.item-icon.lazy > h5 > span")
}

//Call for csgoskins.
function requestCsgoSkins() {
    // Criando um objeto com as informações de float e seus respectivos links
    const floatMap = {
        'Factory New': 'factory-new',
        'Minimal Wear': 'minimal-wear',
        'Field-Tested': 'field-tested',
        'Well-Worn': 'well-worn',
        'Battle-Scarred': 'battle-scarred'
    };

    function getFloat(itemName) {
        for (let float in floatMap) {
            if (itemName.includes(float)) {
                return floatMap[float];
            }
        }
    }

    const result = [];
    let float = getFloat(itemName);
    let link = `https://csgoskins.gg/items/${itemName.replace(' |', '').replace(/StatTrak™ ?/, '').replace(/\(.*\)/, '').replace(/★ /, '').trim().replace(/ /g, '-').toLowerCase()}/`;

    if ((itemName.includes('StatTrak™'))) {
        link += 'stattrak-'
    }

    if (float) {
        link += `${float}`;
    }
    GM.xmlHttpRequest({
        method: 'GET',
        url: link,
        onload: function (response) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(response.responseText, 'text/html');

            const elements = doc.querySelectorAll('.my-4');
            const offerNodes = Array.from(elements).filter(el => el.tagName != 'BUTTON');


            offerNodes.forEach(offer => {
                const site = offer.querySelector('.w-1\\/2.sm\\:w-1\\/4.p-4.flex-none').firstElementChild.textContent.trim();
                const activeOffers = offer.querySelector('.w-1\\/4.p-4.flex-none.hidden.sm\\:block').lastElementChild?.textContent?.trim() || "N/A";
                const price = offer.querySelector(".font-bold.text-xl").textContent.trim();

                result.push({
                    site,
                    activeOffers,
                    price
                });
            });
            console.log(result)
            const rows = result.map(({ site, activeOffers, price }) => {
                const { link, imgSrc, fees } = siteMap[site] || {}; // Obter o link e imagem correspondentes
                const volume = activeOffers;
                //return createRow(imgSrc, fees, volume, price, link); // Chamar a função createRow com os valores apropriados
                items.push({
                    imgSrc,
                    fees,
                    volume,
                    price,
                    link
                });
                displayItems()
            });
        },
        onerror: function (error) {
            console.error(error);
        }
    });
}
*/
