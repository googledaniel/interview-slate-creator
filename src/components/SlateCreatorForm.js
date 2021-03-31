import React, { useRef } from 'react';
import SlateCreator from './SlateCreator';

export default function SlateCreatorForm({ onFormSubmit = f => f }) {
	const level = useRef();
	const domain = useRef();

	return (
		<>
			<form onSubmit={handleSubmit} className="form">
				<label>
					Level: <input type="number" ref={level} />
				</label>
				<label className="form-label">
					Domain: <input type="text" ref={domain} />
				</label>
				<input type="submit" value={'Make a Slate'} className="form-label" />
			</form>
		</>
	);
}
