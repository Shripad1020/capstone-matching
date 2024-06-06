import { nationalities } from "./constants"

export default function Nationalities() {
	return (
		<>
			<label htmlFor="nationality">Nationality</label>
			<select id="nationality" required>
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