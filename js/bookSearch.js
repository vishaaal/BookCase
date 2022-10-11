const cardDivs = document.getElementsByClassName("col-lg-4 mb-4");
const collection = document.getElementsByClassName("card-title");
const toDisplay = document.getElementById("search-result")

const titleSearch = () => {
    let filter, i, searchInput, flag;
    searchInput = document.getElementById('search-input');
    // Don't search for null string
    if(searchInput.value == "") {
        toDisplay.textContent = "";
        displayAllCards();
        return;
    }
    let pos = [];
    filter = searchInput.value.toUpperCase();
    for (i = 0; i < collection.length; i++) {

        cardTitle = collection[i].innerHTML || collection[i].innerText;

        if (cardTitle.toUpperCase().indexOf(filter) > -1) {
            flag = 1;
            toDisplay.textContent = "Lucky! It's listed";
            pos.push(i);
        } else if(flag!=1) {
            toDisplay.textContent = "Couldn't find here. Contribute!? 😀";
        }               
    }
    if(flag)
        displaySelectedCards(pos);
}

// can we reduce calls to this function?
const displaySelectedCards = (pos) => {
    let i;
    // hides other cards
    for (i=0; i<cardDivs.length; i++){
        if(!pos.includes[i])
            cardDivs[i].style.display = "none";
    }
    // displays matches 
    for (i=0; i<pos.length; i++){
            cardDivs[pos[i]].style.display = "block";
    }

}

const displayAllCards = () => {
    for (i=0; i<cardDivs.length; i++){
        cardDivs[i].style.display = "block";
    }
}