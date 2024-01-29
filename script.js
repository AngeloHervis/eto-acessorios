document.addEventListener('DOMContentLoaded', function() {
    var defaultOption = '1-10';
    var selectElement = document.getElementById('quantidade');
    selectElement.value = defaultOption;
    // Disparar evento 'change' após definir a opção padrão
    selectElement.dispatchEvent(new Event('change'));
  });

document.getElementById('quantidade').addEventListener('change', function() {
    var selectedOption = this.value;
    var camisetasEstampadas = document.getElementById('camisetas-estampadas');
    var total = 0;

  
    camisetasEstampadas.innerHTML = '';
  
    if (selectedOption === '1-10') {
      camisetasEstampadas.innerHTML = `
        <label for="pp-gg">Camisetas PP ao GG:</label>
        <input type="number" id="pp-gg" min="0" value="0"><br>
        <label for="xg-maiores">Camisetas XG ou Maiores:</label>
        <input type="number" id="xg-maiores" min="0" value="0"><br>
        <label for="estampa-bolso">Estampa de Bolso (10x10 cm):</label>
        <input type="number" id="estampa-bolso" min="0" value="0"><br>
        <label for="estampa-manga">Estampa de Manga (5x5 cm):</label>
        <input type="number" id="estampa-manga" min="0" value="0"><br>
        <label for="estampa-meia-costas">Estampa Meia Costas (30x20 cm):</label>
        <input type="number" id="estampa-meia-costas" min="0" value="0"><br>
        <label for="estampa-costas-inteira">Estampa Costas Inteira (30x40 cm):</label>
        <input type="number" id="estampa-costas-inteira" min="0" value="0"><br>
        <label for="estampa-nome">Estampa Nome (30x8 cm):</label>
        <input type="number" id="estampa-nome" min="0" value="0"><br>
      `;
    } else if (selectedOption === '11-20') {
      camisetasEstampadas.innerHTML = `
      <label for="pp-gg">Camisetas PP ao GG:</label>
      <input type="number" id="pp-gg" min="0" value="0"><br>
      <label for="xg-maiores">Camisetas XG ou Maiores:</label>
      <input type="number" id="xg-maiores" min="0" value="0"><br>
      <label for="estampa-bolso">Estampa de Bolso (10x10 cm):</label>
      <input type="number" id="estampa-bolso" min="0" value="0"><br>
      <label for="estampa-manga">Estampa de Manga (5x5 cm):</label>
      <input type="number" id="estampa-manga" min="0" value="0"><br>
      <label for="estampa-meia-costas">Estampa Meia Costas (30x20 cm):</label>
      <input type="number" id="estampa-meia-costas" min="0" value="0"><br>
      <label for="estampa-costas-inteira">Estampa Costas Inteira (30x40 cm):</label>
      <input type="number" id="estampa-costas-inteira" min="0" value="0"><br>
      <label for="estampa-nome">Estampa Nome (30x8 cm):</label>
      <input type="number" id="estampa-nome" min="0" value="0"><br>
      
      `;
    } else if (selectedOption === '20+') {
      camisetasEstampadas.innerHTML = `
      <label for="pp-gg">Camisetas PP ao GG:</label>
      <input type="number" id="pp-gg" min="0" value="0"><br>
      <label for="xg-maiores">Camisetas XG ou Maiores:</label>
      <input type="number" id="xg-maiores" min="0" value="0"><br>
      <label for="estampa-bolso">Estampa de Bolso (10x10 cm):</label>
      <input type="number" id="estampa-bolso" min="0" value="0"><br>
      <label for="estampa-manga">Estampa de Manga (5x5 cm):</label>
      <input type="number" id="estampa-manga" min="0" value="0"><br>
      <label for="estampa-meia-costas">Estampa Meia Costas (30x20 cm):</label>
      <input type="number" id="estampa-meia-costas" min="0" value="0"><br>
      <label for="estampa-costas-inteira">Estampa Costas Inteira (30x40 cm):</label>
      <input type="number" id="estampa-costas-inteira" min="0" value="0"><br>
      <label for="estampa-nome">Estampa Nome (30x8 cm):</label>
      <input type="number" id="estampa-nome" min="0" value="0"><br>
      
      `;
    }
  
    var inputs = camisetasEstampadas.querySelectorAll('input');
    inputs.forEach(function(input) {
      input.addEventListener('change', function() {
        calcularTotal();
      });
    });
  
    function calcularTotal() {
      total = 0;
  
      var ppGg = parseFloat(document.getElementById('pp-gg').value);
      var xgMaiores = parseFloat(document.getElementById('xg-maiores').value);
      var estampaBolso = parseFloat(document.getElementById('estampa-bolso').value);
      var estampaManga = parseFloat(document.getElementById('estampa-manga').value);
      var estampaMeiaCostas = parseFloat(document.getElementById('estampa-meia-costas').value);
      var estampaCostasInteira = parseFloat(document.getElementById('estampa-costas-inteira').value);
      var estampaNome = parseFloat(document.getElementById('estampa-nome').value);
  
      // Calcular total
      if (!isNaN(ppGg)) {
        total += ppGg * 30;
      }
      if (!isNaN(xgMaiores)) {
        total += xgMaiores * 40;
      }
      if (!isNaN(estampaBolso)) {
        total += estampaBolso * 5;
      }
      if (!isNaN(estampaManga)) {
        total += estampaManga * 2.5;
      }
      if (!isNaN(estampaMeiaCostas)) {
        total += estampaMeiaCostas * 15;
      }
      if (!isNaN(estampaCostasInteira)) {
        total += estampaCostasInteira * 25;
      }
      if (!isNaN(estampaNome)) {
        total += estampaNome * 7.5;
      }
  
      // Atualizar o total na tela
      document.getElementById('total').textContent = total.toFixed(2);
    }
  
    calcularTotal();
  });
  