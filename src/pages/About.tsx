import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import Card from '../components/shared/Card';

const AboutSection = styled.section`
  padding: 4rem 0;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const HeroImage = styled.div`
  height: 60vh;
  background: linear-gradient(135deg, rgba(26, 26, 26, 0.7) 0%, rgba(204, 85, 0, 0.6) 100%),
    url('https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3') center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${theme.colors.white};
  margin-bottom: 4rem;

  h1 {
    color: ${theme.colors.white};
    font-size: clamp(3rem, 6vw, 4rem);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  }
`;

const StorySection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  margin-bottom: 4rem;

  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

const StoryImage = styled.div`
  height: 400px;
  background: url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3') center/cover;
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.lg};
`;

const StoryContent = styled.div`
  h2 {
    margin-bottom: 1.5rem;
    font-size: 2.5rem;
  }

  p {
    color: ${theme.colors.gray.light};
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
`;

const ChefSection = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h2 {
    margin-bottom: 3rem;
    font-size: 2.5rem;
  }
`;

const ChefGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ChefCard = styled(Card)`
  text-align: center;

  .chef-image {
    width: 200px;
    height: 200px;
    border-radius: ${theme.borderRadius.round};
    background: url('https://i.pinimg.com/originals/31/6a/be/316abe6dfdb7c402af7a700e728f0dba.png') center/cover;
    margin: 0 auto 1.5rem;
  }

  h3 {
    font-size: 1.75rem;
    margin-bottom: 0.5rem;
  }

  .title {
    color: ${theme.colors.primary};
    font-size: 1.1rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  p {
    color: ${theme.colors.gray.light};
    line-height: 1.6;
  }
`;

const ValuesSection = styled.div`
  h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.5rem;
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const ValueCard = styled(Card)`
  text-align: center;

  .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    color: ${theme.colors.gray.light};
  }
`;

const HistoryTimeline = styled.div`
  margin-top: 4rem;

  h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.5rem;
  }
`;

const TimelineItem = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 3rem;

  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 150px 1fr;
  }

  .year {
    color: ${theme.colors.primary};
    font-size: 2rem;
    font-weight: bold;
    font-family: ${theme.fonts.heading};
  }

  .content {
    h3 {
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
    }

    p {
      color: ${theme.colors.gray.light};
      line-height: 1.6;
    }
  }
`;

const About: React.FC = () => {
  return (
    <>
      <HeroImage>
        <h1>Our Story</h1>
      </HeroImage>

      <AboutSection>
        <StorySection>
          <StoryContent>
            <h2>Rooted in Tradition</h2>
            <p>
              Walker Texas Chef was born from a deep passion for authentic Texas BBQ traditions.
              Our restaurant represents generations of smoking techniques and flavor profiles
              that have been passed down through Texas BBQ culture.
            </p>
            <p>
              We believe that great BBQ comes from patience, quality ingredients, and time-tested
              methods. Every dish we serve reflects our commitment to preserving the authentic
              Texas BBQ experience while creating new memories for our guests.
            </p>
            <p>
              Today, we continue this tradition by serving BBQ that honors the old ways while
              embracing the community spirit that makes Texas BBQ culture so special.
            </p>
          </StoryContent>
          <StoryImage />
        </StorySection>

        <ChefSection>
          <h2>Our BBQ Philosophy</h2>
          <ChefGrid>
            <ChefCard hover>
              <div className="chef-image"></div>
              <h3>Authentic Texas BBQ</h3>
              <div className="title">Time-Honored Techniques</div>
              <p>
                Our approach to BBQ is built on decades of traditional smoking methods.
                We believe in low and slow cooking, premium cuts of meat, and the perfect
                blend of spices that define authentic Texas barbecue.
              </p>
            </ChefCard>
          </ChefGrid>
        </ChefSection>

        <ValuesSection>
          <h2>What We Stand For</h2>
          <ValuesGrid>
            <ValueCard hover>
              <h3>Authentic Methods</h3>
              <p>We use traditional smoking techniques with real hardwood, no shortcuts or artificial flavors. Every cut of meat is carefully prepared and slow-smoked to perfection.</p>
            </ValueCard>
            <ValueCard hover>
              <h3>Quality First</h3>
              <p>Only the finest cuts of meat make it to our smoker, ensuring every bite is exceptional. We source from trusted suppliers who share our commitment to excellence.</p>
            </ValueCard>
            <ValueCard hover>
              <h3>Family Values</h3>
              <p>We treat every customer like family, creating a welcoming atmosphere for all who visit. Our restaurant is a place where memories are made over great food.</p>
            </ValueCard>
            <ValueCard hover>
              <h3>Local Pride</h3>
              <p>Supporting local suppliers and giving back to the community that supports us. We believe in building strong relationships with our neighbors and local businesses.</p>
            </ValueCard>
            <ValueCard hover>
              <h3>Time & Patience</h3>
              <p>Great BBQ can't be rushed. We dedicate the time needed to properly smoke our meats, sometimes up to 14 hours, because exceptional flavor is worth the wait.</p>
            </ValueCard>
            <ValueCard hover>
              <h3>Excellence Standards</h3>
              <p>We maintain the highest standards in everything we do, from food preparation to customer service. Excellence isn't just a goal—it's our daily commitment.</p>
            </ValueCard>
            <ValueCard hover>
              <h3>Community Spirit</h3>
              <p>BBQ brings people together. We foster a sense of community by hosting events, supporting local causes, and creating a space where everyone feels welcome.</p>
            </ValueCard>
            <ValueCard hover>
              <h3>Innovation Respect</h3>
              <p>While we honor traditional methods, we're always looking for ways to enhance the dining experience through thoughtful innovation and creative menu offerings.</p>
            </ValueCard>
          </ValuesGrid>
        </ValuesSection>

        <HistoryTimeline>
          <h2>Our Journey</h2>
          <TimelineItem>
            <div className="year">2018</div>
            <div className="content">
              <h3>The Beginning</h3>
              <p>Walker Texas Chef opened its doors, bringing authentic Texas BBQ traditions to hungry BBQ lovers everywhere.</p>
            </div>
          </TimelineItem>
          <TimelineItem>
            <div className="year">2019</div>
            <div className="content">
              <h3>Recognition</h3>
              <p>Gained recognition for our authentic BBQ methods and commitment to quality, earning praise from BBQ enthusiasts.</p>
            </div>
          </TimelineItem>
          <TimelineItem>
            <div className="year">2021</div>
            <div className="content">
              <h3>Expansion</h3>
              <p>Added catering services and began supplying local events with authentic Texas BBQ.</p>
            </div>
          </TimelineItem>
          <TimelineItem>
            <div className="year">2023</div>
            <div className="content">
              <h3>Community Impact</h3>
              <p>Established the "BBQ for Good" program, providing meals for local charities and community events.</p>
            </div>
          </TimelineItem>
        </HistoryTimeline>
      </AboutSection>
    </>
  );
};

export default About;