import { ethnicities } from "./constants";

export default function Ethnicities() {
	return (
		<>
			<label className="text-label-blue mt-3 block text-sm font-medium text-gray-900" htmlFor="ethnicity">Ethnicity (Select One or More)</label>
			<select className="block w-full my-1 px-1" id="ethnicities" multiple required>
				{ethnicities.map(ethnicity => (
					<option key={ethnicity} value={ethnicity.toLowerCase().replace(/\s+/g, '-')}>
						{ethnicity}
					</option>
				))}
			</select>
		</>
	)
}