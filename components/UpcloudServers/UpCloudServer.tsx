import React from 'react';

import styles from './styles';
import CardContent from 'components/Card/CardContent';
import CardSection from 'components/Card/CardSection';

type IUpcloudServerProps = {
  servers: {
    title: string;
    hostname: string;
    state: string;
  }[];
};

const setStateColor = (state: string) => {
  let stateColor;

  switch (state) {
    case 'started':
      stateColor = 'green';
      break;
    case 'stopped':
      stateColor = 'red';
      break;
    default:
      stateColor = 'yellow';
  }

  return stateColor;
};

const UpcloudServer = ({ servers }: IUpcloudServerProps) => (
  <>
    <style jsx>{styles}</style>

    {servers.map(({ title, hostname, state }) => {
      return (
        <CardContent key={title}>
          <CardSection>
            <div className="server">
              <span className={`server__state server__state--${setStateColor(state)}`} />
              <div>
                <p className="server__title">{title}</p>
                <span className="server__hostname">{`Hostname: ${hostname}`}</span>
              </div>
            </div>
          </CardSection>
        </CardContent>
      );
    })}
  </>
);

export default UpcloudServer;
