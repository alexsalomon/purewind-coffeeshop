#!/bin/bash

# Deploy:
cd public
git add -A
git commit -m "Deploy to gh-pages from commit: $(git log '--format=format:%H' master -1)"
git push origin gh-pages
cd ..

printf "\n\nDeployed.\n"
