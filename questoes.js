const questoes = [
    {
      codigo: 0,
      titulo: "Cadastro de produtos",
      descricao: "Crie um cadastro simples de produtos que permitar cadastrar o nome, a descrição e o preço de um produto. O cadastro deve permitir a edição e a exclusão de produtos.",
      rotas: [
        "/index",
        "/cadastro-produtos",
        "/ver-produto/:id",
        "/editar-produto/:id",
        "/excluir-produto/:id",
        "/produtos"
      ]
    },
    {
        codigo: 1,
        titulo: "Cadastro de alunos",
        descricao: "Crie um cadastro simples de alunos que permitar cadastrar o nome e a matrícula de um aluno. O cadastro deve permitir a edição e a exclusão de alunos.",
        rotas: [
            "/index",
            "/cadastro-alunos",
            "/ver-aluno/:id",
            "/editar-aluno/:id",
            "/excluir-aluno/:id",
            "/alunos"
        ]
    },
    {
        codigo: 2,
        titulo: "Cadastro de disciplinas",
        descricao: "Crie um cadastro simples de disciplinas que permitar cadastrar de uma disciplina, o código e o professor. O cadastro deve permitir a edição e a exclusão de disciplinas.",
        rotas: [
            "/index",
            "/cadastro-disciplinas",
            "/ver-disciplina/:id",
            "/editar-disciplina/:id",
            "/excluir-disciplina/:id",
            "/disciplinas"
        ]
    },
    {
        codigo: 3,
        titulo: "Cadastro de Pets",
        descricao: "Crie um cadastro simples de pets que permitar cadastrar o nome, a raça e a idade de um pet. O cadastro deve permitir a edição e a exclusão de pets.",
        rotas: [
            "/index",
            "/cadastro-pets",
            "/ver-pet/:id",
            "/editar-pet/:id",
            "/excluir-pet/:id",
            "/pets"
        ]
    },
    {
        codigo: 4,
        titulo: "Cadastro de Times",
        descricao: "Crie um cadastro simples de times que permitar cadastrar o nome, a cidade e o estado de um time. O cadastro deve permitir a edição e a exclusão de times.",
        rotas: [
            "/index",
            "/cadastro-times",
            "/ver-time/:id",
            "/editar-time/:id",
            "/excluir-time/:id",
            "/times"
        ]
    },
    {
        codigo: 5,
        titulo: "Lista de tarefas",
        descricao: "Crie uma lista de tarefas que permita cadastrar uma tarefa, marcar como concluída e excluir uma tarefa.",
        rotas: [
            "/index",
            "/lista-tarefas",
            "/adicionar-tarefa",
            "/concluir-tarefa/:id",
            "/excluir-tarefa/:id",
        ]
    },
    {
        codigo: 6,
        titulo: "Registro de frequência",
        descricao: "Crie um registro de frequência que permita informar a disciplina, o aluno, a data da aula e a presença do aluno.",
        rotas: [
            "/index",
            "/ver-frequencia",
            "/adicionar-frequencia",
            "/editar-frequencia/:id",
            "/excluir-frequencia/:id",
        ]
    },
    {
        codigo: 7,
        titulo: "Lista de Topiks",
        descricao: "Crie uma lista de topiks que permita cadastrar um horário, o nome do motorista e o destino da topik.",
        rotas: [
            "/index",
            "/listar-topiks",
            "/adicionar-topik",
            "/editar-topik/:id",
            "/excluir-topik/:id",
        ]
    },
    {
        codigo: 8,
        titulo: "Cadastro de Clientes",
        descricao: "Crie um cadastro simples de clientes que permitar cadastrar o nome, o endereço e o telefone de um cliente. O cadastro deve permitir a edição e a exclusão de clientes.",
        rotas: [
            "/index",
            "/clientes",
            "/cadastrar-cliente",
            "/ver-cliente/:id",
            "/editar-cliente/:id",
            "/excluir-cliente/:id",
        ]
    },
    {
        codigo: 9,
        titulo: "Cadastro de Funcionários",
        descricao: "Crie um cadastro simples de funcionários que permitar cadastrar o nome, o endereço e o telefone de um funcionário. O cadastro deve permitir a edição e a exclusão de funcionários.",
        rotas: [
            "/index",
            "/funcionarios",
            "/cadastrar-funcionario",
            "/ver-funcionario/:id",
            "/editar-funcionario/:id",
            "/excluir-funcionario/:id",
        ]
    },
  ]
  
export default questoes;  