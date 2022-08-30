import { Component } from "react";

class DataLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null,
      isFetching: false,
    };
  }

  load = () => {
    const { getData } = this.props;
    this.setState({ isFetching: true });
    getData()
      .then((data) => {
        this.setState({ data: data });
      })
      .catch((err) => {
        this.setState({ error: err });
      })
      .finally(() => {
        this.setState({ isFetching: false });
      });
  };

  componentDidMount() {
    this.load();
  }

  render() {
    const { render } = this.props;
    return render(this.state);
  }
}
export default DataLoader;
