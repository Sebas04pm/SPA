import { faInstagram, faBlogger, faYoutube, faSquareFacebook, faTelegram} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faInstagram, faBlogger, faYoutube, faSquareFacebook, faTelegram);
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { footerLinks } from "../constantes/constantes";

export default function Footer() {
	return (
		<div className="relative isolate overflow-hidden bg-gray-900 py-20">
			<svg
				viewBox="0 0 1097 845"
				aria-hidden="true"
				className="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]"
			>
				<path
					fill="url(#10724532-9d81-43d2-bb94-866e98dd6e42)"
					fillOpacity=".2"
					d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
				/>
				<defs>
					<linearGradient
						id="10724532-9d81-43d2-bb94-866e98dd6e42"
						x1="1097.04"
						x2="-141.165"
						y1=".22"
						y2="363.075"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#776FFF" />
						<stop offset={1} stopColor="#FF4694" />
					</linearGradient>
				</defs>
			</svg>
			<svg
				viewBox="0 0 1097 845"
				aria-hidden="true"
				className="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0"
			>
				<path
					fill="url(#8ddc7edb-8983-4cd7-bccb-79ad21097d70)"
					fillOpacity=".2"
					d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
				/>
				<defs>
					<linearGradient
						id="8ddc7edb-8983-4cd7-bccb-79ad21097d70"
						x1="1097.04"
						x2="-141.165"
						y1=".22"
						y2="363.075"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#776FFF" />
						<stop offset={1} stopColor="#FF4694" />
					</linearGradient>
				</defs>
			</svg>
			<div className="mx-auto max-w-7xl grid items-center  grid-cols-1 sm:grid-cols-3 px-6 lg:px-8">
				<div className="mx-auto w-[15rem] lg:mx-0">
					<img src="/space.svg" className="w-auto" />
				</div>
				<div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none text-josefin-sans">
					<dl>
						{footerLinks.map((footerLink) => (
							<dt
								key={footerLink.name}
								className="text-2xl font-bold leading-9 tracking-tight text-slate-300"
							>
								{footerLink.name}
							</dt>
						))}
					</dl>
				</div>
				<div className="grid grid-cols-5 md:grid-cols-3 lg:grid-cols-5 gap-y-5 text-5xl text-center my-3 text-slate-300">
					<div className="pointer">
						<FontAwesomeIcon icon="fa-brands fa-instagram" />
					</div>
					<div className="pointer">
						<FontAwesomeIcon icon="fa-brands fa-blogger" />
					</div>
					<div className="pointer">
						<FontAwesomeIcon icon="fa-brands fa-youtube" />
					</div>
					<div className="pointer">
						<FontAwesomeIcon icon="fa-brands fa-square-facebook" />
					</div>
					<div className="pointer">
						<FontAwesomeIcon icon="fa-brands fa-telegram" />
					</div>
				</div>
			</div>
		</div>
	);
}
