const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');

canvas.width = 1024
canvas.height = 576
// definindo tamanho

contexto.fillStyle = 'green'
contexto.fillRect(  0, 0, canvas.width, canvas.height)

const image = new Image()
image.src = './mapajogo.png'

console.log(image)

image.onload = () => {
    contexto.drawImage(image, -10, -300)

}
// imagem do mapa do jogo vai carregar e chamar a variavel contexto   