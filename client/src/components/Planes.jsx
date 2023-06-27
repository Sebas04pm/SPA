import { CheckIcon } from "@heroicons/react/20/solid";
import { planes } from "../constantes/constantes";

export default function PlanesVistaPrevia() {
	return (
		<div className="py-24 sm:py-32" id="Planes">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto sm:text-center">
					<h3 className="text-3xl font-bold tracking-tight text-zinc-300 sm:text-4xl">
						Reserva y compra tus boletos
					</h3>
					<p className="mt-6 text-lg leading-8 text-slate-300">
						Estas tarifas son de Ida y Vuelta encontradas por nuestro equipo de Agentes de
						Viaje disponibles para comprar.
					</p>
					<p className="mt-6 text-lg leading-8 text-slate-400">
						Explora nuestros planes, elige el de tu preferencia y ponte en contacto con
						nosotros.
					</p>
				</div>
				{planes.map((plan) => (
					<div className="mx-auto mt-16 md:max-w-2xl rounded-3xl md:ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none items-center" key={plan.id}>
						<div className="sm:p-10 lg:flex-auto" key={plan.titulo}>
							<h3 className="text-2xl font-bold tracking-tight text-zinc-300">
								{plan.titulo}
							</h3>
							<p className="mt-6 text-base leading-7 text-gray-600">{plan.descripcion}</p>
							<div className="mt-10 flex items-center gap-x-4">
								<h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
									¿Que trae incluido?
								</h4>
								<div className="h-px flex-auto bg-gray-100" />
							</div>
							<ul
								role="list"
								className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
							>
								{plan.caracteristicas.map((caracteristica) => (
									<li key={caracteristica} className="flex gap-x-3">
										<CheckIcon
											className="h-6 w-5 flex-none text-indigo-600"
											aria-hidden="true"
										/>
										{caracteristica}
									</li>
								))}
							</ul>
						</div>
						<div className="mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
							<div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
								<div className="mx-auto max-w-xs px-8">
									<p className="text-base font-semibold text-gray-600">Paga Ahora</p>
									<p className="mt-6 flex items-baseline justify-center gap-x-2">
										<span className="text-5xl font-bold tracking-tight text-gray-900">
											{plan.precio}
										</span>
										<span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
											USD
										</span>
									</p>
									<a
										href="#"
										className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
									>
										Reservar viaje
									</a>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
