import * as yup from 'yup';
import { ptForm } from 'yup-locale-pt';

yup.setLocale(ptForm);

const SchemaNotas = yup.object().shape({
  id:         yup.number(),
  visits:     yup.number().required(),
  name:       yup.string().required().max(63),
  data:       yup.string().required().max(2047),
  created:    yup.date(),
});

export default SchemaNotas;
