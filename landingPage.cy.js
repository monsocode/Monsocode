import firstPage from "./POM/firstPage"
import loginData from "../fixtures/example.json"
describe('template spec', () => {
  it('passes', () => {
    firstPage.visitHomePage("/login")
    firstPage.enterEmail(loginData.email)
    firstPage.getLoginBtn().clear()
    firstPage.login(loginData.email, loginData.password)
  })
})