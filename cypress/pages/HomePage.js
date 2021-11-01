const searchField = "input[name='q']";

class HomePage {
    clickSearchField() {
        return cy.get(searchField).click();
    }

    typeInSearchField(value) {
        return cy.get(searchField).type(value);
    }

    submitSearchQuery() {
        return cy.get(searchField).type('{enter}');
    }

    agreeToTermsAndConditions() {
        return cy.get('button').contains('I agree').click();
    }
}

export default HomePage;