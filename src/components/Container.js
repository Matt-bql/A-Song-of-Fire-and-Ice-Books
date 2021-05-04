import React from "react";
import List from "./List";
import Modal from "./Modal";
import BookContent from "./BookContent";
import CharacterContent from "./CharacterContent";
import HouseContent from "./HouseContent";
// import Modal from "./Modal";
class Container extends React.Component {
  state = { showList: false, data: [], modalIsOpen: false, filteredData: [] };

  componentDidMount() {
    try {
      fetch(`https://www.anapioficeandfire.com/api/${this.props.item.type}`)
        .then((res) => res.json())
        .then((res) => {
          if (res.length > 0) {
            for (let i = 0; i < res.length; i++) {
              res[i].id = i;
            }
            this.setState({ data: res });
            console.log("success!");
          }
        });
    } catch (err) {
      console.log("error fetching data", err);
    }
  }
  // FUNCTIONS
  closeList = () => {
    this.setState({ showList: false });
  };
  setModalOpen = () => {
    this.setState({ modalIsOpen: true });
  };

  handleClick = (id) => {
    const { data } = this.state;
    const newArray = data.filter((dat) => {
      return dat === id;
    });
    this.setState({ filteredData: newArray });
    console.log(newArray);
  };

  render() {
    const { showList, data, modalIsOpen, filteredData } = this.state;
    // const { type } = this.props;
    console.log(this.state.filteredData);
    return (
      <div>
        <div>
          <p
            className="category-item-style"
            // style={{ color: this.props.item.color }}
            onClick={() => {
              this.setState({ showList: true });
            }}
          >
            {this.props.item.type}
          </p>{" "}
          <List
            closeList={this.closeList}
            isListOpen={showList}
            data={data}
            setModalOpen={this.setModalOpen}
            handleClick={this.handleClick}
          />{" "}
        </div>
        <div>
          {modalIsOpen && (
            <Modal data={data}>
              {this.props.item.type === "Books" && (
                <BookContent data={data} filteredData={filteredData} />
              )}
              {this.props.item.type === "Characters" && <CharacterContent />}
              {this.props.item.type === "Houses" && <HouseContent />}
            </Modal>
          )}
        </div>
      </div>
    );
  }
}
export default Container;
