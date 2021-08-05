// Challenge: Extract the domain name from a URL (5 kyu)

// Instructions:

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

// My code below:

function domainName(url) {
  // first period position
  let firstPeriodPos = url.indexOf(".");
  // second period position
  let secondPeriodPos = url.indexOf(".", firstPeriodPos + 1);
  // forward slash position
  let forwardSlashPos = url.indexOf("/");
  let secondForwardSlashPos = forwardSlashPos + 1;
  let domainName;

  // if url contains 'www', extract from after first period up to the last period
  if (url.includes("www")) {
    domainName = url.slice(firstPeriodPos + 1, secondPeriodPos);
  }
  // if there is a forward slash and no 'www', extract from after second forward slash up to first period
  if (forwardSlashPos && !url.includes("www")) {
    domainName = url.slice(secondForwardSlashPos + 1, firstPeriodPos);
  }
  // if there is no 'http' and 'www', extract from beginning up to first period
  if (!url.includes("http") && !url.includes("www")) {
    domainName = url.slice(0, firstPeriodPos);
  }
  return domainName;
}

// Tests below:

console.log(domainName("http://github.com/carbonfive/raygun")); // github
console.log(domainName("http://www.zombie-bites.com")); // zombie-bites
console.log(domainName("https://www.cnet.com")); // cnet
console.log(domainName("https://www.facebook.com")); // facebook
