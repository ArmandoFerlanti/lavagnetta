const textarea = document.getElementById("lavagna");
const maxRows = 12; // Numero massimo di righe
const maxCols = 1500; // Numero massimo di colonne

textarea.addEventListener("input", function () {
  const lines = textarea.value.split("\n");

  if (lines.length > maxRows) {
    textarea.value = lines.slice(0, maxRows).join("\n");
  }

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].length > maxCols) {
      lines[i] = lines[i].slice(0, maxCols);
    }
  }

  textarea.value = lines.join("\n");
});
