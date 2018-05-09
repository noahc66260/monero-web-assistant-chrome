document.addEventListener('DOMContentLoaded', function() {

  var siteStatusTypes = {
    "UNKNOWN" : 0,
    "GOOD": 1,
    "BAD": 2
  };

  var recommendedSites = {
    "getmonero.org": "This is the official Monero site.",
    "mymonero.com": "MyMonero is the most widely used Monero web wallet."
  };

  var PHISHING_SITE_MESSAGE = "This site has been labeled as a phishing site by the Monero community. Phishing sites are fake sites pretending to be legitimate sites to exploit the user's trust. Please visit a recommended site."

  var cautionSites = {
    "minergate.com": "Minergate has been known to steal hashpower from miners using their pool",
    "freewallet.org": "Freewallet has been known to steal user funds",
    "getmoonero.org": PHISHING_SITE_MESSAGE
  }; 

  var protocols = {
    "https:" : "You are using a secure connection.",
    "http:" : "You are using an insecure connection. Do not use this site for any sensitive workflows, like generating a seed or logging in, because someone snooping your connection can see this information."
  };


  var messageElement = document.getElementById('messages');
  var siteStatus = siteStatusTypes.UNKNOWN;

  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {

    console.log(recommendedSites);
    var site = new URL(tabs[0].url);
    console.log(tabs);
    console.log("url is " + site.host);
    console.log(messageElement);
    var sitehost = site.host;
    var siteMessage = document.createElement("div");
    if(recommendedSites[site.host] !== undefined) {
      document.body.style.backgroundColor = "green"; 
      siteMessage.innerText = recommendedSites[site.host]
      siteStatus = siteStatusTypes.GOOD;
    } else if (cautionSites[site.host] !== undefined) {
      document.body.style.backgroundColor = "red"; 
      siteMessage.innerText = cautionSites[site.host]      
      siteStatus = siteStatusTypes.BAD;
    } else {
      siteMessage.innerText = "No information is available for this website. It may not be Monero related. If it is then it is not categorized.";
    }
    messageElement.appendChild(siteMessage);

    var protocol = site.protocol;
    console.log("protocol is " + protocol);
    console.log("site status is " + siteStatus);
    console.log(siteStatusTypes);
    if(protocol in protocols) {
      var protocolMessage = document.createElement("div");
      protocolMessage.innerText = protocols[protocol];
      messageElement.appendChild(protocolMessage);
    }
    if(protocol === "http:" && siteStatus !== siteStatusTypes.BAD) {
      document.body.style.backgroundColor = "orange"; 
    }
    
  });
  //var protocol = window.location.protocol;

  // TODO: A simple way to report a site as a phishing site.
  // Perhaps it could be an email to a maintainer or a link to Github
  // to report an issue.

  // TODO: Perhaps a message if the user is using http.
}, false);
