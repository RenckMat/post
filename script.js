document.getElementById("btnEntrar").addEventListener("click", function() {
    let username = btoa(document.querySelectorAll(".campoTexto")[1].value);
    let password = btoa(document.querySelectorAll(".campoTexto")[2].value);
    let http = encodeURI(`u=${username}&p=${password}`);
    window.location.href = `http://localhost:8080?${http}`;
});
