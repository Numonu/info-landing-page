import { HiOutlinePaperAirplane } from "react-icons/hi";
import { useContext } from "react";
import { Data } from "../layout/App";

export function SectionContent() {
	const data = useContext(Data);
	const custom = { backgroundImage: `url(${data.image})` };

	return (
		<main className="flex flex-col gap-4 transition-colors duration-200 xl:hover:bg-zinc-700 xl:p-2">
			<div className="hidden h-[20rem] bg-cover lg:h-[38rem] bg-fixed lg:block lg:bg-scroll" style={custom}></div>
			<h1 className="text-main text-3xl font-normal uppercase">
				{data.content.title}
			</h1>
			<h2 className="text-2xl uppercase">{data.content.subtitle}</h2>
			<div className="flex flex-col gap-2">
				{data.content.description.map((e) => (
					<p className="text-xl">{e}</p>
				))}
			</div>
		</main>
	);
}
