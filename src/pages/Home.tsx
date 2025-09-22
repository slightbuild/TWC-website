import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import Button from '../components/shared/Button';
import Card from '../components/shared/Card';

const HeroSection = styled.section`
  min-height: 80vh;
  background: linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(204, 85, 0, 0.8) 100%),
    url('https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-4.0.3') center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
`;

const HeroContent = styled.div`
  max-width: 800px;

  h1 {
    color: ${theme.colors.white};
    font-size: clamp(3rem, 7vw, 5rem);
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  }

  p {
    color: ${theme.colors.white};
    font-size: 1.25rem;
    margin-bottom: 2rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const Section = styled.section`
  padding: 4rem 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  font-size: clamp(2rem, 5vw, 3rem);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const FeatureCard = styled(Card)`
  text-align: center;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    color: ${theme.colors.gray.light};
  }
`;

const SpecialsSection = styled(Section)`
  background-color: ${theme.colors.secondaryDark};
`;

const SpecialItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 1.75rem;
    margin-bottom: 0.5rem;
  }

  .price {
    color: ${theme.colors.primary};
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  p {
    text-align: center;
    color: ${theme.colors.gray.light};
    line-height: 1.6;
  }
`;

const CTASection = styled(Section)`
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 100%);
  text-align: center;
  color: ${theme.colors.white};

  h2 {
    color: ${theme.colors.white};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 3rem auto 0;
  padding: 0 1rem;
`;

const InfoCard = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  padding: 2rem;
  border-radius: ${theme.borderRadius.lg};

  h3 {
    color: ${theme.colors.white};
    margin-bottom: 1rem;
  }

  p {
    color: ${theme.colors.white};
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }
`;

const Home: React.FC = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <h1>Walker Texas Chef</h1>
          <p>Authentic Texas BBQ • Slow-Smoked Perfection • Family Tradition</p>
          <ButtonGroup>
            <Link to="/media">
              <Button size="large">View Menu</Button>
            </Link>
          </ButtonGroup>
        </HeroContent>
      </HeroSection>

      <Section>
        <SectionTitle>Why Choose Walker Texas Chef?</SectionTitle>
        <Grid>
          <FeatureCard hover>
            <h3>12-Hour Smoked</h3>
            <p>Our meats are slow-smoked for up to 12 hours using authentic Texas hardwood, creating that perfect smoke ring and tender texture.</p>
          </FeatureCard>
          <FeatureCard hover>
            <h3>Premium Quality</h3>
            <p>We source only the finest USDA Prime and Choice cuts, ensuring every bite is packed with flavor and quality.</p>
          </FeatureCard>
          <FeatureCard hover>
            <h3>Secret Rubs</h3>
            <p>Our signature dry rubs and sauces are made from family recipes passed down through generations of Texas pitmasters.</p>
          </FeatureCard>
        </Grid>
      </Section>

      <SpecialsSection>
        <SectionTitle>Today's Pit Specials</SectionTitle>
        <Grid>
          <FeatureCard>
            <SpecialItem>
              <h3>Brisket Platter</h3>
              <span className="price">$24.99</span>
              <p>Half pound of our famous 12-hour smoked brisket, served with two sides, pickles, onions, and Texas toast.</p>
            </SpecialItem>
          </FeatureCard>
          <FeatureCard>
            <SpecialItem>
              <h3>Rib Combo</h3>
              <span className="price">$28.99</span>
              <p>Full rack of St. Louis ribs with our signature dry rub, served with coleslaw, beans, and cornbread.</p>
            </SpecialItem>
          </FeatureCard>
          <FeatureCard>
            <SpecialItem>
              <h3>Pitmaster's Choice</h3>
              <span className="price">$32.99</span>
              <p>Brisket, pulled pork, ribs, and hot links. The ultimate BBQ experience with all the fixins'.</p>
            </SpecialItem>
          </FeatureCard>
        </Grid>
      </SpecialsSection>

      <CTASection>
        <h2>Ready for Real Texas BBQ?</h2>
        <p>Join us for an authentic BBQ experience that'll make you feel right at home in the heart of Texas.</p>
        <InfoGrid>
          <InfoCard>
            <h3>Call Us</h3>
            <p>(713) 377-6483</p>
          </InfoCard>
          <InfoCard>
            <h3>Email</h3>
            <p>info@walkertexaschef.com</p>
            <p>Questions & Catering</p>
          </InfoCard>
        </InfoGrid>
      </CTASection>
    </>
  );
};

export default Home;