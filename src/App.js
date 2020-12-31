import React from "react";
import "./styles.css";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      first: "",
      last: "",
      phone: ""
    };
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      [e.target.name]: value
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      contacts: [
        ...this.state.contacts,
        {
          first: this.state.first,
          last: this.state.last,
          phone: this.state.phone
        }
      ]
    });
    this.setState({
      first: "",
      last: "",
      phone: ""
    });
  };
  render() {
    let mappedContacts =
      this.state.contacts &&
      this.state.contacts.map((contact) => {
        return (
          <tr>
            <td>{contact.first}</td>
            <td>{contact.last} </td>
            <td>{contact.phone}</td>{" "}
          </tr>
        );
      });
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.first}
            placeholder="First Name"
            autoComplete="off"
            name="first"
            onChange={this.handleChange}
          />
          <input
            value={this.state.last}
            placeholder="Last Name"
            autoComplete="off"
            name="last"
            onChange={this.handleChange}
          />
          <input
            value={this.state.phone}
            placeholder="Phone"
            autoComplete="off"
            name="phone"
            onChange={this.handleChange}
          />
          <button type="submit"> Add Contact</button>
        </form>
        <br />
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name </th>
              <th>Phone </th>
            </tr>
          </thead>
          <tbody>{mappedContacts}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
