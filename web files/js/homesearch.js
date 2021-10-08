$(document).ready(function(){
    var timer;
    $("#homesearch").keyup(function() {
        clearTimeout(timer);
        var ms = 200;
        var val = this.value;
        timer = setTimeout(function() {
            lookup(val);
        }, ms);
    });
});

const lookup = async searchText => {
    const matchList = document.getElementById("matchList");
    const res = await $.ajax({
        url: 'https://b0jf5s3xd2.execute-api.us-east-1.amazonaws.com/DEV_LIVE/search',
        type: 'GET',
        data: {
            "query": searchText
        },
        contentType: 'application/json',
        crossDomain: true,
        success: function(data) {
            return data;
        },
        error: function(error) {
            return error;
        }
    });

    const result = await res.hits.hit;

    let matches = await result.filter(item => {
        console.log(item);
        return item;
    });

    if (searchText.length === 0) {
        matches = [];
        matchList.innerHTML = "";
    }

    outputHtml(matches);
}

const outputHtml = matches => {
    const matchList = document.getElementById("matchList");
    if (matches.length > 0) {
        const html = matches.map(match => {
            if (match.fields.code) {
                return `<div class="list border-bottom"><div class="d-flex flex-column ml-3">${match.fields.code}</div></div>`
            } else {
                return `<div class="list border-bottom"><div class="d-flex flex-column ml-3">Text Data</div></div>`
            }
        });

        matchList.innerHTML = html;
    }
}