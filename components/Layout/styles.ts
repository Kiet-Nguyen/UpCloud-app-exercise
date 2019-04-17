import css from 'styled-jsx/css';

const styles = css`
  .app {
    background: #f9f9f9;
    min-height: 100%;
    overflow: hidden;
  }

  .app-header {
    background: #fff;
    padding: 2rem 0;
  }

  .app-logo {
    width: 100px;
    cursor: pointer;

    @media (min-width: 400px) {
      width: 200px;
    }
  }

  .app-nav {
    display: flex;
    justify-content: space-around;
  }
`;

export default styles;
