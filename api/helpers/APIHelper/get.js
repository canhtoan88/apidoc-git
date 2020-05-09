module.exports = {
    async: true,
    friendlyName: 'Get API',
    description: 'This is get api',
    fn: async function (inputs, exits) {
        return await exits.success('Get API');
    }
};
