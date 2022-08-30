
import * as Yup from 'yup';

export const SCHEMA_NAME = Yup.string('Must be string').matches(/^[A-Z][a-z]{1,16}$/, 'Invalid string').required('Must be required');

export const SCHEMA_EMAIL = Yup.string('Must be string').email('Invalid email').required('Must be required');

export const SCHEMA_PASSWORD = Yup.string('Must be string').matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,32}$/, 'Invalid password').required('Must be required');

export const SCHEMA_SIGN_UP = Yup.object({
  fname: SCHEMA_NAME,
  lname: SCHEMA_NAME,
  email: SCHEMA_EMAIL,
  password: SCHEMA_PASSWORD ,
  age:Yup.number('Must be number').min(18, 'Must be more 18').max(80, 'Must be less 18').required('Must be required')
})

export const SCHEMA_SIGN_IN =  Yup.object({
  email:SCHEMA_EMAIL,
  password:SCHEMA_PASSWORD,
  remembe: Yup.boolean().required('Must be true or false')
})

export const SCHEMA_CONTACTS =  Yup.object({
  fname: SCHEMA_NAME,
  email:SCHEMA_EMAIL
})

export const SCHEMA_LOGIN = Yup.object({
  login: Yup.string('Must be string').matches(/^\w{4,16}$/,'Invalid login').required('Must be required'),
  password: SCHEMA_PASSWORD
})
