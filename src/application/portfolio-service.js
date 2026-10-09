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

export function getPortfolioPageData() {
  return {
    profile: getPortfolioProfile(),
    skills: portfolioData.skills,
    education: portfolioData.education,
    projects: portfolioData.projects,
    footerSocials: portfolioData.footerSocials,
    footerLinks: portfolioData.footerLinks,
  };
}
