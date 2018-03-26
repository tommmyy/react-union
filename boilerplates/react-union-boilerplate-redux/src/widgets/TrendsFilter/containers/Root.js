import { withInjectedReducers } from '../../../common/reactReduxExtensibleStore';
import reducers from '../reducers';
import FilterForm from './FilterForm';

export default withInjectedReducers(reducers)(FilterForm);
