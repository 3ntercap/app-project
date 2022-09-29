import React, { useState } from 'react';
import cl from './Counter.module.scss';

export const Counter = () => {

	const [counter, setCounter] = useState(0);

	const inc = () => {
		setCounter(counter + 1);
	}

	const dec = () => {
		setCounter(counter - 1);
	}


	return (
		<div className={cl.green}>
			<h1>{counter}</h1>
			<button onClick={inc}>+1</button>
			<button onClick={dec}>-1</button>
		</div>
	);
};
