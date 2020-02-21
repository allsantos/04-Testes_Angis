/// <reference types='cypress'/>

import pageLogin from '../pages/pageLogin'

describe('Primeiros Passos Tela', () => {
    it('Primeiro Passos Após Login', () => {
        pageLogin.setUsuario('')
        pageLogin.setSenha('')
        pageLogin.clickEntrar()

        pagePrimeirosPassos.clickProsseguir()
        cy.location('').should('eq', '/PAGINA X.asp')

        pagePrimeirosPassos.clickN51And200()
        pagePrimeirosPassos.clickProsCtes()
        pagePrimeirosPassos.clickVoltarPage()

        pagePrimeirosPassos.clickN201And500()
        pagePrimeirosPassos.clickProsCtes()
        pagePrimeirosPassos.clickVoltarPage()

        pagePrimeirosPassos.clickN501And1000()
        pagePrimeirosPassos.clickProsCtes()
        pagePrimeirosPassos.clickVoltarPage()

        pagePrimeirosPassos.clickN1001And5000()
        pagePrimeirosPassos.clickProsCtes()
        pagePrimeirosPassos.clickVoltarPage()

        pagePrimeirosPassos.clickMais5000()
        pagePrimeirosPassos.clickProsCtes()
        pagePrimeirosPassos.clickVoltarPage()
        // REMARCANDO OS COMBOS
        pagePrimeirosPassos.clickMais5000()
        pagePrimeirosPassos.clickProsCtes()
        pagePrimeirosPassos.clickVoltarPage()
        
        pagePrimeirosPassos.clickN1001And5000()
        pagePrimeirosPassos.clickProsCtes()
        pagePrimeirosPassos.clickVoltarPage()

        pagePrimeirosPassos.clickN501And1000()
        pagePrimeirosPassos.clickProsCtes()
        pagePrimeirosPassos.clickVoltarPage()

        pagePrimeirosPassos.clickN201And500()
        pagePrimeirosPassos.clickProsCtes()
        pagePrimeirosPassos.clickVoltarPage()

        pagePrimeirosPassos.clickN51And200()
        pagePrimeirosPassos.clickProsCtes()
        pagePrimeirosPassos.clickVoltarPage()
        pagePrimeirosPassos.clickN51And200()
/*--------------------------Fim "CT-es"-------------------------*/
/*--------------------------------------------------------------*/
        pagePrimeirosPassos.clickProsCtes()
        cy.location('').should('eq', '/PAGINA X.asp')
/*--------------------------------------------------------------*/
/*----------------------Page QTD Veiculos-----------------------*/
        pagePrimeirosPassos.clickNenhum()
        pagePrimeirosPassos.clickProsPag02()
        pagePrimeirosPassos.clickVoltarPage02()

        pagePrimeirosPassos.clickN1A3()
        pagePrimeirosPassos.clickProsPag02()
        pagePrimeirosPassos.clickVoltarPage02()

        pagePrimeirosPassos.clickN4A10()
        pagePrimeirosPassos.clickProsPag02()
        pagePrimeirosPassos.clickVoltarPage02()

        pagePrimeirosPassos.clickN11A20()
        pagePrimeirosPassos.clickProsPag02()
        pagePrimeirosPassos.clickVoltarPage02()
        
        pagePrimeirosPassos.clickN21A51()
        pagePrimeirosPassos.clickProsPag02()
        pagePrimeirosPassos.clickVoltarPage02()

        pagePrimeirosPassos.clickMais50()
        pagePrimeirosPassos.clickProsPag02()
        pagePrimeirosPassos.clickVoltarPage02()
        // REMARCANDO OS COMBOS
        pagePrimeirosPassos.clickMais50()
        pagePrimeirosPassos.clickProsPag02()
        pagePrimeirosPassos.clickVoltarPage02()

        pagePrimeirosPassos.clickN21A51()
        pagePrimeirosPassos.clickProsPag02()
        pagePrimeirosPassos.clickVoltarPage02()

        pagePrimeirosPassos.clickN11A20()
        pagePrimeirosPassos.clickProsPag02()
        pagePrimeirosPassos.clickVoltarPage02()

        pagePrimeirosPassos.clickN4A10()
        pagePrimeirosPassos.clickProsPag02().then(($el) => {
            expect($el).should('be.checked')
        })
        pagePrimeirosPassos.clickVoltarPage02()

        pagePrimeirosPassos.clickN1A3()
        pagePrimeirosPassos.clickProsPag02()
        cy.location('').should('eq', '/PAGINA X.asp')

        pagePrimeirosPassos.clickIniciarApp()
        cy.location('').should('eq', '/PAGINA X.asp')
    })
})