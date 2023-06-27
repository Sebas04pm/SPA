import { planes } from "../constantes/constantes";

export default function Planes() {
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
				<div className="mx-auto mt-16 rounded-3xl md:ring-1 md:ring-gray-200 sm:mt-20 lg:mx-0 grid grid-cols-1 md:grid-cols-3">
					{planes.map((plan) => (
						<div className="p-2 lg:mt-0" key={plan.id}>
							<div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
								<div className="mx-auto max-w-xs px-8">
									<p className="text-base font-semibold text-gray-600">Viaje a la luna</p>
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
					))}
				</div>
			</div>
		</div>
	);
}
