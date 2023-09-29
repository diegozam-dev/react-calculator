const Input = ({ value, className }) => {
  return (
    <input
      className={
        className +
        ' screen__operation-values text-right w-full bg-slate-100 overflow-x-auto'
      }
      type="text"
      value={value}
      disabled
    />
  );
};

export default Input;
