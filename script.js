

/* ==================================================
   PARTE 1 — AS PERGUNTAS DO QUIZ
   ================================================== */

// O const cria uma variável que não será substituída.
// Dentro dela temos um array (lista) com 15 objetos.
// Cada objeto representa uma pergunta.

const perguntas = [
    {
        pergunta: "1. O que é inteligência artificial generativa?",

        // Cada pergunta possui quatro alternativas.
        alternativas: [
            "Uma tecnologia que cria novos conteúdos a partir de padrões aprendidos",
            "Um programa que pensa exatamente como um ser humano",
            "Uma ferramenta que apenas pesquisa sites na internet",
            "Um sistema que funciona somente com comandos de voz"
        ],

        // O número indica a alternativa correta.
        // 0 = A, 1 = B, 2 = C, 3 = D.
        correta: 0,

        // Explicação que aparece depois da resposta.
        explicacao: "A IA generativa cria conteúdos, como textos e imagens, usando padrões aprendidos durante seu treinamento."
    },

    {
        pergunta: "2. Como uma IA generativa produz respostas?",
        alternativas: [
            "Ela consulta uma pessoa antes de responder",
            "Ela utiliza padrões aprendidos em grandes conjuntos de dados",
            "Ela sempre copia respostas prontas da internet",
            "Ela possui opiniões e sentimentos próprios"
        ],
        correta: 1,
        explicacao: "A IA aprende padrões a partir de dados e os utiliza para produzir novos conteúdos."
    },

    {
        pergunta: "3. Qual destes conteúdos pode ser criado por uma IA generativa?",
        alternativas: [
            "Apenas textos",
            "Apenas imagens",
            "Textos, imagens, músicas e códigos",
            "Somente planilhas"
        ],
        correta: 2,
        explicacao: "Existem ferramentas de IA generativa capazes de produzir diferentes tipos de conteúdo."
    },

    {
        pergunta: "4. Como a IA pode ajudar nos estudos?",
        alternativas: [
            "Garantindo notas máximas",
            "Fazendo o estudante nunca mais precisar estudar",
            "Substituindo completamente os professores",
            "Explicando assuntos e sugerindo exemplos"
        ],
        correta: 3,
        explicacao: "A IA pode auxiliar na aprendizagem, mas é importante estudar e conferir as informações."
    },

    {
        pergunta: "5. Qual é um benefício da IA generativa?",
        alternativas: [
            "Ajudar a desenvolver ideias e agilizar tarefas",
            "Eliminar todos os erros humanos",
            "Substituir todas as profissões",
            "Impedir a criatividade humana"
        ],
        correta: 0,
        explicacao: "A IA pode aumentar a produtividade e estimular a criatividade, funcionando como uma ferramenta de apoio."
    },

    {
        pergunta: "6. Uma pessoa precisa organizar ideias para um trabalho. Como a IA pode ajudar?",
        alternativas: [
            "Garantindo uma nota máxima",
            "Sugerindo formas de organizar as ideias",
            "Escolhendo tudo sem precisar de revisão",
            "Fazendo o trabalho sem participação humana"
        ],
        correta: 1,
        explicacao: "A IA pode sugerir estruturas e ideias, mas a pessoa deve revisar e decidir o que utilizar."
    },

    {
        pergunta: "7. A IA generativa pode apresentar informações falsas?",
        alternativas: [
            "Não, ela sempre apresenta fatos verdadeiros",
            "Somente quando está sem internet",
            "Sim, mesmo quando responde com confiança",
            "Não, porque todas as respostas são verificadas"
        ],
        correta: 2,
        explicacao: "A IA pode produzir informações incorretas. Por isso, é importante verificar as respostas."
    },

    {
        pergunta: "8. O que fazer ao receber uma informação importante de uma IA?",
        alternativas: [
            "Compartilhar imediatamente",
            "Acreditar sem questionar",
            "Ignorar qualquer outra fonte",
            "Conferir em fontes confiáveis"
        ],
        correta: 3,
        explicacao: "Comparar a resposta com fontes confiáveis ajuda a identificar possíveis erros."
    },

    {
        pergunta: "9. Por que não devemos confiar cegamente na IA?",
        alternativas: [
            "Porque suas respostas podem conter erros e limitações",
            "Porque ela nunca consegue responder perguntas",
            "Porque ela não pode criar conteúdos",
            "Porque todas as ferramentas são iguais"
        ],
        correta: 0,
        explicacao: "A IA é uma ferramenta útil, mas não é perfeita e precisa ser utilizada com senso crítico."
    },

    {
        pergunta: "10. Qual informação devemos evitar compartilhar com ferramentas de IA?",
        alternativas: [
            "Uma pergunta sobre matemática",
            "Senhas e dados pessoais sensíveis",
            "Uma ideia para uma história fictícia",
            "Uma dúvida sobre história"
        ],
        correta: 1,
        explicacao: "Proteger informações pessoais é essencial ao utilizar ferramentas digitais."
    },

    {
        pergunta: "11. O que significa um viés em uma IA?",
        alternativas: [
            "Uma resposta sempre correta",
            "Uma atualização automática do programa",
            "Uma tendência que pode favorecer ou prejudicar determinados grupos",
            "Uma ferramenta para editar imagens"
        ],
        correta: 2,
        explicacao: "Vieses podem surgir dos dados utilizados no treinamento e reproduzir preconceitos."
    },

    {
        pergunta: "12. Como a IA pode contribuir para a desinformação?",
        alternativas: [
            "Impedindo a criação de notícias",
            "Verificando automaticamente todos os fatos",
            "Eliminando notícias falsas da internet",
            "Produzindo conteúdos falsos que parecem verdadeiros"
        ],
        correta: 3,
        explicacao: "Conteúdos gerados por IA podem ser usados para espalhar informações enganosas."
    },

    {
        pergunta: "13. Qual é a atitude mais responsável ao usar IA em um trabalho escolar?",
        alternativas: [
            "Utilizar a ferramenta como apoio e revisar o conteúdo",
            "Copiar tudo sem ler",
            "Apresentar qualquer resposta como fonte comprovada",
            "Não verificar nenhuma informação"
        ],
        correta: 0,
        explicacao: "A IA pode ajudar, mas é importante compreender, revisar e assumir responsabilidade pelo trabalho."
    },

    {
        pergunta: "14. A IA deve substituir completamente o pensamento crítico humano?",
        alternativas: [
            "Sim, porque ela sempre sabe mais",
            "Não, devemos analisar e questionar suas respostas",
            "Sim, porque ela não comete erros",
            "Não, porque a IA não consegue produzir textos"
        ],
        correta: 1,
        explicacao: "O pensamento crítico permite avaliar informações e tomar decisões conscientes."
    },

    {
        pergunta: "15. Qual é a melhor maneira de utilizar a IA generativa?",
        alternativas: [
            "Aceitar todas as respostas sem verificar",
            "Compartilhar todos os dados pessoais",
            "Usar com responsabilidade, atenção e senso crítico",
            "Utilizar a IA para substituir todas as decisões humanas"
        ],
        correta: 2,
        explicacao: "O uso consciente envolve verificar informações, proteger dados e entender as limitações da tecnologia."
    }
];


/* ==================================================
   PARTE 2 — CONECTANDO O JAVASCRIPT AO HTML
   ================================================== */

// querySelector procura um elemento no HTML.
// O # indica que estamos procurando pelo ID.

const telaInicial = document.querySelector("#tela-inicial");
const introducao = document.querySelector("#introdução");
const telaQuiz = document.querySelector("#tela-quiz");
const telaResultado = document.querySelector("#tela-resultado");

const botaoComecar = document.querySelector("#botao-começar");
const botao = document.querySelector("#começar-quiz");
const botaoProxima = document.querySelector("#botao-proxima");
const botaoReiniciar = document.querySelector("#botao-reiniciar");

const progresso = document.querySelector("#progresso");
const perguntaElemento = document.querySelector("#pergunta");
const alternativasElemento = document.querySelector("#alternativas");
const feedback = document.querySelector("#feedback");

const pontuacao = document.querySelector("#pontuacao");
const mensagemFinal = document.querySelector("#mensagem-final");


/* ==================================================
   PARTE 3 — VARIÁVEIS DE CONTROLE
   ================================================== */

// let permite alterar o valor da variável.

// Guarda a posição da pergunta atual.
// Começa em 0 porque os arrays começam pelo índice zero.
let indiceAtual = 0;

// Guarda as respostas escolhidas pelo participante.
let respostas = [];

// Controla se a pessoa já respondeu à pergunta.
let respondeu = false;


/* ==================================================
   PARTE 4 — TROCAR DE TELA
   ================================================== */

// Esta função recebe uma tela como parâmetro.
// Primeiro esconde todas as telas.
// Depois mostra somente a tela escolhida.

function trocarTela(telaEscolhida) {

    telaInicial.hidden = true;
    introducao.hidden = true;
    telaQuiz.hidden = true;
    telaResultado.hidden = true;

    telaEscolhida.hidden = false;
}


/* ==================================================
   PARTE 5 — MOSTRAR UMA PERGUNTA
   ================================================== */

function mostrarPergunta() {

    // Busca a pergunta que corresponde ao índice atual.
    const perguntaAtual = perguntas[indiceAtual];

    // Verifica se a pergunta e suas alternativas existem.
    if (!perguntaAtual || !Array.isArray(perguntaAtual.alternativas)) {

        feedback.textContent = "Não foi possível carregar esta pergunta.";
        feedback.hidden = false;

        console.error("Pergunta inválida:", perguntaAtual);

        return;
    }

    // A pessoa ainda não respondeu à nova pergunta.
    respondeu = false;

    // Atualiza o contador de perguntas.
    // Exemplo: PERGUNTA 1 DE 15.
    progresso.textContent =
        `PERGUNTA ${indiceAtual + 1} DE ${perguntas.length}`;

    // Mostra o texto da pergunta no HTML.
    perguntaElemento.textContent = perguntaAtual.pergunta;

    // Limpa as alternativas da pergunta anterior.
    alternativasElemento.innerHTML = "";

    // Esconde o feedback e o botão de próxima pergunta.
    feedback.hidden = true;
    botaoProxima.hidden = true;


    // forEach percorre todas as alternativas do array.
    // Para cada alternativa, cria um botão.

    perguntaAtual.alternativas.forEach(function(alternativa, indice) {

        // Cria um novo botão no HTML.
        const botao = document.createElement("button");

        // Coloca o texto da alternativa dentro do botão.
        botao.textContent = alternativa;

        // Quando o botão for clicado, verifica a resposta.
        botao.addEventListener("click", function() {

            selecionarResposta(indice);

        });

        // Adiciona o botão dentro da área de alternativas.
        alternativasElemento.appendChild(botao);

    });
}


/* ==================================================
   PARTE 6 — VERIFICAR A RESPOSTA
   ================================================== */

function selecionarResposta(indiceEscolhido) {

    // Impede que a pessoa responda mais de uma vez.
    if (respondeu) {
        return;
    }

    // Recupera a pergunta atual.
    const perguntaAtual = perguntas[indiceAtual];

    // Verifica se a alternativa escolhida é válida.
    if (
        !Number.isInteger(indiceEscolhido) ||
        indiceEscolhido < 0 ||
        indiceEscolhido >= perguntaAtual.alternativas.length
    ) {

        feedback.textContent = "Selecione uma alternativa válida.";
        feedback.hidden = false;

        return;
    }

    // Informa que a pergunta já foi respondida.
    respondeu = true;

    // Compara a alternativa escolhida com a correta.
    // Se forem iguais, acertou será true.
    // Se forem diferentes, acertou será false.

    const acertou = indiceEscolhido === perguntaAtual.correta;

    // Guarda o resultado desta resposta no array.
    respostas.push({
        correta: acertou
    });

    // Mostra uma mensagem diferente dependendo do resultado.
    if (acertou) {

        feedback.textContent =
            "CORRETO! " + perguntaAtual.explicacao;

    } else {

        feedback.textContent =
            "NÃO FOI DESSA VEZ! " + perguntaAtual.explicacao;

    }

    // Torna o feedback visível.
    feedback.hidden = false;

    // Procura todos os botões de alternativas.
    const botoes = alternativasElemento.querySelectorAll("button");

    // Desativa todos os botões depois da resposta.
    botoes.forEach(function(botao) {

        botao.disabled = true;

    });

    // Mostra o botão para avançar.
    botaoProxima.hidden = false;
}


/* ==================================================
   PARTE 7 — AVANÇAR PARA A PRÓXIMA PERGUNTA
   ================================================== */

function proximaPergunta() {

    // Não permite avançar sem responder.
    if (!respondeu) {
        return;
    }

    // Aumenta o índice em 1.
    indiceAtual++;

    // Verifica se ainda existem perguntas.
    if (indiceAtual < perguntas.length) {

        // Se existirem, mostra a próxima pergunta.
        mostrarPergunta();

    } else {

        // Se acabaram as perguntas, mostra o resultado.
        mostrarResultado();

    }
}


/* ==================================================
   PARTE 8 — MOSTRAR A PONTUAÇÃO FINAL
   ================================================== */

function mostrarResultado() {

    // Muda para a tela de resultado.
    trocarTela(telaResultado);

    // filter percorre o array e mantém somente
    // as respostas em que correta é true.
    // length conta quantas respostas foram corretas.

    const totalAcertos = respostas.filter(function(resposta) {

        return resposta.correta;

    }).length;

    // Atualiza a frase de pontuação no HTML.
    // O valor muda de acordo com os acertos.
    pontuacao.textContent =
        `Você acertou ${totalAcertos} de ${perguntas.length} perguntas!`;


    // Mostra uma mensagem de acordo com a pontuação.
    if (totalAcertos >= 12) {

        mensagemFinal.textContent =
            "Excelente! Você demonstrou muito conhecimento sobre IA generativa.";

    } else if (totalAcertos >= 7) {

        mensagemFinal.textContent =
            "Muito bem! Você já conhece bastante sobre IA, mas ainda pode aprender mais.";

    } else {

        mensagemFinal.textContent =
            "Continue aprendendo! Agora você conhece pontos importantes sobre o uso responsável da IA.";

    }
}


/* ==================================================
   PARTE 9 — REINICIAR O QUIZ
   ================================================== */

function reiniciarQuiz() {

    // Volta para a primeira pergunta.
    indiceAtual = 0;

    // Apaga as respostas anteriores.
    respostas = [];

    // Informa que ainda não respondeu.
    respondeu = false;

    // Volta para a tela inicial.
    trocarTela(telaInicial);
}


/* ==================================================
   PARTE 10 — EVENTOS DOS BOTÕES
   ================================================== */

// addEventListener espera uma ação acontecer.
// Neste caso, a ação é o clique do usuário.

// Botão COMEÇAR: abre a introdução.
botaoComecar.addEventListener("click", function() {

    trocarTela(introducao);

});


// Botão ENTENDI, VAMOS AO QUIZ:
// abre o quiz e mostra a primeira pergunta.
botao.addEventListener("click", function() {

    trocarTela(telaQuiz);

    mostrarPergunta();

});



// Botão PRÓXIMA PERGUNTA:
// chama a função que avança no quiz.
botaoProxima.addEventListener("click", proximaPergunta);


// Botão JOGAR NOVAMENTE:
// reinicia todo o quiz.
botaoReiniciar.addEventListener("click", reiniciarQuiz);
