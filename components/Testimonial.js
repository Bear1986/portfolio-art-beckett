import BlackWhite from "./BlackWhite";

const Testimonial = ({ name, title, src, testimonial }) => {
	return (
		<div className="md:w-full mx-4 md:text-center mb-8 flex flex-col">
			<div className="md:w-full md:flex md:justify-center">
				<BlackWhite
					src={src}
					delay={200}
					alt="Dr Emily Hill"
					className="w-[10rem] cursor-default"
				/>
			</div>

			<div className="p-4 text-center">
				<h1 className="text-xl text-[#D94D29]">{name}</h1>
				<p className="text-white">{title}</p>
			</div>

			<section className="bg-white text-[#222A36] p-8 md:mr-0 min-h-[16rem] mt-auto flex flex-1 justify-center items-center">
				<p>{testimonial}</p>
			</section>
		</div>
	);
};

export default Testimonial;
