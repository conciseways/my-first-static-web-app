const { app } = require('@azure/functions');

app.http('httpTrigger2', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (_request, _context) => {
        const data = {
            name: "foo", 
            number: 42
        }

        return { body: data };
    }
});
