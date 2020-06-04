# MongoDB database

import pymongo
import dns

client = pymongo.MongoClient(MONGO_URL)

db = client.bossabox

db.tools.insert_many(
    [
        {
            "title": "Notion",
            "link": "https://notion.so",
            "description": "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
            "tags": [
                "organization",
                "planning",
                "collaboration",
                "writing",
                "calendar",
            ],
        },
        {
            "title": "json-server",
            "link": "https://github.com/typicode/json-server",
            "description": "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
            "tags": ["api", "json", "schema", "node", "github", "rest"],
        },
        {
            "title": "fastify",
            "link": "https://www.fastify.io/",
            "description": "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
            "tags": ["web", "framework", "node", "http2", "https", "localhost"],
        },
    ]
)

db.users.insert_one({
    "name": "Allan",
    "email": "allan@teste.com",
    "password": "$2a$08$cMcV4FVkvwWOCPvXArwczeiW5vcLavzFz/a8ZkRxPpqRdbJ.GlAWO"
})
