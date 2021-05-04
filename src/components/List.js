const List = (props) => {
  const { data, isListOpen, closeList, setModalOpen, handleClick } = props;

  if (!isListOpen) {
    return null;
  }

  return (
    <div className="list-container-parent">
      <div className="list-container">
        {data.map((d) => {
          return (
            <div key={d.name}>
              <p
                className="list"
                onClick={() => {
                  setModalOpen();
                  handleClick(data.id);
                }}
              >
                {d.name}
              </p>
            </div>
          );
        })}
        <button onClick={closeList}>Close</button>
      </div>
    </div>
  );
};
export default List;
