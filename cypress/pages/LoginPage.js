const usernameInput = "[data-testid='username']";
const passwordInput = "[data-testid='password']";
const loginButton = "[data-testid='submit']";

class LoginPage {
    typeUsername(username) {
        return cy.get(usernameInput).type(username);
    }

    typePassword(password) {
        return cy.get(passwordInput).type(password);
    }

    submitLogin() {
        return cy.get(loginButton).click();
    }
}