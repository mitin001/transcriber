find blog -type f -name "*.md" -exec gsed -i 's|'"$1"'|'"$2"'|g' {} +
