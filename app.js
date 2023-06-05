import alunos from "./alunos.js"
import questoes from "./questoes.js"

const getQuestionButton = document.getElementById("getquestion")
const matriculaInput = document.getElementById("matricula")
const result = document.getElementById("result")

getQuestionButton.onclick = (e) => {
    e.preventDefault()
    const SIZE_MATRICULA = 14
    const number = matriculaInput.value
    if (number.length != SIZE_MATRICULA && Number(number) == NaN) {
        result.innerHTML = "Matrícula inválida. Tente novamente."
        return
    }
    result.innerHTML = ""
    const aluno = alunos.find(aluno => aluno.matricula == number)
    if (aluno) {
        result.innerHTML += `<div class="card">`
            + `<p>Boa noite <b>${aluno.nome}</b>. Essa é sua avaliação de Programação Web I.</p>`
            + "<p>Instruções:</p>"
            + "<ol>"
            + "<li>A avaliação é individual e sem consulta.</li>"
            + "<li>A avaliação deve ser feita em até às 21h50.</li>"
            + "<li>Cria a aplicação direcionada a você usando Flask.</li>"
            + "<li>A aplicação deve conter uma página inicial com um menu de navegação e todas as rotas devem ser acessadas a partir do menu.</li>"
            + "<li>Ao final, gere o arquivo requirements.txt e envie todo o projeto para um repositório no GitHub.</li>"
            + "<li>Envie o link do repositório no GitHub na atividade <strong>[N1 - Avaliação Prática]</strong> no Google Classroom.</li>"
            + "</ol>"
            + "</div>"
    } else {
        result.innerHTML = `<div class="card">Matrícula não encontrada. Tente novamente.</div>`
        return
    }

    const questao = questoes.find(questao => questao.codigo == number.slice(-1))

    if (questao) {
        let qestao_html = `<div class="card">`
            + `<h3>${questao.titulo}</h3>`
            + "<p>"
            + questao.descricao
            + "</p>"
            + "<h4>Rotas obrigatórias:</h4>"
            + "<ul>"
        for (const rota of questao.rotas) {
            qestao_html += `<li>${rota}</li>`
        }
        qestao_html += "</ul></div>"

        result.innerHTML += qestao_html

        getQuestionButton.disabled = true
        matriculaInput.readOnly = true

    } else {
        result.innerHTML = `<div class="card">Questão não encontrada. Tente novamente.</div>`
        return 
    }
}