export const scrollToBottom = (element: HTMLElement) =>
  element.scrollIntoView({ behavior: 'smooth', block: 'end' });
