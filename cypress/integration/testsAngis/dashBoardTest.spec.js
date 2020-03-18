/// <reference types='cypress'/>

import pageLogin from "../pages/pageLogin"

describe('Teste tela Inicial', ()=> {
    beforeEach(() => {
        cy.visit('/')
        cy.reload()
    })
    it('Tela Dashboard Origem',() => {
        pageLogin.setUsuario('awesrdgfndewasd')
        pageLogin.setSenha('1234567890987654')
        pageLogin.clickEntrar()
    })

    it('Tela Dashboard - Testando',() => {
        //pageLogin.setUsuario('allan.santos@signa.net.br')
        //pageLogin.setSenha('12345')
        // pageLogin.clickEntrarDash2()

        // cy.get('.MuiAlert-message').then(($el) => {
        //     expect($el.text()).be.eq('A Senha deve conter no Mínimo 8 Caracaqsdfghjkteres.')
        //     })
    })
})