export class PortfolioProfile {
  constructor({
    name,
    title,
    email,
    phone,
    location,
    summary,
    navigation,
    socials,
    footerLinks,
  }) {
    this.name = name;
    this.title = title;
    this.email = email;
    this.phone = phone;
    this.location = location;
    this.summary = summary;
    this.navigation = navigation;
    this.socials = socials;
    this.footerLinks = footerLinks;
  }

  static from(data) {
    return new PortfolioProfile(data);
  }

  get brandName() {
    return this.name;
  }

  get heroSubtitle() {
    return this.title;
  }
}
