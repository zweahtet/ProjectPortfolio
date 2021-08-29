import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, there. <br/>
        My name is Zwea. <br/>
        Welcome to my personal portfolio website.
      </SectionTitle>
      <SectionText>
        Aspiring Software Engineer
      </SectionText>
      {/* can be set the location to my email or my projects */}
      <Button onClick={() => window.location = "https://google.com"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;