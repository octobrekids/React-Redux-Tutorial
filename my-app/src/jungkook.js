import React from "react";
import './Ninjas.css'

const Jungkook = props => {
  const { ninjas,deleteNinja } = props;
  //   const ninjaList = ninjas.map(ninja => {
  //     if (ninja.age > 20) {
  //       return (
  //         <div className="jungkook" key={ninja.id}>
  //           <div>Name: {ninja.name}</div>
  //           <div>Age: {ninja.age}</div>
  //         </div>
  //       );
  //     } else {
  //       return null;
  //     }
  //   });
  const ninjaList = ninjas.map(ninja => {
   return ninja.age > 20 ? (
      <div className="jungkook" key={ninja.id}>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <button onClick={() => deleteNinja(ninja.id)}>Delete</button>
      </div>
    ) : null;
  });

  return <div className="ninja-list">{ninjaList}</div>;
};

export default Jungkook;
