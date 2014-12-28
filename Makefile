
all: index


index: 
	browserify assets/js/gradsleuth.js >assets/js/index.js
