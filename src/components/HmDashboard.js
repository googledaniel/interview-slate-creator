import React, { useEffect, useState } from 'react';

/*
This dash holds ALL interview slates for the HM to see. It will lead to SlateCreator
for each individual slate for a candidate's interview day.

!This is very similar to SlateShow page

 */
export default function HmDashboard(props) {
	return (
		<div>
			<p>Attempting to map slate</p>

			<ul className="justify-content-start">
				{props.slates.map(item => {
					return (
						<div className="card padding">
							<div className="card-body">
								<blockquote className="card-text">
									<a href={`http://localhost:3000/${item._id}`}>
										{item.candidateName}
									</a>
								</blockquote>
							</div>
						</div>
					);
				})}
			</ul>
		</div>
	);
}
