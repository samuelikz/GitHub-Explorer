import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: 'Unforme',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
}

export function RepositoryList(){
    return(
        <section>
            <h1>Lista de Repositórios</h1>

            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem />
                <RepositoryItem />
                <RepositoryItem />
            </ul>
        </section>
    );
}