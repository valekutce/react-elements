import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Layouts';
import ServiceItem from './ServiceItem';
import Title from './Title';
import search from '../img/search2.svg';
import apply from '../img/apply2.svg';
import account from '../img/create_account.svg';
import add from '../img/add.svg';


function SectionService() {
    return (
        <SectionServiceStyled>
            <InnerLayout>
                <div className="title-container">
                <Title name={'Services'} para={'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'} />
                <div className="servies-container">
                <ServiceItem icon={account} name={'Create An Account'} para={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe adipisci exercitationem non!'} />
                <ServiceItem icon={search} name={'Search For A Job'} para={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe adipisci exercitationem non!'} />
                <ServiceItem icon={add} name={'Add CV / Resume'} para={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe adipisci exercitationem non!'} />
                <ServiceItem icon={apply} name={'Application Complete!'} para={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe adipisci exercitationem non!'} />
                </div>
                </div>
            </InnerLayout>
        </SectionServiceStyled>
    )
}

const SectionServiceStyled = styled.section`
    background-color: #222;
    .servies-container {
        padding-top: 3rem;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 2rem;
        @media screen and (max-width: 960px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width: 672px) {
            grid-template-columns: repeat(1, 1fr);
        }
        
    }
`;

export default SectionService
