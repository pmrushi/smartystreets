const SmartyStreetsSDK = require("smartystreets-javascript-sdk");
const SmartyStreetsCore = SmartyStreetsSDK.core;
const Lookup = SmartyStreetsSDK.usStreet.Lookup;

let authId = '<authId>';
let authToken = '<authToken>';
const credentials = new SmartyStreetsCore.StaticCredentials(authId, authToken);
let clientBuilder = new SmartyStreetsCore.ClientBuilder(credentials);
let client = clientBuilder.buildUsStreetApiClient();

let lookup = new Lookup();
lookup.street = '1 Rosedale';
lookup.city = 'Baltimore';
lookup.state = 'MD';
lookup.maxCandidates = 10;

client.send(lookup)
    .then(handleSuccess)
    .catch(handleError);

function handleSuccess(response) {
    console.log('---------');
    console.log(response);
    response.lookups.map(lookup => console.log(lookup.result));
}

function handleError(response) {
    console.log(response);
}

