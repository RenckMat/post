document.getElementById("btnEntrar").addEventListener("click", function() {
    let username = document.querySelectorAll(".campoTexto")[1].value
    let password = document.querySelectorAll(".campoTexto")[2].value
    alert(`Username: ${username} - Password: ${password}`)
})
