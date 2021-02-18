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
	const [slate, setSlate] = useState();
	const refCandidateName = useRef('');
	const refCodingLanguage = useRef('');
	const refLevel = useRef('');
	const refDomain = useRef('');

	//is this  how i update state and load slateCreator if the
	//correct endpoint URI is called:
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('/api/slates/:id');
				const data = await response.json();
				setSlate(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	const handleSubmit = async e => {
		e.preventDefault();

		const slateMap =
			rubricModel[refLevel.current.value][refDomain.current.value];

		let num = 0;
		const usedQuestion = [''];

		const newSlate = slateMap.map(item => {
			//This is a recursive callback to make sure each question is unique for this slate:
			const getNum = () => {
				num = Math.floor(Math.random() * question[item].length);
				const uniqueItem = item + num;
				if (usedQuestion.indexOf(uniqueItem) >= 0) {
					getNum();
				} else {
					usedQuestion.push(uniqueItem);
				}
			};

			getNum();

			return question[item][num];
		});

		try {
			const response = await fetch('/api/slates', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					candidateName: refCandidateName.current.value,
					codingLanguage: refCodingLanguage.current.value,
					domain: refDomain.current.value,
					level: refLevel.current.value,
					questions: newSlate
				})
			});
			const data = await response.json();
			setSlate(data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="Page-wrapper">
			{!slate && (
				<form className="form-control" onSubmit={handleSubmit}>
					<label>
						Candidate Name
						<input type="text" ref={refCandidateName} />
					</label>

					<label>
						Coding Language
						<input type="text" ref={refCodingLanguage} />
					</label>

					<label>Level </label>
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

					<label>Domain </label>

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
			)}
			{slate && <SlateCreator slate={slate} />}
		</div>
		// </OurContext.Provider>
	);
}
