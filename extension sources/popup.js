$(function () {
    $("#test-ip-btn").mouseup(function () {
        var ip_address = $("#test-ip-txt").val();
        setProxy(ip_address);
    });
});