import { ethnicities } from "./constants";

export default function Ethnicities() {
	return (
		<>
			<label htmlFor="ethnicity">Ethnicity (Select One or More)</label>
			<select name="ethnicities" multiple required>
				{ethnicities.map(ethnicity => (
					<option key={ethnicity} value={ethnicity.toLowerCase().replace(/\s+/g, '-')}>
						{ethnicity}
					</option>
				))}
			</select>
		</>
	)
}