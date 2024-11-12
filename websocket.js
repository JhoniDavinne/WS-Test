const ws = new WebSocket("wss://echo.websocket.org");

ws.onopen = () => {
    console.log("Conexão WebSocket estabelecida.");
    ws.send("Mensagem de teste");  // Envia uma mensagem ao servidor

    // Fechar a conexão após 5 segundos, por exemplo
    setTimeout(() => {
        ws.close();
        console.log("Conexão WebSocket encerrada.");
    }, 5000);
};

ws.onmessage = (event) => {
    console.log("Mensagem recebida do servidor:", event.data);
};

ws.onclose = () => {
    console.log("Conexão WebSocket fechada.");
};

ws.onerror = (error) => {
    console.error("Erro na conexão WebSocket:", error);
};
