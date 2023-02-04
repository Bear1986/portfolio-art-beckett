import Image from "next/image";
import Art from "../public/images/Art.gif";
export default function HomeHero() {
	const styles = {
		whiteLine: "w-full h-[2px]  translate-y-20",
		orangeLine: "w-full h-[2px]  translate-y-20",
		imageWrapper: "w-full pt-[5rem] ",
		buttonWrapper: "w-full h-2 text-white flex justify-around",
		leftButton: "hover:scale-110 hover:-rotate-12 duration-300 ",
		buttonText: "text-3xl hover:text-[#D94D29] mb-2",
		rightButton: "hover:scale-110 hover:rotate-12 duration-300 ",
	};

	return (
		<>
			<div className="block md:flex">
				<div className="w-full">
					<div className="flex justify-center text-white">
						<div className=" md:mt-16 md:max-w-3xl">
							<div className=" ml-[2.3rem] mr-[1.5rem]">
								<h1 className="text-3xl pb-3 flex justify-center mt-12">
									Hi, I'm{" "}
									<span className="text-[#D94D29] pl-2">
										Art Beckett
										<span className="text-white text-4xl leading-none">
											.
										</span>
									</span>
								</h1>
								<div className="p-8 text-lg drop-shadow-2xl">
									<p>
										I'm a Frontend developer with a passion
										for building user-friendly websites
										Based in the UK, Swindon.{" "}
									</p>
									<br></br>
									<p>
										Since 2021, I've been helping clients
										and businesses bring their digital
										visions to life, from custom
										applications to landing pages and
										e-commerce sites.
									</p>
									<br></br>
									<p>
										My goal is to make sure that every
										website I work on is fast, responsive,
										and easy to use for everyone. Whether
										you need a new website or a hand with a
										project, I'm here to help! Let's chat
										and see how we can work together.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.imageWrapper}>
					<Image
						src={Art}
						alt="Arthur Beckett"
						width={400}
						height={400}
						className="mx-auto md:m-0 md:mb-12"
					/>
				</div>
			</div>
		</>
	);
}
