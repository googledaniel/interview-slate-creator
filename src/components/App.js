import React, { useState, useEffect, useRef } from 'react';
// import SlateCreator from './SlateCreator';
//import rubricModel from '../models/rubricModel';
import SlateCreator from './SlateCreator';
import OurContext from '../context';
import Form from './Form';
import rubricModel from '../../models/rubricModel';
import questionModel from '../../models/questionModel';

const question = questionModel;

export default function App(props) {
	const [rubric, setRubric] = useState({});
	const [slate, setSlate] = useState();

	//the five below might need to be refactored in SlateCreator as part of slate
	const [interviews, setInterviews] = useState();
	const [candidateName, setCandidateName] = useState('');
	const [codingLanguage, setCodingLanguage] = useState('');
	const [level, setLevel] = useState();
	const [domain, setDomain] = useState('');

	const refCandidateName = useRef('');
	const refCodingLanguage = useRef('');
	const refLevel = useRef('');
	const refDomain = useRef('');

	// useEffect(() => {
	// 	(async () => {
	// 		try {
	// 			const response = await fetch('/api/slates/')
	//
	// 		} catch {
	//
	// 		}
	// 	})();
	// }, [slate]);

	const handleSubmit = async e => {
		e.preventDefault();
		// const valCandidateName = refCandidateName.current.value;
		// const valCodingLanguage = refCodingLanguage.current.value;
		// const valLevel = refLevel.current.value;
		// const valDomain = refDomain.current.value;
		// try {
		// 	const response = await fetch('/api/slates', {
		// 		method: 'POST',
		// 		headers: {
		// 			'Content-Type': 'application/json'
		// 		},
		// 		body: JSON.stringify({
		// 			candidateName: valCandidateName,
		// 			codingLanguage: valCodingLanguage,
		// 			level: valLevel,
		// 			domain: valDomain
		// 		})
		// 	});
		// 	const data = await response.json();
		// 	//Does this need to be an array [data]:
		// 	setSlate([data]);
		// 	console.log(`slate State on handle submit: ${slate}`);
		// } catch (error) {
		// 	console.log(error);
		// }
		// setCandidateName(valCandidateName);
		// setCodingLanguage(valCodingLanguage);
		// setLevel(valLevel);
		// setDomain(valDomain);

		setCandidateName(refCandidateName.current.value);
		setCodingLanguage(refCodingLanguage.current.value);
		setLevel(refLevel.current.value);
		setDomain(refDomain.current.value);

		//SlateCreator refactor into App

		const slateMap =
			rubricModel[refLevel.current.value][refDomain.current.value];

		let num = 0;
		const usedQuestion = [''];

		//instead of a return I could  setstate
		const newSlate = slateMap.map(item => {
			//This is a recursive callback to make sure each question is unique for this slate:
			const getNum = () => {
				num = Math.floor(Math.random() * question[item].length);
				const uniqueItem = item + num;
				if (usedQuestion.indexOf(uniqueItem) >= 0) {
					// console.log(`caught duplicate ${item + num}`);
					getNum();
				} else {
					usedQuestion.push(uniqueItem);
				}
			};

			getNum();

			return question[item][num];
		});
		// setInterviews is a temporary fix since my try block has a bug
		setInterviews(newSlate);
		console.log('about to do the try block');
		try {
			const response = await fetch('/api/slates', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					candidateName: refCandidateName.current.value,
					codingLanguage: refCodingLanguage.current.value,
					domain: refLevel.current.value,
					level: refDomain.current.value,
					newSlate: newSlate
				})
			});

			const data = await response.json();

			setSlate(data);
			console.log('just finished try block');
		} catch (error) {
			console.log(error);
		}
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
					<option defaultValue>Experience Level</option>
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
					<option defaultValue>SWE Domain</option>
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
			{interviews && (
				<SlateCreator
					interviews={interviews}
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
