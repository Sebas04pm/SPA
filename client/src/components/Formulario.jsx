import { Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import axios from "axios";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Formulario() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [pais, setPais] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [respuesta, setRespuesta] = useState("");

  function Handle(e) {
    e.preventDefault();
    let object = {
      nombre,
      apellido,
      correo,
      pais,
      ciudad,
    };
    axios
      .post("http://localhost:3001/Request/Create", object, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        // Respuesta de petición exitosa
        setNombre("");
        setApellido("");
        setCorreo("");
        setPais("");
        setCiudad("");
        setRespuesta(response.data.message);
        console.log(response.data.message);
      })
      .catch((err) => {
        // Respuesta de petición fallida
        setRespuesta("Fallido");
      });
    setTimeout(() => {
      setRespuesta("");
    }, 5000);
  }
  return (
    <>
      <div className="mx-auto md:p-8 m-8 mt-16" id="Formulario">
        <h3 className="text-center font-bold tracking-tight text-zinc-300 text-4xl sm:text-6xl ">
          Tenemos la mejor atención
        </h3>
        <div
          className="
					bg-gradient-to-b from-[#422153] via-[#4e4d9d] to-[#86a4b1]
					rounded-2xl
					grid grid-cols-1 md:grid-cols-2 items-center gap-y-16 gap-x-8
					md:max-w-[90rem] p-4 md:p-8 md:m-8  lg:mx-auto mt-16
				"
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-300 sm:text-4xl text-center md:text-left">
              Mándanos tu solicitud
            </h2>
            <p className="mt-4 text-slate-300 text-2xl">
              La seguridad de casa, en cualquier parte del espacio.
            </p>
            <p className="text-slate-300">
              Al enviarnos tu solicitud nos pondremos en contacto contigo a
              traves de tu correo electrónico para informarte las
              disponibilidades del momento. Te haremos entrega de el formato de
              admisión que deberás llenar con tus compañeros de viaje.
            </p>
          </div>
          <form onSubmit={Handle} method="POST">
            <div className="overflow-hidden shadow rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-4 gap-6">
                  <div className="col-span-6 lg:col-span-2">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Nombre
                    </label>
                    <input
                      value={nombre}
                      required
                      onChange={(e) => {
                        setNombre(e.target.value);
                      }}
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="mt-2 p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <div className="col-span-6 lg:col-span-2">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Apellido
                    </label>
                    <input
                      value={apellido}
                      required
                      onChange={(e) => {
                        setApellido(e.target.value);
                      }}
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="mt-2 p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <div className="col-span-6 lg:col-span-4">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Correo
                    </label>
                    <input
                      value={correo}
                      required
                      onChange={(e) => {
                        setCorreo(e.target.value);
                      }}
                      type="text"
                      name="email-address"
                      id="email-address"
                      autoComplete="email"
                      className="mt-2 p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <div className="col-span-6 lg:col-span-2">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      País
                    </label>
                    <select
                      value={pais}
                      required
                      onChange={(e) => {
                        setPais(e.target.value);
                      }}
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option defaultValue="United States">
                        United States
                      </option>
                      <option value="Canada">Canada</option>
                      <option value="Mexica">Mexico</option>
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Ciudad
                    </label>
                    <input
                      value={ciudad}
                      required
                      onChange={(e) => {
                        setCiudad(e.target.value);
                      }}
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="address-level2"
                      className="mt-2 p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="w-full rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div>
        <Transition
          show={respuesta?.length > 0}
          as={Fragment}
          enter="slide-bottom"
          leave="slide-top"
          className={classNames(
            respuesta == "ok" && respuesta.length
              ? "bg-indigo-600"
              : "bg-red-500",
            "duration-500 fixed top-20 right-3 rounded-md text-sm text-slate-300 font-bold tracking-tight p-3"
          )}
        >
          <p>
            {respuesta == "ok" && respuesta?.length
              ? "Tu solicitud ha sido enviada"
              : "Parece que ha habido un problema, intenta más tarde."}
          </p>
        </Transition>
      </div>
    </>
  );
}
