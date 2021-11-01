const roomNumberInput = '#roomNumber';
const roomTypeDropdown = '#type';
const accessibleDropdown = '#accessible';
const roomPriceInput = '#roomPrice';
const createRoomButton = '#createRoom';
const roomsList = "[data-type='room']";

// Checkbox locators
const wifiCheckbox = '#wifiCheckbox';
const tvCheckbox = '#tvCheckbox';
const radioCheckbox = '#radioCheckbox';
const refreshmentsCheckbox = '#refreshCheckbox';
const safeCheckbox = '#safeCheckbox';
const viewsCheckbox = '#viewsCheckbox';

class RoomManagementPage {
    createRoom(roomNumber, roomType, accessible, roomPrice, checkboxes) {
        return cy.get(roomNumberInput).type(roomNumber).then(() => {
            cy.get(roomTypeDropdown).select(roomType);
            cy.get(accessibleDropdown).select(accessible);
            cy.get(roomPriceInput).type(roomPrice);
            checkboxes.forEach((checkbox) => {
                if (checkbox) {
                    cy.get(checkbox).click();
                }
            })
            cy.get(createRoomButton).click();
        })
    }
}