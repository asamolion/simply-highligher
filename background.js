chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript(null, {
        file: "highlight.js"
    })
});

chrome.tabs.onActivated.addListener(function () {
    var ba = chrome.browserAction;
    ba.setBadgeBackgroundColor({
        color: [255, 255, 255, 0]
    });
    ba.setBadgeText({
        text: ''
    });
});


chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    // enable or disable badge depending upon message from content_script
    var ba = chrome.browserAction;
    if (message === "enable") {
        ba.setBadgeBackgroundColor({
            color: [0, 255, 0, 128]
        });
        ba.setBadgeText({
            text: '!'
        });
        chrome.notifications.create({
            type: "basic",
            iconUrl: "icons/not-so-simple128.png",
            title: "Be Careful!",
            message: "This tutorial doesn't seem to be aimed at beginners!"
        });
    } else if (message === "disable") {
        ba.setBadgeBackgroundColor({
            color: [255, 255, 255, 0]
        });
        ba.setBadgeText({
            text: ''
        });

    }

});