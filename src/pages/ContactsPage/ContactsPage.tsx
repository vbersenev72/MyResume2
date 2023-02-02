import React from 'react';
import PageContainer from '@/components/PageContainer';
import Title from '@/components/Title';
import cl from './ContactsPage.module.scss';
import { contacts } from '@/data';
import MouseHover from '@/components/MouseHover';

const ContactsPage = () => {
  return (
    <PageContainer className={cl.contactsPage}>
      <Title>Contacts:</Title>
      <div className={cl.container}>
        {contacts.map((contact, key) => (
          <MouseHover key={key} className={cl.hoverContainer}>
            <a className={cl.contact} href={contact.link}>
              {contact.icon}
              <span>{contact.text}</span>
            </a>
          </MouseHover>
        ))}
      </div>
    </PageContainer>
  );
};

export default ContactsPage;
