import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  padding?: 'small' | 'medium' | 'large';
  className?: string;
}

const StyledCard = styled.div<{ hover?: boolean; padding: string }>`
  background-color: ${theme.colors.secondaryLight};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
  padding: ${props =>
    props.padding === 'small' ? theme.spacing.md :
    props.padding === 'large' ? theme.spacing.xxl :
    theme.spacing.xl
  };
  transition: all ${theme.transitions.normal};

  ${props => props.hover && `
    &:hover {
      transform: translateY(-5px);
      box-shadow: ${theme.shadows.lg};
    }
  `}
`;

const Card: React.FC<CardProps> = ({
  children,
  hover = false,
  padding = 'medium',
  className
}) => {
  return (
    <StyledCard hover={hover} padding={padding} className={className}>
      {children}
    </StyledCard>
  );
};

export default Card;