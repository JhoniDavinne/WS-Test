const ws = new WebSocket("wss://echo.websocket.org");

ws.onopen = () => {
    console.log("Conexão WebSocket estabelecida.");
};

ws.onmessage = (event) => {
    const responseArea = document.getElementById("responseArea");
    console.log("Mensagem recebida do servidor:", event.data);
    responseArea.innerHTML += `<p>${event.data}</p>`;
};

ws.onclose = () => {
    console.log("Conexão WebSocket fechada.");
};

ws.onerror = (error) => {
    console.error("Erro na conexão WebSocket:", error);
};

function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    const message = messageInput.value;

    if (message) {
        ws.send(message);
        messageInput.value = "";
    } else {
        alert("Por favor, digite uma mensagem.");
    }
}