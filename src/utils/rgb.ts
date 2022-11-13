export const toRGBA = (color: string, alpha = 1) => {
  const regex = /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/;
  const match = color.match(regex);
  return match
    ? `rgba(${parseInt(match[1], 16)}, ${parseInt(match[2], 16)}, ${parseInt(match[3], 16)}, ${alpha})`
    : `rgba(${color}, ${alpha})`;
};
