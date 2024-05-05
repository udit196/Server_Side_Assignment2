const urlString = "https://www.google.com/index";
const url = new URL(urlString);
const hostname = url.hostname;
const pathname = url.pathname;
console.log(`Hostname: ${hostname}`);
console.log(`Pathname: ${pathname}`);