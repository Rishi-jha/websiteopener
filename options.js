function saveOptions(e) {
  e.preventDefault();
  browser.storage.sync.set({
    base_url: document.querySelector("#base_url").value
  });
}

function restoreOptions() {

  function setCurrentChoice(result) {
    document.querySelector("#base_url").value = result.base_url || "https://www.google.com/search?q=";
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var getting = browser.storage.sync.get("base_url");
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);