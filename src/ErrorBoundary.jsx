import React, { Component } from "react";
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    // console.log("ErrorBoundary caught an error:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return <h6>Something went wrong.</h6>;
    }
    return this.props.children;
  }
}
