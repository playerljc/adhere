import validator from 'validator';
import chinaPhoneValidator from './chinaPhoneValidator';

export default {
  ...validator,
  ...chinaPhoneValidator,
};
