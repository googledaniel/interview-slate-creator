/*
I made my vanilla JS work here. I need to create an API to fetch questions from
Mongo after a form submit on the index page. Then I need to save a unique interview
slate and render the slate component with a unique endpoint.

I'm confused about the API. I don't think I need a schema just to fetch my
mongo question database. I definitely need to make a model and schema to save
the slate returned.

I have to create routes for my models.

What I'm stuck on: creating my routes and models
*/

import React, { useState } from 'react';
import rubricModel from '../../models/rubricModel';

const Question = {
	coding3: [
		`Here's an L3 question A`,
		`Here's an L3 question B`,
		`Here's an L3 question C`,
		`Here's an L3 question D`
	],
	FETech3: [
		'FE Tech Q A',
		'FE Tech Q B',
		'FE Tech Q C',
		'FE Tech Q D',
		'FE Tech Q E'
	],
	culture3: [
		`This is a culture add question A`,
		`This is a culture add question B`
	]
};

export default function SlateCreator(props) {
	const slateMap = rubricModel[props.level][props.domain];
	// console.log('slatemap is:' + slateMap);

	let num = 0;
	const usedQuestion = [];

	const newSlate = slateMap.map(item => {
		//This is a recursive callback to make sure each question is unique for this slate:
		const getNum = () => {
			num = Math.floor(Math.random() * Question[item].length);
			const uniqueItem = item + num;
			if (usedQuestion.indexOf(uniqueItem) >= 0) {
				console.log(`caught duplicate ${item + num}`);
				getNum();
			} else {
				usedQuestion.push(uniqueItem);
			}
		};

		getNum();

		return Question[item][num];
	});

	console.log(`this is the new slate: ${newSlate}`);

	return (
		<ul>
			{newSlate.map((item, index) => {
				return (
					<div className="card">
						<div className="card-header">Interview {index + 1}</div>
						<div className="card-body">
							<blockquote className="blockquote mb-0">
								<h4>{item}</h4>
							</blockquote>
						</div>
					</div>
				);
			})}
		</ul>
	);
}

// for testing:
// SlateCreator(3, 'FE');
