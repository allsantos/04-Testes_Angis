class pageRelatorioCte {
// Clicks ------------------------------------------------------------------------------
clickArmazem () {
    cy.get().click()
}
clickEmTransito () {
    cy.get().click()
}
clickEntregue () {
    cy.get().click()
}
clickTodos () {
    cy.get().click()
}
clickOrdenarPor () {
    cy.get().click()
}
//------------------------------------------
//---------------Compartilhar---------------
        clickIconCompartilhar () {
            cy.get().click()
        }
        clickComboCompart () {
            cy.get('').click()
        }
        clickComboCompart2 () {
            cy.get('').click()
        }
        clickBtCompartilhar () {
            cy.get('').click()
        }
//---------------Compartilhar---------------
//------------------------------------------

clickExportExcel () {
    cy.get().click()
}
clickExcluir () {
    cy.get().click()
}
clickEditar () {
    cy.get().click()
}

//--------------------------------------------
//---------------Informar Pagamento-----------
        clickPagar () {
            cy.get().click()
        }
        clickVotar () {
            cy.get().click()
        }
        clickConfirmarPag () {
            cy.get().click()
        }
        clickCalendario () {
            cy.get().click()
        }
        clickSelecionaDt () {
            cy.get().click()
        }
        clickVoltaMes () {
            for(let n = 0; n < 3; n ++) {
            cy.get().click()
            }
        }
        clickAvancaMes () {
            for(let n = 0; n < 3; n ++) {
            cy.get().click()
            }
        }
        
//---------------Informar Pagamento-----------
//--------------------------------------------

clickEntregar () {
    cy.get().click()
}
clickDacte () {
    cy.get().click()
}

// Clicks ------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------

// Sets --------------------------------------------------------------------------------
    
// Sets --------------------------------------------------------------------------------
}
export default new pageRelatorioCte