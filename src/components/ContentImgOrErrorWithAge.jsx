export const ContentImgOrErrorWithAge = ({ age, srcValue }) => {
  let content;
  if (age < 16) content = <h2>Заборонено</h2>;
  if (age >= 16) content = <img src={srcValue} width="200px" alt="product" />;
  return <>{content}</>;
};
