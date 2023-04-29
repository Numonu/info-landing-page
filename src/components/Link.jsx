export function Link({ href, children }) {
	return (
		<a className="hover:text-main cursor-pointer" href={href || "#"}>
			{children}
		</a>
	);
}
