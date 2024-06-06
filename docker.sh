docker run --rm \
  -v $PWD/models:/app/models \
  -v $PWD/tmp:/app/tmp \
  -v $PWD/public:/app/public \
  --cpus="$(nproc)" \
  ghcr.io/appleboy/go-whisper:latest \
  --model /app/models/ggml-"$2".bin \
  --language "$3" \
  --output-format csv \
  --audio-path /app/"$1" \
  --output-folder /app/public/transcripts
curl -d '{"text":"'$4'"}' $(cat .slack)
