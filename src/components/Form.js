import React, { useRef } from 'react';
import SlateCreator from './SlateCreator';

export default function Form({ onFormSubmit = f => f }) {
	const level = useRef();
	const domain = useRef();

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label>
					Level: <input type="number" ref={level} />
				</label>
				<label>
					Domain: <input type="text" ref={domain} />
				</label>
				<input type="submit" value={'Make a Slate'} />
			</form>
		</>
	);
}
