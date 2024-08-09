import { Schema } from 'mongoose';
import { connections } from '../config/config.mjs'; // Import the connections

const newSchema = new Schema({
    name: { type: String, default: 'John Doe' },
    age: { type: Number, default: 30 },
    email: { type: String, default: 'johndoe@example.com' }
});
const Testdatamodel = connections.conn1.model('tests', newSchema);
const Testdatamodel2 = connections.conn2.model('tests', newSchema);
const Testdatamodel3 = connections.conn3.model('tests', newSchema);
export { Testdatamodel, Testdatamodel2, Testdatamodel3 };