window.addEventListener('resize', function() {
    var width = window.innerWidth;
    var height = window.innerHeight;
  
    var path = 'M 0 ' + (0.4 * height) +
               ' L ' + (0.3 * width) + ' ' + (0.4 * height) +
               ' A 100 100 90 0 0 ' + (0.4 * width) + ' ' + (0.3 * height) +
               ' Q ' + (0.4 * width) + ' ' + (0.2 * height) + ' ' + (0.5 * width) + ' ' + (0.2 * height) +
               ' L ' + (0.6 * width) + ' ' + (0.2 * height) +
               ' L ' + (0.7 * width) + ' ' + (0.2 * height) +
               ' L ' + (0.9 * width) + ' ' + (0.2 * height) +
               ' T ' + (0.9 * width) + ' ' + (0.9 * height) +
               ' L 0 ' + (0.9 * height) + ' Z';
  
    document.querySelector('.folder5').style.clipPath = 'path("' + path + '")';
  });
  
  // Dispara o evento de redimensionamento na carga da página para definir o clip-path inicial
  window.dispatchEvent(new Event('resize'));
  