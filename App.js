import React, { Component } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { Scene, Loading } from './components';
import cacheAssetsAsync from './util/cacheAssetsAsync';
import arrayFromObject from './util/arrayFromObject';

import './Three';
import './window/domElement';
import './window/resize';

import Files from './Files';

export default class App extends Component {
  state = { assetsLoaded: false, sceneLoaded: false };
  async componentDidMount() {
    this.loadAssetsAsync();
  }

  loadAssetsAsync = async () => {
    try {
      await cacheAssetsAsync({
        files: arrayFromObject(Files)
      });
    } catch (e) {
      console.warn(
        'There was an error caching assets (see: app.js), perhaps due to a ' +
        'network timeout, so we skipped caching. Reload the app to try again.'
      );
      console.log(e.message);
    } finally {
      this.setState({ assetsLoaded: true });
    }
  }

  renderLoading = () => (<Loading />);

  render() {
    const { assetsLoaded, sceneLoaded } = this.state;
    if (!assetsLoaded) {
      return this.renderLoading();
    }
    return (
      <View style={styles.container}>
        <StatusBar hidden={false} />
        <Scene
          onLoadingUpdated={(xhr) => {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
          }}
          onFinishedLoading={() => this.setState({ sceneLoaded: true })} />
        {!sceneLoaded && this.renderLoading()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});
