import { PageProps } from "../interface"
import "./QuienSoy.scss"

const QuienSoy = ({ title }: PageProps) => {
  return (
      <section>
        <h2 className="animate__animated animate__backInDown">{title}</h2>
        <div className="quien-soy">
          <img
            src="https://res.cloudinary.com/duzwtwivp/image/upload/v1690245960/images/assets/foto-julian_znhbgt.jpg"
            alt="Julián Morán"
            className="quien-soy__hero-image animate__animated animate__backInLeft"
          />

          <div className="animate__animated animate__backInRight">
            <p className="animate__animated animate__backInRight">
              Soy Licenciado en Comunicación, con orientación comunicación
              organizacional. Posteriormente estudié diseño gráfico y web, y
              quiero seguir desarrollándome en esa área.
            </p>

            <p className="animate__animated animate__backInRight">
              Podés ponerte en contacto conmigo a través de <a href="https://www.linkedin.com/in/julianmoran/" target="_blank"><strong>LinkedIn</strong></a> y ver más detalles de mis proyectos en <a href="https://github.com/julianmoran1/" target="_blank"> <strong>Github</strong></a>
            </p>
          </div>
        </div>
      </section>
  )
}

export default QuienSoy