// criar a função para adicionar
document.getElementById('appendButton').addEventListener("click", function(){
    var itemText = document.getElementById("itemText").value;
    var color = document.querySelector('input[name="colors"]:checked').value;

    // criar e adicionar na lista
    const node = document.createElement("li");
    const textnode = document.createTextNode(itemText);
    node.appendChild(textnode);
    node.style.color = color;

    document.getElementById("mylist").appendChild(node);
});
