var listener = function(details) {
  if (details.url.indexOf("blog.chinatimes.com") !== -1) {
    return {};
  } else {
    return {
      cancel: true
    };
  }
};

var urls = [
  "*://*.chinatimes.com/*",
  "*://*.ctitv.com.tw/*",
  "*://*.ctv.com.tw/*",
  "*://*.want-daily.com/*"
];

chrome.webRequest.onBeforeRequest.addListener(listener, { urls: urls }, [ "blocking" ]);
