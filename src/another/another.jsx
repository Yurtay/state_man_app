const Another = () => {
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].reverse();
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray[i] = array[array.length - i - 1];
  }
  return (
    <div className="div_container">
      <h1>{newArray}</h1>
    </div>
  );
};

export default Another;
