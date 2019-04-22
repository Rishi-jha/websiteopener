
function onError(error) {
  console.log(`Error: ${error}`);
}

function onGot(item) {
  var base_url = "https://www.google.com/search?q=";
  if (item.base_url) {
    base_url = item.base_url;
  }
  function gotourl(e) {

    var ticket_id  = document.getElementById("id_ticket").value;
    url = base_url + ticket_id;

    window.open(url)
    };

document.getElementById("button").addEventListener("click", gotourl)
}

var getting = browser.storage.sync.get("base_url");
getting.then(onGot, onError);