import React from 'react';
import Wrapper from 'components/Wrapper';
import css from 'styled-jsx/css';
import Link from 'next/link';

import ActiveLink from 'components/ActiveLink';
import globalStyles from './globalStyles';
import styles from './styles';

// some custom styles for header wrapper
const headerWrapperCss = css.resolve`
  .wrapper {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
`;

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="app">
        <style jsx>{styles}</style>
        {headerWrapperCss.styles}

        <header className="app-header">
          <Wrapper className={headerWrapperCss.className}>
            <Link href="/">
              <img
                className="app-logo"
                src="/static/upcloud-logo.svg"
                alt="UpCloud logo"
              />
            </Link>

            <nav className="app-nav">
              <ActiveLink href="/servers">Servers</ActiveLink>
              <ActiveLink href="/storages">Storages</ActiveLink>
            </nav>
          </Wrapper>
        </header>

        <Wrapper>{children}</Wrapper>

        <style jsx global>
          {globalStyles}
        </style>
      </div>
    );
  }
}

export default Layout;
