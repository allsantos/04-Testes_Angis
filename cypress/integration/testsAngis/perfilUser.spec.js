/// <reference types='cypress'/>

import pageLogin from "../pages/pageLogin"
import pageDashboar from "../pages/pageDashboar"

describe('Teste Tela Perfil', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.reload()
        pageLogin.setUsuario('allan.santos@signa.net.br')
        pageLogin.setSenha('123456789')
        pageDashboar.clickPerfil()
    })
    it('Altera dados', () => {

    })
})