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

    const aluno = alunos.find(aluno => aluno.matricula == number)
    if (aluno) {
        result.innerHTML = `Boa noite <b>${aluno.nome}</b>. Essa é sua avaliação de Programação Web I.`
        result.innerHTML += "<br>"
        result.innerHTML += "<br>"
        result.innerHTML += "Instruções:"
        result.innerHTML += "<br>"
        result.innerHTML += "1. A avaliação é individual e sem consulta."
        result.innerHTML += "<br>"
        result.innerHTML += "2. A avaliação deve ser feita em até às 21h50."
        result.innerHTML += "<br>"
        result.innerHTML += "3. Cria a aplicação direcionada a voccê usando Flask."
        result.innerHTML += "<br>"
        result.innerHTML += "4. A aplicação deve conter uma página inicial com um menu de navegação e todas as rotas devem ser acessadas a partir do menu."
        result.innerHTML += "<br>"
        result.innerHTML += "5. Ao final, gere o arquivo requirements.txt e envie todo o projeto para um repositório no GitHub."
        result.innerHTML += "<br>"
        result.innerHTML += "6. Envie o link do repositório no GitHub na atividade [N1 - Avaliação Prática] no Google Classroom."
        result.innerHTML += "<br>"
        result.innerHTML += "<hr>"
    } else {
        result.innerHTML = "Matrícula não encontrada. Tente novamente."
        return
    }

    const questao = questoes.find(questao => questao.codigo == number.slice(-1))

    if (questao) {
        result.innerHTML += `Questão ${questao.codigo + 1}: ${questao.titulo}`
        result.innerHTML += "<hr>"
        result.innerHTML += questao.descricao
        result.innerHTML += "<hr>"
        result.innerHTML += "Rotas obrigatórias:"
        result.innerHTML += "<br>"
        result.innerHTML += "<ul>"
        for (const rota of questao.rotas) {
            result.innerHTML += `<li>${rota}</li>`
        }
        result.innerHTML += "</ul>"

        getQuestionButton.disabled = true
        matriculaInput.readOnly = true

    } else {
        result.innerHTML = "Questão não encontrada. Tente novamente."
        return 
    }
}