
let numeroSorteado;
let tentativas;
let maximo;

function comecarJogo() {
  const nick = document.getElementById("nick").value;
  const intervalo = parseInt(document.getElementById("intervalo").value);
  if (!nick) {
    alert("Digite seu nickname.");
    return;
  }
  maximo = intervalo;
  numeroSorteado = Math.floor(Math.random() * maximo) + 1;
  tentativas = 3;
  document.getElementById("saudacao").innerHTML =
    `<strong>Olá ${nick}</strong>, vamos jogar!<br>De acordo com a opção de intervalo que<br> você escolheu, descubra o número.`;
  document.getElementById("mensagem").innerText = "";
}

function jogar() {
  const palpite = parseInt(document.getElementById("palpite").value);
  const msg = document.getElementById("mensagem");

  if (tentativas === 0) {
    msg.innerText = `Fim de jogo! O número era ${numeroSorteado}`;
    return;
  }

  tentativas--;

  if (palpite === numeroSorteado) {
    msg.innerText = "🎉 Parabéns, você conseguiu adivinhar!";
  } else if (palpite < numeroSorteado) {
    msg.innerText = `A tentativa foi menor do que o número!\nVocê ainda tem ${tentativas} tentativa(s)!`;
  } else {
    msg.innerText = `A tentativa foi maior do que o número!\nVocê ainda tem ${tentativas} tentativa(s)!`;
  }

  if (tentativas === 0 && palpite !== numeroSorteado) {
    msg.innerText += `\n😢 Suas tentativas acabaram. O número era ${numeroSorteado}`;
  }
}
