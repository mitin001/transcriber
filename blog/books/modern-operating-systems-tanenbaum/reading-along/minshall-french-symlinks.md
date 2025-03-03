# [Minshall+French symlinks](https://wiki.samba.org/index.php/UNIX_Extensions#Storing_symlinks_on_Windows_servers)

Linux does not allow us to run `ln -s` on files in the exFAT filesystem, but MacOS does. MacOS creates Minshall+French symlinks on exFAT filesystems.

> Steve French and Conrad Minshall defined a file format for storing Unix symlinks on SMB volumes.

```
XSym\n
char len[]\n
char md5sum[32]\n
char target[len]\n
```

> md5sum: The MD5 hash of the link target name.

If you notice that an unusually high number of files on your exFAT partition all have the size 1067 bytes, those are likely to be Minshall+French symlinks.

> The target is padded out with ASCII space characters to a fixed length (1024 bytes). The actual symlink files on disk are a fixed length of 1067 bytes, which allows the client to easily identify them without having to open every file to see if it's a symlink.
