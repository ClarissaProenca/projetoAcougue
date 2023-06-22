// acordeaum
const itens = document.querySelectorAll('.accordion-item');

for (const item of itens) {
  const header = item.querySelector('.accordion-header');
  const conteudo = item.querySelector('.conteudo');
  
  header.addEventListener('click', function() {
    if (item.classList.contains('active')) {
      conteudo.style.maxHeight = null;
      item.classList.remove('active');
    }
    else {
      for (const outroItem of itens) {
        if (outroItem.classList.contains('active')) {
          const outroConteudo = outroItem.querySelector('.conteudo');
          outroConteudo.style.maxHeight = null;
          outroItem.classList.remove('active');
        }
      }
      conteudo.style.maxHeight = conteudo.scrollHeight + 'px';
      item.classList.add('active');
    }
  });
}

// formulario

// preferencias
var el = document.querySelectorAll('.container');
for (let i = 0; i < el.length; i++) {
  el[i].onclick = function() {
    var c = 0;
    while (c < el.length) {
      el[c++].className = 'container';
    }
    el[i].className = 'Selecionadas container';
  };
}

// FAVORITA  
const botao = document.querySelector(".dropbtn");
const opcoesCarne = document.querySelectorAll(".dropdown-content p");
let opcaoFoiSelecionada = false;

opcoesCarne.forEach(function(opcao) {
  opcao.addEventListener('click', function() {
    const valorOpcao = this.getAttribute("value");
    botao.textContent = valorOpcao;
    opcaoFoiSelecionada = true;
  });
});


// comunicações

let check = document.querySelectorAll(".comunicacoes");
let container = document.querySelectorAll(".checkDefault");
let check1 = check[2];
let check2 = check[1];
let checkTudo = check[0];

checkTudo.addEventListener("click", function(){
  if(checkTudo.classList.value == "comunicacoes intermed"){
    check1.setAttribute("class", "comunicacoes");
    check2.setAttribute("class", "comunicacoes");
    checkTudo.setAttribute("class", "comunicacoes");
  } else {
    checkTudo.classList.toggle("iconActive");
    checkTudo.classList.remove("intermed");
    check1.classList.toggle("iconActive");
    check2.classList.toggle("iconActive");
  }
});

check1.addEventListener("click", function(){
  check1.classList.toggle("iconActive");
  checkTudo.classList.toggle("intermed");
  if(check2.classList.contains("iconActive")){
    checkTudo.classList.add("iconActive");
  } else {
    checkTudo.classList.remove("iconActive");
  }
});

check2.addEventListener("click", function(){
  check2.classList.toggle("iconActive");
  checkTudo.classList.toggle("intermed");
  if(check1.classList.contains("iconActive")){
    checkTudo.classList.add("iconActive");
  } else {
    checkTudo.classList.remove("iconActive");
  }
});

// enviar
function enviar() {
  event.preventDefault();
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let telefone = document.getElementById("telefone").value;
  if (nome === "" || email === "" || telefone === "") {
    alert("preencha os campos obrigatórios");
  } else if (!nome.match(/^[a-z]{2,}( [a-z]+)*?( [a-z]{2,}){1,}$/i)) {
    alert("Inclua nome e sobrenome");
  } else if (!email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
    alert("Inclua email válido");
  } else if(!verificaTelefone()){
    alert("Informar telefone válido");
  } else if(!preferenciaTaMarcada()){
    alert("Selecionar pelo menos uma carne de preferência");
  } else if (!opcaoFoiSelecionada) {
    alert("Selecionar o tipo de carne favorita");
  } else if (!verificarTextarea()){
    alert("Mensagem deve conter pelo menos 5 caracteres");
  }
  else {
    alert("Formulário enviado")
  }

  function verificaTelefone(){
    let telefoneVerificado = telefone.replace(/[\(\)\-\s]/g, "");
    if(telefoneVerificado.length === 11){
      return true
    } else {
      return false;
    }
  }

  function preferenciaTaMarcada(){
    for (let i = 0; i < el.length; i++) {
      if(el[i].classList.contains("Selecionadas")){
        return true;
      } else {
        return false;
      }
    }
  }

  function verificarTextarea() {
  var textarea = document.querySelector("textarea");
  var texto = textarea.value;

  if (texto.length < 5 || texto ==="") {
    return false;
  } else {
    return true;
  }
}
}
