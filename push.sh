#!/bin/bash

# GitHub push script
git init
git add .
git commit -m "Initial commit - FRP SaaS Starter"
read -p "Enter your GitHub repo URL: " repo
git remote add origin $repo
git branch -M main
git push -u origin main
