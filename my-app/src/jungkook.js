import React from "react";

const Jungkook = (props) => {
    const { ninjas } = props;
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

export default Jungkook;
 