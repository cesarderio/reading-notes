# The Ultimate Definitive Incomplete Guide to "Passing the Hash" with MimiKatz

This is the most complete and comprehensive guide to learning about MimiKatz and how to run a “Pass the Hash” attack. Our guide will take you step by step from “beginner” to “amateur” to “I think I understand” in no time at all!

<br>

## What is MimiKatz?

Mimikatz is a post-exploitation tool that can extract plaintext passwords, hashes, and Kerberos tickets from Windows memory, specifically from the lsass.exe process. It's widely used for both research purposes and by attackers to escalate privileges and move laterally within networks.

<br>

## How does “pass the hash” work?

The "pass the hash" technique allows attackers to use a user's hashed password, rather than the plaintext version, to authenticate to a remote service or system. This exploits the way certain authentication protocols operate, bypassing the need for the actual password.

"Pass the hash" is like using a photocopy of a key to open a lock, instead of the original key itself. It lets someone pretend to be you without actually knowing your password.

<br>

## Conditions required for a successful attack

For the "pass the hash" attack to succeed, the attacker needs to first obtain the password hash and the targeted system must accept hashed credentials for authentication without requiring the actual password.

* **Access to the Hash**: The attacker must have already gained access to the hash of a user's password. This is often done by compromising a system and extracting these hashes from it.

* **Target System Vulnerability**: The system or service being targeted must accept authentication using a hash. Not all systems or services do, but many Windows-based systems, for instance, have historically been vulnerable to this kind of attack.

* **Appropriate Privileges**: The hash the attacker has must be of a user account that has the necessary permissions on the target system. For example, if they want to perform administrative tasks, they'd ideally need the hash of an administrator's password.

* **Lack of Monitoring or Defenses**: Systems with security monitoring or certain defenses in place might detect or prevent a "pass the hash" attack. So, the target ideally would lack these protections or the attacker must bypass them.

<br>

## Pass the Hash Attack Step-by-step

Below is a step by step guide to get started as well as some linked resources and tutorials:
CQURETutorial  Seattle-Ops-401d8: Lab42

### Environment Setup

* Ensure you have the necessary tools. Mimikatz is commonly used for this.
* Set up a controlled lab environment if you're practicing. Never test on unauthorized systems!

<!-- <img src="./assets/img/RC.JPEG" width="300" height="250"> -->
<img src="../assets/img/ping1lab42.png" width="400">
<!-- ![Ping target 1 > 2](../assets/img/ping1lab42.png) -->

<img src="../assets/img/ping2lab42.png" width="400">
<!-- ![Ping target 2 > 1](../assets/img/ping2lab42.png) -->

### Obtain the Hash

* This is often the starting point for a "pass the hash" attack. Using tools or methods, you'll need to extract the password hashes from a compromised system.

  * For instance, if you're using Mimikatz, commands like `sekurlsa::logonPasswords` can help retrieve these hashes.

* Here we use `CQHashDumbv2.exe /samdump` from our Tools directory where we have this script available to us in this virtual machine:

<img src="../assets/img/cqhashdumplab42.png" width="400">
<!-- ![CQHashDumpv2.exe /samdump](../assets/img/cqhashdumplab42.png) -->

### Identify Your Target

* Decide which machine or service you wish to authenticate against using the hash. This could be a remote system or a service on the same machine.

* For this tutorial we have our “target2” virtual machine with an IP of 10.0.2.10.

<img src="../assets/img/targetlab42.png" width="400">
<!-- ![Target](../assets/img/targetlab42.png) -->

### Use the Hash for Authentication

* Instead of providing a plaintext password, you'll provide the hash to the target system.

  * In the case of Mimikatz, the `sekurlsa::pth` command can be used to "pass the hash" and initiate a session.

   Example:  sekurlsa::pth /user:Administrator /domain:target_domain /ntlm:[NTLM_HASH]

<img src="../assets/img/mimikatz1lab42.png" width="400">
<!-- ![Start MimiKatz](../assets/img/mimikatz1lab42.png) -->

<img src="../assets/img/mimikatz2lab42.png" width="400">
<!-- ![Run Pass the Hash](../assets/img/mimikatz2lab42.png) -->

<img src="../assets/img/psexeclab42.png" width="400">
<!-- ![PsExec.exe](../assets/img/psexeclab42.png) -->

### Access Granted (or Denied)

* If successful, you'll have access to the target with the privileges of the user whose hash you've used.

* If not, it could be due to various reasons, like incorrect hash, insufficient permissions, or security mechanisms blocking the attempt.

<img src="../assets/img/psexec2lab42.png" width="400">
<!-- ![PsExec.exe execute Remote command](../assets/img/psexec2lab42.png) -->

### Post-Exploitation

* Once you have access, you can perform actions that the user account is permitted to do. This might mean accessing files, running commands, or installing software.

<img src="../assets/img/expliot1lab42.png" width="400">
<!-- ![Expliot 1](../assets/img/expliot1lab42.png) -->

<img src="../assets/img/expliot2lab42.png" width="400">
<!-- ![Expliot 2](../assets/img/expliot2lab42.png) -->

<img src="../assets/img/expliot3lab42.png" width="400">
<!-- ![Expliot 3](../assets/img/expliot3lab42.png) -->

<br>

## Challenges faced in learning this attack technique

At a high level, this can seem simple enough, and it can be. There are many small steps that interact together to complete the pass the hash attack. It can be easy to mistype or lose track of what terminal window is working on what task. In the few errors or challenges that appeared, most of them were due to user error. Take your time, go step by step, and confirm before moving onto the next step.

## Concluding thoughts on the “Pass the Hash” attack technique

After diving into Mimikatz, it's clear that even popular systems like Windows have weak spots. Mimikatz highlights why we need to keep updating and watching our systems closely. It also shows that knowing about hacking tools can help us better protect our computers and networks. Lastly, even password protections have their vulnerabilities.
