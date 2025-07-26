// js/senbatsu.js

document.addEventListener("DOMContentLoaded", () => {
  const formationSelect = document.getElementById("formation-select");
  const senbatsuContainer = document.getElementById("senbatsu-container");
  const downloadBtn = document.getElementById("download-senbatsu");

  const renderFormation = (count) => {
    senbatsuContainer.innerHTML = "";
    for (let i = 0; i < count; i++) {
      const wrapper = document.createElement("div");
      wrapper.className = "senbatsu-slot";

      const img = document.createElement("img");
      img.className = "member-image";
      img.alt = "";

      const select = document.createElement("select");
      select.className = "member-select";

      const emptyOption = document.createElement("option");
      emptyOption.value = "";
      emptyOption.textContent = translations?.[currentLang]?.emptySlotText || "(empty)";
      select.appendChild(emptyOption);

      memberList.forEach(member => {
        const opt = document.createElement("option");
        opt.value = member.image;
        opt.textContent = member.name?.[currentLang] || member.name?.id;
        select.appendChild(opt);
      });

      select.addEventListener("change", () => {
        if (select.value) {
          img.src = `images/${select.value}`;
          const selectedMember = memberList.find(m => m.image === select.value);
          img.alt = img.title = selectedMember.name?.[currentLang] || selectedMember.name?.id;
        } else {
          img.src = "";
          img.alt = img.title = "";
        }
      });

      wrapper.appendChild(img);
      wrapper.appendChild(select);
      senbatsuContainer.appendChild(wrapper);
    }
  };

  formationSelect.addEventListener("change", (e) => {
    const count = parseInt(e.target.value, 10);
    if (!isNaN(count)) renderFormation(count);
  });

  downloadBtn.addEventListener("click", () => {
    html2canvas(senbatsuContainer, {
      backgroundColor: "#ffffff",
      useCORS: true
    }).then(canvas => {
      const link = document.createElement("a");
      link.download = "senbatsu_formation.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  });
});
