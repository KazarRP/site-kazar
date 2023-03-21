// Recherche dans les balises summary
function searchSummaries() {
  const searchTerm = document
    .getElementById("searchTerm")
    .value.trim()
    .toLowerCase();
  if (searchTerm === "") {
    return;
  }
  const summaryTags = document.getElementsByTagName("summary");
  const results = [];
  for (let i = 0; i < summaryTags.length; i++) {
    const text = summaryTags[i].textContent.toLowerCase();
    if (text.includes(searchTerm)) {
      results.push(summaryTags[i].parentNode.innerHTML);
    }
  }
  const uniqueResults = [...new Set(results)];
  const searchResults = document.getElementById("searchResults");
  searchResults.innerHTML = "";
  if (uniqueResults.length > 0) {
    for (let i = 0; i < uniqueResults.length; i++) {
      const result = document.createElement("li");
      result.innerHTML = uniqueResults[i];
      searchResults.appendChild(result);
    }
  } else {
    const noResult = document.createElement("text");
    noResult.innerHTML = "Aucun résultat trouvé.";
    searchResults.appendChild(noResult);
  }
}

// affiche le bouton back to top après scroll
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("back_totop").classList.add("afficher_backtotop");
    document.getElementById("back_totop").style.display = "block";
  } else {
    document
      .getElementById("back_totop")
      .classList.remove("afficher_backtotop");
    document.getElementById("back_totop").style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
