// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Eres mi inspiración.", time: 9 },
  { text: "Tienes una magia única.", time: 13 },
  { text: "Me encantas completamente.", time: 16 },
  { text: "Eres increíblemente especial.", time: 19 },
  { text: "Eres mi lugar seguro.", time: 23 },
  { text: "Me haces feliz.", time: 26 },
  { text: "Me inspiras diariamente.", time: 29 },
  { text: "Tu sonrisa ilumina.", time: 32   },
  { text: "Tienes una luz especial.", time: 35 },
  { text: "Contigo todo es mejor.", time: 38 },
  { text: "Me pierdo en tu mirada", time: 41 },
  { text: "Admiro tu fuerza.", time: 44 },
  { text: "Eres mi musa.", time: 47 },
  { text: "Siempre pienso en ti.", time: 50 },
  { text: "Eres mi paz.", time: 53 },
  { text: "Tu risa es contagiosa.", time: 56 },
  { text: "Eres mi sueño cumplido.", time: 59 },
  { text: "Me fascinas demasiado.", time: 62 },
  { text: "Eres todo para mí.", time: 65 },
  { text: "Amo tu dulzura.", time: 68 },
  { text: "Eres mi sol.", time: 71 },
  { text: "Contigo, siempre quiero más.", time: 74 },
  { text: "Adoro tu energía.", time: 77 },
  { text: "Tienes mi corazón.", time: 80 },
  { text: "Eres pura magia.", time: 83 },
  { text: "Me encantas cada día.", time: 86 },
  { text: "Love.", time: 89 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);