# npm-shrink

Utility that looks for possibly unreliable dependencies.

Currently `npm-shrink` finds only packages with `0.0.x` (patch) version. See roadmap for more.

## Install

	npm install npm-shrink -g

## Usage

	npm-shrink babel-core@5.8.34

Console output:

	Package: 'left-pad@0.0.3'
	Branch:
	 [ 'babel-core@5.8.34', 'line-numbers@0.2.0' ]

	Package: 'minimist@0.0.8'
	Branch:
	 [ 'babel-core@5.8.34', 'output-file-sync@1.1.1', 'mkdirp@0.5.1' ]

	Package: 'concat-map@0.0.1'
	Branch:
	 [ 'babel-core@5.8.34',
	  'minimatch@2.0.10',
	  'brace-expansion@1.1.3' ]

	Package: 'wordwrap@0.0.2'
	Branch:
	 [ 'babel-core@5.8.34',
	  'regenerator@0.8.40',
	  'defs@1.1.1',
	  'yargs@3.27.0',
	  'cliui@2.1.0' ]

## Roadmap

 * Work with local packages
 * More warnings
   * Package is 0.x.y and has only one contributor
   * Package is outdated
 * User interface

## License

MIT
