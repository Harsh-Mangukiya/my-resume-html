document.getElementById("download-pdf").addEventListener("click", () => {
  const element = document.querySelector(".container"); // Only resume

  const opt = {
    margin:       0.4,                     // margin in inches
    filename:     'Harsh_Mangukiya_UI_UX_Graphic_Designer_Resume.pdf',
    image:        { type: 'jpeg', quality: 1 }, 
    html2canvas:  { scale: 3, logging: true, scrollY: 0 }, // high resolution
    jsPDF:        { 
      unit: 'in', 
      format: [8.5, 11],                   // Letter size
      orientation: 'portrait' 
    }
  };

  html2pdf().set(opt).from(element).save();
});
