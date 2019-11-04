curl --request POST \
  --url http://localhost:3000/api/post/new \
  --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkYjlmZGZkZTc5NjIzMDAxNzdhODM5OCIsInVzZXJuYW1lIjoieHV5IiwiZXhwIjoxNTc3NjU0MjY5LCJpYXQiOjE1NzI0NzAyNjl9.yORSnWUIi0NmpOW_Ol3LEn8PhqEzebHxNYTHfWLSGdM' \
  --header 'content-type: application/json' \
  --data '{
	"post": {
      "id": 1,
      "owner": 12,
      "text": "хуй пизда катамаран",
      "likes": 5,
      "date": "Wed, 30 Oct 2019 17:59:36 GMT",
      "bar": 1,
      "boohack_id": 1,
      "city": "Санкт-Петербург",
      "photo": "base64"
    }
}'