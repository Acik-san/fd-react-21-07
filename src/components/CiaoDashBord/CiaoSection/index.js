import React, { Component } from "react";
import CiaoHeading from "../CiaoHeading";
import CiaoList from "../CiaoList";
import MyLink from "../../MyLink";
import CiaoSortedList from "../CiaoSorterList";
import CiaoSortedBtn from "../CiaoSortedBtn";

class CiaoSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 4, firstName: "Elon", lastName: "Musk" },
        { id: 1, firstName: "Tom", lastName: "Hard" },
        { id: 3, firstName: "Elen", lastName: "Musk" },
        { id: 2, firstName: "Freddie", lastName: "Mercury" },
        { id: 5, firstName: "Elton", lastName: "Jhon" },
      ],
      isUpSortById: true,
      isUpSortByLastName: true,
    };
  }
  sortById = () => {
    const { users, isUpSortById } = this.state;
    const copyUsers = JSON.parse(JSON.stringify(users));
    copyUsers.sort((a, b) => {
      return isUpSortById ? a.id - b.id : b.id - a.id;
    });
    this.setState({
      users: copyUsers,
      isUpSortById: !isUpSortById,
    });
  };

  sortByLastName = () => {
    const { users, isUpSortByLastName } = this.state;
    const copyUsers = JSON.parse(JSON.stringify(users));
    copyUsers.sort((a, b) => {
      if (a.lastName > b.lastName) {
        return isUpSortByLastName ? 1 : -1;
      }
      if (a.lastName < b.lastName) {
        return isUpSortByLastName ? -1 : 1;
      }
      return 0;
    });
    this.setState({
      users: copyUsers,
      isUpSortByLastName: !isUpSortByLastName,
    });
  };

  render() {
    const { users, isUpSortById, isUpSortByLastName } = this.state;
    return (
      <>
        <CiaoHeading title="react" className="heading" content={"Hi!"} />
        {/* <CiaoSortedList
          isUpSortById={isUpSortById}
          isUpSortByLastName={isUpSortByLastName}
          sortById={this.sortById}
          sortByLastName={this.sortByLastName}
        /> */}
        <CiaoSortedBtn
          isUpSort={isUpSortById}
          sortBy={this.sortById}
          context="ID"
        />
        <CiaoSortedBtn
          isUpSort={isUpSortByLastName}
          sortBy={this.sortByLastName}
          context="Name"
        />
        <CiaoList users={users} />
        {/* {React.createElement(CiaoList, { users: users })} */}

        <div className="links-wrapper">
          <MyLink
            className="my-link-i"
            href="https://www.instagram.com/"
            target="_blank"
            linkName="Instagram"
          />
          <MyLink
            className="my-link-f"
            href="https://www.facebook.com/"
            target="_blank"
            linkName="Facebook"
          />
          <MyLink
            className="my-link-t"
            href=" https://twitter.com/"
            target="_blank"
            linkName="Twitter"
          />
        </div>
      </>
    );
  }
}

export default CiaoSection;
