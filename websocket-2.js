class WEBSCOKET {
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
        console.log("Conexão WebSocket encerrada.");
    };

    onerror = (error) => {
        console.error("Erro na conexão WebSocket:", error);
    };

    close = () => {
        this.ws.close();
        console.log("Conexão WebSocket sendo encerrada.");
    };

    sendMessage = (message) => {
        return new Promise((resolve, reject) => {
            try {
                if (this.ws) {
                    if (message) {
                        this.ws.send(message);
                        resolve("Mensagem enviada com sucesso.");
                    } 
                    reject("Digite uma mensagem para enviar.");
                }
                reject("Conexão WebSocket nao estabelecida.");

            } catch (error) {
                reject("Erro ao enviar mensagem:", error);
            }
        });
    }
}

const ws = new WEBSCOKET("wss://echo.websocket.org");
const messageInput = document.getElementById("message");

const connect = () => {
    ws.connect();
}

const disconnect = () => {
    ws.close();
}

const sendMessage = () => {
    const message = messageInput.value;
    ws.sendMessage(message)
        .then(result => {
            messageInput.value = "";
            console.log(result);
        })
        .catch( error => console.error(error));
}

connect();

