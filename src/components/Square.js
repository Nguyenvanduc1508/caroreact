function Square({ renderItem, handleClick }) {
  return (
    <div className="board">
      {renderItem.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className="square"
          >{item}</div>
        );
      })}
    </div>
  );
}
export default Square;
