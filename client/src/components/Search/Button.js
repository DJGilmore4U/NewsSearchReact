import React from 'react';
 const Button = (props) => {
 	return(
 		<button onClick={props.handleButtonClick} className='btn btn-info btn-lg'>Search</button>
 		)	
 };

 export default Button;