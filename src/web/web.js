console.log('===== Disabling annoying popups =====');

$(function() {
  var container = document.getElementById('container');
  container.dataset.logado = 's';
  container.dataset.plano = 'protr';

  window.ExibeDivLogin = function() {};
})

