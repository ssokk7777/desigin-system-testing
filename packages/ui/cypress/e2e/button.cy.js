describe('button cypress test', () => { // (1)
    beforeEach(() => { // (2)
        cy.visit('http://localhost:6006/?path=/story/components-button--color'); // (3)
    });

    it('First test case', () => { // (4)
        // cy.get("a[title='Storybook']").should('be.visible'); // (5)
        cy.get('#storybook-preview-iframe')
            .its('0.contentDocument.body')
            .should('not.be.empty') // iframe이 로드되었는지 확인
            .then(cy.wrap) // Cypress chain으로 연결

            // primary 버튼 찾기
            .find('button.button-filled-primary span')
            .should('contain', 'primary') // 텍스트 확인
            .and('be.visible'); // 요소가 화면에 보이는지 확인
    });
});