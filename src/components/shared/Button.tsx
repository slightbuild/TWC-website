import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  children: React.ReactNode;
}

const buttonSizes = {
  small: css`
    padding: ${theme.spacing.xs} ${theme.spacing.md};
    font-size: 0.875rem;
  `,
  medium: css`
    padding: ${theme.spacing.sm} ${theme.spacing.lg};
    font-size: 1rem;
  `,
  large: css`
    padding: ${theme.spacing.md} ${theme.spacing.xl};
    font-size: 1.125rem;
  `,
};

const buttonVariants = {
  primary: css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: 2px solid ${theme.colors.primary};

    &:hover:not(:disabled) {
      background-color: ${theme.colors.primaryDark};
      border-color: ${theme.colors.primaryDark};
    }
  `,
  secondary: css`
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
    border: 2px solid ${theme.colors.secondary};

    &:hover:not(:disabled) {
      background-color: ${theme.colors.secondaryLight};
      border-color: ${theme.colors.secondaryLight};
    }
  `,
  outline: css`
    background-color: transparent;
    color: ${theme.colors.primary};
    border: 2px solid ${theme.colors.primary};

    &:hover:not(:disabled) {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
    }
  `,
};

const StyledButton = styled.button<ButtonProps>`
  font-family: ${theme.fonts.primary};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  transition: all ${theme.transitions.fast};
  display: inline-block;
  text-align: center;
  width: ${props => props.fullWidth ? '100%' : 'auto'};

  ${props => buttonVariants[props.variant || 'primary']}
  ${props => buttonSizes[props.size || 'medium']}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
  }
`;

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  onClick,
  type = 'button',
  disabled = false,
  children
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export default Button;