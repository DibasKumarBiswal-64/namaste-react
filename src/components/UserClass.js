import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        
        this.state =
        {
            // count: 0,
            // count2: 2,

            userInfo: {
                name:"Dummy",
                location:"Default",
            },
        };
        // console.log(this.props.name + " Child Constructor");
    }

    
    async componentDidMount() {
        // console.log(this.props.name + "Child component Did Mount ");   



        const data =await fetch("https://api.github.com/users/DibasKumarBiswal-64");
        const json = await data.json();
        this.setState({
            userInfo: json,
        });
        console.log(json);
    }

    render() {
        // console.log(" Child Render");
        const {name,location } = this.state.userInfo;
        // const { count } = this.state;
        // console.log("Render");
        return (
            <div className="user-card">
            {/* <h1>Count : {count}</h1>
            <button onClick={() => {
                this.setState({
                    count: this.state.count +1,
                });

            }

            }>Count Increase</button> */}
            <h2>Name:{name}</h2>
            <h3>Location:{location}</h3>
            <h4>Contact:@Dibas64</h4>
        </div>
        );
    }
}

export default UserClass;