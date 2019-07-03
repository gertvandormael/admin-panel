let drop_downs = document.querySelectorAll("li.dropdown");
for (element of drop_downs) {
    element.children[0].addEventListener("click", function(){
        this.parentNode.classList.toggle("active");
    });
}