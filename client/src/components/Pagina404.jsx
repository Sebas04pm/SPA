import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function NotFound() {
	return (
		<>
			<div className="w-[10rem] rounded-full py-1 px-3 mx-auto text-sm text-center leading-6 text-slate-300 ring-1 ring-slate-300/10 hover:ring-slate-100/20">
				404 - Not found
			</div>
			<p className="text-center font-bold tracking-tight py-2 md:max-w-[60vw] mx-auto text-zinc-300 text-5xl md:text-7xl">
				Ups...
			</p>
			<h1 className="text-center font-bold tracking-tight py-2 md:max-w-[60vw] mx-auto text-zinc-300 text-3xl md:text-4xl">
				Parece que has llegado a una dirección que no existe
			</h1>
			<p className="text-center font-bold tracking-tight py-2 mx-auto text-zinc-300 text-2xl">
				vuelve al inicio y explora nuestra web
			</p>
			<Link
				to="/"
				className="mx-auto my-5 block w-[6rem] outline outline-3 outline-indigo-600 text-zinc-500 rounded-lg p-2 hover:text-zinc-300 hover:outline-indigo-500"
			>
				<ArrowLeftIcon className="inline h-6 w-6" aria-hidden="true" />
				Volver
			</Link>
		</>
	);
}
