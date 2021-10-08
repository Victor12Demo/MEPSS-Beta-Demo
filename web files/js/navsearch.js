$(document).ready(function () {
    var searchString = sessionStorage.getItem("searchString");

    if (searchString.length > 0) {
        setTimeout(function () {
            search(searchString);
        }, 100);
    } else {
        console.log("no string");
    }
});

const search = async searchText => {
    const matchList = document.getElementById("resultList");
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

    output(matches);
}

const output = matches => {
    const matchList = document.getElementById("resultList");
    if (matches.length > 0) {
        const html = matches.map(match => {
            if (match.fields.code) {
                return `<div class="card"><div class="card-header">${match.fields.code}</div><div class="card-body"><p class="card-text">text data</p></div></div>`
            } else {
                return `<div class="card"><div class="card-header">TITLE</div><div class="card-body"><p class="card-text">text data</p></div></div>`
            }
        });

        matchList.innerHTML = html;
    }
}