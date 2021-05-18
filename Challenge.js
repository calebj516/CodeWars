// Extract the domain name from a URL
// This uses the URL API, which is not allowed in this particular CodeWars challenge.

function domainName(url) {
  let domain = new URL(url);
  domain = domain.hostname.replace(/www.|.com/gi, "");
  return domain;
}

console.log(domainName("https://www.google.com"));
