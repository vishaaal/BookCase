const collection = document.getElementsByClassName("card-title");
const toDisplay = document.getElementById("search-result")


const titleSearch = () => {
    let filter, i, searchInput;
    searchInput = document.getElementById('search-input');
    // Don't search for null string
    if(searchInput.value == "") {
        toDisplay.textContent = "";
        return;
    }
    filter = searchInput.value.toUpperCase();
    for (i = 0; i < collection.length; i++) {

        cardTitle = collection[i].innerHTML || collection[i].innerText;

        if (cardTitle.toUpperCase().indexOf(filter) > -1) {
            toDisplay.textContent = "Lucky! It's listed";
            break;
        } else {
            toDisplay.textContent = "Couldn't find here. Contribute!? 😀";
        }        
        
    }
}