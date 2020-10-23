/// <reference types="cypress" />

describe('Form input', () => {
    it('visit form', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
    });

    it('Fill Inline form', () => {
        cy.get('input[placeholder="Jane Doe"]').type('M Irgy Pratama').should('have.value', 'M Irgy Pratama');
        cy.get('[placeholder="Email"][type="text"]').type('irgys86@gmail.com').should('have.value', 'irgys86@gmail.com');
        cy.get('.custom-checkbox').first().click()
    });

    it('Fill Using the Grid', () => {
        cy.get('#inputEmail1').type('irgys86@gmail.com').should('have.value', 'irgys86@gmail.com');
        cy.get('#inputPassword2').type('123456').should('have.value', '123456');
        cy.get('.text').contains('Option 1').click()
        cy.get('.text').contains('Option 2').click()
    });

    it('Fill Basic form', () => {
        cy.get('#exampleInputEmail1').type('irgys86@gmail.com').should('have.value', 'irgys86@gmail.com');
        cy.get('#exampleInputPassword1').type('123456').should('have.value', '123456');
        cy.get('.custom-checkbox').eq(1).click()
    });

    it('Fill Form without labels', () => {
        cy.get('[placeholder="Recipients"]').type('M Irgy Pratama').should('have.value', 'M Irgy Pratama');
        cy.get('[placeholder="Subject"]').type('Assalamualaikum').should('have.value', 'Assalamualaikum');
        cy.get('textarea[placeholder="Message"]').type('You gonna catch a cold from the ice inside your soul').should('have.value', 'You gonna catch a cold from the ice inside your soul');
    });

    it('Fill Horizontal form', () => {
        cy.get('#inputEmail3').type('irgys86@gmail.com').should('have.value', 'irgys86@gmail.com');
        cy.get('#inputPassword3').type('123456').should('have.value', '123456');
        cy.get('.custom-checkbox').last().click()
    });

    it('Fill Block form', () => {
        cy.get('#inputFirstName').type('Irgy').should('have.value', 'Irgy');
        cy.get('#inputLastName').type('Pratama').should('have.value', 'Pratama');
        cy.get('#inputEmail').type('irgys86@gmail.com').should('have.value', 'irgys86@gmail.com');
        cy.get('#inputWebsite').type('www.irgy-du.com').should('have.value', 'www.irgy-du.com');
    });
})