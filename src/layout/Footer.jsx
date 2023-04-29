import { BsFacebook , BsInstagram , BsLinkedin} from "react-icons/bs";
export function Footer() {
	return (
		<div className="bg-zinc-950 py-4 pt-12 grid grid-cols-2 justify-items-center lg:grid-cols-3 xl:grid-cols-4">
			<div className="uppercase font-bold">
				<h1 className="text-oro text-xl">logo</h1>
				<h2>slogan here</h2>
			</div>
			<div>
				<ul className="capitalize font-medium">
					<li><a href="#">Services</a></li>
					<li><a href="#">Experience</a></li>
					<li><a href="#">Team</a></li>
					<li><a href="#">About</a></li>
				</ul>
			</div>
            <div>
                <ul className="capitalize font-medium">
					<li><a href="#">Team</a></li>
					<li><a href="#">Experience</a></li>
					<li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
				</ul>
			</div>
            <div className="flex items-center flex-wrap gap-4 text-2xl">
                <BsFacebook/>
                <BsInstagram/>
                <BsLinkedin/>
            </div>
		</div>
	);
}
