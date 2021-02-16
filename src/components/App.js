import React, { useState, useEffect, useRef } from 'react';
// import SlateCreator from './SlateCreator';
//import rubricModel from '../models/rubricModel';
import SlateCreator from './SlateCreator';
import OurContext from '../context';
import Form from './Form';

export default function App(props) {
	const [rubric, setRubric] = useState({});
	const [slate, setSlate] = useState(['Your questions will be added.']);
	const refCandidateName = useRef();
	const refCodingLanguage = useRef();
	const refLevel = useRef();
	const refDomain = useRef();
	const [candidateName, setCandidateName] = useState('');
	const [codingLanguage, setCodingLanguage] = useState('');
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

		setCandidateName(refCandidateName.current.value);
		setCodingLanguage(refCodingLanguage.current.value);
		setLevel(refLevel.current.value);
		setDomain(refDomain.current.value);
	};

	return (
		// <OurContext.Provider value={slate}>
		<div className="Page-wrapper">
			<form className="form-control" onSubmit={handleSubmit}>
				<label>
					Candidate Name
					<input type="text" ref={refCandidateName} />
				</label>

				<label>
					Coding Language
					<input type="text" ref={refCodingLanguage} />
				</label>

				<label>Level</label>
				<select
					className="form-select"
					aria-label="Default select example"
					ref={refLevel}
				>
					<option selected>Experience Level</option>
					<option value="3">Level 3 (Jr SWE)</option>
					<option value="4">Level 4 (Mid SWE)</option>
					<option value="5">Level 5 (Sr SWE)</option>
				</select>

				<label>Domain</label>

				<select
					className="form-select"
					aria-label="Default select example"
					ref={refDomain}
				>
					<option selected>SWE Domain</option>
					<option value="FE">Frontend</option>
					<option value="BE">Backend</option>
					<option value="Infra">Infra</option>
				</select>

				<input
					className="btn btn-outline-dark"
					type="submit"
					value={'Make a Slate'}
				/>
			</form>
			{domain && (
				<SlateCreator
					candidateName={candidateName}
					codingLanguage={codingLanguage}
					level={level}
					domain={domain}
				/>
			)}
		</div>
		// </OurContext.Provider>
	);
}
