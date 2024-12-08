import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
			<div className="bg-[url(/home.png)] bg-cover bg-no-repeat bg-center h-screen pt-8 flex justify-between flex-col w-full">
				<img src="/logo.png" alt="logo" className="w-16 ml-9" />
				<div className="bg-white pb-7 py-4 px-4">
					<h2 className="text-3xl font-bold">Get Started with Uber</h2>
					<Link to="/login" className="flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-7">Continue</Link>
				</div>
			</div>
		</div>
  )
}

export default Home;