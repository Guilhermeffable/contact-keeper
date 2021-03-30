import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactsContext from '../../context/contact/contactContext';
import Spinner from '../layout/Spinner';
import ContactItem from './ContactItem';

const Contacts = () => {
    const contactsContext = useContext(ContactsContext);

    const { contacts, filtered, getContacts, loading } = contactsContext;

    useEffect(() => {
        getContacts();
        // eslint-disable-next-line
    }, []);

    if (contacts !== null && contacts.length === 0 && !loading) {
        return <h4>Please add a contact.</h4>;
    }

    const spinnerComp = <Spinner />;

    return (
        <Fragment>
            {contacts !== null && !loading ? (
                <TransitionGroup>
                    {filtered !== null
                        ? filtered.map((contact) => (
                              <CSSTransition
                                  key={contact._id}
                                  timeout={500}
                                  classNames='item'
                              >
                                  <ContactItem contact={contact} />
                              </CSSTransition>
                          ))
                        : contacts.map((contact) => (
                              <CSSTransition
                                  key={contact._id}
                                  timeout={500}
                                  classNames='item'
                              >
                                  <ContactItem contact={contact} />
                              </CSSTransition>
                          ))}
                </TransitionGroup>
            ) : (
                spinnerComp
            )}
        </Fragment>
    );
};

export default Contacts;
