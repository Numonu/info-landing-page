import { createContext } from "react";
import { Section } from "./Section";
import { data } from "../database/db.json";
import { Footer } from "./Footer";
import { Header } from "./Header";


export const Data = createContext(null);

export function App() {
	return (
		<div className="bg-zinc-800 text-zinc-300">
			<div className="max-w-[1000px] mx-auto">
				<Header/>
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
