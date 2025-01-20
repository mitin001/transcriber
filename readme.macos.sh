brew install awscli nvm task-spooler mp3splt
mkdir tmp public/lookups public/transcripts models
cd models
wget https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-tiny.bin
wget https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-base.bin
wget https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-small.bin
wget https://huggingface.co/akashmjn/tinydiarize-whisper.cpp/resolve/main/ggml-small.en-tdrz.bin
wget https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-medium.bin
wget https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-medium.en.bin
wget https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-large-v3.bin
cd ..
nvm install
nvm use
npm install
echo https://hooks.slack.com/services/... > .slack
npm install pm2 -g
npm start
