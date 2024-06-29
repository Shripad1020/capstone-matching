export default function HomeLanding() {
	return (
		<div className="flex items-start mt-10 justify-center min-h-full ">
      <div style ={{ boxShadow:"0 0 15px rgba(0, 0, 0, 0.2)"}} className=" w-11/12 bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold">Get Started</h2>
        <p className="mb-6">Join our community of students and educators to discover or propose capstone projects.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex justify-center">
            <button
              className="bg-code-maroon text-white py-2 px-4 rounded m-3 w-80 h-10"
            >
              Login with Google
            </button>
          </div>
          <div className="flex justify-center">
            <a
              id="professor-path"
              href="/profregistration_path"
              className="bg-code-maroon text-white py-2 px-4 rounded m-3 no-underline inline-block w-80 h-10 text-center"
            >
              Professor Registration
            </a>
          </div>
        </div>
      </div>
    </div>
	);
}

