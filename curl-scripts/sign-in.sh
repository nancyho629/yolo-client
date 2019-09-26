# VARIABLE=VALUE sh curl-scripts/auth/sign-in.sh

curl "localhost:4741" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials":{
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'

echo
