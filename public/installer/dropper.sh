#!/bin/bash

# make sure curl is there
if ! command -v curl &>/dev/null; then
  sudo apt install curl -y
fi

#-------- install deno
# deno needs unzip to install itself
if ! command -v unzip &>/dev/null; then
  sudo apt install unzip -y
fi

curl -fsSL https://deno.land/x/install/install.sh | bash
export PATH="$PATH:$HOME/.deno/bin/"

#------------ decrypt and run the installer TS script
curl -fsSL https://anasouardini.online/installer/installer.enc;
# TODO: decryption modifies the file
openssl enc -aes-256-cbc -d -in ./installer.enc -out ./installer.sh;
deno run --allow-all ./installer.sh;
