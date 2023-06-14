import { remoteDB } from '../../../config';
let store;
if (remoteDB === true) {
    store = require('../../../store/remote-mysql');
} else {
    store = require('../../../store/mysql');
}

import ctrl from './controller';

export default ctrl(store);