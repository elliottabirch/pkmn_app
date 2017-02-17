import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Filter from './filter';
import List from './list';

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listEntries: props.listEntries,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.listEntries !== nextProps.listEntries) {
      this.setState({
        listEntries: nextProps.listEntries,
      });
    }
  }

  handleChange(e, key) {
    this.setState({
      [key]: e.target.value,
      listEntries: this.props.listEntries.filter(entry => entry.includes(e.target.value)),
    });
  }

  // toggleActive(e) {
  //   e.target.addClass('active');
  // }

  render() {
    return (
      <div>
        <Row>
          <Col md={12} lg={12} sm={12}>
            <Filter handleChange={this.handleChange} keyName={this.props.keyName} handleSubmit={this.props.handleSubmit} />
          </Col>
        </Row>
        <Row>
          <Col md={12} lg={12} sm={12}>
            <List listEntries={this.state.listEntries} keyName={this.props.keyName} handleClick={this.props.handleSubmit} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default SearchContainer;
