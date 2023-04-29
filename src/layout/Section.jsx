import { SectionContent } from "../components/SectionContent";
import { SectionHeader } from "../components/SectionHeader";
import { SectionInfo } from "../components/SectionInfo";

export function Section({ children }) {
	return (
		<div className="p-2 grid grid-cols-1 gap-4 sm:px-8 lg:gap-6 lg:grid-cols-3 xl:gap-12">
			{children}
		</div>
	);
}

Section.Header = SectionHeader;
Section.Content = SectionContent;
Section.Info = SectionInfo;