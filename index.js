const express = require('express');
const { createRequestHandler } = require('@remix-run/express');

const app = express();

app.all(
'*',
createRequestHandler({
    getLoadContext() {
      // Whatever you return here will be passed as `context` to your loaders.
    },
})
);

const port = process.env.PORT || 3000;
app.listen(port, () => {
console.log(`Server is listening on port ${port}`);
});
