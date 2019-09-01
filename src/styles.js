export const setColor = {
  accentColor: "#C700EB",
  mainBlack: "#111111",
  offWhite: "#fafafa",
  // Strapi - #2F7FE9 Jason- #c700eb gatsby #663399
  mainGrey: "#333",
  lightGrey: "#f5f5f5",
}

export const setFontFamily = {
  main: 'font-family: "Quattrocento Sans", sans-serif; font-weight: 400;',
  serif: 'font-family: "Quattrocento", serif; font-weight: 700;',
}

export const setFontSize = {
  larger: "font-size: 1.2rem;",
}

export const setTransition = ({
  property = "all",
  time = "0.3s",
  timing = "ease-in-out",
} = {}) => {
  return `transition:${property} ${time} ${timing}`
}
