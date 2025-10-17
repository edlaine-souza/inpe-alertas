function classificarAlerta(nivel) {
  if (nivel > 80) return "Crítico";
  if (nivel > 50) return "Alto";
  return "Moderado";
}

function enviarNotificacao(alerta) { 
  return `Notificação enviada: ${alerta}`; 
}

function processarAlerta(nivel) {
  const classificacao = classificarAlerta(nivel);
  return `Notificação enviada: ${classificacao}`;
}

module.exports = { classificarAlerta, enviarNotificacao, processarAlerta };
