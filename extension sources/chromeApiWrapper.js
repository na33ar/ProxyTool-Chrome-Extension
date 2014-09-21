storage = {
    get: function (key, func) {
        chrome.storage.sync.get(key, function (items) {
            func(items);            
        });
    },
    set: function (key, value) {
        chrome.storage.sync.set(key, value);
    }
};
