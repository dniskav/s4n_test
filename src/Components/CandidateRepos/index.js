import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Card as UnstyledCard, Table, Input } from 'antd';
import { useCookies } from 'react-cookie';

const Card = styled(UnstyledCard)`
    width: 100%;
`;

const columns = [
    {
        title: 'Nombre',
        dataIndex: 'name',
        sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
        title: 'Descripción',
        dataIndex: 'description',
        sorter: (a, b) => a.description.localeCompare(b.description),
    },
    {
        title: 'Lenguaje',
        dataIndex: 'language',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.language.localeCompare(b.language),
    },
    {
        title: 'Branch por defecto',
        dataIndex: 'default_branch',
        sorter: (a, b) => a.default_branch.localeCompare(b.default_branch),
    },
    {
        title: 'HTML url',
        dataIndex: 'html_url',
        render: (url) => <a href={url}>{url}</a>,
        sorter: (a, b) => a.html_url.localeCompare(b.html_url),
    },
];

const CandidateRepos = () => {
    const [repos, setRepos] = useState();
    const [filteredRepos, setFilteredRepos] = useState();
    const [cookies] = useCookies(['candidate']);
    const API = 'https://api.github.com/users/';

    const filterByRepoName = (data) => {
        if(data.length > 2) {
            setFilteredRepos(filteredRepos => repos.filter(r => r.name.toLowerCase().includes(data.toLowerCase())))
        } else {
            setFilteredRepos(filteredRepos => repos);
        };
    }

    useEffect(() => {
        if (cookies.candidate) {
            const { githubUser } = cookies.candidate;
            fetch(`${API}${githubUser}/repos`)
                .then((res) => res.json())
                .then((data) => {
                    const mappedReposList = data.map((repo) => {
                        const { html_url, default_branch, language, description, name, id } = repo;
                        return {
                            key: id,
                            html_url,
                            default_branch,
                            language: language ? language : '',
                            description: description ? description : '',
                            name,
                        };
                    });

                    setRepos((repos) => mappedReposList);
                    setFilteredRepos(filteredRepos => mappedReposList);
                })
        }
    }, [cookies.candidate]);
    return (
        <>
            <Card>
                <Input placeholder="filtrar por nombre del repositorio" onChange={ ev => filterByRepoName(ev.currentTarget.value)}/>
                <Table
                    columns={columns}
                    dataSource={filteredRepos}
                    pagination={{ defaultPageSize: 5 }}
                />
            </Card>
        </>
    );
};

export default CandidateRepos;
