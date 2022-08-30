import { Component } from "react";
import { PropTypes } from "prop-types";

class Ciao extends Component {
  /**
   *
   * @param {*} props
   * @param {number} props.id
   * @param {string} props.fname
   * @param {string} props.sname
   */
  constructor(props) {
    super(props);
    this.state = {
      isHi: true,
    };
  }
  handlerSwitch = () => {
    this.setState({ isHi: !this.state.isHi });
  };
  render() {
    const { id, fname, sname } = this.props;
    const { isHi } = this.state;
    if (isHi === false) {
      return (
        <h3>
          Bye, {fname} {sname}! (id:{id})
        </h3>
      );
    }

    return (
      <>
        <h2>
          Hi, {fname} {sname}! (id:{id})
        </h2>
        <button onClick={this.handlerSwitch}>Change greetings</button>
      </>
    );
  }
}

Ciao.defaultProps = {
  id: 0,
  fname: "Noname",
  sname: "Noname",
};

Ciao.propTypes = {
  id: PropTypes.number.isRequired,
  fname: PropTypes.string.isRequired,
  sname: PropTypes.string.isRequired,
};
export default Ciao;
