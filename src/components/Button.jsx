const Button = ({ content, action, className }) => {
  return (
    <button
      className={
        className +
        ' calculator__button font-semibold h-11 grid place-items-center rounded-md transition-all duration-200'
      }
      onClick={() => action(content)}
    >
      {content}
    </button>
  );
};

export default Button;
