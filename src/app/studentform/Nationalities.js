import { nationalities } from "./constants"

export default function Nationalities() {
	return (
		<>
			<label className="text-label-blue mt-3 block text-sm font-medium" htmlFor="nationality">Nationality<span className="text-red-600"> *</span></label>
			<select className="block w-full p-1.5 my-1 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-300" 
				id="nationality" required>
				<option value="" disabled selected>Select your nationality</option>
				{nationalities.map(nationality => (
					<option key={nationality} value={nationality.toLowerCase().replace(/\s+/g, '-')}>
						{nationality}
					</option>
				))}
			</select>
		</>
	)
}