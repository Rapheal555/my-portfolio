import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello, and Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          My name is Rapheal Odejinmi, I am a Frontend Developer.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
