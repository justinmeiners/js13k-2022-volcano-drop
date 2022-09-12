# https://search.maven.org/remotecontent?filepath=com/google/javascript/closure-compiler/v20220803/closure-compiler-v20220803.jar
CC=java -jar closure-compiler-v20220803.jar
#CC=closure-compiler

.PHONY: clean all

all: archive.zip index_debug.html

clean:
	rm -rf archive.zip index.html index_debug.html app.min.js

index.html: app.min.js app.css
	sh template.sh > $@

index_debug.html: template.sh app.css
	sh template.sh -d > $@

# brew install closure-compiler
# https://developers.google.com/closure/compiler/docs/compilation_levels

app.min.js: app.js
	$(CC) --js $< --compilation_level ADVANCED --warning_level VERBOSE --env BROWSER --language_in ECMASCRIPT_2020 --language_out ECMASCRIPT_2020 > $@

archive.zip: index.html
	rm -f $@
	zip -9 $@ index.html
	wc -c $@

