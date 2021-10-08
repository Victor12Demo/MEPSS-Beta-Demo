$(document).ready(function() {
    $("#homebar-search").submit(function(event) {
        event.preventDefault();
    
        var queryString = $('input[id=homesearch]').val();
        var stringfied = JSON.stringify(queryString);

        sessionStorage.setItem("searchString", stringfied);

        window.location.href="results.html";
    });

    $("#navbar-search").submit(function(event) {
        event.preventDefault();
    
        var queryString = $('input[id=navSearch]').val();
        var stringfied = JSON.stringify(queryString);

        sessionStorage.setItem("searchString", stringfied);

        window.location.href="results.html";
    });
});