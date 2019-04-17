import React from 'react';
import { withRouter } from 'next/router';
import css from 'styled-jsx/css';

interface IActiveLinkProps {
  children: React.ReactNode;
  router: any;
  href: string;
}

const styles = css`
  @import 'rem';
  @import 'color';

  .link + .link {
    margin-left: rem(20px);
  }

  .link,
  .active {
    position: relative;

    &::after {
      position: absolute;
      content: '';
      bottom: -7px;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: accent(mainAccentColor);
      visibility: hidden;
      transform: scaleX(0);
      transition: all 0.3s ease-in-out 0s;
    }
  }

  .link:hover::after,
  .link:focus::after,
  .link:active::after,
  .active::after {
    visibility: visible;
    transform: scaleX(1);
  }
`;

const ActiveLink = ({ children, router, href }: IActiveLinkProps) => {
  let activeClassName = '';
  if (router.pathname === href) {
    activeClassName = 'active';
  }

  const handleClick = (event: any) => {
    event.preventDefault();
    router.push(href);
  };

  return (
    <>
      <style jsx>{styles}</style>
      <a
        href={href}
        onClick={handleClick}
        className={`link ${activeClassName}`}
      >
        {children}
      </a>
    </>
  );
};

export default withRouter(ActiveLink);
