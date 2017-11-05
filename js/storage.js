// ---------------LocalStorageManager---------------------
function LocalStorageManager() {
    this.gameConfigKey = "my-gameConfig";
    this.gameParamsKey = "my-gameParams";
    var supported = this.localStorageSupported();
    this.storage = supported ? window.localStorage : window.fakeStorage;
}

LocalStorageManager.prototype = {
    localStorageSupported: function () {
        var testKey = "test";
        try {
            var storage = window.localStorage;
            storage.setItem(testKey, "1");
            storage.removeItem(testKey);
            return true;
        } catch (error) {
            return false;
        }
    },
    getGameParams: function () {
        var paramsJSON = this.storage.getItem(this.gameParamsKey);
        return paramsJSON ? JSON.parse(paramsJSON) : { };
    },
    setGameParams: function (gameParams) {
        this.storage.setItem(this.gameParamsKey, JSON.stringify(gameParams));
    },
    clearGameParams: function () {
        this.storage.removeItem(this.gameParamsKey);
    },
    getGameConfig: function () {
        var configJSON = this.storage.getItem(this.gameConfigKey);
        return configJSON ? JSON.parse(configJSON) : { playSounds: true };
    },
    setGameConfig: function (gameConfig) {
        this.storage.setItem(this.gameConfigKey, JSON.stringify(gameConfig));
    },
    clearGameConfig: function () {
        this.storage.removeItem(this.gameConfigKey);
    },
};
var localStorageManager = new LocalStorageManager();
