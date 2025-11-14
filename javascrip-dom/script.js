// Título do Documento
document.title = "JavaScrip - DOM";

// 🟩 1. Mensagem personalizada
// Descrição: Altere o conteúdo de um parágrafo com a mensagem “Bem-vindo(a), usuário!”.

const text = document.querySelector(".text");
text.textContent = "Bem-vindo(a), usuário!";

// 🟩 2. Mudar cor de fundo da página
// Descrição: Altere a cor de fundo da página automaticamente para azul.

document.body.style.backgroundColor = "blue";

// 🟩 3. Destacar título
// Descrição: Adicione uma classe destaque ao título principal.

let titulo = document.createElement("h1");
titulo.classList.add("destaque");
titulo.textContent = "Título";
titulo.style.backgroundColor = "yellow";
document.body.appendChild(titulo);

// 🟩 4. Lista com itens automáticos
// Descrição: Preencha uma <ul> com 3 itens gerados automaticamente.

const ul = document.querySelector("ul");
for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = `Teste  ${i + 1}°`;
  ul.appendChild(li);
}

// 🟩 5. Ocultar um elemento
// Descrição: Esconda um parágrafo ao carregar a página.

let esconderElemento = document.querySelector(".esconder");
esconderElemento.style.display = "none";

// 🟩 6. Alterar imagem automaticamente
// Descrição: Troque a imagem de um <img> ao carregar a página.

let imgContent = document.querySelector(".img-content");
imgContent.innerHTML = `<img src="https://www.shutterstock.com/image-photo/smiling-capybara-lying-on-grass-600nw-1964602390.jpg" alt="Capivara" >`;
