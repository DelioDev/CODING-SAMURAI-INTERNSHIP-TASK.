# Clean Architecture Structure

This project now follows a simple layered clean-architecture pattern:

- `src/domain/` contains the core business model (`PortfolioProfile`)
- `src/application/` contains use-case and orchestration logic (`portfolio-service.js`, `delete-account-service.js`)
- `src/infrastructure/` contains external-facing data and static configuration (`portfolio-data.js`, `legal-data.js`)
- `src/presentation/` contains UI controllers and DOM wiring (`index-page.js`, `menu-controller.js`, `delete-account-page.js`)

The HTML pages act as thin shells that load the appropriate presentation layer and keep presentation logic out of the markup itself.
