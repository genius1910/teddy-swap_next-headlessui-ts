export const calculateZoom = (width: number) => {
  const minWidth = 1920;
  const maxWidth = 3840;
  const baseZoom = 100;
  const zoomRange = 100 - 72;
  const widthRange = maxWidth - minWidth;

  // Calculate the ratio of current width within the range of minWidth and maxWidth
  const widthRatio = (width - minWidth) / widthRange;

  // Calculate the new zoom value
  const newZoom = baseZoom - widthRatio * zoomRange;

  // Return the clamped zoom value between 100 and 72
  return Math.max(72, Math.min(100, newZoom));
};
