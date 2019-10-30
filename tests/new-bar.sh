curl --request POST \
  --url http://127.0.0.1:3000/api/bars/new \
  --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkYjllYTgyYjkwZmJmMjFlODhmMzZlZCIsInVzZXJuYW1lIjoieHV5IiwiZXhwIjoxNTc3NjQ5NDAyLCJpYXQiOjE1NzI0NjU0MDJ9.HEBARcDKg4U6_B_BbB1qy4RhdQG9Cr36WZVbsBYL8yM'
  --header 'content-type: application/json' \
  --data '{
	"bar": {
		"name": "Dr.Moro",
		"address": "Садовая 1",
		"position": {
			"lat": 50.63453,
			"lng": 60.54322
		}
	}
}'