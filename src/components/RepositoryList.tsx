import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

// https://api.github.com/users/samuelikz/repos

interface Repository {
    name: string;
    description: string;
    visibility: string;
    html_url: string;
}

export function RepositoryList(){
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/github/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])

    return(
        <section className="repository-list">
            <h1>Git.Explore</h1>

            <ul>
                {repositories.map(repository => {
                    return(
                        <RepositoryItem key={repository.name} repository={repository} />
                    );
                } )}
            </ul>
        </section>
    );
}