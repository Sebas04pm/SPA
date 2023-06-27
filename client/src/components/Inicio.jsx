import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { Transition } from "@headlessui/react";
import { useState } from "react";

export default function Inicio() {
	const [Logo, logoState] = useState(false);

	function scroll() {
		const logoViewPort = document.getElementById("logo").getBoundingClientRect();
		if (logoViewPort && logoViewPort.bottom < 8) {
			logoState(true)
		} else {
			logoState(false)
    }
	}
	document.addEventListener("scroll", scroll);

	return (
		<div className="isolate overflow-x-hidden h-[100vh] xl:max-h-[55rem] bg-image" id="Inicio">
			<main>
				<div className="relative px-6 lg:px-8 z-[1]">
					<div className="mx-auto max-w-2xl py-32 sm:py-20 lg:py-50">
						<div className="hidden sm:mb-8 sm:flex sm:justify-center">
							<div className="relative rounded-full py-1 px-3 text-sm leading-6 text-slate-300 ring-1 ring-slate-300/10 hover:ring-slate-100/20">
								Mira nuestros
								<Link
									to="/Planes"
									className="font-semibold ml-3 text-indigo-600"
								>
									Planes
								</Link>
							</div>
						</div>
						<div className="text-center">
							<img
								className="block h-28 w-auto mx-auto"
								src="/space.svg"
								alt="Space"
								id="logo"
							/>
							<h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-6xl">
								Emprende grandes viajes
							</h1>
							<p className="text-center mt-2 md:mt-8 text-lg leading-8 text-slate-300 md:text-slate-900">
								Animate viajar a lugares lejanos
								<span className="block text-zinc-100 md:text-zinc-800 bold">Mándanos tu solicitud</span>
							</p>
							<div className="mt-10 flex flex-col md:flex-row gap-y-7 items-center justify-center gap-x-6">
								<LinkScroll
									to={"Formulario"}
									spy={true}
									smooth={true}
									duration={500}
									className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									Comunícate con nosotros
								</LinkScroll>
								<LinkScroll
									to={"Nosotros"}
									spy={true}
									smooth={true}
									duration={500}
									className="text-sm font-semibold leading-6 text-slate-300 md:text-slate-900"
								>
									Saber más <span aria-hidden="true">→</span>
								</LinkScroll>
							</div>
						</div>
					</div>
				</div>
				<div className="absolute z-[1] nave-animation">
					<img
						src="/src/images/nave.png"
						className="w-[3rem] md:w-[10rem] rotate-[85deg]"
					/>
				</div>
			</main>
			<div className="absolute inset-x-0 top-[22rem] hidden md:block overflow-hidden">
				<img
					className="block md:h-[60rem] lg:h-[60rem] w-auto mx-auto max-w-none -ml-[12%] lg:ml-auto"
					src="/src/images/Sol.png"
					alt=""
				/>
			</div>
			<Transition
				show={Logo}
				as="h3"
				enter="slide-bottom"
        leave="slide-top"
				className="absolute bottom-[1rem] xl-bottom-0 duration-500 md:bottom-[-6rem] inset-x-0 text-center text-6xl text-zinc-300 md:text-zinc-900 font-bold tracking-tight"
			>
				¿Por qué nosotros?
			</Transition>
		</div>
	);
}
