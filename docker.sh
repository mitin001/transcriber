docker run --rm \
  -v $PWD/models:/app/models \
  -v $PWD/tmp:/app/tmp \
  -v $PWD/public:/app/public \
  --cpus="$(nproc)" \
  ghcr.io/appleboy/go-whisper:latest \
  --model /app/models/ggml-"$2".bin \
  --language "$3" \
  --output-format csv \
  --audio-path /app/tmp/"$1" \
  --output-folder /app/public/transcripts
aws s3 cp $PWD/public/transcripts/$1.csv \
  s3://writecomments.com/transcripts/$1.csv \
  --acl public-read
curl $(cat .slack)\
  -d '{"text":"https://s3.amazonaws.com/writecomments.com/transcripts/'$1'.csv"}'
