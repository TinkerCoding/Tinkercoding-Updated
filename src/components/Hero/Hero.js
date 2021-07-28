import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Tinkercoding's Portfolio
        </SectionTitle>
        <SectionText>
        The purpose of Tinkercoding is to help aspiring and established entrepreneurs to take their businesses to the next level, through the power of web and mobile apps.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;