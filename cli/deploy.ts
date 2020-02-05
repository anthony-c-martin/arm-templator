import { series } from 'async';
import { deploy } from '../lib/cli';

series(
  [deploy], 
  (error, _) => {
    if (error) {
      throw error;
    }
  });