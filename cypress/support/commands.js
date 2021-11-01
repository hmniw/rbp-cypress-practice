import { config as dotenv } from 'dotenv';

Cypress.Commands.add('text', { prevSubject: true }, (subject) => {
    return subject.text();
})

Cypress.Commands.add('login', () => {
    dotenv();
    cy.request({
        url: '/auth',
        method: 'POST',
        body: {
            username: process.env.LOGIN_API_USERNAME,
            password: process.env.LOGIN_API_PASSWORD
        }
    })
    .its('body')
    .then((body) => {
        cy.setCookie('token', body.token);
    });
})