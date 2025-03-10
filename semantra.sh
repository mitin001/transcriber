cleanup() {
    rm blog/**/*.txt
}

# Clean up the txt files on Ctrl+C (to quit semantra)
trap cleanup SIGINT

for i in $(find blog -name "*.md" | grep -v readme.md)
do
	pandoc -f markdown -t plain --wrap=none -o "$i".txt "$i"
done
mkdir -p semantra
semantra --semantra-dir=semantra blog/**/*.txt
