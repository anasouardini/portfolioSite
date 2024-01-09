#!/bin/bash

# make sure curl is there
if ! command -v curl &>/dev/null; then
  echo "installing curl";
  sudo apt install curl -y
fi

#-------- install deno
# deno needs unzip to install itself
if ! command -v unzip &>/dev/null; then
  echo "installing unzip";
  sudo apt install unzip -y
fi

echo "running the deno installer";
curl -fsSL https://deno.land/x/install/install.sh | bash
export PATH="$PATH:$HOME/.deno/bin/"

#------------ decrypt and run the installer TS script
echo "download encrypted post-installation script";
curl -fsSL https://anasouardini.online/installer/installer.enc -o installer.enc;
# TODO: decryption modifies the file
echo "decrypting...";
openssl enc -aes-256-cbc -d -in ./installer.enc -out ./installer.ts;
echo "running the post-installation script";
deno run --allow-all ./installer.ts;
