export const triggerFallAlert = (onTrigger) => {
  setTimeout(() => onTrigger(true), 5000); // Simulate fall after 5 seconds
};