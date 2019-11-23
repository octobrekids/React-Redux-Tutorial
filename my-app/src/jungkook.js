import React, { Component } from "react";

export default class jungkook extends Component {
  render() {
    const { ninjas } = this.props;
    const ninjaList = ninjas.map(ninja => {
      return (
        <div className="jungkook" key={ ninja.id }>
          <div>Name: { ninja.name }</div>
          <div>Age: { ninja.age }</div>
        </div>
      );
    });
    return(
        <div className="ninja-list">
            { ninjaList }
        </div>
    )
  }
}
