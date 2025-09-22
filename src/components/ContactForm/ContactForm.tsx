import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import Button from '../shared/Button';
import Card from '../shared/Card';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const FormContainer = styled(Card)`
  max-width: 600px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: ${theme.colors.primary};
  font-weight: 600;
  font-size: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 2px solid ${theme.colors.secondaryLight};
  border-radius: ${theme.borderRadius.md};
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.white};
  font-size: 1rem;
  transition: border-color ${theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }

  &::placeholder {
    color: ${theme.colors.gray.medium};
  }
`;

const Select = styled.select`
  padding: 0.75rem;
  border: 2px solid ${theme.colors.secondaryLight};
  border-radius: ${theme.borderRadius.md};
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.white};
  font-size: 1rem;
  transition: border-color ${theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }

  option {
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 2px solid ${theme.colors.secondaryLight};
  border-radius: ${theme.borderRadius.md};
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.white};
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: border-color ${theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }

  &::placeholder {
    color: ${theme.colors.gray.medium};
  }
`;

const ErrorMessage = styled.span`
  color: ${theme.colors.error};
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const SuccessMessage = styled.div`
  background-color: ${theme.colors.success};
  color: ${theme.colors.white};
  padding: 1rem;
  border-radius: ${theme.borderRadius.md};
  text-align: center;
  margin-bottom: 1rem;
`;

const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    setTimeout(() => {
      console.log('Form submitted:', data);
      setIsSubmitted(true);
      setIsSubmitting(false);
      reset();

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <FormContainer>
      {isSubmitted && (
        <SuccessMessage>
          Thank you for your message! We'll get back to you within 24 hours.
        </SuccessMessage>
      )}

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            type="text"
            placeholder="Your full name"
            {...register('name', {
              required: 'Name is required',
              minLength: { value: 2, message: 'Name must be at least 2 characters' }
            })}
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Please enter a valid email address'
              }
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(512) 555-0123"
            {...register('phone', {
              pattern: {
                value: /^[+]?[1-9][\d]{0,15}$/,
                message: 'Please enter a valid phone number'
              }
            })}
          />
          {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="subject">Subject *</Label>
          <Select
            id="subject"
            {...register('subject', { required: 'Please select a subject' })}
          >
            <option value="">Select a subject</option>
            <option value="reservation">Table Reservation</option>
            <option value="catering">Catering Inquiry</option>
            <option value="private_event">Private Event</option>
            <option value="feedback">Feedback</option>
            <option value="general">General Question</option>
            <option value="other">Other</option>
          </Select>
          {errors.subject && <ErrorMessage>{errors.subject.message}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="message">Message *</Label>
          <TextArea
            id="message"
            placeholder="Tell us how we can help you..."
            {...register('message', {
              required: 'Message is required',
              minLength: { value: 10, message: 'Message must be at least 10 characters' }
            })}
          />
          {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
        </FormGroup>

        <Button
          type="submit"
          size="large"
          fullWidth
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;