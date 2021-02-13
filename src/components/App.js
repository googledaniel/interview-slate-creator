import React, { useState, useEffect, useRef } from 'react';
// import SlateCreator from './SlateCreator';
//import rubricModel from '../models/rubricModel';
import SlateCreator from './SlateCreator';
import OurContext from '../context';
import Form from './Form';

export default function App(props) {
	const [rubric, setRubric] = useState({});
	const [slate, setSlate] = useState(['Your questions will be added.']);
	const refLevel = useRef();
	const refDomain = useRef();
	const [level, setLevel] = useState();
	const [domain, setDomain] = useState('');

	// useEffect(() => {
	// 	(async () => {
	// 		try {
	// 			const response = await fetch('/api/questions')
	//
	// 		} catch {
	//
	// 		}
	// 	})();
	// }, [rubric]);

	const handleSubmit = async e => {
		e.preventDefault();
		e.persist();

		setLevel(refLevel.current.value);
		setDomain(refDomain.current.value);
	};

	return (
		// <OurContext.Provider value={slate}>
		<div className="Page-wrapper">
			<form onSubmit={handleSubmit}>
				<label>
					Level: <input type="number" ref={refLevel} />
				</label>
				<label>
					Domain: <input type="text" ref={refDomain} />
				</label>
				<input type="submit" value={'Make a Slate'} />
			</form>
			{domain && <SlateCreator level={level} domain={domain} />}
		</div>
		// </OurContext.Provider>
	);
}
