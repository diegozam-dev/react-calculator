const Button = ({ content, action }) => {
  return (
    <button className="calculator__button" onClick={() => action(content)}>
      {content}
    </button>
  );
};

export default Button;
