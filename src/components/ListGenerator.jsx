export const ListGenerator = ({ list }) => {
  return (
    <ul>
      {list.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
};
