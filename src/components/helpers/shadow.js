export const shadow = () => {
  let shadow = "";
  for (let i = 0; i < 6; i++) {
    shadow += `${i}px ${i}px 0px #dbd6d6${i < 5 ? ", " : ""}`;
  }
  return shadow;
};
