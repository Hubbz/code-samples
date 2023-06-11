import React from 'react';
import VirtualSupport from './VirtualSupport';
import { mountWithTheme } from '~/helpers/cypressThemeHelper';
import { data } from './data';

describe('VirtualSupport Component', () => {
  it('renders VirtualSupport', () => {
    mountWithTheme(<VirtualSupport data={data} className="test" />);

    cy.get('.comp-virtual-support.test').should('have.css', 'text-align', 'left');
    cy.get('.comp-virtual-support__item').should('not.be.visible');
    cy.contains('Open help options').click();
    cy.get('.comp-virtual-support__item').should('be.visible');
    // Check grid to make sure it's 2 columns.
    cy.get('.MuiGrid-grid-md-6');
    // Item details.
    cy.contains('Title 1')
      .get('a')
      .should('have.attr', 'href', '#');
    cy.contains('Visit Website').get('a').should('have.attr', 'href', '#');
    cy.contains('111-111-1111')
      .get('span')
      .parent('a')
      .should('have.attr', 'href', 'tel:111-111-1111');
    cy.contains('Close help options').click();
    cy.get('.comp-virtual-support__item').should('not.be.visible');
  });

  it('renders centered with alternate labels', () => {
    mountWithTheme(
      <VirtualSupport
        data={data}
        textAlign="center"
        buttonOpenLabel="Open me"
        buttonCloseLabel="Close me"
      />,
    );

    cy.get('.comp-virtual-support').should('have.css', 'text-align', 'center');
    cy.contains('Open me').click();
    cy.contains('Close me');
  });

  it('renders open initially and is full width (4 columns)', () => {
    mountWithTheme(<VirtualSupport data={data} open fullWidth />);

    cy.get('.comp-virtual-support__item').should('be.visible');
    // Check grid to make sure it's 4 columns.
    cy.get('.MuiGrid-grid-md-3');
    cy.contains('Close help options');
  });

  it.only('renders open with no toggle button', () => {
    mountWithTheme(<VirtualSupport data={data} disableToggle />);

    cy.get('.comp-virtual-support__item').should('be.visible');
    cy.contains('Open help options').should('not.exist');
    cy.contains('Close help options').should('not.exist');
  });
});
