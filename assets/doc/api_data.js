define({ "api": [
  {
    "type": "get",
    "url": "/api",
    "title": "01. Get API page",
    "sampleRequest": [
      {
        "url": "false"
      }
    ],
    "version": "1.0.1",
    "name": "GetAPI",
    "group": "API",
    "permission": [
      {
        "name": "api",
        "title": "Admin access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission.</p> <p>An &quot;apiDefine&quot;-block can have an &quot;apiVersion&quot;, so you can attach the block to a specific version.</p>"
      }
    ],
    "description": "<p>API description - This is description for API and Git</p> <p>Use apidoc to generate the API document, using default template</p> <p>And use git to remote respository on Github</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token is required</p>"
          },
          {
            "group": "Header",
            "type": "Number",
            "optional": false,
            "field": "apiTotal",
            "description": "<p>Number of apis</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "{\n    \"token\": \"flkdjsfkasjfeoiwafjos\",\n    \"apitotal\": 2\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "param",
            "description": "<p>API param</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{\n    \"param\": \"The param is not neccessary\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "Access http://localhost:1337/api.",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Result is a string</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    result: 'Get API'\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "APINotFound",
            "description": "<p>The api url not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    error: 'APINotFound'\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/APIController.js",
    "groupTitle": "API"
  },
  {
    "type": "get",
    "url": "/api",
    "title": "01. Get API page",
    "version": "1.0.0",
    "name": "GetAPI",
    "group": "API",
    "permission": [
      {
        "name": "api",
        "title": "This title is visible in version 1.0.0",
        "description": ""
      }
    ],
    "description": "<p>API description 1.0.0 - This is description for API and Git</p> <p>Use apidoc to generate the API document, using default template</p> <p>And use git to remote respository on Github</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token is required</p>"
          },
          {
            "group": "Header",
            "type": "Number",
            "optional": false,
            "field": "apiTotal",
            "description": "<p>Number of apis</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "{\n    \"token\": \"flkdjsfkasjfeoiwafjos\",\n    \"apitotal\": 2\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "param",
            "description": "<p>API param</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{\n    \"param\": The param is not neccessary\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Result is a string</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    'result': 'Get API'\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "APINotFound",
            "description": "<p>The api url not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    'error': 'APINotFound'\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/_apidoc.js",
    "groupTitle": "API"
  },
  {
    "type": "post",
    "url": "/api",
    "title": "02. Post API",
    "version": "1.0.1",
    "name": "PostAPI",
    "group": "API",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token is required</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Result is a String</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Success:",
          "content": "{\n    result: 'This is a result'\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/APIController.js",
    "groupTitle": "API"
  }
] });
