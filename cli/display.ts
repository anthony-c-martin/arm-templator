import { series } from 'async';
import { display } from '../lib/cli';

series(
  [display], 
  (error, _) => {
    if (error) {
      throw error;
    }
  });