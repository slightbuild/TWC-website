import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import Card from '../components/shared/Card';
import Button from '../components/shared/Button';
import menuImage from '../assets/menu.png';

const MediaSection = styled.section`
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

const TabNavigation = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const TabButton = styled.button<{ isActive: boolean }>`
  padding: 1rem 2rem;
  border: 2px solid ${props => props.isActive ? theme.colors.primary : theme.colors.secondaryLight};
  background-color: ${props => props.isActive ? theme.colors.primary : 'transparent'};
  color: ${props => props.isActive ? theme.colors.white : theme.colors.white};
  border-radius: ${theme.borderRadius.md};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all ${theme.transitions.fast};

  &:hover {
    border-color: ${theme.colors.primary};
    background-color: ${props => props.isActive ? theme.colors.primaryDark : theme.colors.primary};
    color: ${theme.colors.white};
  }
`;

const MenuSection = styled.div`
  text-align: center;
`;

const MenuImageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${theme.shadows.lg};

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const MenuDownload = styled.div`
  margin: 2rem 0;
  text-align: center;
`;

const GallerySection = styled.div``;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const GalleryCard = styled(Card)`
  overflow: hidden;
  cursor: pointer;
  transition: transform ${theme.transitions.normal};

  &:hover {
    transform: translateY(-5px);
  }

  .image {
    height: 250px;
    background-size: cover;
    background-position: center;
    margin: -2rem -2rem 1rem -2rem;
  }

  h3 {
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
  }

  p {
    color: ${theme.colors.gray.light};
    font-size: 0.9rem;
  }
`;

const TestimonialsSection = styled.div`
  margin-top: 4rem;

  h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.5rem;
  }
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const TestimonialCard = styled(Card)`
  text-align: center;

  .quote {
    font-size: 1.1rem;
    font-style: italic;
    color: ${theme.colors.gray.light};
    margin-bottom: 1.5rem;
    line-height: 1.6;

    &::before, &::after {
      content: '"';
      color: ${theme.colors.primary};
      font-size: 2rem;
    }
  }

  .author {
    color: ${theme.colors.primary};
    font-weight: 600;
    font-size: 1rem;
  }

  .rating {
    color: #FFD700;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

const Media: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'menu' | 'gallery' | 'testimonials'>('menu');

  const galleryItems = [
    {
      id: 1,
      title: 'Award-Winning Brisket',
      description: 'Our signature 12-hour smoked brisket with perfect smoke ring',
      image: 'https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-4.0.3'
    },
    {
      id: 2,
      title: 'Fall-off-the-Bone Ribs',
      description: 'St. Louis style ribs with our secret dry rub',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3'
    },
    {
      id: 3,
      title: 'Pulled Pork Perfection',
      description: 'Slow-smoked pork shoulder, tender and juicy',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3'
    },
    {
      id: 4,
      title: 'Hot Links & Sausages',
      description: 'House-made sausages with authentic Texas heat',
      image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-4.0.3'
    },
    {
      id: 5,
      title: 'Homestyle Sides',
      description: 'Mac & cheese, coleslaw, beans, and cornbread',
      image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3'
    },
    {
      id: 6,
      title: 'The Full Spread',
      description: 'Family platters perfect for sharing',
      image: 'https://images.unsplash.com/photo-1588737315470-45de6c834c63?ixlib=rb-4.0.3'
    }
  ];

  const testimonials = [
    {
      id: 1,
      quote: "Best BBQ in Austin! The brisket melts in your mouth and the service is outstanding. This place is a true Texas gem.",
      author: "Sarah M.",
      rating: "★★★★★"
    },
    {
      id: 2,
      quote: "I've traveled all over Texas for BBQ, and Walker Texas Chef is definitely in my top 3. The atmosphere and food are both perfect.",
      author: "Mike R.",
      rating: "★★★★★"
    },
    {
      id: 3,
      quote: "Catered our company event and every single person raved about the food. Professional service and incredible flavors!",
      author: "Jennifer L.",
      rating: "★★★★★"
    },
    {
      id: 4,
      quote: "Finally found authentic Texas BBQ that reminds me of my grandfather's cooking. The dry rub is absolutely perfect.",
      author: "Robert T.",
      rating: "★★★★★"
    }
  ];

  return (
    <MediaSection>
      <PageHeader>
        <h1>Menu & Gallery</h1>
        <p>
          Explore our mouth-watering BBQ offerings, see our culinary creations,
          and hear what our customers are saying about their experience.
        </p>
      </PageHeader>

      <TabNavigation>
        <TabButton
          isActive={activeTab === 'menu'}
          onClick={() => setActiveTab('menu')}
        >
          Our Menu
        </TabButton>
        <TabButton
          isActive={activeTab === 'gallery'}
          onClick={() => setActiveTab('gallery')}
        >
          Food Gallery
        </TabButton>
        <TabButton
          isActive={activeTab === 'testimonials'}
          onClick={() => setActiveTab('testimonials')}
        >
          Testimonials
        </TabButton>
      </TabNavigation>

      {activeTab === 'menu' && (
        <MenuSection>
          <h2 style={{ marginBottom: '2rem', fontSize: '2rem' }}>Our Full Menu</h2>
          <MenuImageContainer>
            <img src={menuImage} alt="Walker Texas Chef Menu" />
          </MenuImageContainer>
          <MenuDownload>
            <p style={{ marginBottom: '1rem', color: theme.colors.gray.light }}>
              Want to view our menu offline? Download a PDF copy below.
            </p>
            <Button size="large">Download Menu PDF</Button>
          </MenuDownload>
        </MenuSection>
      )}

      {activeTab === 'gallery' && (
        <GallerySection>
          <h2 style={{ marginBottom: '2rem', fontSize: '2rem', textAlign: 'center' }}>Food Gallery</h2>
          <GalleryGrid>
            {galleryItems.map((item) => (
              <GalleryCard key={item.id} hover>
                <div
                  className="image"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </GalleryCard>
            ))}
          </GalleryGrid>
        </GallerySection>
      )}

      {activeTab === 'testimonials' && (
        <TestimonialsSection>
          <h2>What Our Customers Say</h2>
          <TestimonialGrid>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} hover>
                <div className="rating">{testimonial.rating}</div>
                <div className="quote">{testimonial.quote}</div>
                <div className="author">— {testimonial.author}</div>
              </TestimonialCard>
            ))}
          </TestimonialGrid>
        </TestimonialsSection>
      )}
    </MediaSection>
  );
};

export default Media;