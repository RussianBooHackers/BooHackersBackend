curl --request POST \
  --url http://127.0.0.1:3000/api/users/login \
  --header 'content-type: application/json' \
  --data '{
	"user": {
		"username": "xuy",
		"password": "123456"
	}
}'