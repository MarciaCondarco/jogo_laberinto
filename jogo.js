function portaMisteriosa(){
    alert('Creak(porta abrindo)')
    alert('você encontrou uma tocha, alguns passos a frente você achou um baú, quer abrir-lo?')
    escolhaDeAbrirBau=prompt(nome + ' escolha:\n1-abrir\n2-não abrir')
}
function corredorEscuro(){
    alert('você encontrou uma tocha, para poder ver além da escuridão')
    alert('GGRRRR  (rugido desconhecido)')
    alert(nome + ' se prepare que uns dos lacaios da medusa está vindo a sua direção ')
}
function goblin(){
atackGolin= 12
defesaGolin= 10
vidaGolin=20
danoGolin=0
danoJogador=0

alert('se prepare golin se aproxima')
while (vidaGolin > 0 || vida > 0){
      danoJogador = atackJogador - defesaGolin
      if (danoJogador > 0){
        vidaGolin=vidaGolin - danoJogador
        alert(nome+ ' deu ' + danoGolin + ' de dano no Golin')
        
      }
      else{
        alert(nome+' não conseguiu dar dano no Golin')
      }

      danoGolin = atackGolin - defesaJogador

      if(danoGolin > 0 ){
        vidaJogador=vidaJogador-danoGolin
        alert(' Golin deu' + danoGolin +' de dano no ' + nome)
      }
      else{
        alert(' Golin não conseguiu dar dano no' + nome)
      }
  if (vidaGolin<=0 || vidaJogador <=0){
      alert('Parabéns você conseguiu derrotar o Goblin!, você conseguiu recompensa de ataque e vida')
      atackJogador += 2
      vidaJogador += 3
    break
  }
}
vidaJogador=vidaJogador-danoGolin
}
function statusJogador(){
    alert('vida do jogador:' + vidaJogador + '\n' + 'atack do jogador:' + atackJogador + '\n' + 'defesa do jogador:' + defesaJogador)
}
function Minotauro(){
    atackMinotauro = 15
    defesaMinotauro= 15
    vidaMinotauro=20
    danoMinotauro=0
    danoJogador=0
    
    alert('GGGGGGRRRRR')
    alert('se prepare, na sua frente está um minotauro')
    while (vidaMinotauro > 0 || vidaJogador > 0){
          danoJogador = atackJogador - defesaMinotauro
          if (danoJogador > 0){
            vidaMinotauro=vidaMinotauro - danoJogador
            alert(nome+ ' deu ' + danoMinotauro + ' de dano no Minotauro')
            
          }
          else{
            alert(nome+' não conseguiu dar dano no Minotauro')
          }
    
          danoMinotauro = atackMinotauro - defesaJogador
    
          if(danoMinotauro > 0 ){
            vidaJogador=vidaJogador-danoMinotauro
            alert(' Minotauro deu' + danoMinotauro +' de dano no ' + nome)
          }
          else{
            alert(' Minotauro não conseguiu dar dano no' + nome)
          }
      if (vidaMinotauro<=0 || vidaJogador <=0){
            alert('após a derrota do Minotauro, você adquiriu 10 de atack e 5 de vida e defesa')
            atackJogador += 10
            vidaJogador += 5 
            defesaJogador += 5
           break
      }
    }
    vidaJogador=vidaJogador-danoMinotauro
}
function medusa(){
    atackMedusa = 20
    defesaMedusa= 18
    vidaMedusa=25
    danoMedusa=0
    
    alert('GGGGGGRRRRR')
    alert('se prepare, na sua frente está um Medusa')
    while (vidaMedusa > 0 || vidaJogador > 0){
          danoJogador = atackJogador - defesaMedusa
          if (danoJogador > 0){
            vidaMedusa=vidaMedusa - danoJogador
            alert(nome+ ' deu ' + danoMedusa + ' de dano na Medusa')
            
          }
          else{
            alert(nome+' não conseguiu dar dano no Medusa')
          }
    
          danoMedusa = atackMedusa - defesaJogador
    
          if(danoMedusa > 0 ){
            vidaJogador=vidaJogador-danoMedusa
            alert(' Medusa deu' + danoMedusa +' de dano no ' + nome)
          }
          else{
            alert(' Medusa não conseguiu dar dano no' + nome)
          }
      if (vidaMedusa<=0){
        alert('Parabéns você conseguiu derrotar a medusa, você conseguiu adquirir uma nova arma para a sua jornada!')
      }
      else{
        alert('que triste, a medusa te transformou em pedra')
        break
      }
    }
    vidaJogador=vidaJogador-danoMinotauro

}
nome=""
nome=prompt('Hola, meio-sangue qual seu nome ? ')
atackJogador = 15 
defesaJogador = 10
vidaJogador = 30 
danoJogador = 0

alert(nome + ' Bem vindo, ao laberinto da medusa, recapitulando a historia, você está sendo acusado/a de roubar o raio mestre de Zeus e para provar a sua inocência, atravessar o laberinto é teu destino.')
alert('você está na entrada do laberinto, e já tem dois caminhos a escolher, na sua frente tem uma porta misteriosa e na sua direita um corredor escuro')
escolhaDeCaminho=prompt(nome + ' escolha\n1-porta misteriosa\n2-corredor escuro ')
if(escolhaDeCaminho=='1'){
    portaMisteriosa()
    if(escolhaDeAbrirBau=='1'){
        alert('você abriu o baú')
        espadaOuSapatos=prompt('dentro do baú tem:\n1-espada contracorrente\n2-sapatos voadores de Hermes')
        alert('você escolheu a ' + 'espada contracorrente')
        atackJogador+=8
        escolhaDeCaminho=prompt(nome + 'escolha:\n1-seguir em frente\n2-vira a direita')
    }
    else{
        alert('você escolheu o ' + 'sapatos voadores de Hermes')
        vidaJogador+=5
        alert('seguindo em frente, você encontra com dois caminhos')
        escolhaDeCaminho=prompt(nome + 'escolha:\n1-seguir em frente\n2-vira a direita')  
}
}
else{
    corredorEscuro()
    goblin()
    Minotauro()
    medusa()
    
}
if(escolhaDeCaminho=='1'){
  alert('continuando o  caminho, você escuta  uns barulhos estranhos')
  alert('GGGRRRRRR')
  alert('golin se aproxima')
  goblin()
}
else{
  alert('você encontrou o caminho para o final do laberinto, onde esta a medusa')
  medusa()
}
alert(' Após de derrotar o golin, você continua o caminho virando para direita')
Minotauro()
statusJogador()
alert('Parabéns, após de derrotar o inimigo, você adquiriu uma recompensa de aumento de vida')
vidaJogador += 2
alert('você está no final do laberinto, e seu adversário é a propria medusa')
medusa()


