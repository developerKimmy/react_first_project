
export function CoreConcept(props) {
    const title = props.title;
    const description = props.description;
    const img = props.image;

    return (
        <li>
            <img src = {img} alt={title} />
            <h3> {title}</h3>
            <p>{description}</p>
        </li>
    );
}
