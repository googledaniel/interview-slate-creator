/*
1. I have to use hard coded questions in models for now. I need to refactor
the newSlate function so it creates a query for the object in mongo
and then fetch the data and set that data as a state in a useEffect.

2. I need help with CRUD. I can't remember how to send data
to mongo and get the URI endpoint back with routes.
I have create and read routes made plus the Schema
but I don't remember how to get my form to submit the
data and then render a unique page with the URI.

3. How do I customize Bootstrap in Saas? I added the package
and it's in package-json but it's still not letting
me customize.
*/

import React, { useState, useEffect } from 'react';
import rubricModel from '../../models/rubricModel';
import questionModel from '../../models/questionModel';

// const question = questionModel;

export default function SlateCreator(props) {
	// const slateMap = rubricModel[props.level][props.domain];
	//
	// let num = 0;
	// const usedQuestion = [];
	//
	// //instead of a return I could  setstate
	// const newSlate = slateMap.map(item => {
	// 	//This is a recursive callback to make sure each question is unique for this slate:
	// 	const getNum = () => {
	// 		num = Math.floor(Math.random() * question[item].length);
	// 		const uniqueItem = item + num;
	// 		if (usedQuestion.indexOf(uniqueItem) >= 0) {
	// 			// console.log(`caught duplicate ${item + num}`);
	// 			getNum();
	// 		} else {
	// 			usedQuestion.push(uniqueItem);
	// 		}
	// 	};
	//
	// 	getNum();
	//
	// 	return question[item][num];
	// });

	// console.log(`this is the new slate: ${newSlate}`);

	return (
		<div>
			<h2>Candidate: {props.candidateName}</h2>
			<h2>Coding Language: {props.codingLanguage}</h2>
			<h2>Level: {props.level}</h2>
			<h2>Domain: {props.domain}</h2>
			<ul>
				{props.interviews.map((item, index) => {
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
		</div>
	);
}

// for testing:
// SlateCreator(3, 'FE');
