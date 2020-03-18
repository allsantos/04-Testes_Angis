/// <reference types='cypress'/>

import pageLogin from "../pages/pageLogin"
import pageRelatorioCte from "../pages/pageRelatorioCte"

describe('Tela Relatorios Ct-Es', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.reload()
        pageLogin.setUsuario('')
        pageLogin.setSenha('')
        pageLogin.clickEntrar()
        // Aqui entra o Clique para Entrar na Pagina Relatorio Ct-Es
    })

    it('Teste Filtros', () =>{
        pageRelatorioCte.clickEmTransito()
        pageRelatorioCte.clickEntregue()
        pageRelatorioCte.clickTodos()
        
        pageRelatorioCte.clickEntregue()
        pageRelatorioCte.clickEmTransito()
        pageRelatorioCte.clickArmazem()
    })
    it('Teste Confirmar Pagamento', () =>{
        pageRelatorioCte.clickPagar()
        pageRelatorioCte.clickVotar()
        
        pageRelatorioCte.clickPagar()
        pageRelatorioCte.clickCalendario()
        pageRelatorioCte.clickVoltaMes()
        pageRelatorioCte.clickCalendario()
        pageRelatorioCte.clickSelecionaDt()
        
        pageRelatorioCte.clickCalendario()
        pageRelatorioCte.clickAvancaMes()
        pageRelatorioCte.clickSelecionaDt()
        pageRelatorioCte.clickConfirmarPag()
    })
    it('Teste Compartilhar', () =>{
        pageRelatorioCte.clickIconCompartilhar()
        pageRelatorioCte.clickComboCompart()
        pageRelatorioCte.clickBtCompartilhar()

        pageRelatorioCte.clickIconCompartilhar()
        pageRelatorioCte.clickComboCompart2() // Varios Combos
        pageRelatorioCte.clickBtCompartilhar()
    })

    it('Teste Download Excel', () => {
        pageRelatorioCte.clickExportExcel()
    })
    it('Exclui Item', () => {
        pageRelatorioCte.clickExcluir()
    })
    it('Editar Item', () => {
        pageRelatorioCte.clickEditar()
    })
})