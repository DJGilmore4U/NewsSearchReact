import React from "react";

const Input = (props) => {
	return(
		<div>
			<h5>Type the Article Title of Interest or Key Words Here</h5>
			 <input onChange={props.handleInputChange} type="text" className="form-control" value={props.search}></input>
		</div>
	 )
};

export default Input;