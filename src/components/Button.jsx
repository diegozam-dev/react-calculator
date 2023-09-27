const Button = ({ content, action }) => {
  return <button onClick={() => action(content)}>{content}</button>;
};

export default Button;
