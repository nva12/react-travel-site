import React from 'react';
import PageSection from './PageSection';
import Wrapper from './Wrapper';
import Row from './Row';
import Column from './Column';
import SectionTitle from './SectionTitle';
import Testimonial from './Testimonial';

const Testimonials = () => (
  <PageSection isTestimonials hasNoPaddingBottomUntilLg id={`testimonials`}>
    <Wrapper hasNoPaddingUntilLg>
      <SectionTitle primary>
        <img src={require('../images/icons/comment.svg')} alt={'icon'} />
        Real <strong>Testimonials</strong>
      </SectionTitle>
      <Row gutters guttersSmall paddingTop equalHeightAtLarge>
        <Column col4Lg>
          <Testimonial>
            <div className={'testimonialPhoto'}>
              <img
                src={require('../images/testimonial-jane.jpg')}
                alt={'Jane Doe'}
              />
            </div>
            <h3>Jane Doe</h3>
            <h4>9 Time Escaper</h4>
            <p>
              &ldquo;Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.&rdquo;
            </p>
          </Testimonial>
        </Column>
        <Column col4Lg>
          <Testimonial>
            <div className={'testimonialPhoto'}>
              <img
                src={require('../images/testimonial-john.jpg')}
                alt={'John Smith'}
              />
            </div>
            <h3>John Smith</h3>
            <h4>4 Time Escaper</h4>
            <p>
              &ldquo;Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
              consectetur.&rdquo;
            </p>
          </Testimonial>
        </Column>
        <Column col4Lg>
          <Testimonial last>
            <div className={'testimonialPhoto'}>
              <img
                src={require('../images/testimonial-cat.jpg')}
                alt={'Cat McKitty'}
              />
            </div>
            <h3>Cat McKitty</h3>
            <h4>6 Time Escaper</h4>
            <p>
              &ldquo;Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit, sed do eiusmod tempor incididunt
              ut.&rdquo;
            </p>
          </Testimonial>
        </Column>
      </Row>
    </Wrapper>
  </PageSection>
);

export default Testimonials;
