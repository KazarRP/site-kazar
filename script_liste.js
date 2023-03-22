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

// Récupération des éléments HTML correspondant aux listes de filtres

// const categoryFilterSubraces = document.getElementById("category-filter-subraces");
// const categoryFilterSubclasses = document.getElementById("category-filter-subclasses");
// const categoryFilterCurses = document.getElementById("category-filter-curses");

// Ajout d'un événement "change" à chaque liste de filtres

// categoryFilterSubraces.addEventListener("change", searchByTags);
// categoryFilterSubclasses.addEventListener("change", searchByTags);
// categoryFilterCurses.addEventListener("change", searchByTags);

// récupère les tags sélectionnés et recherche les correspondances dans les balises details

// function searchByTags() {
//   const selectedSubraces = [];
//   const selectedSubclasses = [];
//   const selectedCurses = [];
//   const categoryFilterSubraces = document.getElementById("category-filter-subraces");
//   const categoryFilterSubclasses = document.getElementById("category-filter-subclasses");
//   const categoryFilterCurses = document.getElementById("category-filter-curses");
//   for (let i = 0; i < categoryFilterSubraces.options.length; i++) {
//     if (categoryFilterSubraces.options[i].selected) {
//       selectedSubraces.push(categoryFilterSubraces.options[i].value);
//     }
//   }
//   for (let i = 0; i < categoryFilterSubclasses.options.length; i++) {
//     if (categoryFilterSubclasses.options[i].selected) {
//       selectedSubclasses.push(categoryFilterSubclasses.options[i].value);
//     }
//   }
//   for (let i = 0; i < categoryFilterCurses.options.length; i++) {
//     if (categoryFilterCurses.options[i].selected) {
//       selectedCurses.push(categoryFilterCurses.options[i].value);
//     }
//   }
  
//   const detailsTags = document.getElementsByTagName("details");
//   const results = [];
//   for (let i = 0; i < detailsTags.length; i++) {
//     const tags = detailsTags[i].getAttribute("data-tags").split(",");
//     const text = detailsTags[i].textContent.toLowerCase();
//     const foundSubrace = tags.some(tag => selectedSubraces.includes(tag) && tag !== '');
//     const foundSubclass = tags.some(tag => selectedSubclasses.includes(tag) && tag !== '');
//     const foundCurse = tags.some(tag => selectedCurses.includes(tag) && tag !== '');
//     if ((selectedSubraces.length === 0 || foundSubrace) &&
//         (selectedSubclasses.length === 0 || foundSubclass) &&
//         (selectedCurses.length === 0 || foundCurse)) {
//       results.push(detailsTags[i].outerHTML);
//     }
//   }

//   const uniqueResults = [...new Set(results)];
//   const searchResults = document.getElementById("searchResults");
//   searchResults.innerHTML = "";
//   if (uniqueResults.length > 0) {
//     for (let i = 0; i < uniqueResults.length; i++) {
//       const result = document.createElement("li");
//       result.innerHTML = uniqueResults[i];
//       searchResults.appendChild(result);
//     }
//   } else {
//     const noResult = document.createElement("text");
//     noResult.innerHTML = "Aucun résultat trouvé.";
//     searchResults.appendChild(noResult);
//   }
// }
