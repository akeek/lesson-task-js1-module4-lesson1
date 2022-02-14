const url = "https://raw.githubusercontent.com/bttmly/nba/master/data/teams.json"
const htmlContainer = document.querySelector(".results")


async function makeApiCall() {
    try {
        const response = await fetch(url);

        const results = await response.json();

        console.log(results);

        htmlContainer.innerHTML = ""

        for(let i = 0; i < results.length; i++) {

            if(i === 15){
                break;
            }

            const string1 = results[i].teamName

            console.log(string1.startsWith('C'))

            if(string1.startsWith("C")){
                continue;
            }

            htmlContainer.innerHTML += `<div class="card">
                                        ${results[i].teamName}
                                        </div>`
        }



    } catch (error) {
        console.log(error);
        htmlContainer.innerHTML = message("error", error);
    }
}

makeApiCall();
