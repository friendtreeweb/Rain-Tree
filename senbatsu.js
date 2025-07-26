
function createSenbatsuSlot() {
  const slot = document.createElement('div');
  slot.classList.add('formation-slot');
  slot.textContent = 'Slot Kosong';
  return slot;
}

function splitIntoTriangleRows(size) {
  const formations = {
    7: [4, 3],
    8: [5, 3],
    9: [6, 3],
    10: [6, 4],
    11: [6, 5],
    12: [5, 4, 3],
    13: [6, 4, 3],
    14: [6, 5, 3],
    15: [7, 5, 3],
    16: [7, 6, 3],
    17: [8, 6, 3],
  };

  if (size <= 5) {
    return [size];
  }

  return formations[size] || [Math.ceil(size / 3), Math.floor(size / 3), size - Math.ceil(size / 3) - Math.floor(size / 3)];
}

function generateFormationGrid(size) {
  const container = document.getElementById("senbatsu-slots-container");
  container.innerHTML = "";

  const rows = splitIntoTriangleRows(size);
  rows.forEach((count) => {
    const row = document.createElement("div");
    row.classList.add("formation-row");
    for (let i = 0; i < count; i++) {
      row.appendChild(createSenbatsuSlot());
    }
    container.appendChild(row);
  });
}

function resetFormation() {
  const select = document.getElementById("senbatsu-size-select");
  const size = parseInt(select.value, 10);
  generateFormationGrid(size);
}

function downloadFormationAsImage() {
  const area = document.getElementById("senbatsu-formation");
  html2canvas(area).then((canvas) => {
    const link = document.createElement("a");
    link.download = "formasi-senbatsu.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("senbatsu-size-select");
  const reset = document.getElementById("reset-formation");
  const download = document.getElementById("download-senbatsu");

  if (select) {
    generateFormationGrid(parseInt(select.value, 10));
    select.addEventListener("change", () => {
      generateFormationGrid(parseInt(select.value, 10));
    });
  }

  if (reset) {
    reset.addEventListener("click", resetFormation);
  }

  if (download) {
    download.addEventListener("click", downloadFormationAsImage);
  }
});
