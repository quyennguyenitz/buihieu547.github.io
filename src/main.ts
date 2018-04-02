import '../node_modules/font-awesome/css/font-awesome.css';
import './assets/css/style.css';
import '../node_modules/ng2-toastr/bundles/ng2-toastr.min.css';
import 'core-js/es6';
import 'core-js/es7/reflect';
require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');
// Angular
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';
import '@angular/router';

// RxJS
import 'rxjs';

import * as $ from 'jquery';
import * as moment from 'moment';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';

setTimeout(() => {
    platformBrowserDynamic().bootstrapModule(AppModule);
}, 2000);