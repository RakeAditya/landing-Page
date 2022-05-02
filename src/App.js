function App() {
	return (
		<>
			{/* ek bada div bane jiska min ht set kie h fr flex aur flex column text color white kie h */}
			<div className="min-h-screen flex flex-col text-white">
				{/* uske andr do section h main aur footer */}
				<main className="container mx-auto px-6 pt-16 flex-1 text-center">
					<h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">Welcome to</h2>
					<h1 className="text-3xl md:text-6xl lg:text:8xl">To Code it Club</h1>
					<div className="text-lg px-4 py-2 md:text-2xl md:px-8 md:py-4 lg:text-3xl lg:px-12 lg:py-6 bg-slate-300 opacity-80 rounded-full w-fit mx-auto mb-10 mt-8">
						985,356 members
					</div>

					<form>
						<div className="flex flex-col md:flex-row justify-center mb-4">
							<input
								type="email"
								placeholder="sask@titan.com"
								className="text-lg md:text-2xl px-6 py-4 md:px-10 lg:px-12 lg:py-6 placeholder:text-grey-900 placeholder:italic placeholder:font-extrabold rounded-full bg-white opacity-70 focus:bg-opacity-60 duration-150 md:rounded-tr-none md:rounded-br-none mb-4 md:mb-0"
							/>
							<input
								type="submit"
								value="Join now"
								className=" bg-pink-300 rounded-full md:rounded-tl-none md:rounded-bl-none text-lg md:text-2xl px-6 py-4 md:px-10 lg:px-12 lg:py-6 cursor-pointer duration-150 hover:opacity-70"
							/>
						</div>
						<div id="footer" className="opacity-80 italic text-2xl">
							By subscribing you agree with Rake's{' '}
							<a href="/" className="hover:opacity-80 duration-150">
								Terms of service{' '}
							</a>
							and{' '}
							<a href="/" className="hover:opacity-80 duration-150">
								Privacy Policies
							</a>
						</div>
					</form>
				</main>

				{/* footer sec m 2 part h ek content p k andr aur 3 link alg div k andr footer content bhi apne aap m flex h lekin small screen p jake column ho jata h  */}
				<footer className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
					<p> Build with Love 💕</p>

					<div className="-mx-6 flex">
						<a className="mx-3 hover:opacity-80 duration-150" href="/">
							About
						</a>
						<a className="mx-3 hover:opacity-80 duration-150" href="/">
							Privacy
						</a>
						<a className="mx-3 hover:opacity-80 duration-150" href="/">
							Contact
						</a>
					</div>
				</footer>
			</div>
		</>
	);
}

export default App;
