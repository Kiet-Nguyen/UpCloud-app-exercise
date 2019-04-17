import css from 'styled-jsx/css';

const styles = css`
  @import 'color';

  .server {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &__state {
      display: inline-block;
      width: 17px;
      height: 17px;
      border-radius: 3px;
      margin-right: 1rem;
      background-color: color(grey, base);

      &--green {
        background-color: color(ui, green);
      }

      &--red {
        background-color: color(ui, red);
      }

      &--yellow {
        background-color: color(ui, yellow);
      }
    }

    &__title {
      margin-bottom: 0;
    }

    &__hostname {
      font-size: 0.9rem;
      color: color(grey, base);
    }
  }
`;

export default styles