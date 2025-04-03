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
image.src = './Assets/mapajogo.png'

const playerImage = new Image();
playerImage.src = './Assets/playerdown.png'

console.log(image)

image.onload = () => {
    contexto.drawImage(image, 0 ,-935)
    contexto.drawImage(
        playerImage, 
        0,
        0,
        playerImage.width/4,
        playerImage.height,
        // determinando recorte o sprites do player
        canvas.width/3 - (playerImage.width/4)/2, 
        canvas.height/2 - playerImage.height/3,
        playerImage.width/4,
        playerImage.height
        // determinando a posição do sprites do player
    )
    // definindo a posição X e Y da imagem do mapa do jogo e player

}
// imagem do mapa do jogo vai carregar e chamar a variavel contexto 

