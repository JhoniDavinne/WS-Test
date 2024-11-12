class WEBSOCKET {
    constructor(server_url) {
        this.server_url = server_url;
        this.ws = null;
    }

    connect = () => {
        this.ws = new WebSocket(this.server_url);
        this.ws.onopen = this.onopen;
        this.ws.onmessage = this.onmessage;
        this.ws.onclose = this.onclose;
        this.ws.onerror = this.onerror;
    }

    onopen = () => {
        console.log("Conexão WebSocket estabelecida.");
    };

    onmessage = (event) => {
        const responseArea = document.getElementById("responseArea");
        responseArea.innerHTML += `<p>Mensagem recebida do servidor: ${event.data}</p>`;
    };

    onclose = () => {
        console.log("Conexão WebSocket fechada.");
    };

    onerror = (error) => {
        console.error("Erro na conexão WebSocket:", error);
    };

    sendMessage = () => {
        const messageInput = document.getElementById("messageInput");
        const message = messageInput.value;
    
        if (message && this.ws) {
            this.ws.send(message);
            messageInput.value = "";
        } else {
            alert("Por favor, digite uma mensagem.");
        }
    }
}

const ws = new WEBSCOKET("wss://echo.websocket.org");
ws.connect();
