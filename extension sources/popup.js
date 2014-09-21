/// <reference path="proxyTool.js"/>

$(function () {

    $("#test-ip-btn").mouseup(function () {
        var ip_address = $("#test-ip-txt").val();
        setProxy(ip_address);
    });

    $("#switch-off").change(
        function () {
            togleProxy();
        }
        );
});