// export text and bg color with type of an object which also includes border

export default function isDark(mode) {
  if (mode) {
    return {
      bg_color: "#0F0E0E",
      text_color: "#ffff",
      text_mid_color: "#7b7e84",
      card_color: "#1d212a",
      opposite_color: "#e4e7e9",
      card_gray_content: "#d5dfe3",
    };
  }
  return {
    bg_color: "#ffff",
    text_color: "#0F0F0F",
    text_mid_color: "#7b7e84",
    card_color: "#e3e3e3",
    opposite_color: "#0F0F0F",
    card_gray_content: "#7f848a",
  };
}
// #3d4d49
// #212832
