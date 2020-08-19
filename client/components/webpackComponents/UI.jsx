import React, { useState, useEffect } from 'react';
import '../../css/App.css';
// import { Link } from 'react-router-dom';

const UI = (props) => {

	// here we tie the selections to the state selected, and the logic is so that
	// some of the logic is dependent on other radios or checkboxes

	const handleChange = (e) => {
		props.onChange(e.target.value, e.target.checked);
	}

	return (
		<div>
            <ul><strong>UI Library</strong>
                <li><input type="checkbox" value="bootstrap" onChange={(e)=> handleChange(e)} />Bootstrap</li>
				<li><input type="checkbox" value="tailwindcss" onChange={(e)=> handleChange(e)} />Tailwind CSS</li>
            </ul>
		</div>
	)
}

export default UI;