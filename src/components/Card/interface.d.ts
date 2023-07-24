export interface CardProps {
    title: string,
    text: string,
    alt: string,
    src: string,
    link?: string,
    modalSrc?: string | undefined,
    techs?: string[],
}