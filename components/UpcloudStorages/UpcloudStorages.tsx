import React from 'react';

import { getStorages } from 'api/storage';

import Card from 'components/Card';
import CardHead from 'components/Card/CardHead';
import Loader from 'components/Loader';
import UpcloudStorage from './UpcloudStorage';

interface IUpcloudStoragesState {
  storages: {
    title?: string;
  }[];
  isLoading: boolean;
  error: {
    message: string;
  };
}

class UpcloudStorages extends React.Component<{}, IUpcloudStoragesState> {
  state: IUpcloudStoragesState = {
    storages: [],
    isLoading: true,
    error: {
      message: '',
    },
  };

  async componentDidMount() {
    try {
      const response = await getStorages();
      const storages = response.data;

      this.setState({
        storages,
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
    const { storages, isLoading } = this.state;
    const { message } = this.state.error;

    return (
      <div style={{ margin: '1rem 0' }}>
        <Card>
          <CardHead title="Storages" />
          {isLoading && (
            <div style={{ textAlign: 'center', margin: '3rem 0' }}>
              <Loader />
            </div>
          )}

          {!isLoading && storages && <UpcloudStorage storages={storages} />}

          {!isLoading && message && (
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <p>{message}</p>
            </div>
          )}
        </Card>
      </div>
    );
  }
}

export default UpcloudStorages;
