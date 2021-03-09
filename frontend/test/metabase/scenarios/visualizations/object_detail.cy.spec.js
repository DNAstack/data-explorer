import { restore, signInAsNormalUser } from "__support__/cypress";

describe("scenarios > visualizations > object detail", () => {
  beforeEach(() => {
    restore();
    signInAsNormalUser();
  });

  it("should show orders/reviews connected to a product", () => {
    cy.visit("/browse/1");
    cy.contains("Products").click();
    // click on product #1's id
    cy.contains(/^1$/).click();
    // check that the correct counts of related tables appear
    cy.contains("Orders")
      .parent()
      .contains("93");
    cy.contains("Reviews")
      .parent()
      .contains("8");
  });

  it("should allow clicking the next arrow", () => {
    cy.visit("/browse/1");
    cy.findByText("Products").click();
    cy.findByText("1").click();
    cy.get(".Icon-arrow_right").click();
    cy.findByText("Small Marble Shoes");
  });
});
