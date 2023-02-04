/* eslint-disable react/no-unescaped-entities */

import About from "./About";
import Reviews from "./Reviews";
import Work from "./Work";

export default function HomeBody() {
	const styles = {};
	return (
		<>
			<Reviews />
			<About />
			<Work />
		</>
	);
}
