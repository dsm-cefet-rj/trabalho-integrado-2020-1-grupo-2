import yup, { setLocale } from 'yup';
import { ptForm } from 'yup-locale-pt';

setLocale(ptForm);

const SchemaCidade = yup.object().shape({
  id:         yup.number(),
  latitude:   yup.number(),
  longitude:  yup.number(),
  name:       yup.string(),
});

export default SchemaCidade;
