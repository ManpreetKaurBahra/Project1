export class LoginPage{
    
    userName_testbox= ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    password_testbox= ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    login_testbox= '.oxd-button'
    
    enterUsername(username){
        cy.get(this.userName_testbox).type(username)

    }
    enterPassword(password){
        cy.get(this.password_testbox).type(password)

        
    }
    clickLogin(){
        cy.get(this.login_testbox).click()

        
    }



}