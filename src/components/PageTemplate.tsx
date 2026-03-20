import React from 'react';
import Hero from './Hero';
import ContactCTA from './ContactCTA';
import styles from './PageTemplate.module.css';

interface PageTemplateProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  children: React.ReactNode;
  showContactCTA?: boolean;
}

const PageTemplate: React.FC<PageTemplateProps> = ({ 
  title, 
  subtitle, 
  backgroundImage = '/images/mainpageimage.webp',
  children,
  showContactCTA = true 
}) => {
  return (
    <>
      <Hero
        title={title}
        subtitle={subtitle}
        backgroundImage={backgroundImage}
      />
      
      <div className={styles.content}>
        {children}
      </div>
      
      {showContactCTA && <ContactCTA />}
    </>
  );
};

export default PageTemplate;