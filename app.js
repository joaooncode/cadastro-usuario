// elementos DOM

const nomeInput = document.getElementById("nomeInput");
const apelidoInput = document.getElementById("apelidoInput");
const emailInput = document.getElementById("emailInput");
const senhaInput = document.getElementById("senhaInput");
const enderecoInput = document.getElementById("enderecoInput");
const sexoInput = document.getElementById("sexoInput");
const btnForm = document.getElementById("btnForm");

// funções

function sendAlert() {
  if (
    nomeInput ||
    apelidoInput ||
    emailInput ||
    senhaInput ||
    enderecoInput ||
    sexoInput === undefined
  ) {
    alert("Campos Vazios");
  } else {
    alert(
      `Nome: ${nomeInput.value}\nApelido: ${apelidoInput.value}\nEndereço ${enderecoInput.value}\nSexo: ${sexoInput.value}`
    );
  }
}
