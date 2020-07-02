import React from 'react';
import './App.css';
import CandidateForm from '../CandidateForm';
import CandidateRepos from '../CandidateRepos';
import { Row, Col } from 'antd';
import { Layout } from 'antd';
import styled from 'styled-components';
import { useCookies } from 'react-cookie';
import PropTypes from 'prop-types';

const { Header, Footer, Content } = Layout;

const MainContainer = styled.div`
    max-width: 960px;
    margin: 0 auto;
`;

const StyledHeader = styled(Header)`
    color: white;
    text-align: center;
    font-size: 12px;
    height: auto;
    line-height: 16px;
`;

export const CandidateInfo = ({ info }) => {
    const { names, lastNames, id, bDay, email, githubUser } = info;
    return (
    <>
        <div>Nombre: {`${names} ${lastNames} `}</div>
        <div>Cédula: {id}</div>
        <div>Fecha de Nacimiento: {`${bDay} `}</div>
        <div>Email: {email}</div>
        <div>Usuario de  Github: {githubUser}</div>
    </>
)}

CandidateInfo.propTypes = {
    info: PropTypes.shape({
        names: PropTypes.string,
        lastNames: PropTypes.string,
        id: PropTypes.string,
        bDay: PropTypes.string,
        email: PropTypes.string,
        githubUser: PropTypes.string,
    })
}

export const CandidateInfoWrapper = ({ info }) => (
    <StyledHeader>
        {info.candidate ? (
            <CandidateInfo info={info.candidate} />
        ) : (<span>Candidato</span>)}
    </StyledHeader>
);

CandidateInfoWrapper.propTypes = {
    info: PropTypes.object,
};

function App() {
    const [cookies] = useCookies(['candidate']);
    return (
        <MainContainer>
            <Layout>
                <CandidateInfoWrapper info={cookies} />

                <Content>
                    <Col>
                        <Row>
                            <CandidateForm />
                        </Row>

                        <Row>
                            <CandidateRepos />
                        </Row>
                    </Col>
                </Content>

                <Footer>By <a href="mailto:dniskav@gmail.com">dniskav 2020</a></Footer>
            </Layout>
        </MainContainer>
    );
}

export default App;
