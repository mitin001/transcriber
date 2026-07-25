aws s3 cp $PWD/public/lookups/$4.txt \
  s3://writecomments.com/transcripts/$4.txt \
  --acl public-read
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
if ts | grep queued
then
  echo "Queue not empty."
elif [ "$5" = "true" ]; then
  echo "Queue empty. Shutting down..."
  shutdown
else
  echo "Queue empty. Shutdown not requested."
fi
