import { useState, FormEvent } from 'react';
import {
  ContactContainer,
  ContactTitle,
  ContactForm,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  SubmitButton,
  ContactInfo,
  InfoText
} from './contact.styles';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact Form Submission');
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:vivekgupta011007@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <ContactContainer>
      <ContactTitle>Contact Us</ContactTitle>
      
      <ContactInfo>
        <InfoText>
          Have questions or need assistance? We'd love to hear from you! 
          Fill out the form below and we'll get back to you as soon as possible.
        </InfoText>
      </ContactInfo>

      <ContactForm onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel htmlFor="name">Name *</FormLabel>
          <FormInput
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="email">Email *</FormLabel>
          <FormInput
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="subject">Subject</FormLabel>
          <FormInput
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="message">Message *</FormLabel>
          <FormTextarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            required
          />
        </FormGroup>

        <SubmitButton type="submit">
          Send Message
        </SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;
