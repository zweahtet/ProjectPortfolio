import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, there. I am Zwea.<br/>
        Nice to meet you.<br/>
      </SectionTitle>
      <SectionText>
        Aspiring ML Engineer
      </SectionText>
      {/* can be set the location to my email or my projects
      <Button onClick={() => window.location = "https://google.com"}>Learn More</Button> */}
    </LeftSection>
  </Section>
);

export default Hero;