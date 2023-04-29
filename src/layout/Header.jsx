import { useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { AiFillFire } from "react-icons/ai";
import { Link } from "../components/Link";

export function Header() {
	const [show, setShow] = useState(false);
	return (
		<div className="p-2">
			<div className=" flex justify-between items-center mb-4">
				<div className="text-main flex gap-2 text-3xl ">
					<AiFillFire />
					<h1>Numonu</h1>
				</div>
				<GoThreeBars
					className="hover:text-main text-3xl lg:hidden"
					onClick={() => setShow(!show)}
				/>
				<ul className="hidden items-center gap-6 capitalize text-2xl lg:flex">
					<li>
						<Link>services</Link>
					</li>
					<li>
						<Link>contact</Link>
					</li>
					<li>
						<Link>contact</Link>
					</li>
					<li>
						<Link>about</Link>
					</li>
				</ul>
			</div>
			{show && (
				<ul className="flex flex-col items-center gap-2 capitalize text-2xl lg:hidden ">
					<li>
						<Link>services</Link>
					</li>
					<li>
						<Link>contact</Link>
					</li>
					<li>
						<Link>contact</Link>
					</li>
					<li>
						<Link>about</Link>
					</li>
				</ul>
			)}
		</div>
	);
}
