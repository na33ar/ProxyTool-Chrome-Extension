/// <reference path="chromeApiWrapper.js"/>  
constant = {
    isProxyActive: "isProxyActive",
    proxySettings: "proxySettings",
};

proxySettings = {
    mode: "fixed_servers",
    rules: {
        proxyForHttp: {
            scheme: "http",
            host: ip_address,
            port: 80
        },
        proxyForHttps: {
            scheme: "https",
            host: ip_address,
            port: 80
        },
    }
};


setProxy = function (ip_address) {
    proxySettings.rules.proxyForHttp.host = ip_address;
    proxySettings.rules.proxyForHttps.host = ip_address;
   
    chrome.proxy.settings.set(
        { value: proxySettings, scope: 'regular' },
        function () { });
};

///correct or not
checkProxy = function (proxy) {
    //todo
    
};

formatProxy = function (stringProxy) {
    //todo    
};

saveProxyStateToStorage = function () {
   // var currentProxy = chrome.proxy;
};

togleProxy = function () {
    storage.get(constant.isProxyActive, function (data) {
        if (data) {
            disableProxy();
        }
        else {
            enableProxy();
        }
    });
};

enableProxy = function () {
    var proxyIp = storage.get(constant.proxyIp);
    if (checkProxy(proxyIp)) {
        setProxy(proxyIp);
        storage.set(constant.isProxyActive, true);
    }
    else {
        alert("the proxy is incorrect");
        disableProxy();
    };
};

disableProxy = function () {
    chrome.proxy.settings.set(
    { value: { "mode": "direct" }, scope: 'regular' },
    function () { });
    storage.set(constant.isProxyActive, false);
};