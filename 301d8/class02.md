# Class 02 reading notes

#### [HOME](https://cesarderio.github.io/reading-notes/)

## Network scanning with NMAP

The linked content is a good resource for learning about ports and scanning networks and data.

## Reading

### For Lecture & Lab

[What is a Port Scanner and How Does it Work?](https://www.varonis.com/blog/port-scanning-techniques/)

What is a port? Describe it with an analogy that would help a family member understand.

* A *Port* is an address/location for different types of data to go to or from. This can be thought of as loggers will send logs to lumber factories and farmers send their farmed goods and stock to grocery stores/companies. We always know where to go for our groceries, lumbers, etc..

What does a port scanner send to a port to check the current status?

* a *request* - it sends a *packet* of network data to the port to check the current status.

When a port scanner sends a request to connect, what are the three possible responses? Describe them.

* *Open, Accepted* "*What can I do for you?*"

* *Closed, Not Listening* "*The port is currently in use at this time*"

* *Filtered, Dropped, Blocked* "*Silence (no response)*"

What is the difference between TCP and UDP?

* **T**ransmission **C**ontrol **P**rotocol sends packets in order, it has error checking, verification and 3-way handshake for each packet. **UDP** does not have error checking, but is faster.

[Common Ports](https://www.professormesser.com/network-plus/n10-008/n10-008-video/common-ports-n10-008/)

List and describe the ports used for the following:

**Telnet** - Telecommunication Network over tcp/23, does not have security.

**SSH** - Secure Shell, look/acts like Telnet, over tcp/22.

**DNS** - Domain Name System - converts name to IP, over udp/53, for largerger files may use tcp/53.

**SMTP** - Simple Mail Transfer Protocol - server to server email transfer

* tcp/25 (SMTP using plaintext)
* tcp/587 (SMTP using TLS encryption)
* clients use other protocols(IMAP, POP3)
  * Internet Message Access Protocol v4
    * tcp/110 (plaintext)
    * tcp/995 (POP3 over TLS)
  * Pop office Protocol version 3
    * tcp/143 (plaintext)
    * tcp/993 (IMAP over TLS)

**HTTP** - Hypertext Transfer Protocol over tcp/80

**HTTPS** - Hypertext Transfer Protocol Secure over tcp/443

**RDP** - Remote Desktop Protocol

**Ping** - Packet Inter-Network Groper - tries to send a request to check status of port.

### Things I want to know more about
