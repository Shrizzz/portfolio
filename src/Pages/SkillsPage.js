import React from 'react';
import Tittle from '../Components/Tittle';
import SkillsSection from '../Components/SkillsSection';
import ExperienceSection from '../Components/ExperienceSection';
import gnani from '../img/gnani.png';
import mindtree from '../img/mindtree.png';

function SkillsPage() {
    return (
        <div >
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={"JavaScript"} progress={"70%"} width={"70%"} />
                <SkillsSection skill={"React Js"} progress={"60%"} width={"60%"} />
                <SkillsSection skill={".Net"} progress={"70%"} width={"70%"} />
                <SkillsSection skill={"Web Design"} progress={"60%"} width={"60%"} />
                <SkillsSection skill={"UI/UX Design"} progress={"50%"} width={"50%"} />
                <SkillsSection skill={"Java"} progress={"55%"} width={"55%"} />
                <SkillsSection skill={"SQL"} progress={"70%"} width={"70%"} />
            </div>

            <Tittle title={'Experience'} span={'Experience'} />
            <div className="servives-container">
                <ExperienceSection image={gnani} title={'Gnani.ai (March-May 2018)'} width={"25%"} 
                text={"Worked as a Intern for 2 Months as an Front End Developer"}
                />
                <ExperienceSection image={mindtree} title={'Mindtree Ltd. (Oct 19-Present)'} 
                text={"Working as Software Engg for last 2 years as Software Developer"}
                />
            </div>
        </div>
    )
}

export default SkillsPage;
