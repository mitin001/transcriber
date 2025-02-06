# The Server Side

When a request for a web page comes in to the server, chances are that it's already cached in the server's main memory, so the user gets the page right away. If not, the request enters a queue of disk lookups, and once the lookup is complete, the file is put into cache and the user gets the response with the page data. The next user that requests this page will get it from cache. This way, the disk and the CPU are both utilized effectively.

> While one or more processing modules are blocked waiting for a disk or network operation to complete (and thus consuming no CPU time), other modules can be actively working on other requests.

When you do not want the server to know your IP address (or want to intercept traffic for further processing), you make the server request through a proxy. A front-end application is a reverse proxy in a sense that it's the reverse of this process: the server doesn't want its URL in the user's browser's address bar or wants its response intercepted and further processed by the front-end before it's presented to the user.

> The front-end web server is often called a reverse proxy, because it retrieves content from other (typically back-end) servers and serves those objects to the client. The proxy is called a ‘‘reverse’’ proxy because it is acting on behalf of the servers, as opposed to acting on behalf of clients.