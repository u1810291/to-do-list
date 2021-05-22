export const getRandColor = () => {
  const brightness = Math.floor(Math.random() * 3) + 1;
  const rgb = [Math.random() * 256, Math.random() * 256, Math.random() * 256];
  const mix = [brightness * 100, brightness * 100, brightness * 100]; // 100 => 255/5
  // eslint-disable-next-line max-len
  const mixedrgb = [rgb[0] + mix[0], rgb[1] + mix[1], rgb[2] + mix[2]].map((x) => Math.round(x / 2.0));
  return `rgb(${mixedrgb.join(',')})`;
};
