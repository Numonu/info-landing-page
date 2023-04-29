import { useContext } from "react";
import { Data } from "../layout/App";

export function SectionInfo() {
	const data = useContext(Data);
	const custom = { backgroundImage: `url(${data.image})` };

	return (
		<main className={`flex flex-col gap-4 transition-colors duration-200 xl:hover:bg-zinc-700 xl:p-2`}>
			<div className="h-[20rem] bg-cover bg-fixed lg:bg-scroll" style={custom}></div>
			<ul className="flex flex-col gap-6">
				{data.info.map((e) => (
					<li>
						<h1 className="text-amber-500 text-2xl uppercase mb-2">
							+ {e.title}
						</h1>
						<ul className="flex flex-col gap-2">
							{e.items.map(([primary, secondary]) => (
								<li className="flex justify-between text-xl capitalize">
									<span className="font-normal">
                                        {primary}
                                    </span>
									<span className="font-light">
                                        {secondary}
                                    </span>
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</main>
	);
}
