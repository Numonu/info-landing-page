import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link } from "../components/Link";
export function Footer() {
	return (
		<div className="bg-zinc-950 py-4 pt-12 grid grid-cols-2 justify-items-center lg:grid-cols-3 xl:grid-cols-4">
			<div className="uppercase font-bold">
				<h1 className="text-oro text-xl">logo</h1>
				<h2>slogan here</h2>
			</div>
			<div>
				<ul className="capitalize font-medium">
					<li>
						<Link>services</Link>
					</li>
					<li>
						<Link>experience</Link>
					</li>
					<li>
						<Link>team</Link>
					</li>
					<li>
						<Link>about</Link>
					</li>
				</ul>
			</div>
			<div>
				<ul className="capitalize font-medium">
					<li>
						<Link>experience</Link>
					</li>
					<li>
						<Link>team</Link>
					</li>
					<li>
						<Link>about</Link>
					</li>
					<li>
						<Link>services</Link>
					</li>
				</ul>
			</div>
			<div className="flex items-center flex-wrap gap-4 text-2xl">
				<Link>
					<BsFacebook />
				</Link>
				<Link>
					<BsInstagram />
				</Link>
				<Link>
					<BsLinkedin />
				</Link>
			</div>
		</div>
	);
}
