import React from 'react';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
// separate logic from content
// keep content as constants in a folder
import { projects } from '../../constants/constants';

const Projects = () => (
	<Section id="projects">
		<SectionDivider/>
		<div class="max-w-5x1 mx-auto text-center">
			<SectionTitle>Projects</SectionTitle>
			
			<div className="flex items-center justify-center m-10">
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
				{/* destructuring */}
				{projects.map(({id, image, title, description, tags, source, visit}) => (
					<BlogCard key={id}>
						<Img src={image}/>
						<TitleContent>
							<HeaderThree title>{title}</HeaderThree>
							<Hr/>
						</TitleContent>
						<CardInfo>{description}</CardInfo>
						<TagList>
							{tags.map((tag, index) => (
								<Tag key={index}>{tag}</Tag>
							))}
						</TagList>
					
						<UtilityList>
							<ExternalLinks href={visit}>Code</ExternalLinks>
							<ExternalLinks href={source}>Source</ExternalLinks>
						</UtilityList>
					</BlogCard>
				))}
				</div>
			</div> 
		</div>
	   	<SectionDivider />
  	</Section>
);

export default Projects;