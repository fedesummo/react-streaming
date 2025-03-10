export const scrollIntoId = (id: string) => {
  const sectionRef = document.getElementById(id);
  sectionRef?.scrollIntoView({
    behavior: "smooth",
    block: screen.width < 1024 ? "start" : "end",
  });
};
