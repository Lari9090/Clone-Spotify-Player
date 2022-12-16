let musicas = [
    {titulo:'As You Fade Away', artista:'Lari', src:'musicas/As You Fade Away - NEFFEX.mp3', img:'imagens/img01.jpg'},
    {titulo:'Enough', artista:'Lari', src:'musicas/Enough - NEFFEX.mp3',img:'imagens/img02.jpg'},
    {titulo:'Get Through', artista:'Lari', src:'musicas/Get Through - NEFFEX.mp3',img:'imagens/img03.jpg'}
];


let musica = document.querySelector('audio');
let indexMusica = 0;


let duracaoMusica = document.querySelector('.fim');

let imagem = document.querySelector('img');

let nomeMusica = document.querySelector('.descricao h2');

let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);

//os eventos

document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if(indexMusica<0){
        indexMusica = 2;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proximo').addEventListener('click', () => {
    indexMusica++;
    if(indexMusica>2){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});

//funcoes
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracao();        
    });
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-play').style.display = 'block';  
    document.querySelector('.botao-pause').style.display = 'none';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) +'%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segParaMinutos(Math.floor(musica.currentTime));
}

function duracao(){
    duracaoMusica.textContent = segParaMinutos(Math.floor(musica.duration));
}

function segParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if(campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos + ':' + campoSegundos;
}

