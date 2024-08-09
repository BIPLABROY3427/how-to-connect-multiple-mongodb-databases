import { Testdatamodel, Testdatamodel2, Testdatamodel3 } from '../models/testModel.mjs';

// Controller function
const Biplab = async (req, res) => {
    try {
        // Create instances of the data models
        const newdata = new Testdatamodel({
            name: 'John Doe',
            age: 30,
            email: 'johndoe@example.com'
        });
        const newdata2 = new Testdatamodel2({
            name: 'John Doe',
            age: 30,
            email: 'johndoe@example.com'
        });
        const newdata3 = new Testdatamodel3({
            name: 'John Doe',
            age: 30,
            email: 'johndoe@example.com'
        });
        // Save all instances concurrently
        await Promise.all([newdata.save(), newdata2.save(), newdata3.save()]);
        // Send success response
        res.send('Data saved successfully');
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ error: 'Error saving data', message: error.message });
    }
}

export default Biplab;