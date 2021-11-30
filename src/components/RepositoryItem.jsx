export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository.name}</strong>
            <strong id="share">{props.repository.visibility}</strong>
            <p>{props.repository.description}</p>

            <a href={props.repository.html_url}>
                Acessar Repositório
            </a>
        </li>
    );
}