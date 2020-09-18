import React from 'react';
import PageSection from './PageSection';
import Wrapper from './Wrapper';
import Row from './Row';
import Column from './Column';
import SectionTitle from './SectionTitle';
import FeatureItem from './FeatureItem';

const OurFeatures = () => (
  <PageSection hasBlueBg id={'features'}>
    <Wrapper>
      <SectionTitle>
        <img src={require('../images/icons/star.svg')} alt={'icon'} />
        Our <strong>Features</strong>
      </SectionTitle>
      <Row guttersLarge>
        <Column col6Md>
          <FeatureItem>
            <img src={require('../images/icons/rain.svg')} alt="icon" />
            <h3>We&rsquo;ll Watch the Weather</h3>
            <p>
              Download our app and we&rsquo;ll send you a notice if it&rsquo;s
              about to rain in the next 20 minutes around your current location.
              A good rain can be refreshing, but sometimes you just want to stay
              dry.
            </p>
          </FeatureItem>
          <FeatureItem>
            <img src={require('../images/icons/globe.svg')} alt="icon" />
            <h3>Global Guides</h3>
            <p>
              We&rsquo;ve scoured the entire planet for the best retreats and
              beautiful vistas. If there&rsquo;s a corner of the world you want
              to escape to we know the most scenic and inspiring locations.
            </p>
          </FeatureItem>
        </Column>
        <Column col6Md>
          <FeatureItem>
            <img src={require('../images/icons/wifi.svg')} alt="icon" />
            <h3>Wi-Fi Waypoints</h3>
            <p>
              We only send you on trips to places we can personally vouch for as
              being amazing. Which means we&rsquo;ve mapped out where local
              wi-fi spots are and marked them in our app&rsquo;s map view.
            </p>
          </FeatureItem>
          <FeatureItem>
            <img src={require('../images/icons/fire.svg')} alt="icon" />
            <h3>Global Guides</h3>
            <p>
              Everytime you book an escape with us we send you a survival kit
              with the finest materials. The kit will allow you to setup a tent,
              start a fire, scratch your own back and lower your taxes.
            </p>
          </FeatureItem>
        </Column>
      </Row>
    </Wrapper>
  </PageSection>
);

export default OurFeatures;
