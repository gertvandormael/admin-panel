let drop_downs = document.querySelectorAll("li.dropdown");
for (element of drop_downs) {
    element.children[0].addEventListener("click", function(){
        for (elem of drop_downs) {
            if (this.parentNode != elem && elem.classList.contains("active")) {
                elem.classList.remove("active");
            }
        }

        this.parentNode.classList.toggle("active");
    });
}

