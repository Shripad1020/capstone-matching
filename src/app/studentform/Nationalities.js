import { nationalities } from "./constants"

export default function Nationalities() {
	return (
		<>
			<label className="text-label-blue mt-3 block text-sm font-medium text-gray-900" htmlFor="nationality">Nationality</label>
			<select className="block w-full my-1 px-1" id="nationality" required>
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