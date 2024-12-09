document.getElementById("btnEntrar").addEventListener("click", function() {
    let username = btoa(document.querySelectorAll(".campoTexto")[1].value)
    let password = btoa(document.querySelectorAll(".campoTexto")[2].value)
    let http = encode(`localhost:8080?u=${username}&p=${password}`)
    alert(http)
})
