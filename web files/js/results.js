$(document).ready(function() {
    const search = document.getElementById("search");
    const matchList = document.getElementById("resultList");
    const sessionString = sessionStorage.getItem("searchQuery");

    const searchDB = async searchText => {
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
            console.log(item.fields);            
            for (key in item.fields) {
                if (item.fields.hasOwnProperty(key)) {
                    var value = item.fields[key];
                    // console.log(key + " : " + value.toString());
                }
            }

            return item;
        });

        if (searchText.length === 0) {
            matches = [];
            matchList.innerHTML = '';
        }

        outputHtml(matches);
    }   
    
    const outputHtml = matches => {
        if (matches.length > 0) {
            const html = matches.map(match => {
                if (match.fields.code) {
                    return `
                    <div class="row justify-content-center pb-4">
                    <div class="col-12 col-md-10 col-lg-8">
                    <div class="card">
                    <h5 class="card-header"><a href="/Medical Issues/${match.fields.title[0]}/content/${match.fields.diagnostic_code}.stml"></a>${match.fields.title[0]}</h5>
                    <div class="card-body">
                      <h5 class="card-title">${match.fields.title[0]} - ${match.fields.diagnostic_code ? match.fields.diagnostic_code : ''} - ${match.fields.name ? match.fields.name : ''}</h5>
                      <p class="card-text"></p>
                    </div>
                  </div>
                    </div>
                  </div>`
                } else {
                    return `
                    <div class="row justify-content-center pb-4">
                    <div class="col-12 col-md-10 col-lg-8">
                    <div class="card">
                    <h5 class="card-header"><a href="/Medical Issues/${match.fields.title[0]}/${match.fields.title[0].toLowerCase()}-page.stml"></a>${match.fields.title[0]}</h5>
                    <div class="card-body">
                      <h5 class="card-title"></h5>
                      <p class="card-text"></p>
                    </div>
                  </div>
                    </div>
                  </div>`
                }
            }).join('');

            matchList.innerHTML = html;
        }
    }

    if (sessionString) {
        searchDB(sessionString.toString());
        console.log(`Check: ${sessionString.toString()}`);
    }

    search.addEventListener('input', () => searchDB(search.value));
});
