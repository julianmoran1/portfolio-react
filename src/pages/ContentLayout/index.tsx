import Card from "../../components/Card"
import "./ContentLayout.scss"
import { ContentLayoutProps } from "./interface"

const ContentLayout = ({ title, category }: ContentLayoutProps) => {
    return (
        <>
            <h2>{title}</h2>
            <div className="content-layout-container">
                {category.map(({ title, text, src, link, techs, alt, modalSrc }) =>
                    <Card
                        key={title}
                        title={title}
                        text={text}
                        src={src}
                        link={link}
                        techs={techs}
                        alt={alt}
                        modalSrc={modalSrc}
                    />
                )}
            </div>
        </>
    )
}

export default ContentLayout