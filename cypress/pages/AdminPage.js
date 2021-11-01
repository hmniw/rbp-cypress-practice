const notificationAmount = '.notification';

class AdminPage {
    goToRoomsPage() {
        return cy.get('a').contains('Rooms').click();
    }

    goToReportPage() {
        return cy.get('a').contains('Report').click();
    }

    goToBrandingPage() {
        return cy.get('a').contains('Branding').click();
    }

    goToFrontPage() {
        return cy.get('#frontPageLink').click();
    }

    goToMessagesPage() {
        return cy.get('#frontPageLink').parent().siblings[0].click();
    }

    logout() {
        return cy.get('a').contains('Logout').click();
    }

    checkNotificationAmount(amount) {
        return cy.get(notificationAmount).should('have.text', amount);
    }
}