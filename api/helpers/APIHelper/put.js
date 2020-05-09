module.exports = {
    async: true,
    friendlyName: 'Put API',
    description: 'This is put api',
    inputs: {
        body: {
            type: 'ref',
            params: {
                name: {
                    type: 'string',
                    example: 'Canh Toan',
                    description: 'This is api name',
                    required: true
                },
                age: {
                    type: 'number',
                    example: 12,
                    description: '12 months',
                    required: true
                },
                re: {
                    type: 'string',
                    required: true
                }
            }
        }
    },
    fn: function (inputs, exits) {
        const {name, age} = inputs.body;
        return exits.success(`This Put API named ${name} with ${age} months`);
    }
};
