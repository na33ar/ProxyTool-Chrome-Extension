setProxy = function (ip_address) {
    var config = {
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
    chrome.proxy.settings.set(
        { value: config, scope: 'regular' },
        function () { });
};

checkProxy = function (proxy) {
    //todo
};

formatProxy = function (stringProxy) {
    //todo
};

saveProxyStateToStorage = function () {

};

getProxyStateFromStorage = function () {

};