import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Input } from "reactstrap";


const bgStyle = {
    background: "#002A3B",
    color: "#fff",
    textContent: "center"
}
const Search_Bar = () => {
    return (
        <div style={bgStyle}>
            <h3>Explore Challenges</h3>
            <div>
                <Input
                    bsSize="sm"
                    type="search"
                />
            </div>
        </div>
    )
}

export default Search_Bar;