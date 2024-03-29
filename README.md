# prolog-runner README

This runs your prolog code like a script. 

The extension requires swipl in your PATH.

![screenshot](https://raw.githubusercontent.com/sazzledazzle/prolog-runner/main/screenshot.png)


Because the default language assignment for .pl files is Perl, you may need to change the language to Prolog manually in the bottom right corner:

![Change Language to Prolog](https://raw.githubusercontent.com/sazzledazzle/prolog-runner/main/change_lang.png)


## Example

Just add the initialization/1 predicate to your file (see https://www.swi-prolog.org/pldoc/man?predicate=initialization/1).

e.g.:
```prolog
:- initialization run.

run :- write('Hello, this is a simple Prolog program!').
```

---

License MIT