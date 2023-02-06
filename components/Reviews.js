import Em from "../public/images/Em.png";
import Chr from "../public/images/Chr.png";
import Rom from "../public/images/Rom.png";
import Testimonial from "./Testimonial";

export default function Reviews() {
	return (
		<section className="py-12" id="testimonials">
			<div className="py-10 text-center">
				<h1 className="text-4xl text-[#D94D29]">
					Testimonials
					<span className="text-white text-4xl leading-none">.</span>
				</h1>
				<p className="text-white text-lg">What people say about me</p>
			</div>

			<div className=" w-full">
				<div className="pt-8 md:flex md:justify-between">
					<Testimonial
						src={Em}
						name="Dr Emily Hill"
						title="Professor of Computer Science founder of the joy of
							coding Academy"
						testimonial="In my experience, Arthur is an extremely
							talented and hard-working individual. He has a
							strong work ethic and is always willing to go
							above and beyond to ensure that tasks are
							completed to the highest standard. When asked to
							complete tasks, he makes sure that he deeply
							understands the nuances of the task to complete
							it deeply and successfully."
					/>

					<Testimonial
						src={Chr}
						name="Chris Snoek"
						title="Mentor Front end Development Front end developer at Huddle BV"
						testimonial="Arthur has a broad understanding of the current
						landscape of front end web development.
						Therefore he is really quick in understanding
						new tools or techniques and when he is assigned
						a task he will make sure to understand it
						completely before delivering which results in
						high quality work."
					/>

					<Testimonial
						src={Rom}
						name="Romualdo Duarte Soares dos Santos"
						title="Senior Dart and Flutter developer"
						testimonial="Arthur is always interested in helping other people, and developing areas where he can improve. I've enjoyed working with him he is a talented Frontend Developer"
					/>
				</div>
			</div>
			<div className="w-full h-[2px] bg-[#D94D29] mt-8" />
		</section>
	);
}
