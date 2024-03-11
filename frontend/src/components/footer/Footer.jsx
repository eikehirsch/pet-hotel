import { StyledFooter, FooterContainer, Icon, FooterRow } from "./styles.ts";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <Icon src="images/logo-navbar.svg" alt="" />
        <FooterRow paddingPop="14px" fontWeight="600">
          <span>Início</span>
          <span>Hospedagens</span>
          <span>Produtos</span>
        </FooterRow>
        <FooterRow fontWeight="300">
          Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska.
          Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning, och
          pesask vyfisat. Viktiga poddradio har un mad och inde.{" "}
        </FooterRow>
        <FooterRow paddingPop="20px">
          <Icon src="images/facebook-white.svg" alt="" />
          <Icon src="images/twitter-white.svg" alt="" />
          <Icon src="images/linkedin-white.svg" alt="" />
          <Icon src="images/instagram-white.svg" alt="" />
        </FooterRow>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
