#!/usr/bin/env bash
# Memasang library sistem yang dibutuhkan Chrome milik Remotion (Linux/Codespaces).
set -e
sudo apt-get update
sudo apt-get install -y libnss3 libdbus-1-3 libatk1.0-0 libgbm-dev libxrandr2 \
  libxkbcommon-dev libxfixes3 libxcomposite1 libxdamage1 libatk-bridge2.0-0 libcups2
sudo apt-get install -y libasound2t64 || sudo apt-get install -y libasound2
echo "Selesai."
