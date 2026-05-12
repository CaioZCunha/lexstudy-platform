
// Base de dados do quiz atualizada com 15 questões
const questoes = [
    // --- DIREITO PROCESSUAL E CIVIL ---
    {
        pergunta: "Qual é o prazo para interpor Recurso de Apelação no Processo Civil?",
        alternativas: ["5 dias", "10 dias", "15 dias", "30 dias"],
        respostaCorreta: 2 // 15 dias
    },
    {
        pergunta: "No Direito Civil, aos quantos anos cessa a menoridade (atinge-se a maioridade civil)?",
        alternativas: ["16 anos", "18 anos", "21 anos", "14 anos"],
        respostaCorreta: 1 // 18 anos
    },
    {
        pergunta: "São absolutamente incapazes de exercer pessoalmente os atos da vida civil:",
        alternativas: ["Os menores de 16 anos", "Os ébrios habituais", "Os pródigos", "Os maiores de 70 anos"],
        respostaCorreta: 0 // Os menores de 16 anos
    },
    {
        pergunta: "Qual é o regime de bens supletivo (regra geral) no Brasil, caso os noivos não façam pacto antenupcial?",
        alternativas: ["Comunhão universal de bens", "Separação total de bens", "Participação final nos aquestos", "Comunhão parcial de bens"],
        respostaCorreta: 3 // Comunhão parcial de bens
    },

    // --- DIREITO PENAL ---
    {
        pergunta: "No Direito Penal, o erro de tipo essencial:",
        alternativas: ["Exclui sempre a culpa", "Exclui o dolo, mas permite a punição por crime culposo, se previsto em lei", "Não tem efeito prático", "Aumenta a pena na metade"],
        respostaCorreta: 1 // Exclui o dolo...
    },
    {
        pergunta: "O que caracteriza o 'Estado de Necessidade' no Direito Penal?",
        alternativas: ["Agressão injusta, atual ou iminente, a direito seu ou de outrem.", "Praticar o fato para salvar de perigo atual direito próprio ou alheio, que não provocou por sua vontade.", "Cumprimento de ordem de superior hierárquico.", "Atuar amparado por uma lei que obriga a conduta."],
        respostaCorreta: 1 // Praticar o fato para salvar de perigo atual...
    },
    {
        pergunta: "O homicídio qualificado é considerado pela legislação brasileira como um crime:",
        alternativas: ["Hediondo", "De menor potencial ofensivo", "Imprescritível", "Inafiançável, mas não hediondo"],
        respostaCorreta: 0 // Hediondo
    },
    {
        pergunta: "Na tentativa, pune-se o crime tentado com a pena correspondente ao crime consumado, diminuída de:",
        alternativas: ["Um a dois terços", "Metade", "Um sexto a um terço", "Sem diminuição"],
        respostaCorreta: 0 // Um a dois terços
    },

    // --- DIREITO CONSTITUCIONAL ---
    {
        pergunta: "A quem pertence o poder constituinte originário?",
        alternativas: ["Ao Presidente da República", "Ao STF", "Ao Congresso Nacional", "Ao Povo"],
        respostaCorreta: 3 // Ao Povo
    },
    {
        pergunta: "Para qual finalidade serve o Habeas Data?",
        alternativas: ["Garantir a liberdade de locomoção", "Proteger direito líquido e certo não amparado por Habeas Corpus", "Assegurar o conhecimento de informações relativas à pessoa do impetrante em bancos de dados governamentais", "Anular ato lesivo ao patrimônio público"],
        respostaCorreta: 2 // Assegurar o conhecimento de informações...
    },
    {
        pergunta: "Qual das alternativas abaixo NÃO é considerada uma cláusula pétrea na Constituição Federal?",
        alternativas: ["A forma federativa de Estado", "O voto direto, secreto, universal e periódico", "O sistema de governo presidencialista", "A separação dos Poderes"],
        respostaCorreta: 2 // O sistema de governo presidencialista
    },
    {
        pergunta: "A idade mínima exigida pela Constituição para se candidatar ao cargo de Presidente da República é:",
        alternativas: ["21 anos", "30 anos", "35 anos", "40 anos"],
        respostaCorreta: 2 // 35 anos
    },

    // --- DIREITO DO TRABALHO ---
    {
        pergunta: "Qual o limite da jornada de trabalho normal estabelecido pela Constituição Federal (regra geral)?",
        alternativas: ["8 horas diárias e 40 semanais", "8 horas diárias e 44 semanais", "6 horas diárias e 36 semanais", "10 horas diárias e 44 semanais"],
        respostaCorreta: 1 // 8 horas diárias e 44 semanais
    },
    {
        pergunta: "Qual é a duração mínima do aviso prévio prevista na Constituição Federal?",
        alternativas: ["15 dias", "30 dias", "45 dias", "60 dias"],
        respostaCorreta: 1 // 30 dias
    },
    {
        pergunta: "Após cada período de 12 meses de vigência do contrato de trabalho (período aquisitivo), o empregado tem direito a férias de:",
        alternativas: ["20 dias corridos", "30 dias corridos", "15 dias úteis", "30 dias úteis"],
        respostaCorreta: 1 // 30 dias corridos
    }
];



let indiceAtual = 0;
let acertos = 0;

// Elementos do DOM
const perguntaTexto = document.getElementById('pergunta-texto');
const alternativasArea = document.getElementById('alternativas-area');
const progressoTexto = document.getElementById('progresso');
const quizArea = document.getElementById('quiz-area');
const resultadoArea = document.getElementById('resultado-area');
const pontuacaoTexto = document.getElementById('pontuacao-texto');

function carregarQuestao() {
    
    const questaoAtual = questoes[indiceAtual];
    
    
    perguntaTexto.textContent = questaoAtual.pergunta;
    progressoTexto.textContent = `Pergunta ${indiceAtual + 1} de ${questoes.length}`;
    
    
    alternativasArea.innerHTML = '';
    
    // Cria os botões para cada alternativa
    questaoAtual.alternativas.forEach((alternativa, index) => {
        const btn = document.createElement('button');
        btn.className = 'btn btn-outline-dark text-start p-3'; 
        btn.textContent = alternativa;
        
        btn.onclick = () => verificarResposta(index);
        
        alternativasArea.appendChild(btn);
    });
}

function verificarResposta(indiceClicado) {
    const questaoAtual = questoes[indiceAtual];
    
    if (indiceClicado === questaoAtual.respostaCorreta) {
        acertos++;
    }
    
    indiceAtual++;
    
    
    if (indiceAtual < questoes.length) {
        carregarQuestao();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    quizArea.classList.add('d-none'); 
    resultadoArea.classList.remove('d-none'); 
    
    pontuacaoTexto.innerHTML = `Você acertou <strong>${acertos}</strong> de <strong>${questoes.length}</strong> questões!`;
}

function reiniciarQuiz() {
    indiceAtual = 0;
    acertos = 0;
    resultadoArea.classList.add('d-none');
    quizArea.classList.remove('d-none');
    carregarQuestao();
}

// Inicia o Quiz quando a página carrega
carregarQuestao();