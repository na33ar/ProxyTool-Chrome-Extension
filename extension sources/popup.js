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
        {value: config, scope: 'regular'},
        function() {});
};

$(function () {
    $("#test-ip-btn").mouseup(function () {
        var ip_address = $("#test-ip-txt").val();
        setProxy(ip_address);
    });
});