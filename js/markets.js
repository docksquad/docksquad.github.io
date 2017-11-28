class Market {
    constructor() {
        this.apiAddress = "";
        this.priceInfo = "";
        this.id = null;
        this.openPrice = 0;
        this.latestPrice = 0;
    }
    getAddress() {
        return this.apiAddress;
    }

    fetchPrices(fctn) {}

    runWebsocketTicker(updateTicker) {

    }

    getPriceInfo() {
        return this.priceInfo;
    }

    getId() {
        return this.id;
    }

    getLatestPrice() {
        return this.latestPrice;
    }

    setLatestPrice(v) {
        this.latestPrice = v;
    }

    getOpenPrice() {
        return this.openPrice;
    }

    setOpenPrice(v) {
        this.openPrice = v;
    }
}

class CAD {
    constructor() {
        this.apiAddress = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=CAD";
        this.priceInfo = "Based on CryptoCompare 24HR data";
        this.id = 0;
        this.openPrice = 0;
        this.latestPrice = 0;
    }
    getAddress() {
        return this.apiAddress;
    }

    fetchPrices(fctn) {
        var _this = this;
        $.ajax({
            dataType: "json",
            url: this.getAddress(),
            success: function(data) {
                _this.setOpenPrice(data["RAW"]["BTC"]["CAD"]["OPENDAY"]);
                _this.setLatestPrice(data["RAW"]["BTC"]["CAD"]["PRICE"]);
                fctn(_this.getOpenPrice(), _this.getLatestPrice(), _this.id);
            }
        });
    }

    runWebsocketTicker(updateTicker) {
    }

    getPriceInfo() {
        return this.priceInfo;
    }

    getId() {
        return this.id;
    }

    getLatestPrice() {
        return this.latestPrice;
    }

    setLatestPrice(v) {
        this.latestPrice = v;
    }

    getOpenPrice() {
        return this.openPrice;
    }

    setOpenPrice(v) {
        this.openPrice = v;
    }
}

class USD {
    constructor() {
        this.apiAddress = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD";
        this.priceInfo = "Based on CryptoCompare 24HR data";
        this.id = 1;
        this.openPrice = 0;
        this.latestPrice = 0;
    }
    getAddress() {
        return this.apiAddress;
    }

    fetchPrices(fctn) {
        var _this = this;
        $.ajax({
            dataType: "json",
            url: this.getAddress(),
            success: function(data) {
                _this.setOpenPrice(data["RAW"]["BTC"]["USD"]["OPENDAY"]);
                _this.setLatestPrice(data["RAW"]["BTC"]["USD"]["PRICE"]);
                fctn(_this.getOpenPrice(), _this.getLatestPrice(), _this.id);
            }
        });
    }

    runWebsocketTicker(updateTicker) {
    }

    getPriceInfo() {
        return this.priceInfo;
    }

    getId() {
        return this.id;
    }

    getLatestPrice() {
        return this.latestPrice;
    }

    setLatestPrice(v) {
        this.latestPrice = v;
    }

    getOpenPrice() {
        return this.openPrice;
    }

    setOpenPrice(v) {
        this.openPrice = v;
    }
}