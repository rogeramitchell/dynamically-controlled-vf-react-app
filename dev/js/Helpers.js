// USAGE EXAMPLE
// const recordId = getUrlParameters()["id"];
export function getUrlParameters() {
	var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

  const urlParams = {};
  while (match = search.exec(query))
     urlParams[decode(match[1]).toLowerCase()] = decode(match[2]);

  return urlParams;
}