const carrouselNav = document.querySelector("nav");
const objBoxInfo = document.querySelectorAll(".box-information");
let correntIndex = 0;

const creatNavCourrousel = () => {
  // percorre todos os elementos .box-information
  objBoxInfo.forEach((element, index) => {
    // verifica se o índice do elemento é igual ao índice atual do carrossel
    if (index == correntIndex) {
      // mostra o elemento com display flex
      element.style.display = "block";
    } else {
      // esconde o elemento com display none
      element.style.display = "none";
    }
  });

  // incrementa o índice atual do carrossel
  correntIndex++;

  // verifica se o índice atual do carrossel ultrapassou o número de elementos .box-information
  if (correntIndex >= objBoxInfo.length) {
    // volta o índice atual do carrossel para zero
    correntIndex = 0;
  }
};

// cria uma variável para armazenar o id do intervalo
let intervalId;

// cria uma função para iniciar o intervalo
const startInterval = () => {
  // verifica se o intervalo já existe
  if (!intervalId) {
    // cria um intervalo que chama a função creatNavCourrousel a cada 2000 milissegundos
    intervalId = setInterval(creatNavCourrousel, 2000);
  }
};

// cria uma função para parar o intervalo
const stopInterval = () => {
  // verifica se o intervalo existe
  if (intervalId) {
    // limpa o intervalo e atribui null à variável
    clearInterval(intervalId);
    intervalId = null;
  }
};

// cria uma função para recarregar a página
const reloadingPage = () => {
  // obtém a largura da janela em pixels
  let windowWidthPage = window.innerWidth;

  // verifica se a largura da janela é maior que 750px
  if (windowWidthPage > 750) {
    // verifica se a página já foi recarregada
    if (!sessionStorage.getItem("reloaded")) {
      // recarrega a página usando o método location.reload()
      location.reload();

      // armazena um valor no sessionStorage para indicar que a página foi recarregada
      sessionStorage.setItem("reloaded", true);
    }
  }
};

// cria uma função para lidar com o evento de redimensionamento da janela
const handleResize = () => {
  // obtém a largura da janela em pixels
  let windowWidth = window.innerWidth;
  // verifica se a largura da janela é menor ou igual a 750px
  if (windowWidth <= 750) {
    // inicia o intervalo
    startInterval();
  } else {
    // para o intervalo
    stopInterval();
  }
};


// adiciona um ouvinte de evento de redimensionamento da janela que chama a função handleResize
window.addEventListener("resize", handleResize);

// chama a função handleResize uma vez para verificar o tamanho inicial da tela
handleResize();
// adiciona um ouvinte de evento de redimensionamento da janela que chama a função reloadingPage
window.addEventListener("resize", reloadingPage);

//Evento formulario
