import { createContext } from "react";
import { Section } from "./Section";
import { data } from "../database/db.json";
import { Footer } from "./Footer";


export const Data = createContext(null);

export function App() {
	return (
		<div className="bg-zinc-800 text-zinc-300">
			<div className="max-w-[1000px] mx-auto">
				<h1 className="py-6 text-amber-500 text-center text-5xl font-bold">Dipper.</h1>
				<div className="flex flex-col gap-6 pb-16">
					{data.map((e) => {
						return (
							<Data.Provider value={e}>
								<Section>
									<Section.Header />
									<Section.Content />
									<Section.Info />
								</Section>
							</Data.Provider>
						);
					})}
				</div>
			</div>
			<Footer />
		</div>
	);
}
