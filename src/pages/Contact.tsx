import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import ContactForm from '../components/ContactForm/ContactForm';
import Card from '../components/shared/Card';

const ContactSection = styled.section`
  padding: 4rem 0;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    margin-bottom: 1rem;
  }

  p {
    color: ${theme.colors.gray.light};
    font-size: 1.25rem;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  margin-bottom: 4rem;

  @media (min-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ContactInfo = styled.div`
  h2 {
    margin-bottom: 2rem;
    font-size: 2rem;
  }
`;

const InfoCard = styled(Card)`
  margin-bottom: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    color: ${theme.colors.gray.light};
    margin-bottom: 0.5rem;
    line-height: 1.6;
  }

  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    transition: color ${theme.transitions.fast};

    &:hover {
      color: ${theme.colors.primaryLight};
    }
  }
`;


const EmergencyInfo = styled(Card)`
  background-color: rgba(204, 85, 0, 0.1);
  border: 2px solid ${theme.colors.primary};
  text-align: center;

  h3 {
    color: ${theme.colors.primary};
    margin-bottom: 1rem;
  }

  p {
    color: ${theme.colors.gray.light};
  }
`;

const Contact: React.FC = () => {
  return (
    <ContactSection>
      <PageHeader>
        <h1>Get In Touch</h1>
        <p>
          Have questions about our BBQ, want to make a reservation, or need catering for your event?
          We'd love to hear from you!
        </p>
      </PageHeader>

      <ContactGrid>
        <ContactInfo>
          <h2>Contact Information</h2>

          <InfoCard>
            <h3>
              Phone & Email
            </h3>
            <p>Phone: <a href="tel:+17133776483">(713) 377-6483</a></p>
            <p>Email: <a href="mailto:info@walkertexaschef.com">info@walkertexaschef.com</a></p>
            <p>Catering: <a href="mailto:catering@walkertexaschef.com">catering@walkertexaschef.com</a></p>
          </InfoCard>

          <EmergencyInfo>
            <h3>Large Group Reservations</h3>
            <p>
              For parties of 8 or more, please call us at (713) 377-6483 at least 24 hours in advance.
              We can accommodate up to 50 people with advance notice.
            </p>
          </EmergencyInfo>
        </ContactInfo>

        <div>
          <h2 style={{ marginBottom: '2rem', fontSize: '2rem' }}>Send Us a Message</h2>
          <ContactForm />
        </div>
      </ContactGrid>
    </ContactSection>
  );
};

export default Contact;