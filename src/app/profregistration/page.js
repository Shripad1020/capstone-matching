export default function ProfRegistration() {
	return (
		<div className="flex flex-col items-center min-h-full">
			<h1 className="mt-8 text-center text-4xl font-medium">Professor Registration</h1>

			<form className="p-12 pb-3 w-full max-w-3xl">
				<label className="text-label-blue block text-sm font-medium" htmlFor="email">TAMU Email Address<span className="text-red-600"> *</span></label>
				<input
					type="email"
					id="email"
					className="block w-full p-1.5 my-1 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-300"
					required
				/>
				
				<label className="text-label-blue mt-3 block text-sm font-medium" htmlFor="first-name">First Name<span className="text-red-600"> *</span></label>
				<input
					type="text"
					id="first-name"
					className="block w-full p-1.5 my-1 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-300"
					required
				/>

				<label className="text-label-blue mt-3 block text-sm font-medium" htmlFor="last-name">Last Name<span className="text-red-600"> *</span></label>
				<input
					type="text"
					id="last-name"
					className="block w-full p-1.5 my-1 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-300"
					required
				/>

				<label className="text-label-blue mt-3 block text-sm font-medium" htmlFor="corses">Select Courses</label>
      
				<button type="submit" className="block my-5 bg-code-maroon text-white py-1.5 px-4 rounded mx-auto">
					Register
				</button>

				<hr/>
				<div class="text-center">
					<p class="mt-3 font-normal">Already registered as a professor?</p>
					<button type="submit" className="block my-5 bg-code-maroon text-white py-1.5 px-3 rounded mx-auto">
						Login here
					</button>
				</div>

			</form>
		</div>
	);
}
