# API:

### GET WORD
----
Returns one word.

* **URL** 

`/server/getWord`

* **METHOD**

`GET`

* **URL PARAMS**

`None`

* **RESPONSE**

`STRING`

### GET WORDS
----
Returns 5 words

* **URL** 

`/server/getWords`

* **METHOD**

`GET`

* **URL PARAMS**

`None`

* **RESPONSE**

Array - 5 `STRING`

### POST SCORE
----
Post score. Returns score info.
* **URL** 

`/server/result`

* **METHOD**

`POST`

* **URL PARAMS**

`None`

* **DATA PARAMS**

`nickname=[String]`
`score=[Number]`

```json
{
  "nickname": "name",
  "score": 23
}
```

* **RESPONSE**

```json
{
    "success": true,
    "info": {
        "_id": "5c27d0d7dd97760015a5391b",
        "nickname": "Isur",
        "score": 11,
        "__v": 0
    }
}
```

### Get top scores
----
Returns top 10 scores.

* **URL** 

`/server/top10`

* **METHOD**

`GET`

* **URL PARAMS**

`None`

* **RESPONSE**

JSON array with top 10 scores:
```json
[
    {
        "_id": "5c1ff3415b36030015bd61c4",
        "nickname": "User1",
        "score": 38,
        "__v": 0
    },
    {
        "_id": "5c27d0d7dd97760015a5391b",
        "nickname": "User2",
        "score": 11,
        "__v": 0
    },
]
```

## To launch local:

`npm install`

`npm run server`

`cd client`

`npm install`

`npm start`

Client and sever have tests (command `npm test`).

You need mongodb.

