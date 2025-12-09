
const perguntas = [
    {
        pergunta: "Qual é o lugar de origem dos porquinhos da india?",
        opcoes: ["América do Sul", "Europa", "Oceania", "África"],
        resposta: 0
    },
    {
        pergunta: "Qual é a classe animal dos porquinhos da india?",
        opcoes: ["Roedores", "Marsupiais", "Répteis", "Anfíbios"],
        resposta: 0
    },
    {
        pergunta: "Qual é a expectativa de vida média dos porquinhos da india?",
        opcoes: ["2-3 anos", "4-6 anos", "8-10 anos", "12-15 anos"],
        resposta: 1
    },
    {
        pergunta: "Qual é a dieta principal dos porquinhos da india?",
        opcoes: ["Carnívora", "Herbívora", "Onívora", "Insectívora"],
        resposta: 1
    },
    {
        pergunta: "Qual é o nome científico dos porquinhos da india?",
        opcoes: ["Cavia porcellus", "Mus musculus", "Rattus norvegicus", "Lepus europaeus"],
        resposta: 0
    },
    {
        pergunta: "Quantos dentes o porquinho da india possui?",
        opcoes: ["16", "20", "24", "28"],
        resposta: 1
    },
    {
        pergunta: "Qual filme é protagonizado por porquinhos da india?",
        opcoes: ["Ratatouille", "G-Force: Agentes Especiais", "Zootopia", "Madagascar"],
        resposta: 1
    }
];

let indice = 0;
let pontos = 0;

const perguntaEl = document.getElementById("pergunta");
const opcoesEl = document.getElementById("opcoes");
const proximoBtn = document.getElementById("proximo");
const resultadoEl = document.getElementById("resultado");
const recomecarBtn = document.getElementById("recomecar");

function carregarPergunta() {
    const q = perguntas[indice];

    perguntaEl.textContent = q.pergunta;
    opcoesEl.innerHTML = "";

    q.opcoes.forEach((opcao, i) => {
        const botao = document.createElement("button");
        botao.textContent = opcao;

        botao.addEventListener("click", () => verificarResposta(i, botao));

        opcoesEl.appendChild(botao);
    });
}

function verificarResposta(i, botao) {
    const q = perguntas[indice];

    document.querySelectorAll("#opcoes button").forEach(b => b.disabled = true);

    if (i === q.resposta) {
        botao.classList.add("correta");
        pontos++;
    } else {
        botao.classList.add("errada");
    }

    proximoBtn.classList.remove("hidden");
}

proximoBtn.addEventListener("click", () => {
    indice++;

    if (indice < perguntas.length) {
        proximoBtn.classList.add("hidden");
        carregarPergunta();
    } else {
        mostrarResultado();
    }
});

function mostrarResultado() {
    perguntaEl.classList.add("hidden");
    opcoesEl.classList.add("hidden");
    proximoBtn.classList.add("hidden");

    resultadoEl.classList.remove("hidden");
    recomecarBtn.classList.remove("hidden");

    resultadoEl.textContent = `Você acertou ${pontos} de ${perguntas.length}! 🐹✨`;
}

recomecarBtn.addEventListener("click", () => {
    indice = 0;
    pontos = 0;

    resultadoEl.classList.add("hidden");
    recomecarBtn.classList.add("hidden");

    perguntaEl.classList.remove("hidden");
    opcoesEl.classList.remove("hidden");

    carregarPergunta();
});

carregarPergunta();