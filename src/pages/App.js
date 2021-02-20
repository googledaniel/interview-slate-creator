import React, { useState, useEffect, useRef } from 'react';
// import SlateCreator from './SlateCreator';
//import rubricModel from '../models/rubricModel';
import SlateCreator from '../components/SlateCreator';
import OurContext from '../context';
import Form from '../components/Form';
import rubricModel from '../../models/rubricModel';
import questionModel from '../../models/questionModel';

const question = questionModel;

export default function App(props) {
	const [slate, setSlate] = useState();
	const refCandidateName = useRef('');
	const refCodingLanguage = useRef('');
	const refLevel = useRef('');
	const refDomain = useRef('');

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
			await setSlate(data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="container-fluid">
			<div className="jumbotron">
				<h2 className="display-2">Interview Creator</h2>
				<p className="lead">
					A software engineering slate creator for hiring managers.
				</p>
			</div>
			<div className="form-control">
				{!slate && (
					<form onSubmit={handleSubmit}>
						<div className="form-group">
							<label>Candidate Name</label>
							<input type="text" ref={refCandidateName} />
						</div>

						<div className="form-group">
							<label>Coding Language</label>
							<input type="text" ref={refCodingLanguage} />
						</div>
						<div className="form-group">
							<label>
								Level
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
							</label>
						</div>
						<div className="form-group">
							<label>
								Domain
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
							</label>
						</div>

						<input
							className="btn btn-outline-dark"
							type="submit"
							value={'Make a Slate'}
						/>
					</form>
				)}
			</div>
			<div>{slate && <SlateCreator slate={slate} />}</div>
		</div>
		// </OurContext.Provider>
	);
}
