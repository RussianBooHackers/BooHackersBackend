curl --request POST \
  --url http://127.0.0.1:3000/api/users \
  --header 'content-type: application/json' \
  --data '{
	"user": {
		"username": "shtro",
		"password": "WWWiskar"
	}
}'