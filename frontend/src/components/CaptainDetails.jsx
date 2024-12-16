const CaptainDetails = () => {
	return (
		<div>
			<div className="flex items-center justify-between">
				<div className="flex items-center justify-start gap-3">
					<img className="h-10 w-10 rounded-full object-cover" src="/Driver.jpg" alt="Driver img" />
					<h4 className="text-lg font-medium">Damodar Patel</h4>
				</div>
				<div className="text-right">
					<h4 className="text-xl font-semibold">₹493.20</h4>
					<p className="text-sm text-gray-600">Earned</p>
				</div>
			</div>

			<div className="flex mt-8 p-3 bg-gray-200 rounded-xl justify-center gap-5 items-start">
				<div className="text-center">
					<i className="ri-timer-2-line text-3xl mb-2 font-thin"></i>
					<h5 className="text-lg font-medium">10.2</h5>
					<p className="text-sm text-gray-600">Hours Online</p>
				</div>
				<div className="text-center">
					<i className="ri-speed-up-fill text-3xl mb-2 font-thin"></i>
					<h5 className="text-lg font-medium">10.2</h5>
					<p className="text-sm text-gray-600">Hours Online</p>
				</div>
				<div className="text-center">
					<i className="ri-booklet-line text-3xl mb-2 font-thin"></i>
					<h5 className="text-lg font-medium">10.2</h5>
					<p className="text-sm text-gray-600">Hours Online</p>
				</div>
			</div>
		</div>
	)
}

export default CaptainDetails