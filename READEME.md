# Fetch Body

Fetch body.

## Installation

```
npm i --save fetch-body

// then, install any other fetch pacakge you like
```

## Usage

```
const fetchBody = require('fetch-body)(fetch)

const body = await fetchBody(url, options)
```

## API

`fetchBody` receive the same params as `fetch`, except that it will retrieve and return the body.

- If Content-Length is 0, it returns undefined
- If Content-Length is not 0 and Content-Type is application/json, it converts the body into json
- If Content-Length is not 0 and Content-Type is not application/json, it convents the body into text
