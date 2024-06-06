import { workAuths } from "./constants";

export default function WorkAuths() {
	return (
		<>
			<label htmlFor="work-authorization">Work Authorization</label>
			<select id="work-authorization" required>
				<option value="" disabled selected>Select your work authorization</option>
				{workAuths.map(workAuth => (
					<option key={workAuth} value={workAuth.toLowerCase().replace(/\s+/g, '-')}>
						{workAuth}
					</option>
				))}
			</select>
		</>
	)
}