const colorSchemes = [
  {
    containerBg: "#FFFFFF",
    sectionBg: "#E0F7FA",
    textColor: "#00695C",
  },
  {
    containerBg: "#F3E5F5",
    sectionBg: "#E1BEE7",
    textColor: "#4A148C",
  },
  {
    containerBg: "#FFF3E0",
    sectionBg: "#FFCCBC",
    textColor: "#BF360C",
  },
  {
    containerBg: "#E8F5E9",
    sectionBg: "#C8E6C9",
    textColor: "#1B5E20",
  },
];

let currentSchemeIndex = 0;

function applyColorScheme(index: number) {
  const scheme = colorSchemes[index];
  const container = document.querySelector(".container") as HTMLElement;
  const sections = document.querySelectorAll("section");

  if (!container || sections.length === 0) {
    console.error("Error can't find container");
    return;
  }
  
  console.log("Color Changes:", scheme);
  
  container.style.backgroundColor = scheme.containerBg;
  container.style.color = scheme.textColor;
  
  sections.forEach((section) => {
    (section as HTMLElement).style.backgroundColor = scheme.sectionBg;
  });
  
  const button = document.getElementById("btn");
  
  if (button) {
    button.addEventListener("click", () => {
      currentSchemeIndex = (currentSchemeIndex + 1) % colorSchemes.length;
      applyColorScheme(currentSchemeIndex);
    });
  } else {
    console.error("Error");
  }
} 
  applyColorScheme(currentSchemeIndex);