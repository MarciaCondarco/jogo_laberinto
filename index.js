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

class sprite{
    constructor({posicao,velocidade,image}){
        this.posicao=posicao
        this.image=image
    }

    draw(){
        contexto.drawImage(this.image, this.posicao.x, this.posicao.y)
    }

}

const background = new sprite({
    posicao:{
        x:0,
        y:-935
    },
    image:image
})

const chaves = {
    w: {
        pressed:false
    },
    a: {
        pressed:false
    },
    s: {
        pressed:false
    },
    d: {
        pressed:false
    }

}

function animation() {
    window.requestAnimationFrame(animation)
    background.draw()
    // o metodo requestanimationframe, informa ₢ao navegador que deseja animar e chama uma função para ATUALIZAR O QUADRO de animação antes da proxima repaint(repintura)
    // image.onload = () => {
    contexto.drawImage(
        playerImage,
        0,
        0,
        playerImage.width / 4,
        playerImage.height,
        // determinando recorte o sprites do player
        canvas.width / 3 - (playerImage.width / 4) / 2,
        canvas.height / 2 - playerImage.height / 3,
        playerImage.width / 4,
        playerImage.height
        // determinando a posição do sprites do player
    )


        // definindo a posição X e Y da imagem do mapa do jogo e player
    // }
    // imagem do mapa do jogo vai carregar e chamar a variavel contexto 
    if(chaves.w.pressed && ultimachave ==='w') background.posicao.y = background.posicao.y + 3
    else if(chaves.d.pressed && ultimachave ==='d') background.posicao.x = background.posicao.x - 3
    else if(chaves.a.pressed && ultimachave ==='a') background.posicao.x = background.posicao.x + 3
    else if(chaves.s.pressed && ultimachave ==='s') background.posicao.y = background.posicao.y - 3
}

animation()

let ultimachave=''

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w':
            chaves.w.pressed=true
            ultimachave = 'w'
            break
        case 'a':
            chaves.a.pressed=true
            ultimachave ='a'
            break
        case 's':
            chaves.s.pressed=true
            ultimachave = 's'
            break
        case 'd':
            chaves.d.pressed=true
            ultimachave = 'd'
            break
        // caso a tecla pressionada seja a letra w, aparece a mensagem "pressione a tecla W"
    }
    console.log(chaves)
})
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'w':
            chaves.w.pressed=false
            break
        case 'a':
            chaves.a.pressed=false
            break
        case 's':
            chaves.s.pressed=false
            break
        case 'd':
            chaves.d.pressed=false
            break
        // caso a tecla pressionada seja a letra w, aparece a mensagem "pressione a tecla W"
    }
    console.log(chaves)
})
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w':
            chaves.w.pressed=true
            break
        case 'a':
            chaves.a.pressed=true
            break
        case 's':
            chaves.s.pressed=true
            break
        case 'd':
            chaves.d.pressed=true
            break
        // caso a tecla pressionada seja a letra w, aparece a mensagem "pressione a tecla W"
    }
    console.log(chaves)
})
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w':
            chaves.w.pressed=true
            break
        case 'a':
            chaves.a.pressed=true
            break
        case 's':
            chaves.s.pressed=true
            break
        case 'd':
            chaves.d.pressed=true
            break
        // caso a tecla pressionada seja a letra w, aparece a mensagem "pressione a tecla W"
    }
    console.log(chaves)
})
