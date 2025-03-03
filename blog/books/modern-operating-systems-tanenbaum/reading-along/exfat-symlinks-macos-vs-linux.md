# [Linux won't follow the symlinks created by MacOS on exFAT](https://superuser.com/a/1372701)

exFAT is the only file system supported by all three major operating systems: Linux, MacOS, and Windows. Unfortunately, this file system does not behave consistently on every one of those platforms. For example, MacOS creates [Minshall+French symlinks] when we run `ln -s` on files in the exFAT filesystem.

> These strange modifications are what Mac OS X chooses to do to represent symlinks on filesystems that do not natively support symlinks. Plugging the drive into any OS X results in these 'aliases' being resolved, but on Linux the exFAT driver does not interpret these files as symlinks.

[Minshall+French symlinks]: /blog/books/modern-operating-systems-tanenbaum/reading-along/minshall-french-symlinks.md
