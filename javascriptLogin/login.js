var current = null;
// Variabile per tenere traccia dell'animazione 

// Aggiunge un event listener per l'evento con ID 'email'
document.querySelector('#email').addEventListener('focus', function(e) {

// Se c'è un'animazione corrente, la mette in pausa
  if (current) current.pause();

  // Crea una nuova animazione utilizzando Anime.js
  current = anime({
    targets: 'path', // Seleziona tutti gli elementi 'path' nell'SVG
    strokeDashoffset: {
      value: 0, // Offset di tratto per iniziare la traccia
      duration: 700, // Durata dell'animazione in millisecondi
      easing: 'easeOutQuart' // Funzione di easing per la transizione
    },
    strokeDasharray: {
      value: '240 1386', // Lunghezza e spaziatura del tratto
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});

// Event listener per l'evento con ID 'password'
document.querySelector('#password').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: -336,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '240 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});

// Event listener per l'evento con ID 'submit'
document.querySelector('#submit').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: -730,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '530 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});