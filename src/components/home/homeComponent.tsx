import React from "react";
import SimpleCard from "./homeCards";

export class HomeComponent extends React.Component<any,any> {
  init = () => {
    const { doInit } = this.props;
    doInit();
  };
  render() {
    return (
      <div className="wrapper"> 
        <div>
          <SimpleCard/>
        </div>
      </div>
    );
  }
}