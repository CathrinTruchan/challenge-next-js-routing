import Link from "next/link";
import styled from "styled-components";
import StyledNavLink from "./StyledNavLink";
import { useRouter } from "next/router";

export default function Header() {
  const { pathname } = useRouter();
  return (
    <StyledHeader>
      <StyledNav>
        <Link href="/" passHref>
          <StyledNavLink active={pathname === "/" ? true : false}>
            Home
          </StyledNavLink>
        </Link>
        <Link href="/product" passHref>
          <StyledNavLink active={pathname === "/product" ? true : false}>
            Product
          </StyledNavLink>
        </Link>
        <Link href="/team" passHref>
          <StyledNavLink active={pathname === "/team" ? true : false}>
            Team
          </StyledNavLink>
        </Link>
        <Link href="/account" passHref>
          <StyledNavLink active={pathname === "/account" ? true : false}>
            Account
          </StyledNavLink>
        </Link>
      </StyledNav>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background: DarkSlateGray;
  padding: 1.5rem;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;
