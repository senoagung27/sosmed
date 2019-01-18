describe('Users can add new comment', function() {
    it('has to be show dialog form', function () {
        cy.visit('/user/1/post/10')
        cy.get('[ data-test="addnew-comment-button" ]').eq(0).click()

        const email = 'email@cypress.io'
        const name = 'Cypress testing add ' + new Date().toISOString()
        const body = 'this body comment add by cypress ' + new Date().toISOString()

        cy.get('[ data-test="comment-editor-dialog" ]').should('have.length',1)
        cy.get('[ data-test="comment-editor-name" ] input').last().type(name)
        cy.get('[ data-test="comment-editor-email" ] input').last().type(email)
        cy.get('[ data-test="comment-editor-body" ] textarea').last().type(body)
        cy.get('[ data-test="comment-editor-save-button" ]').eq(0).click()
        
        cy.server()
        cy.route('comments?postId=*').as('getComments')
        cy.wait('@getComments')
        
        cy.get('[ data-test="comment-card-email" ]').first().should('have.text',email)
        cy.get('[ data-test="comment-card-body" ]').first().should('have.text',body)
        cy.get('[ data-test="comment-card-name" ]').first().should('have.text',`Posted by : ${name}`)
    })
})