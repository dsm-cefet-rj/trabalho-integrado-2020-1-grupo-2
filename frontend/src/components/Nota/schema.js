import yup, { setLocale } from 'yup';
import { ptForm } from 'yup-locale-pt';

setLocale(ptForm);

const SchemaNotas = yup.object().shape({
  id:         yup.number(),
  visits:     yup.number(),
  name:       yup.string().required().max(63),
  data:       yup.string().required().max(2047),
  created:    yup.date(),
});

export default SchemaNotas;
