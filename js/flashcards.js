
const conteudosDeDireito = [
    { termo: "Dolo", definicao: "Vontade consciente e livre de praticar a conduta descrita no tipo penal." },
    { termo: "Culpa", definicao: "Conduta voluntária que produz um resultado ilícito não querido, por imprudência, negligência ou imperícia." },
    { termo: "Responsabilidade Civil Objetiva", definicao: "Dever de indenizar que independe da comprovação de culpa ou dolo." },
    { termo: "Habeas Corpus", definicao: "Remédio constitucional para proteger o direito de ir, vir e ficar." },
    { termo: "Prescrição", definicao: "Perda da pretensão (direito de cobrar/exigir algo na justiça) pelo decurso do tempo." },
    { termo: "Princípio da Legalidade", definicao: "Ninguém será obrigado a fazer ou deixar de fazer alguma coisa senão em virtude de lei." },
    { termo: "Usucapião", definicao: "Modo de aquisição de propriedade pela posse prolongada, contínua e pacífica da coisa." },
    { termo: "CLT", definicao: "Consolidação das Leis do Trabalho, que normatiza as relações trabalhistas no Brasil." }
];

const grid = document.getElementById('flashcards-grid');

// Função para renderizar as cartas na tela
function carregarFlashcards() {
    conteudosDeDireito.forEach(item => {
        // Cria a coluna do Bootstrap
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-3';

        // Cria a estrutura do Flashcard
        col.innerHTML = `
            <div class="flashcard-container" onclick="virarCarta(this)">
                <div class="flashcard-inner">
                    <div class="flashcard-front">
                        <h4 class="logo-font text-navy">${item.termo}</h4>
                    </div>
                    <div class="flashcard-back">
                        <p class="mb-0">${item.definicao}</p>
                    </div>
                </div>
            </div>
        `;
        grid.appendChild(col);
    });
}

// Função de interatividade: Adiciona/Remove a classe que faz o CSS girar a carta
function virarCarta(elemento) {
    elemento.classList.toggle('virado');
}

// Inicializa a tela
carregarFlashcards();