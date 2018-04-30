# npm-downloads-count

A simple command line tool to check number of downloads of your npm package

# Install using npm

`npm i --global npm-downloads-count`

# Usage

`npmcount -h` to see commands you can use

**output**

```
Usage: npmcount [options] [command]

  Options:


    -h, --help                  output usage information

  Commands:

    package|p [options] <file>  Search file(s) and list them
```

To see counts commands

`npmcount p -h`

**output**

```
Usage: package|p [options] <file>

  List number of downloads of your package

  Options:


    -d, --lastDay      get last day counts
    -w, --lastWeek     get last week counts
    -m, --lastMonth    get last month counts
    -D, --date <date>  get counts for specific date, <date> format = YYYY-MM-DD
    -h, --help         output usage information
```

**Last day downloads**
- `npmcount p <packageName> -d`

**Last week downloads**
- `npmcount p <packageName> -w`

**Last month downloads**
- `npmcount p <packageName> -m`

**Particular date downloads**
- `npmcount p <packageName> -D <date>`
