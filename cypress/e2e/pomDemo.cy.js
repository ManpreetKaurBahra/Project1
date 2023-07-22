import { LoginPage } from "./pages/login_page"

const loginpage =new LoginPage

it('POM demo', function(){

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    loginpage.enterUsername('Admin');
    loginpage.enterPassword('admin123');
    loginpage.clickLogin()
    // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    // cy.get('.oxd-button').click()

})