#!/bin/bash

# make sure curl is there
if ! command -v curl &>/dev/null; then
	sudo apt install curl -y
fi

# install deno
curl -fsSL https://deno.land/x/install/install.sh | bash
export PATH="$PATH:$HOME/.deno/bin/"

# decrypt and run the installer TS script
curl -fsSL https://anasouardini.online/installer/installer.enc |
	openssl enc -aes-256-cbc -d -in - | deno --allow-all
