# install dependencies

## nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

## ts
cd ~
wget http://viric.name/soft/ts/ts-1.0.2.tar.gz
tar -xf ts-1.0.2.tar.gz
cd ts-1.0.2/
make
make install
ln -s /usr/local/bin/ts /bin/ts

## transcriber (this repository)
cd ~
git clone https://github.com/mitin001/transcriber.git
cd transcriber
mkdir tmp
mkdir public/transcripts
mkdir models
cd models
wget https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-tiny.bin
wget https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-large-v3.bin
nvm install
nvm use
npm install

## pm2
cd ~/transcriber
nvm use
npm install pm2 -g

# start the server
cd ~/transcriber
nvm use
pm2 start index.js --max-memory-restart 300M
