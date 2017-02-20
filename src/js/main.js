import $ from 'jquery';
import {searchData,processData} from './github.js';
import {displayResults} from './template.js';

searchData().then(displayResults);
