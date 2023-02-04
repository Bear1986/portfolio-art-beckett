import BlackWhite from "./BlackWhite";
import aboutPhoto from "../public/images/aboutPhoto.png";
import Church from "../public/images/Church.png";
import HanEz from "../public/images/HanEz.png";
import { FaFileUpload } from "react-icons/fa";
import Image from "next/image";
import sign from "../public/images/sign.png";

export default function About() {
	return (
		<section className="py-12" id="about">
			<div className="py-10">
				<h1 className="text-4xl text-center text-[#D94D29]">
					About me
					<span className="text-white text-4xl leading-none">.</span>
				</h1>
				<p className="text-center text-l text-white">
					From Priest to Police officer to Programer
				</p>
			</div>
			<div className="">
				<div className="hidden lg:flex lg:w-full lg:justify-center p-3">
					<BlackWhite
						src={Church}
						alt="Arthur Becketts family"
						delay={200}
					/>

					<BlackWhite
						src={aboutPhoto}
						alt="Arthur Becketts family"
						delay={200}
					/>
					<BlackWhite
						src={HanEz}
						alt="Arthur Becketts family"
						delay={200}
					/>
				</div>

				<section className="p-16 text-white">
					<p className="mb-4">
						After completing my studies at University, I was called
						to serve in the Anglican Church in South Africa, where I
						worked with students from various universities and
						churches in Kwa-Zulu Natal. My passion for serving
						others led me to an Assistant Ministerial position in a
						church on the beautiful Island of St. Helena, a British
						overseas territory.
					</p>
					<p className="mb-4">
						It was on this island that I met my wife and, after a
						time of reflection, I made the difficult decision to
						leave the church when I was offered the unique
						opportunity to become the first-ever Family Liaison
						Officer with the Police service. This role allowed me to
						continue my mission of helping others, and I was proud
						to serve the community in this capacity.
					</p>
					<p className="mb-4">
						However, my work as a police officer was not without its
						challenges. I was involved in an investigation that
						uncovered a historic case of child abuse, which
						implicated a number of serving police officers. The case
						became an international scandal and, despite ample
						evidence, only one officer was prosecuted. This
						experience left me disillusioned with the system and I
						was offered early retirement due to my involvement in
						the investigation.
					</p>
					<p className="mb-4">
						My wife and I decided to start a new life in the UK with
						our two children, Hannah and Ezra, and I was eager to
						find a new career path. With a wealth of experience in
						dealing with digital evidence, I was drawn to the world
						of technology and took a short course in Python. This
						sparked a passion for development and, in particular,
						for building user interfaces. Recognizing that there was
						limited demand for GUI developers, I chose to focus on
						Frontend Development.
					</p>
					<p className="mb-4">
						In January 2021, I enrolled in a six-month bootcamp that
						taught Full-stack development, but four months into the
						program, I was offered an internship and Junior
						Developer role with a start-up in the Netherlands. This
						was an exciting opportunity to learn more about mobile
						development in Dart and Flutter, and I enjoyed working
						remotely and improving my Dutch language skills.
						Unfortunately, like many start-ups, the company went
						under quite quickly, and I found myself unemployed after
						just four months.
					</p>
					<p className="mb-4">
						However, I was determined to continue my journey as a
						developer, so I joined another bootcamp in New Jersey
						and became a certified Second Language Tutor to support
						my family while I continued to study. Through my
						tutoring work, I had the opportunity to help a number of
						developers improve their English and secure remote
						positions in Europe, England, America, and Australia.
						Some of these relationships even developed into close
						friendships, allowing me to grow and learn from others.
					</p>
					<p className="mb-4">
						After completing my course through The Joy of Coding
						Academy, I was offered an internship with a parent
						company, Tech Joy. During this time, I honed my skills
						as a Frontend developer, integrating third-party
						libraries and helping other interns. I was even promoted
						to Junior Developer and Team Lead, a role that allowed
						me to make a significant impact and learn a great deal.
					</p>
					<p className="mb-4">
						However, I felt the need to find a role closer to home,
						as time zones were becoming increasingly challenging,
						and I am now actively seeking projects or positions
						where I can further develop my skills and bring my
						experience and positive attitude to the table.
					</p>
					<p className="mb-4">
						If I sound like someone who can bring value to your
						project or company please feel free to contact me.
					</p>
					<div className="flex justify-end p-6">
						<Image
							src={sign}
							alt="Arthur Becketts family"
							width={150}
							height={100}
							className="absolute -translate-x-34 m -translate-y-24"
						/>
					</div>
				</section>
			</div>
			<div className="w-full h-[2px] bg-[#D94D29]" />
		</section>
	);
}
