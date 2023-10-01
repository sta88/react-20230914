export const Reviews = ({ data }) => {
  return (
    <ul>
      {data.map(({ user, text }) => (
        <li>
          {user}: {text}
        </li>
      ))}
    </ul>
  );
};
