function userSearch() {
let input = document.getElementById("user-search").value;
console.log('Hola I DID IT!')


// opens in another window
//alert(input)
window.open(`https://www.google.com/search?q=${input}`, '_blank')
}

console.log(input, "<<<<<input");