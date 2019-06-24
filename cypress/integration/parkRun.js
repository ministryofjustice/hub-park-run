describe("park run scrape", function() {
  it("visits the park run results page", function() {
    cy.visit(Cypress.env("URL"));
    cy.url().should("include", "/results/latestresults/");
    cy.get(":nth-child(2) > .sortheader").contains("parkrunner");
    cy.get("#results").contains("Pos");

    cy.get("#results").then($el => {
      const tableHeads = $el
        .find("th")
        .get()
        .map(node => camelCaseText(node.textContent.trim()))
        .map(text => (text ? text : "gender"))
        .concat("parkRun50Club");

      const tableRows = $el
        .find("tr")
        .get()
        .map(row => {
          const cells = row.querySelectorAll("td");
          const cellContents = Array.from(cells).map(cell => {
            const text = cell.textContent.trim();
            const image = cell.querySelector("img");

            return image ? "Member of the parkrun 50 Club" : text;
          });

          return cellContents;
        });

      const results = tableRows.reduce((acc, currVal) => {
        const tempRes = currVal.map((val, index) => {
          const title = tableHeads[index];

          return [title, val];
        });

        const result = tempRes.reduce((acc2, val2) => {
          const [key, value] = val2;

          if (!key) {
            return acc2;
          }

          acc2[key] = value;
          return acc2;
        }, {});

        return acc.concat(result);
      }, []);

      cy.get("h2").contains("Wayland");
      cy.get("h2").then($el => {
        const title = $el
          .text()
          .trim()
          .replace(/[\t\r\n]/g, "");
        cy.writeFile(
          "data/parkRunData.json",
          JSON.stringify(
            {
              title,
              data: results
            },
            null,
            2
          )
        );
      });
    });
  });
});

function camelCaseText(text) {
  return text
    .split(" ")
    .map((value, index) => {
      if (index === 0) return value.toLowerCase();

      const [firstChar, ...restChar] = value;
      const restLowered = restChar.map(val => val.toLowerCase());

      return [firstChar.toUpperCase(), ...restLowered].join("");
    })
    .join("");
}
