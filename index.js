$(function () {
    $("#nameform").submit(function (event) {
        event.preventDefault();
        var fname = $('#fname').val();
        var lname = $('#lname').val();
        $('.jumbotron').text(reverse(fname + " " + lname));
        $('.jumbotron').attr("style", "display: block !important;");
        return false;
    });
});

function reverse(str) {
    return str.split("").reverse().join("");
}

