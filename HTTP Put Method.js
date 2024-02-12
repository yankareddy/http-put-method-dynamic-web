let userInputEl = document.getElementById("userInput");
let requestBodyEl = document.getElementById("requestBody");
let sendPutRequestBtnEl = document.getElementById("sendPutRequestBtn");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");
let loadingEl = document.getElementById("loading");

function displayResult(result) {
    loadingEl.classList.add("d-none");
    requestStatusEl.textContent = result.code;
    httpResponseEl.textContent = JSON.stringify(result);
}

function sendPutRequest() {
    loadingEl.classList.remove("d-none");
    let data = requestBodyEl.value;
    let url = "https://gorest.co.in/public-api/users" + userInputEl.value;
    let options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "?"
        },
        body: JSON.stringify(data)
    }
    fetch(url, options)
        .then(function(response) {
            return response.json()
        }).then(function(jsonData) {
            displayResult(jsonData);
        });

}

sendPutRequestBtnEl.addEventListener("click", sendPutRequest);