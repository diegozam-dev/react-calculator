const Screen = ({ operationValues, currentValue }) => {
  return (
    <div>
      <input type="text" value={operationValues.join(' ')} disabled />
      <input type="text" value={currentValue} disabled />
    </div>
  );
};

export default Screen;
