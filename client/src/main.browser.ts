/**
 * Angular bootstrapping
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModuleRef } from '@angular/core';
import { bootloader } from '@angularclass/bootloader';
import { environment } from './environments/environment';
import { hmrBootstrap } from './hmr';
import get from 'lodash-es/get';

/**
 * App Module
 * our top level module that holds all of our components
 */
import { AppModule } from './app/app.module';

/**
 * Bootstrap our Angular app with a top level NgModule
 */
const main = async (): Promise<NgModuleRef<AppModule>> => {
  const modulePromise: Promise<NgModuleRef<AppModule>> = platformBrowserDynamic().bootstrapModule(AppModule);
  return modulePromise.then(environment.decorateModuleRef);
};

/**
 * Bootstrap our Angular app
 */
async function initialize(): Promise<void> {
  if (get(module, 'hot')) {
    hmrBootstrap(module, main);
  } else {
    bootloader(main);
  }
}

// noinspection JSIgnoredPromiseFromCall
initialize();
