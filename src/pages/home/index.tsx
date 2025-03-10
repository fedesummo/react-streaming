export const Home = () => (
  <>
    <div className="relative h-100 xl:h-110 bg-[#B1B1B1]">
      <button
        className="absolute top-1/2 size-10 bg-gray-500 flex items-center justify-center rounded-r-2xl cursor-pointer"
        onClick={() => {}}
      >
        <i className="bi bi-chevron-left text-white" />
      </button>
      <button
        className="absolute top-1/2 right-0 size-10 flex items-center justify-center bg-gray-500 rounded-l-2xl cursor-pointer"
        onClick={() => {}}
      >
        <i className="bi bi-chevron-right text-white" />
      </button>
    </div>

    <section className="py-8 px-8 xl:px-40 xl:py-12 flex flex-col gap-y-8">
      <p className="text-2xl font-bold">Programación</p>

      <div className="grow grid xl:grid-cols-3 gap-y-8 xl:gap-8">
        {[
          {
            title: "DE BOCA EN BOCA",
            description: "Egardo Paganini, Rocio Acosta y Marlen Fanega",
            tags: ["LUNES A VIERNES", "10:00"],
          },
          {
            title: "BOOM",
            description: "Sol Leiva y Ezequiel Pasero",
            tags: ["MIÉRCOLES", "19:00"],
          },
          {
            title: "NADA COHERENTE",
            description: "Elina simi, Sebastián Ferreryra y Jony Zuelgaray",
            tags: ["JUEVES", "21:00"],
          },
        ].map((element) => (
          <div className="grow flex flex-col gap-y-2.5 cursor-pointer">
            <div className="bg-[#B1B1B1] w-full h-40 xl:h-55 rounded-lg"></div>
            <p className="text-3xl font-dark">{element.title}</p>
            <div className="flex gap-x-2.5">
              {element.tags.map((tag) => (
                <p className="bg-[#DCDCDC] px-3 py-1 font-bold rounded-lg">
                  {tag}
                </p>
              ))}
            </div>
            <p>{element.description}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="py-8 px-8 xl:px-40 xl:py-8">
      <div className="h-52 bg-[#D9D9D9] py-2.5">
        <p className="text-center">PUBLICIDAD</p>
      </div>
    </section>

    <section className="py-8 px-8 xl:px-40 xl:py-8 flex flex-col gap-y-5">
      <p className="text-2xl font-bold">Novedades</p>

      <div className="grow grid xl:grid-cols-3 gap-8">
        {[
          {
            title:
              "¿Listo para el festival RICO? Enterate los detalles de nuestra transmisión especial para este 21, 22, 23 y 24 de marzo",
            imgSrc: "",
          },
          {
            title:
              "Resumen de la semana: ¡Volvió #NadaCoherente! Además, artistas locales visitan #Boom",
            imgSrc: "",
          },
          {
            title:
              "Conocé nuestra programación para este 2025: #DeBocaEnBoca, #Boom y #NadaCoherente",
            imgSrc: "",
          },
        ].map((element) => (
          <div className="grow flex flex-col gap-y-2.5 cursor-pointer">
            <div className="bg-[#B1B1B1] w-full h-40"></div>
            <p className="font-bold">{element.title}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="py-8 px-8 xl:px-40 xl:py-8">
      <div className="h-52 bg-[#D9D9D9] py-2.5">
        <p className="text-center">PUBLICIDAD</p>
      </div>
    </section>

    <section className="py-8 px-8 xl:px-40 xl:py-8 flex flex-col gap-y-5">
      <p className="text-2xl font-bold">Últimos programas</p>

      <div className="grow grid xl:grid-cols-3 gap-8">
        {[
          {
            tags: ["NADA COHERENTE", "20 DE MARZO"],
            title: "TEMPORADA 2, PROGRAMA 1",
            description:
              "¿Nos extrañaron? Conocé a los nuevos integrantes del equipo y enterate nuestros planes para este año",
          },
          {
            tags: ["BOOM", "19 DE MARZO"],
            title: "TEMPORADA 2, PROGRAMA 31",
            description:
              "Con bandas y DJ's en vivo, charlamos con productores locales sobre las ofertas de entretenimiento para este fin de semana de carnaval",
          },
          {
            tags: ["DE BOCA EN BOCA", "18 DE MARZO"],
            title: "TEMPORADA 3, PROGRAMA 5",
            description:
              "¡Ya no aguanto más! Recibimos la visita de una psicóloga que nos dará consejos para superar situaciones de estrés",
          },
        ].map((element) => (
          <div className="grow flex flex-col gap-y-2.5 cursor-pointer">
            <div className="bg-[#B1B1B1] w-full h-40 flex items-center justify-center">
              <i className="bi bi-play-fill text-white text-4xl" />
            </div>
            <div className="flex gap-x-2.5">
              {element.tags.map((element) => (
                <p className="bg-[#DCDCDC] px-3 py-1 font-bold rounded-lg">
                  {element}
                </p>
              ))}
            </div>
            <p>{element.title}</p>
            <p>{element.description}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="py-8 px-8 xl:px-40 xl:py-8">
      <div className="h-52 bg-[#D9D9D9] py-2.5">
        <p className="text-center">PUBLICIDAD</p>
      </div>
    </section>

    <section className="py-8 px-8 xl:px-40 xl:py-8 flex flex-col gap-y-5">
      <p className="text-2xl font-bold">Nuestras redes</p>

      <div className="grow grid grid-cols-2 xl:grid-cols-4 gap-8">
        {[
          {
            title: "YouTube",
            imgSrc: "youtube-logo.svg",
          },
          {
            title: "TikTok",
            imgSrc: "tiktok-logo.svg",
          },
          {
            title: "Instagram",
            imgSrc: "instagram-logo.svg",
          },
          {
            title: "WhatsApp",
            imgSrc: "whatsapp-logo.svg",
          },
        ].map((element) => (
          <div className="grow flex flex-col gap-y-2.5 cursor-pointer">
            <div className="p-5 bg-[#DCDCDC] flex items-center justify-center rounded-xl">
              <img src={element.imgSrc} className="size-18" />
            </div>
            <p>{element.title}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="py-8 px-8 xl:px-40 xl:py-8 bg-[#4F4F4F] flex flex-col gap-y-5 text-white">
      <p className="text-3xl font-bold">Contáctanos</p>

      <p className="text-lg">
        Si te gustaría publicitar tu marca o formar parte de nuestro staff,
        ponete en contacto con nosotros a través de nuestros canales oficiales.
      </p>

      <div>
        <p>Correo electrónico</p>
        <p className="text-lg">email@test.com</p>
      </div>

      <div>
        <p>Teléfono</p>
        <p className="text-lg">+54 9 336 XXXXXX</p>
      </div>

      <div>
        <p>Dirección</p>
        <p className="text-lg">
          Calle Ficticia XXX, San Nicolás de los Arroyos
        </p>
      </div>

      <p>© 2025, QBOX Producciones Audiovisuales</p>
    </section>
  </>
);
