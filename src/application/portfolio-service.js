import { PortfolioProfile } from '../domain/portfolio-profile.js';
import { portfolioData } from '../infrastructure/data/portfolio-data.js';

export function getPortfolioProfile() {
  return PortfolioProfile.from(portfolioData);
}

export function getPortfolioNavigation() {
  return getPortfolioProfile().navigation;
}

export function getPortfolioSocialLinks() {
  return getPortfolioProfile().socials;
}
