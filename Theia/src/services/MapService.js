export const calculateRoute = (start, end) => {
  const points = { room401: { x: 10, y: 20 }, entrance: { x: 0, y: 0 } };
  return [start, points[end]];
};

export const simulateMovement = (route, onTurn, onReach) => {
  let index = 0;
  const interval = setInterval(() => {
    if (index >= route.length) {
      clearInterval(interval);
      onReach();
    } else {
      const current = route[index++];
      if (current.turn) onTurn(current.turn);
    }
  }, 1000);
};
