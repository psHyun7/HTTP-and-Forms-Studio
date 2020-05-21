function setSearchEngine(searchEngine) {
    let output = "https://www." + searchEngine + ".com/";
    let path = {
        google : "search",
        duckduckgo : "",
        bing : "search",
        ask : "web"
    };
    return output + path[searchEngine]
}	
window.addEventListener("load", function(){
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        let q = document.querySelector("input[name=q]");
        let srchegn = document.querySelector("input[name=srchegn]");
        if (!q.value || !document.querySelector("input[name=srchegn]:checked")) {
            alert("Search Parameter and Search Engine Required.")
            event.preventDefault()
        } else {
            let searchEngine = document.querySelector("input[name=srchegn]:checked").value;
            form.action = setSearchEngine(searchEngine);
        };
        
    })
    
});