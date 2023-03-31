export const scrollSnap = (
  event: WheelEvent,
  sections: HTMLElement[]
): void => {
  event.preventDefault();

  let currentSectionIndex = sections.findIndex(
    (section) => section.getBoundingClientRect().top >= 0
  );

  if (currentSectionIndex < 0) {
    currentSectionIndex = sections.length - 1;
  }

  if (event.deltaY > 0) {
    currentSectionIndex += 1;
  } else {
    currentSectionIndex -= 1;
  }

  if (currentSectionIndex < 0) {
    currentSectionIndex = 0;
  } else if (currentSectionIndex >= sections.length) {
    currentSectionIndex = sections.length - 1;
  }

  const targetSection = sections[currentSectionIndex];
  window.scrollTo({
    top: targetSection.offsetTop,
    behavior: "smooth",
  });
};
