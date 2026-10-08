const quotes = [
  "Seus commits são fracos. Eu rastreio até seu café da manhã. ",
  "Hoje você codou {hours}h. Ainda é pouco. Quero ver SANGUE!",
  "{prs} PRs abertos. O time treme. Bunny está vigiando.",
  "Você superou {percent}% dos devs hoje. Medíocre. Busque o topo.",
  "A linguagem do dia: {lang}. Boa escolha. Mas pode ser melhor.",
  "Seu streak: {streak} dias. Nunca pense em desistir .",
  "Issues fechadas: {issues}. Cada uma é uma presa abatida.",
  "Explorando essa flor, tem cara de ser muito cheirosa.",
  "Acho que podemos explorar mais o campo de flores...",
  "Hoje a caça foi fraca, que tal irmos pra outro campo?."
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

module.exports = { quotes, getRandomQuote };
