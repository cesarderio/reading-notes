# Class 8 reading notes

#### [HOME](https://cesarderio.github.io/reading-notes/)

# Class 7 reading notes

#### [HOME](https://cesarderio.github.io/reading-notes/)

## Reading: Access Control (ACL)

Below you will find some reading material, code samples, and some additional resources that support today’s topic and the upcoming lecture.

Review the Submission Instructions for guidance on completing and submitting this assignment.

## Reading

[5 steps to RBAC](https://www.csoonline.com/article/3060780/security/5-steps-to-simple-role-based-access-control.html)

What is Role Based Access Control (RBAC) and why do we care?

* It is the idea of assigning levels of access/ security clearance to users based on role/need. High level users / Higher clearance level have more access, where as lower level users and/or workers vs consumers will have less access.

Describe a Role/Permission heirarchy that you might implement using RBAC.

* Senior devs/ Managers would have more access than junior devs || a consumer access vs worker access.

What approach might you take to implement RBAC?

* Inventory of information, users, etc. to define access levels and who gets access to what based on set variables.

[wiki - RBAC](https://en.wikipedia.org/wiki/Role-based_access_control)

If Authentication is “you are who you say you are,” what is Authorization?

* You have been given permission/access to what you are requesting.

Name three primary rules defined for RBAC.

* Role assignment:
    A subject can exercise a permission only if the subject has selected or been assigned a role.

* Role authorization:
    A subject's active role must be authorized for the subject. With rule 1 above, this rule ensures that users can take on only roles for which they are authorized.

* Permission authorization:
    A subject can exercise a permission only if the permission is authorized for the subject's active role. With rules 1 and 2, this rule ensures that users can exercise only permissions for which they are authorized.

Describe RBAC to a non-technical friend.

* RBAC is the process of figuring out and setting up who is allowed to see/get what information they are trying to get to.

## Videos

[RBAC tutorial](https://www.youtube.com/watch?v=C4NP8Eon3cA)

What Are access rights Associated with? The User? or The Role? Explain.

* User -> Role -> Rights

* Access are based off of roles. Once a User has a certain role, then they get access for that role(s).

Access Rights, or Authorization, is activated after a user successfully does what?

* After a user is authenticated and activated for role(s).

Explain how RBAC might benefit a business.

* It does not require changes to the policy when there is a new employee or an employee leaves the company; new hires, promotions, changes in role access.

## Reflection

What are your learning goals after reading and reviewing the [class README?](https://codefellows.github.io/code-401-javascript-guide/curriculum/class-07/)

* I am working on understanding and getting more practice with the course work.

## Things I want to know more about
