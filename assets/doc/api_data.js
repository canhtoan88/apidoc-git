define({ "api": [
  {
    "type": "delete",
    "url": "/api",
    "title": "04. Delete API",
    "name": "DeleteApi",
    "description": "<p>Author: CanhToan</p>",
    "version": "1.0.1",
    "group": "API",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token is requied</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "{\n    \"token\": \"tokeninhere\"\n}",
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
            "field": "options",
            "description": "<p>Options is a option</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example",
          "content": "{\n    \"apiID\": \"apiidinhere\"\n}",
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
            "description": "<p>Result is response of delete api</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 ok\n{\n    result: 'Deleted'\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Result is delete fail</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response",
          "content": "HTTP/1.1 400 error\n{ result: 'token invalid' }\n{ result: 'apiID is not match' }",
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
          "title": "Error-Response:",
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
  },
  {
    "type": "put",
    "url": "/api",
    "title": "03. Put API",
    "version": "1.0.1",
    "name": "PutAPI",
    "group": "API",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token is requied</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "{\n    \"token\": \"thisisatokenforloginusetoverify\"\n}",
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
            "field": "username",
            "description": "<p>Username is required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params-Example",
          "content": "{\n    \"username\": \"thisisusername\",\n    \"password\": \"passwordpasword\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isMatch",
            "description": "<p>Username and Password is match with a account</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Reponse",
          "content": "HTTP/1.1 200 ok\n{\n    isMatch: true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "isMatch",
            "description": "<p>false</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response",
          "content": "HTTP/1.1 400 error\n{\n    isMatch: false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/APIController.js",
    "groupTitle": "API"
  },
  {
    "type": "delete",
    "url": "/user",
    "title": "04. Delete user",
    "name": "deleteUser",
    "description": "<p>Author: Canh Toan - Deleting user by username</p>",
    "version": "1.0.1",
    "group": "User",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example",
          "content": "{\n    \"username\": \"canhtoan88\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Succes-Response",
          "content": "HTTP/1.1 200 ok\n{\n    \"code\": 200,\n    \"message\" \"User canhtoan88 was deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response",
          "content": "HTTP/1.1 400 error\n{\n    \"Error\": \"username is required\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response",
          "content": "HTTP/1.1 201 error\n{\n    \"code\": 201,\n    \"message\": \"username is not match with any account\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/UserController.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user",
    "title": "01. Get users",
    "name": "getUsers",
    "description": "<p>Author: Canh Toan - Getting list users</p>",
    "version": "1.0.1",
    "group": "User",
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
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "{\n    \"token\": \"thisistoken\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 ok\n{\n    \"code\": 200,\n    \"message\": \"ok\",\n    \"data\": [\n        {\n            \"fullname\": \"Nguyen Canh Toan\",\n            \"username\": \"canhtoan88\"\n        },\n        {\n            \"fullname\": \"Nguyen Thi Tu Quyen\",\n            \"username\": \"tuquyenct\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response",
          "content": "HTTP/1.1 400 error\n{\n    \"Error\": \"Token invalid\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response",
          "content": "HTTP/1.1 500 error\n{\n    \"Error\": \"Internal Server Error\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/UserController.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user",
    "title": "02. Post user",
    "name": "postUser",
    "description": "<p>Author: Canh Toan - Posting user</p>",
    "version": "1.0.1",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fullname",
            "description": "<p>Fullname is required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username is required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example",
          "content": "{\n    \"fullname\": \"Nguyen Canh Toan\",\n    \"username\": \"canhtoan88\",\n    \"password\": \"123\"\n}",
          "type": "json"
        },
        {
          "title": "Param-Example 2",
          "content": "{\n    \"fullname\": \"Nguyen Thi Tu Quyen\",\n    \"username\": \"tuquyenct\",\n    \"password\": \"321\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 ok\n{\n    \"fullname\": \"Nguyen Canh Toan\",\n    \"username\": \"canhtoan88\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response",
          "content": "HTTP/1.1 400 error\n{\n    \"Error\": \"fullname is required\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response",
          "content": "HTTP/1.1 400 error\n{\n    \"Error\": \"username is required\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response",
          "content": "HTTP/1.1 400 error\n{\n    \"Error\": \"password is required\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/UserController.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user",
    "title": "03. Put user",
    "name": "putUser",
    "description": "<p>Author: Canh Toan - Puting user</p>",
    "version": "1.0.1",
    "group": "User",
    "parameter": {
      "examples": [
        {
          "title": "Param-Example",
          "content": "{\n    \"username\": \"canhtoan88\",\n    \"password\": \"123\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 ok\n{\n    \"code\": 200,\n    \"message\": \"ok\",\n    \"data\": {\n        \"fullname\": \"Nguyen Canh Toan\",\n        \"username\": \"canhtoan88\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response",
          "content": "HTTP/1.1 400 error\n{\n    \"Error\": \"username is required\"\n}\n{\n    \"Error\": \"password is required\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response",
          "content": "HTTP/1.1 201 error\n{\n    \"code\": 201,\n    \"message\": \"username is not match with any account\",\n    \"data\", null\n}\n{\n    \"code\": 201,\n    \"message\": \"password is incorrect\",\n    \"data\", null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/UserController.js",
    "groupTitle": "User"
  }
] });
