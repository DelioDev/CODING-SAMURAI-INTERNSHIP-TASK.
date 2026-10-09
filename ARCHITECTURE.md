# Clean Architecture Structure

This project now follows a simple layered clean-architecture pattern:

- `src/domain/` contains the core business model (`PortfolioProfile`)
- `src/application/` contains use-case and orchestration logic (`portfolio-service.js`, `delete-account-service.js`)
- `src/infrastructure/` contains external-facing data and static configuration (`portfolio-data.js`, `legal-data.js`)
- `src/presentation/` contains page composition, UI controllers, and reusable rendering widgets (`index-page.js`, `portfolio-page.js`, `components/`, `menu-controller.js`, `delete-account-page.js`)

The HTML pages act as thin shells that load the appropriate presentation layer and keep presentation logic out of the markup itself. Portfolio content is held in `src/infrastructure/data/portfolio-data.js`; focused presentation components render shared structures such as skill cards, education timeline entries, project cards, section headings, and social links.
