import { useContext } from "react";
import { Data } from "../layout/App";

export function SectionHeader() {
	const data = useContext(Data);
	const custom = { backgroundImage: `url(${data.image})` };

	return (
		<header className={`flex flex-col gap-2 transition-colors duration-200 xl:hover:bg-zinc-700 xl:p-2`}>
			<div className="h-[20rem] bg-cover lg:h-[48rem] bg-fixed lg:bg-scroll" style={custom}></div>
			<h1
				className="text-amber-500 text-5xl font-bold uppercase">
				{data.header.title}
			</h1>
			<h2 className="text-xl font-bold uppercase tracking-widest">
				{data.header.subtitle}
			</h2>
			<h3 className="text-amber-500 text-2xl capitalize">
				{data.header.extraTop} <br />
                {data.header.extraBottom}
			</h3>
		</header>
	);
}
