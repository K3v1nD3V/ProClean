import Hero from "@/components/layout/hero";
import Card from "@/components/shared/card";
import LegalBanner from "@/components/layout/legal-banner";
import PricingSection from "@/components/layout/pricingSection";
import AboutServiceSection from "@/components/layout/aboutServiceSection";
import Footer from "@/components/layout/footer";
import Image from "next/image";
import Reveal from "@/components/shared/reveal";

const cardInfo = [
  {
    title: "Limpieza de Hogar",
    description: `🏘️ Servicio de limpieza profesional para casas y apartamentos, enfocado en mantener los espacios limpios, organizados y agradables. Las actividades se realizan de acuerdo con las características del inmueble, las prioridades del cliente y el tiempo contratado.

✨ Nuestro servicio incluye:
✔️ Barrer o aspirar pisos según los implementos disponibles.
✔️ Trapear pisos y realizar limpieza de juntas.
✔️ Limpieza y desinfección de baños.
✔️ Limpieza de cocina, estufa y superficies.
✔️ Lavado de loza cuando sea requerido.
✔️ Limpieza exterior de muebles y superficies.
✔️ Sacudir y organizar espacios.
✔️ Limpieza de ventanales internos.
✔️ Limpieza y organización exterior de la nevera.
✔️ Recolección de residuos.
✔️ Limpieza general de habitaciones, sala, comedor y zonas comunes.

💙 Porque tu tranquilidad también hace parte de nuestro trabajo.`,
    imageUrl:
      "/images/services/limpieza-hogar.jpeg",
  },
  {
    title: "Limpieza de Oficinas",
    description: `🏢 Servicio profesional de limpieza para oficinas y espacios corporativos, orientado a mantener ambientes de trabajo limpios, organizados y adecuados para colaboradores, clientes y visitantes.

✨ Nuestro servicio incluye:
✔️ Barrer o aspirar pisos.
✔️ Trapear y limpiar juntas.
✔️ Limpieza de escritorios y superficies externas.
✔️ Limpieza de sillas.
✔️ Limpieza y desinfección de baños.
✔️ Organización de implementos de aseo en baños.
✔️ Limpieza de recepción y mostradores.
✔️ Limpieza de salas y zonas comunes.
✔️ Mantener limpia y organizada la cocineta.
✔️ Limpieza exterior y organización de la nevera.
✔️ Limpieza y brillado de ventanales internos.
✔️ Recolección de residuos.
✔️ Atención con café a clientes, usuarios o colaboradores cuando el servicio contratado lo contemple.

💙 Porque un espacio limpio también refleja la calidad de tu empresa.`,
    imageUrl:
      "/images/services/limpieza-oficina.jpeg",
  },
  {
    title: "Pet Grooming",
    description: `🐶 Brindamos un servicio especializado en Pet Grooming, adaptado a las necesidades de cada mascota para que viva una experiencia cómoda, segura y agradable.

✨ Nuestro servicio incluye:
✔️ Baño con shampoo especializado.
✔️ Estimulación de folículos para reducir malos olores.
✔️ Cepillado de pelaje.
✔️ Deslanado y eliminación de pelo muerto.
✔️ Corte profesional de uñas.
✔️ Limpieza medicada de oídos.
✔️ Limpieza dental con eliminación de sarro.
✔️ Desodorizado, perfumado y aplicación de talco aromático.
✔️ Decoración a elección: moños, corbatín, pañoleta, uñas pintadas o moño coctelero.

👨‍🎓 Todos los procedimientos son realizados por un profesional graduado y especializado en Pet Grooming.

🚗 Realizamos el servicio en la comodidad de tu hogar.

💙 Porque ellos también merecen el mejor cuidado.`,
    imageUrl:
      "/images/services/pet-grooming.jpeg",
  },
];

export default function Home() {
  return (
    <>
      <Hero/>
      
      {/* Sección de servicios destacada */}
      <section id="servicios" className="relative z-20 mx-auto -mt-32 max-w-7xl px-4">
          {/* Encabezado */}
          {/* <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold uppercase tracking-wider text-primary shadow-md">
              Nuestros Servicios
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-zinc-900 md:text-5xl">
              Soluciones diseñadas para cada necesidad
            </h2>

            <p className="mt-4 text-lg leading-8 text-zinc-600">
              Ofrecemos servicios especializados para hogares, oficinas y cuidados
              personalizados, con personal confiable y altos estándares de calidad.
            </p>
          </div> */}

          {/* Tarjetas */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cardInfo.map((card, index) => (
             <Reveal key={card.title} direction="up" delay={index * 150}>
                <Card
                  key={card.title}
                  className="group overflow-hidden rounded-[2rem] border-0 bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  {/* Imagen */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={card.imageUrl}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Contenido */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-zinc-900">
                      {card.title}
                    </h3>

                    <p className="mt-3 whitespace-pre-line leading-7 text-zinc-600">
                      {card.description}
                    </p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
      </section>

      <LegalBanner/>  
      {/* Seccion sobre servicios */}
      <AboutServiceSection/>
    
     {/*Seccion de precios y beneficios */}
      <PricingSection/>


      {/* Seccion de contacto */}
      <Footer/>
    </>
  );
}