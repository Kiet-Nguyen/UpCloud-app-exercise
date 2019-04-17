import React from 'react';

import { getServers } from 'api/server';

import Card from 'components/Card/Card';
import CardHead from 'components/Card/CardHead';
import UpcloudServer from './UpCloudServer';
import Loader from 'components/Loader';

interface IUpcloudServersState {
  servers: {
    title: string;
    hostname: string;
    state: string;
  }[];
  isLoading: boolean;
  error: {
    message: string;
  };
}

class UpcloudServers extends React.Component<{}, IUpcloudServersState> {
  state: IUpcloudServersState = {
    servers: [],
    isLoading: true,
    error: {
      message: '',
    },
  };

  async componentDidMount() {
    try {
      const response = await getServers();
      const servers = response.data;

      this.setState({
        servers,
        isLoading: false,
      });
    } catch (error) {
      this.setState({
        error,
        isLoading: false,
      });
    }
  }

  render() {
    const { servers, isLoading } = this.state;
    const { message } = this.state.error;

    return (
      <div style={{ margin: '1rem 0' }}>
        <Card>
          <CardHead title="Servers" />
          {isLoading && (
            <div style={{ textAlign: 'center', margin: '3rem 0' }}>
              <Loader />
            </div>
          )}

          {!isLoading && servers && <UpcloudServer servers={servers} />}

          {!isLoading && message && (
            <div style={{ textAlign: 'center', margin: '3rem 0' }}>
              <p>{message}</p>
            </div>
          )}
        </Card>
      </div>
    );
  }
}

export default UpcloudServers;
