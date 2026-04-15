const QUIZ_QUESTION_BANK = [
  {
    question: "Qual e o principal sinal de um email de phishing?",
    options: [
      "Linguagem urgente e link suspeito",
      "Logo bonito",
      "Texto curto",
      "Assunto em maiusculas",
    ],
    correctIndex: 0,
  },
  {
    question: "Uma password segura deve ser:",
    options: [
      "Curta e facil",
      "Longa e unica",
      "Igual para todas as contas",
      "A tua data de nascimento",
    ],
    correctIndex: 1,
  },
  {
    question: "2FA significa:",
    options: [
      "Dois firewalls ativos",
      "Dois ficheiros anexados",
      "Autenticacao de dois fatores",
      "Dois emails por conta",
    ],
    correctIndex: 2,
  },
  {
    question: "Numa rede Wi-Fi publica deves evitar:",
    options: [
      "Ver noticias",
      "Atualizar apps",
      "Fazer login em contas sensiveis",
      "Usar auriculares",
    ],
    correctIndex: 2,
  },
  {
    question: "Antes de clicar num link de email deves:",
    options: [
      "Partilhar com amigos",
      "Verificar o dominio e remetente",
      "Responder rapidamente",
      "Ignorar sempre",
    ],
    correctIndex: 1,
  },
  {
    question: "Atualizacoes de software servem para:",
    options: [
      "Mudar o wallpaper",
      "Aumentar anuncios",
      "Corrigir falhas de seguranca",
      "Apagar passwords",
    ],
    correctIndex: 2,
  },
  {
    question: "Uma boa pratica para gerir passwords e:",
    options: [
      "Guardar em papel no monitor",
      "Usar gestor de passwords",
      "Usar sempre a mesma",
      "Enviar por email",
    ],
    correctIndex: 1,
  },
  {
    question: "Se receberes mensagem suspeita no banco deves:",
    options: [
      "Clicar para confirmar",
      "Ignorar sem pensar",
      "Entrar no site oficial manualmente",
      "Responder com dados",
    ],
    correctIndex: 2,
  },
  {
    question: "Backups sao importantes porque:",
    options: [
      "Aumentam a bateria",
      "Permitem recuperar dados",
      "Tornam password mais forte",
      "Bloqueiam phishing",
    ],
    correctIndex: 1,
  },
  {
    question: "Qual e um exemplo de engenharia social?",
    options: [
      "Atualizacao automatica",
      "Mensagem a fingir ser suporte",
      "Antivirus ativo",
      "Login com pin",
    ],
    correctIndex: 1,
  },
  {
    question: "HTTPS no navegador indica principalmente:",
    options: [
      "Pagina sem imagens",
      "Ligacao encriptada",
      "Site oficial do governo",
      "Velocidade maxima",
    ],
    correctIndex: 1,
  },
  {
    question: "Ao criar uma password, a melhor opcao e:",
    options: [
      "Nome do teu clube",
      "123456789",
      "Frase longa com simbolos",
      "Data de aniversario",
    ],
    correctIndex: 2,
  },
  {
    question: "Se o remetente parece conhecido mas estranho, deves:",
    options: [
      "Abrir anexo",
      "Confirmar por outro canal",
      "Responder com password",
      "Eliminar conta",
    ],
    correctIndex: 1,
  },
  {
    question: "Objetivo principal do ransomware:",
    options: [
      "Melhorar desempenho",
      "Encriptar dados e pedir resgate",
      "Filtrar spam",
      "Atualizar browser",
    ],
    correctIndex: 1,
  },
  {
    question: "Qual atitude reduz risco em redes sociais?",
    options: [
      "Perfil totalmente publico",
      "Partilhar codigos de verificacao",
      "Rever privacidade e permisses",
      "Aceitar todos os pedidos",
    ],
    correctIndex: 2,
  },
];

function getRandomQuizQuestions(total) {
  const pool = [...QUIZ_QUESTION_BANK];

  for (let i = pool.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = pool[i];
    pool[i] = pool[j];
    pool[j] = tmp;
  }
  return pool.slice(0, total);
}
