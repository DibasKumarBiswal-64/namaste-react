import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    constructor(props){
        super(props);

        // this.state = {
        //     count:0,
        //     count2:2,
        // };
        // console.log("parent Constructor");
    }
    componentDidMount() {
        // console.log("parent component Did Mount ");             
    }

    render () {
        // console.log("parent  Render");
        return (
            <div>
                <h1>About Class Based Component</h1>
                <h2>This is Namaste React Web Series</h2>
                <UserClass name={"Dibas Biswal (class)"} location={"Bhubaneswar Class"}/>
            </div>
        );
    }
}

export default About;