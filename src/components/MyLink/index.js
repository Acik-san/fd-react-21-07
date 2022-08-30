import { Component } from "react";

class MyLink extends Component {
  render() {
    const { className, href, target, linkName } = this.props;
    return (
      <>
        <a className={className} href={href} target={target}>
          {linkName}
        </a>
      </>
    );
  }
}

export default MyLink;
