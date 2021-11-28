import React from 'react';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
// separate logic from content
// keep content as constants in a folder
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {/* destructuring */}
      {projects.map(({id, image, title, description, tags, source, visit}) => (
        <BlogCard key={id}>
          <Img src={image}/>
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr/>
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={visit}>Code</ExternalLinks>
              {/* live application */}
              <ExternalLinks href={source}>Source</ExternalLinks>
            </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
    <SectionDivider />
  </Section>
	// <div className="flex items-center justify-center">
	// 	<div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
	// 		{projects.map(({id, image, title, description, tags, source, code}) => (
	// 			<div key={id} className="max-w-xs w-full">
	// 				<div className="flex items-center justify-center h-56 bg-white border-teal-400 rounded-md overflow-hidden">
	// 					<img className="object-cover" src={image} alt=""/>
	// 				</div>

	// 				<div href="#" className="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
	// 					<div className="py-2 px-3 text-center text-sm">
	// 						<h2>{title}</h2>
	// 						<p className="text-gray-300">{description}</p>
	// 						<div className="">
	// 							<h3>Stack</h3>
	// 							<div className="flex justify-around">
	// 								{tags.map((tag, index) => (
	// 									<span key={index} className="block text-gray-500 mt-2">{tag}</span>
	// 								))}
	// 							</div>
	// 						</div>
	// 						<div className="flex justify-around">
	// 							<a href={source}>Source</a>
	// 							<a href={code}>Code</a>
	// 						</div>
	// 					</div>
	// 				</div>
	// 			</div>
	// 		))}
	// 	</div>
	// </div>
);

export default Projects;