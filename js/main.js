let nav = document.querySelector(".navitems")

document.querySelector("#openmenu").addEventListener("click", function(){
    nav.style.right = '0'
})

document.querySelector("#closemenu").addEventListener("click", function(){
    nav.style.right = '-300px'
})