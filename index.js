const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');

canvas.width = 1024
canvas.height = 576
// definindo tamanho

contexto.fillStyle = 'green'
// definindo a cor verde no espaço canva
contexto.fillRect(0, 0, canvas.width, canvas.height)
// definindo a posição X e Y do canva

const image = new Image()
// criando uma variavel que contêm a imagem do mapa
image.src = './mapajogo.png'

const playerImage = new Image();
playerImage.src = './playerdown.png'

console.log(image)

image.onload = () => {
    contexto.drawImage(image, 0 ,-900)
    contexto.drawImage(playerImage, canvas.width/3, canvas.height/2)
    // definindo a posição X e Y da imagem do mapa do jogo

}
// imagem do mapa do jogo vai carregar e chamar a variavel contexto 

