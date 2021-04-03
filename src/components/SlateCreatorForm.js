import React, { useRef } from 'react';
import SlateCreator from './SlateCreator';
import textField from '@material-ui/core/TextField';
import { FormControl } from '@material-ui/core';
import { TextField } from '@material-ui/core';

export default function SlateCreatorForm({ onFormSubmit = f => f }) {
	const level = useRef();
	const domain = useRef();

	return (
		<>
			<FormControl>
				<TextField variant={filled}></TextField>
			</FormControl>

			<div className="form-control border-0">
				{!slate && (
					<form onSubmit={handleSubmit}>
						<div className="form-group">
							<label>Candidate Name </label>
							<input type="text" ref={refCandidateName} />
						</div>

						<div className="form-group">
							<label>Coding Language </label>
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
		</>
	);
}
