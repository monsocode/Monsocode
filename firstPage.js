import utils from "./utils";
class firstPage{
    visitHomePage(brand){
        cy.visit(brand)
    }
    enterEmail(email){
        utils.enterText("input[data-qa='login-email']", email)
    }
    clickLoginButton(){
        utils.clickElement("button[data-qa='login-button']")
    }
    enterPassword(password){
        utils.enterText("input[data-qa='login-password']", password)
    }
    getLoginBtn(){
        return cy.get("button[data-qa='login-button']")
    }
    login(email, password){
        this.enterEmail()
        this.enterPassword()
        this.clickLoginButton()
    }
}
export default new firstPage();