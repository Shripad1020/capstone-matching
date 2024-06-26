import { ethnicities } from "./constants";

export default function Ethnicities() {
	return (
		<>
			<label className="text-label-blue mt-3 block text-sm font-medium">Ethnicity (Select One or More)<span className="text-red-600"> *</span></label>
			<select className="block w-full p-1.5 my-1 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-300" 
				id="ethnicities" multiple required>
				{ethnicities.map(ethnicity => (
					<option key={ethnicity} value={ethnicity.toLowerCase().replace(/\s+/g, '-')}>
						{ethnicity}
					</option>
				))}
			</select>
		</>
	)
}