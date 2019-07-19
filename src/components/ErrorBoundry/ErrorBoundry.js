import React, {Component} from 'react';
import ErrorIndicator from '../ErrorIndicator';

export default class ErrorBoundry extends Component {
  constructor (props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  componentDidCatch (error, errorInfo) {
    this.setState({hasError: true});
  }

  render () {
    if (this.state.hasError) {
      return <ErrorIndicator/>;
    }

    return this.props.children;
  }
}