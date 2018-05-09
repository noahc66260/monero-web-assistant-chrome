Author: Noah Ruderman

I thought a good solution to helping new users avoid phishing sites and bad actors like Freewallet could be a browser extension that helps identify the site as either trusted, untrusted, or uncategorized with a message explaining the nature of the site if applicable. The idea would be that someone new to Monero could install this, and when they're using sites to set up web wallets or download new software, they could check the extension first. It may be a better solution to recommend an extension instead of having to tell them directly on the subreddit to avoid certain sites.

I've thrown together a quick proof of concept I've published in the Chrome extension store: https://chrome.google.com/webstore/detail/ahddnobjgdcpnohlodhkgihbjlofimpg/publish-accepted?authuser=2

Supported sites are getmonero.org, mymonero.com, freewallet.org, and minergate.com. The extension will have a green background for trusted sites, a red background for untrusted sites, and an orange background if you happen to be using an unsecure connection on a trusted site.

Currently only Chrome is supported.

This software is still a prototype.
