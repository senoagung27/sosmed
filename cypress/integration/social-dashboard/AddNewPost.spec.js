describe('Users can add new post', function() {
    it('has to be show dialog form', function () {
        cy.visit('/user/2/posts')
        cy.get('[ data-test="addnew-post-button" ]').eq(0).click()
        const title = 'Cypress testing add ' + new Date().toISOString()
        const body = 'this post add by cypress ' + new Date().toISOString()
        cy.get('[ data-test="posteditor-dialog" ]').should('have.length',1)
        cy.get('[ data-test="posteditor-title-textinput" ] input').last().type(title)
        cy.get('[ data-test="posteditor-body-textinput" ] textarea').last().type(body)
        cy.get('[ data-test="posteditor-save-button" ]').eq(0).click()
        
        cy.server()
        cy.route('posts?userId=*').as('getPosts')
        cy.wait('@getPosts')
        
        cy.get('[ data-test="user-post-card-title" ]').first().should('have.text',title)
        cy.get('[ data-test="user-post-card-body" ]').first().should('have.text',body)
    })
})