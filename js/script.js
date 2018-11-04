// const apiKey = "GttI1JDR9KCqr5Iumj4WsOy99mbBcREBVIECyjHE";

function getParks(stateCode, numOfResults) {
    fetch(`https://api.nps.gov/api/v1/parks?stateCode=${stateCode}&limit=${numOfResults}&start=10`)
    .then(response => {
        if (response.ok) {
            return response.json();
        } throw new err(response.statusText);
    }) 
    .then(responseJson => displayParks(responseJson))
    .catch(err => {
        $('#js-error-message').text(`Something went wrong: ${err.message}`)
    });
}

function displayParks(responseJson) {
    console.log(responseJson);
    let parkInfo = responseJson.data.map(item => 
        `<li>${item.fullName}</li>
        <p>${item.description}<br>
        <a href="${item.url}">vist website</a></p>`);
        $('.js-relsuts-list').empty().html(parkInfo)
}

function watchform (){
    $('form').submit(e => {
        e.preventDefault();
        const stateCode = $('.js-stateCode').val();
        const numOfResults = $('.numOfResults').val();
        getParks(stateCode, numOfResults);
    })
}

$(function() {
    watchform();
})