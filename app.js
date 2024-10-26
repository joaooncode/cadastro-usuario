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
  //validar se todos os campos estão preenchidos
  if (
    !nomeInput.value ||
    !apelidoInput.value ||
    !emailInput.value ||
    !senhaInput.value ||
    !enderecoInput.value ||
    !sexoInput.value
  ) {
    alert("Campos Vazios");
  } else {
    alert(
      `Nome: ${nomeInput.value}\nApelido: ${apelidoInput.value}\nEndereço ${enderecoInput.value}\nSexo: ${sexoInput.value}`
    );
    //limpar campos
    nomeInput.value = "";
    apelidoInput.value = "";
    emailInput.value = "";
    senhaInput.value = "";
    enderecoInput.value = "";
    sexoInput.value = "";
  }
}
