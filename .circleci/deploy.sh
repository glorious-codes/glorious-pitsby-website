#!/bin/sh

branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')

if [ "$branch" = "master" ]; then
    # To generate a Firebase token:
    # 1. Run "firebase login:ci";
    # 2. Authenticate with your Firebase credentials;
    # 3. Grab the generated token and save it as an ENV VAR on Circle CI.
    npm run deploy -- --token=$FIREBASE_TOKEN
else
    echo "skipped"
fi
