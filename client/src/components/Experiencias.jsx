import { experiencias } from "../constantes/constantes";

export default function Experiencias() {
	return (
		<div className="flex flex-col pt-20 bg-galaxy" id="Experiencias">
			<h3 className="text-center font-bold tracking-tight text-zinc-300 text-3xl text-5xl md:text-8xl lg:text-[9.25rem]">
				Experiencias
			</h3>
			<p className="text-2xl bold text-center text-zinc-300 mt-4 md:mt-4 lg:my-10 xl:mt-15">
				Conoce la opinión de nuestros viajeros
			</p>
			<div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-7 md:max-w-[90rem] xl:grid-cols-3 py-24 px-4 pt-1 sm:px-6 lg:px-8">
				<div className="col-span-1 lg:h-64 mx-auto">
					<img className="w-full h-full rounded-3xl" src="/src/images/astronauta.png" />
				</div>
				<div className="lg:col-span-2">
					<dl className="xl:mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
						{experiencias.map((experiencia) => (
							<div
								key={experiencia.id}
								className=" bg-[#6259618c] rounded border-y border-gray-200 p-4 h-fit"
							>
								<dd className="mt-2 text-sm text-zinc-300 bold">
									{experiencia.description}
								</dd>
								<dd className="text-right mt-4 font-bold">- {experiencia.autor}</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
}
